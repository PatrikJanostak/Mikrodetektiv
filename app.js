(() => {
  const app = document.querySelector("#app");
  const homeButton = document.querySelector("#home-button");
  const storageKey = "mikrodetektiv-progress-v1";
  const topics = window.GAME_DATA;
  let progress = loadProgress();
  let session = null;

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
    } catch {
      return {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      // Hra zůstane hratelná i v případě, že prohlížeč ukládání nepovolí.
    }
  }

  function completedFor(topic) {
    const saved = progress[topic.id];
    return topic.levels.filter((_, index) => saved?.[index]?.completed).length;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function showHome() {
    session = null;
    homeButton.hidden = true;
    app.replaceChildren();

    const hero = element("section", "hero");
    hero.append(
      element("p", "eyebrow", "✦ Vítej, detektive!"),
      element("h1", "", "Každá stopa něco napoví."),
      element("p", "", "Vydej se po stopách přírody, vesmíru i lidského těla. Odpovídej na otázky, sbírej indicie a odhal malé vědecké záhady.")
    );
    app.append(hero);

    const grid = element("section", "topic-grid");
    grid.setAttribute("aria-label", "Témata hry");
    topics.forEach((topic) => {
      const done = completedFor(topic);
      const bestScore = Object.values(progress[topic.id] || {}).reduce((sum, record) => sum + (record?.bestScore || 0), 0);
      const card = element("article", `topic-card ${topic.color}`);
      const heading = element("div", "topic-heading");
      heading.append(element("span", "topic-icon", topic.icon));
      heading.append(element("h2", "", topic.name));
      card.append(heading, element("p", "", topic.description));

      const stats = element("div", "topic-stats");
      stats.append(element("span", "", `${done} z ${topic.levels.length} případů`));
      stats.append(element("span", "", `⭐ ${bestScore} bodů`));
      card.append(stats);

      const track = element("div", "progress-track");
      track.setAttribute("role", "progressbar");
      track.setAttribute("aria-label", `Postup v tématu ${topic.name}`);
      track.setAttribute("aria-valuemin", "0");
      track.setAttribute("aria-valuemax", String(topic.levels.length));
      track.setAttribute("aria-valuenow", String(done));
      const fill = element("div", "progress-fill");
      fill.style.width = `${(done / topic.levels.length) * 100}%`;
      track.append(fill);
      card.append(track);

      const action = element("button", "topic-action", done === topic.levels.length ? "Všechny případy vyřešeny →" : "Prozkoumat případy →");
      action.type = "button";
      action.addEventListener("click", () => showLevels(topic));
      card.append(action);
      grid.append(card);
    });
    app.append(grid);
  }

  function showLevels(topic) {
    session = null;
    homeButton.hidden = false;
    app.replaceChildren();
    const section = element("section", "level-view");
    const back = element("button", "back-link", "← Zpět k tématům");
    back.type = "button";
    back.addEventListener("click", showHome);
    section.append(back);
    const hero = element("div", "hero");
    hero.append(
      element("p", "eyebrow", `${topic.icon} ${topic.name}`),
      element("h1", "", "Vyber si případ"),
      element("p", "", "Každý vyřešený případ odemkne další. Kdykoliv se můžeš vrátit k tématům.")
    );
    section.append(hero);

    const grid = element("section", "topic-grid");
    grid.setAttribute("aria-label", `Případy: ${topic.name}`);
    topic.levels.forEach((level, index) => {
      const record = progress[topic.id]?.[index];
      const unlocked = index === 0 || Boolean(progress[topic.id]?.[index - 1]?.completed);
      const card = element("article", `topic-card ${topic.color}`);
      const heading = element("div", "topic-heading");
      heading.append(element("span", "topic-icon", record?.completed ? "✅" : unlocked ? "🕵️" : "🔒"));
      heading.append(element("h2", "", `Případ ${index + 1}`));
      card.append(heading, element("p", "", level.title));
      const stats = element("div", "topic-stats");
      stats.append(element("span", "", record?.completed ? "Vyřešeno" : unlocked ? "Připraveno" : "Nejprve vyřeš předchozí"));
      stats.append(element("span", "", record?.completed ? `⭐ ${record.bestScore}/3` : `Obtížnost ${index + 1}`));
      card.append(stats);
      const track = element("div", "progress-track");
      const fill = element("div", "progress-fill");
      fill.style.width = record?.completed ? "100%" : "0%";
      track.append(fill);
      card.append(track);
      const action = element("button", "topic-action", unlocked ? (record?.completed ? "Zahrát znovu →" : "Začít pátrat →") : "Případ zamčen");
      action.type = "button";
      action.disabled = !unlocked;
      action.setAttribute("aria-label", `${action.textContent}: ${level.title}`);
      action.addEventListener("click", () => startLevel(topic, index));
      card.append(action);
      grid.append(card);
    });
    section.append(grid);
    app.append(section);
    app.focus();
  }

  function startLevel(topic, levelIndex) {
    session = { topic, levelIndex, questionIndex: 0, correct: 0, clues: [], answered: false };
    homeButton.hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    const { topic, levelIndex, questionIndex, correct, clues, answered } = session;
    const level = topic.levels[levelIndex];
    const question = level.questions[questionIndex];
    app.replaceChildren();

    const section = element("section", "level-view");
    const back = element("button", "back-link", `← Případy: ${topic.name}`);
    back.type = "button";
    back.addEventListener("click", () => showLevels(topic));
    section.append(back);

    const header = element("header", "level-header");
    const heading = element("div", "level-heading");
    const title = element("div");
    title.append(element("p", "eyebrow", `Případ ${levelIndex + 1} · ${topic.name}`));
    title.append(element("h1", "", level.title));
    title.append(element("p", "", "Sbírej indicie a odhal, co se stalo."));
    heading.append(title, element("div", "score-pill", `⭐ Skóre: ${correct}`));
    header.append(heading);
    const steps = element("div", "question-progress");
    steps.setAttribute("role", "progressbar");
    steps.setAttribute("aria-label", "Průběh případu");
    steps.setAttribute("aria-valuemin", "1");
    steps.setAttribute("aria-valuemax", String(level.questions.length));
    steps.setAttribute("aria-valuenow", String(questionIndex + 1));
    level.questions.forEach((_, index) => {
      steps.append(element("span", `question-step${index === questionIndex ? " current" : index < questionIndex ? " done" : ""}`));
    });
    header.append(steps);
    section.append(header);

    const card = element("section", "game-card");
    card.setAttribute("aria-labelledby", "question-title");
    card.append(element("p", "question-label", `Otázka ${questionIndex + 1} ze ${level.questions.length}`));
    const questionTitle = element("h2", "", question.text);
    questionTitle.id = "question-title";
    card.append(questionTitle);
    const answers = element("div", "answers");
    answers.setAttribute("role", "group");
    answers.setAttribute("aria-label", "Možnosti odpovědi");
    question.answers.forEach((answer, index) => {
      const button = element("button", `answer-button${answered && answer.correct ? " correct" : ""}${answered && session.selectedIndex === index && !answer.correct ? " incorrect" : ""}`);
      button.type = "button";
      button.disabled = answered;
      button.append(element("span", "answer-key", String(index + 1)), element("span", "", answer.text));
      button.setAttribute("aria-label", `Možnost ${index + 1}: ${answer.text}`);
      button.addEventListener("click", () => selectAnswer(index));
      answers.append(button);
    });
    card.append(answers);

    if (answered) {
      const selected = question.answers[session.selectedIndex];
      const feedback = element("div", `feedback ${selected.correct ? "correct" : "incorrect"}`);
      feedback.setAttribute("role", "status");
      feedback.setAttribute("aria-live", "polite");
      feedback.append(element("strong", "", selected.correct ? "Správná stopa! ✨" : "Tohle není ono — zkus si zapamatovat vysvětlení."));
      feedback.append(element("p", "", selected.explanation));
      card.append(feedback);
      if (selected.correct) {
        const clue = element("p", "clue-row");
        clue.append(element("span", "", "🧩"), element("span", "", `Nová indicie: ${question.clue}`));
        card.append(clue);
      }
    }

    const footer = element("div", "game-footer");
    footer.append(element("span", "clue-count", `🧩 ${clues.length} z ${level.questions.length} indicií`));
    const next = element("button", "primary-button", questionIndex === level.questions.length - 1 ? "Vyřešit záhadu →" : "Další otázka →");
    next.type = "button";
    next.disabled = !answered;
    next.addEventListener("click", () => {
      if (questionIndex === level.questions.length - 1) finishLevel();
      else {
        session.questionIndex += 1;
        session.answered = false;
        delete session.selectedIndex;
        renderQuestion();
      }
    });
    footer.append(next);
    card.append(footer);
    section.append(card);
    app.append(section);
    app.focus();
  }

  function selectAnswer(index) {
    if (session.answered) return;
    const question = session.topic.levels[session.levelIndex].questions[session.questionIndex];
    session.answered = true;
    session.selectedIndex = index;
    if (question.answers[index].correct) {
      session.correct += 1;
      session.clues.push(question.clue);
    }
    renderQuestion();
    app.querySelector(".primary-button")?.focus();
  }

  function finishLevel() {
    const { topic, levelIndex, correct, clues } = session;
    const savedTopic = progress[topic.id] || {};
    const previous = savedTopic[levelIndex] || { completed: false, bestScore: 0 };
    savedTopic[levelIndex] = { completed: true, bestScore: Math.max(previous.bestScore, correct) };
    progress[topic.id] = savedTopic;
    saveProgress();
    showResult(topic, topic.levels[levelIndex], levelIndex, correct, clues);
  }

  function showResult(topic, level, levelIndex, correct, clues) {
    app.replaceChildren();
    const card = element("section", "result-card");
    card.setAttribute("aria-labelledby", "result-title");
    card.append(element("div", "result-icon", "🕵️‍♀️"));
    card.append(element("p", "eyebrow", "Případ uzavřen"));
    const title = element("h1", "", "Záhada vyřešena!");
    title.id = "result-title";
    card.append(title, element("p", "", level.mystery));

    const solution = element("div", "solution-box");
    solution.append(element("strong", "", "Co se opravdu stalo?"));
    solution.append(element("p", "", level.solution));
    card.append(solution);

    const stats = element("div", "result-stats");
    stats.append(element("span", "", `⭐ Skóre: ${correct}/${level.questions.length}`));
    stats.append(element("span", "", `🧩 Indicie: ${clues.length}/${level.questions.length}`));
    card.append(stats);
    if (clues.length) {
      const cluesBox = element("div", "solution-box");
      cluesBox.append(element("strong", "", "Tvoje nasbírané indicie"));
      clues.forEach((clue) => {
        const item = element("p", "", `• ${clue}`);
        cluesBox.append(item);
      });
      card.append(cluesBox);
    }
    const next = element("button", "primary-button", levelIndex === topic.levels.length - 1 ? "Zpět k tématům →" : "Pokračovat k dalšímu případu →");
    next.type = "button";
    next.addEventListener("click", () => {
      if (levelIndex === topic.levels.length - 1) showHome();
      else showLevels(topic);
    });
    card.append(next);
    app.append(card);
    app.focus();
  }

  document.addEventListener("keydown", (event) => {
    if (!session || session.answered || event.altKey || event.ctrlKey || event.metaKey) return;
    const index = Number(event.key) - 1;
    if (index >= 0 && index < session.topic.levels[session.levelIndex].questions[session.questionIndex].answers.length) {
      event.preventDefault();
      selectAnswer(index);
    }
  });

  homeButton.addEventListener("click", showHome);
  document.querySelector(".brand").addEventListener("click", (event) => {
    event.preventDefault();
    showHome();
  });
  showHome();
})();
