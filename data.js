window.GAME_DATA = [
  {
    id: "priroda",
    name: "Příroda",
    icon: "🌿",
    description: "Stopy, rostliny a zvířecí strategie.",
    color: "green",
    levels: [
      {
        title: "Zmizelá kapka",
        mystery: "Ráno se na trávě třpytí kapky, i když v noci nepršelo. Odkud se vzaly?",
        solution: "Vzduch se v noci ochladil. Vodní pára z něj zkondenzovala na chladných stéblech trávy a vytvořila rosu.",
        questions: [
          { text: "Co se v noci stalo s teplotou vzduchu?", clue: "Noc byla chladná.", answers: [
            { text: "Vzduch se ochladil.", correct: true, explanation: "Chladný vzduch a povrchy pomáhají vodní páře měnit se na kapičky." },
            { text: "Vzduch se zahřál.", explanation: "Zahřátý vzduch obvykle udrží více vodní páry, rosa tak vzniká méně snadno." },
            { text: "Vzduch úplně zmizel.", explanation: "Vzduch zůstává kolem trávy; mění se jeho teplota, ne jeho přítomnost." }
          ] },
          { text: "Jak se nazývá neviditelná voda ve vzduchu?", clue: "Ve vzduchu byla vodní pára.", answers: [
            { text: "Vodní pára.", correct: true, explanation: "Vodní pára je voda v plynném skupenství a ve vzduchu ji běžně nevidíme." },
            { text: "Ledová tříšť.", explanation: "Ledová tříšť je viditelná směs ledu a vody, ne plyn ve vzduchu." },
            { text: "Kyslík.", explanation: "Kyslík je součást vzduchu, ale kapky rosy vznikají z vody." }
          ] },
          { text: "Co se stane s vodní párou na chladném stéblu?", clue: "Pára se změnila na kapky.", answers: [
            { text: "Zkapalní na malé kapičky.", correct: true, explanation: "Při ochlazení pára kondenzuje, tedy mění se na kapalnou vodu." },
            { text: "Promění se v písek.", explanation: "Písek je nerostná látka a ze vzdušné vodní páry nevzniká." },
            { text: "Změní se na sluneční světlo.", explanation: "Světlo je energie; ochlazená voda mění skupenství, ne povahu." }
          ] }
        ]
      },
      {
        title: "Semínko na cestách",
        mystery: "Na druhé straně louky vyrostla rostlina s háčkovitými semeny. Jak se tam dostala?",
        solution: "Háčkovitá semena se zachytila na srsti kolemjdoucího zvířete. Zvíře je odneslo a semena později odpadla na novém místě.",
        questions: [
          { text: "K čemu mohou háčky na semeni sloužit?", clue: "Semeno se umí zachytit.", answers: [
            { text: "Zachytí se na srsti nebo oblečení.", correct: true, explanation: "Některá semena mají háčky, které jim pomáhají cestovat se zvířaty." },
            { text: "Vyrábějí rostlině potravu.", explanation: "Potravu si zelené části rostlin vyrábějí hlavně fotosyntézou." },
            { text: "Promění semeno v kámen.", explanation: "Háčky jsou výběžky semene; nemění ho v nerost." }
          ] },
          { text: "Co semeno na nové místo nejspíš přeneslo?", clue: "Pomohl kolemjdoucí živočich.", answers: [
            { text: "Zvíře, na jehož srst se přichytilo.", correct: true, explanation: "Srst může převážet přichycená semena na velké vzdálenosti." },
            { text: "Kořeny původní rostliny.", explanation: "Kořeny obvykle zůstávají v půdě a semeno nepřenesou na druhou stranu louky." },
            { text: "Mrak, který ho spolkl.", explanation: "Mraky mohou přenášet vodu, ale běžně nepřevážejí přichycená semena." }
          ] },
          { text: "Co semeno potřebuje, aby mohlo vyklíčit?", clue: "Nové místo musí být vhodné.", answers: [
            { text: "Vhodné podmínky, například vodu, vzduch a teplo.", correct: true, explanation: "Klíčení vyžaduje vodu, kyslík a vhodnou teplotu; světlo potřebují různé druhy různě." },
            { text: "Jen hlasitý zvuk.", explanation: "Zvuk není základní podmínkou klíčení semene." },
            { text: "Pevnou skořápku z kamene.", explanation: "Semena mají vlastní obal, ale kamennou skořápku k růstu nepotřebují." }
          ] }
        ]
      },
      {
        title: "Záhada prázdného květu",
        mystery: "Jabloň rozkvetla, včely ji navštěvovaly a později se objevila jablka. Co včely pomohly vykonat?",
        solution: "Včely přenesly pyl z jedné části květu na bliznu. Opylení umožnilo vznik semen a z květu se vyvinul plod.",
        questions: [
          { text: "Co včely sbírají z květů a přitom přenášejí?", clue: "Včela odnesla pyl.", answers: [
            { text: "Pyl.", correct: true, explanation: "Při sběru potravy se pyl může zachytit na těle včely a dostat se na další květ." },
            { text: "Listy celého stromu.", explanation: "Včely běžně sbírají nektar a pyl, ne listy stromů." },
            { text: "Kořeny jabloně.", explanation: "Kořeny zůstávají v půdě; včely navštěvují nadzemní květy." }
          ] },
          { text: "Jak se nazývá přenos pylu na bliznu květu?", clue: "Pyl dorazil na bliznu.", answers: [
            { text: "Opylení.", correct: true, explanation: "Opylení je přenos pylu na bliznu květu." },
            { text: "Vypařování.", explanation: "Vypařování je změna kapaliny na plyn, ne děj v květu." },
            { text: "Trávení.", explanation: "Trávení rozkládá potravu v těle živočichů, nejde o přenos pylu." }
          ] },
          { text: "Co se po opylení může z části květu vytvořit?", clue: "Z květu se stal plod.", answers: [
            { text: "Plod se semeny.", correct: true, explanation: "Po opylení a oplození se u mnoha rostlin vyvíjejí semena a plod." },
            { text: "Nový oblak.", explanation: "Oblaky vznikají z vody v atmosféře, ne z opyleného květu." },
            { text: "Kořen bez rostliny.", explanation: "Kořen se vyvíjí z rostliny; opylení vede k vývoji semen a často plodu." }
          ] }
        ]
      },
      {
        title: "Kdo komu slouží?",
        mystery: "V jezírku ubývá žab a přibývá některého hmyzu, který žáby loví. Jak mohou změny souviset?",
        solution: "Žáby loví některý hmyz. Když jich ubude, jejich kořist může být méně lovena; vztahy v potravní síti jsou ale složitější a závisí na dalších druzích.",
        questions: [
          { text: "Čím se živí pulci některých druhů žab?", clue: "Pulci spásají řasy.", answers: [
            { text: "Řasami a další drobnou potravou ve vodě.", correct: true, explanation: "Mnoho pulců se živí řasami a organickými zbytky; potrava se liší podle druhu." },
            { text: "Pouze listím vysoko na stromech.", explanation: "Pulci žijí ve vodě, takže listí vysoko v korunách není jejich obvyklá potrava." },
            { text: "Slunečním světlem místo potravy.", explanation: "Pulci získávají energii z potravy; světlo samo jim potravu nenahradí." }
          ] },
          { text: "Co znamená, když žába loví hmyz?", clue: "Žába je predátor.", answers: [
            { text: "Žába je predátor a hmyz její kořist.", correct: true, explanation: "Predátor loví jiného živočicha, kterému říkáme kořist." },
            { text: "Hmyz vyrábí žábu z vody.", explanation: "Hmyz žábu nevytváří; jde o vztah lovce a kořisti." },
            { text: "Žába a hmyz jsou stejný druh.", explanation: "Žáby jsou obojživelníci a hmyz patří do jiné skupiny živočichů." }
          ] },
          { text: "Proč může úbytek žab ovlivnit jiná zvířata?", clue: "Druhy jsou propojené.", answers: [
            { text: "Protože jsou součástí potravní sítě.", correct: true, explanation: "Druhy se ovlivňují tím, kdo koho jí a o jaké zdroje soupeří." },
            { text: "Protože všechna zvířata jedí totéž.", explanation: "Různé druhy mají různé potravní nároky, nejedí všechna totéž." },
            { text: "Protože žáby řídí počasí.", explanation: "Žáby mohou být citlivé na prostředí, ale počasí neřídí." }
          ] }
        ]
      },
      {
        title: "Stopy ve sněhu",
        mystery: "Ve sněhu se stopy malého zvířete přibližují ke keři, ale na druhé straně končí. Kam se zvíře podělo?",
        solution: "Zvíře se mohlo ukrýt v hustém keři. Jeho zbarvení a chování mu pomáhají vyhnout se predátorům; samotné stopy ale nedokazují, co přesně se stalo.",
        questions: [
          { text: "Proč některým zvířatům v zimě zbělá srst?", clue: "Bílá srst splývá se sněhem.", answers: [
            { text: "Pomáhá jim splynout se zasněženým okolím.", correct: true, explanation: "U některých druhů zimní zbarvení zlepšuje maskování ve sněhu." },
            { text: "Zahřívá se díky tomu sluneční světlo.", explanation: "Barva může ovlivnit pohlcování světla, ale hlavní výhodou bílé srsti ve sněhu je maskování." },
            { text: "Všechna zvířata musí být v zimě bílá.", explanation: "Zimní zbarvení mají jen některé druhy; mnohá zvířata barvu nemění." }
          ] },
          { text: "Jak může hustý keř zvířeti pomoci?", clue: "Keř poskytuje úkryt.", answers: [
            { text: "Poskytne úkryt před nepřízní počasí nebo predátory.", correct: true, explanation: "Hustý porost může zvíře skrýt a nabídnout mu závětří." },
            { text: "Promění zvíře v rostlinu.", explanation: "Úkryt zvíře chrání, ale nemění jeho druh." },
            { text: "Zaručí, že v okolí nejsou predátoři.", explanation: "Úkryt riziko může snížit, ale neznamená, že predátoři zmizeli." }
          ] },
          { text: "Co lze bezpečně vyvodit ze stop končících u keře?", clue: "Stopy jsou důkaz, ne celý příběh.", answers: [
            { text: "Zvíře mohlo do keře vstoupit, ale jistotu nemáme.", correct: true, explanation: "Stopy jsou užitečná indicie, ne úplný záznam všeho, co zvíře udělalo." },
            { text: "Zvíře určitě odletělo do vesmíru.", explanation: "Takový závěr ze stop nevyplývá a není rozumným vysvětlením." },
            { text: "Keř stopy snědl.", explanation: "Keř stopy nejí; mohly být zakryty nebo zvíře pokračovalo jinudy." }
          ] }
        ]
      }
    ]
  },
  {
    id: "vesmir",
    name: "Vesmír",
    icon: "🪐",
    description: "Planety, hvězdy a vesmírné stopy.",
    color: "purple",
    levels: [
      {
        title: "Měsíc se schoval",
        mystery: "Každý večer vypadá Měsíc trochu jinak. Mění se opravdu jeho tvar?",
        solution: "Měsíc má stále přibližně kulový tvar. Z jeho osvětlené poloviny vidíme z různých míst na oběžné dráze různě velkou část — tomu říkáme fáze Měsíce.",
        questions: [
          { text: "Vyrábí Měsíc vlastní viditelné světlo?", clue: "Měsíc světlo odráží.", answers: [
            { text: "Ne, odráží světlo Slunce.", correct: true, explanation: "Měsíc září na obloze hlavně díky slunečnímu světlu, které odráží." },
            { text: "Ano, svítí jako hvězda.", explanation: "Měsíc není hvězda a nevyrábí světlo jadernou fúzí jako Slunce." },
            { text: "Svítí pouze světlem měst.", explanation: "Měsíc vidíme i mimo města; jeho hlavním zdrojem osvětlení je Slunce." }
          ] },
          { text: "Co způsobuje fáze Měsíce?", clue: "Z oběžné dráhy vidíme různé části.", answers: [
            { text: "Vidíme různě velkou část jeho osvětlené poloviny.", correct: true, explanation: "Slunce osvětluje polovinu Měsíce a náš pohled na ni se během oběhu mění." },
            { text: "Z Měsíce pravidelně odpadne kus.", explanation: "Fáze nevznikají odpadáváním částí; mění se náš pohled na osvětlenou polovinu." },
            { text: "Mraky každý týden ukrojí jiný kus.", explanation: "Mraky mohou Měsíc zakrýt, ale nevysvětlují pravidelné fáze." }
          ] },
          { text: "Jak dlouho přibližně trvá cyklus fází od novu k novu?", clue: "Jeden cyklus trvá asi měsíc.", answers: [
            { text: "Zhruba 29,5 dne.", correct: true, explanation: "Synodický měsíc, tedy cyklus fází, trvá přibližně 29,5 dne." },
            { text: "Přesně jeden den.", explanation: "Měsíc oběhne fáze za přibližně 29,5 dne, ne za jediný den." },
            { text: "Jeden lidský život.", explanation: "Fáze Měsíce se opakují přibližně každý měsíc." }
          ] }
        ]
      },
      {
        title: "Záhada dlouhého léta",
        mystery: "V létě jsou dny delší než v zimě. Přiblíží se Země v létě výrazně ke Slunci?",
        solution: "Hlavní příčinou ročních období je sklon zemské osy. Když je naše polokoule nakloněná ke Slunci, má delší dny a sluneční paprsky dopadají přímočařeji.",
        questions: [
          { text: "Co způsobuje střídání ročních období?", clue: "Zemská osa je nakloněná.", answers: [
            { text: "Sklon zemské osy při oběhu kolem Slunce.", correct: true, explanation: "Sklon osy mění během roku úhel slunečního světla a délku dne." },
            { text: "Země se každý den přibližuje a vzdaluje od Slunce.", explanation: "Denní změny vzdálenosti nejsou příčinou ročních období." },
            { text: "Slunce v zimě zhasíná.", explanation: "Slunce svítí celý rok; mění se osvětlení jednotlivých polokoulí." }
          ] },
          { text: "Co má naše polokoule v létě, když je nakloněná ke Slunci?", clue: "Letní den je delší.", answers: [
            { text: "Delší dny a přímější sluneční paprsky.", correct: true, explanation: "Delší osvětlení a více přímé sluneční energie přispívají k letnímu oteplení." },
            { text: "Méně hodin denního světla.", explanation: "Na dané polokouli bývají v létě dny delší než v zimě." },
            { text: "Slunce obíhá kolem Země.", explanation: "Zdánlivý pohyb Slunce po obloze souvisí s rotací Země, nikoli s oběhem Slunce kolem Země." }
          ] },
          { text: "Když je severní polokoule nakloněná ke Slunci, jaká je jižní?", clue: "Polokoule mají opačná období.", answers: [
            { text: "Nakloněná od Slunce, a proto tam bývá zima.", correct: true, explanation: "Polokoule jsou vůči Slunci nakloněné opačně, takže mají protilehlá roční období." },
            { text: "Také má léto, protože obě jsou stejně natočené.", explanation: "V jednu chvíli je jedna polokoule nakloněná ke Slunci a druhá od něj." },
            { text: "Odpojená od zemské osy.", explanation: "Obě polokoule jsou součástí téže Země a její osy." }
          ] }
        ]
      },
      {
        title: "Padající kámen",
        mystery: "Astronaut na Měsíci pustí kámen. Proč spadne k povrchu, i když tam téměř není vzduch?",
        solution: "Měsíc má gravitaci, která kámen přitahuje k jeho povrchu. Vzduch není pro gravitaci potřeba.",
        questions: [
          { text: "Co přitahuje kámen k povrchu Měsíce?", clue: "Měsíc má gravitaci.", answers: [
            { text: "Gravitace Měsíce.", correct: true, explanation: "Gravitace přitahuje hmotu k hmotě; Měsíc ji má, i když slabší než Země." },
            { text: "Vítr z měsíčních stromů.", explanation: "Na Měsíci nejsou stromy ani počasí podobné pozemskému větru." },
            { text: "Zvuk astronautova hlasu.", explanation: "Zvuk kámen nepřitahuje a ve vakuu se navíc nešíří jako ve vzduchu." }
          ] },
          { text: "Je pro existenci gravitace nutný vzduch?", clue: "Gravitace funguje i bez vzduchu.", answers: [
            { text: "Ne, gravitace působí i ve vakuu.", correct: true, explanation: "Gravitace působí mezi tělesy i v prostoru bez vzduchu." },
            { text: "Ano, vzduch kámen táhne dolů.", explanation: "Kámen přitahuje gravitace; vzduch může ovlivnit odpor při pádu, ne vytvořit gravitaci." },
            { text: "Ano, jen když fouká.", explanation: "Vítr není nutný pro pád; gravitace působí i bez atmosféry." }
          ] },
          { text: "Proč astronaut na Měsíci váží méně než na Zemi?", clue: "Měsíční gravitace je slabší.", answers: [
            { text: "Měsíc má slabší gravitaci, ale astronautova hmotnost zůstává stejná.", correct: true, explanation: "Hmotnost se nezmění, ale menší gravitační síla znamená menší tíhu." },
            { text: "Astronautovi na Měsíci ubude polovina hmoty.", explanation: "Změna místa sama o sobě nemění hmotnost astronauta." },
            { text: "Měsíc astronauta odpuzuje.", explanation: "Měsíc astronauta přitahuje, jen slabší silou než Země." }
          ] }
        ]
      },
      {
        title: "Zpráva z daleka",
        mystery: "Astronomové pozorují hvězdu vzdálenou stovky světelných let. Vidí ji takovou, jaká je právě teď?",
        solution: "Ne nutně. Světlu trvá cesta k Zemi stovky let, takže pozorujeme hvězdu takovou, jaká byla v době, kdy světlo vyrazilo.",
        questions: [
          { text: "Co měří světelný rok?", clue: "Světelný rok je vzdálenost.", answers: [
            { text: "Vzdálenost, kterou světlo urazí za jeden rok.", correct: true, explanation: "Světelný rok je jednotka vzdálenosti, nikoli času." },
            { text: "Počet hodin v jednom roce.", explanation: "Hodiny měří čas; světelný rok udává vzdálenost." },
            { text: "Jeden oběh světla kolem Země.", explanation: "Světelný rok označuje cestu světla za rok, ne oběh kolem Země." }
          ] },
          { text: "Jak dlouho letí světlo ze vzdálenosti 100 světelných let?", clue: "Světlo letělo 100 let.", answers: [
            { text: "Přibližně 100 let.", correct: true, explanation: "Světlo urazí jeden světelný rok za jeden rok, takže 100 světelných let znamená asi 100 let cesty." },
            { text: "Jen několik sekund.", explanation: "Světlo je rychlé, ale tak velkou vzdálenost urazí za mnoho let." },
            { text: "Tisíc světelných let.", explanation: "Světelný rok je vzdálenost, ne doba letu; zde cesta trvá asi 100 let." }
          ] },
          { text: "Co tedy ukazuje dnešní dalekohled u vzdálené hvězdy?", clue: "Dalekohled ukazuje minulost.", answers: [
            { text: "Světlo, které hvězda vyslala před mnoha lety.", correct: true, explanation: "Vzdálené objekty pozorujeme v minulosti, protože jejich světlu trvá cesta." },
            { text: "Vždy přesně její současný okamžik.", explanation: "Informace o vzdálené hvězdě nemůže dorazit rychleji než světlo." },
            { text: "Obrázek, který si dalekohled vymyslel.", explanation: "Dalekohled sbírá skutečné světlo, jen k nám dorazilo se zpožděním." }
          ] }
        ]
      },
      {
        title: "Světlo hvězd",
        mystery: "Hvězda svítí miliardy let. Jak může ve svém nitru stále vytvářet energii?",
        solution: "V jádru hvězdy probíhá jaderná fúze: za vysokého tlaku a teploty se lehká atomová jádra slučují. Část hmotnosti se při tom mění na energii.",
        questions: [
          { text: "Jaký proces dodává Slunci většinu jeho energie?", clue: "Hvězdy využívají jadernou fúzi.", answers: [
            { text: "Jaderná fúze v jeho nitru.", correct: true, explanation: "Ve Slunci se při fúzi slučují lehká jádra a uvolňuje se energie." },
            { text: "Hoření dřeva.", explanation: "Slunce není oheň ze dřeva; jeho energie vzniká jadernou fúzí." },
            { text: "Odraz světla od Měsíce.", explanation: "Slunce samo vyzařuje světlo a energii, které Měsíc pouze částečně odráží." }
          ] },
          { text: "Které atomové jádro je hlavním palivem Slunce?", clue: "Základním palivem je vodík.", answers: [
            { text: "Vodík.", correct: true, explanation: "V současném jádru Slunce se většinou slučují jádra vodíku na helium." },
            { text: "Zlato.", explanation: "Zlato není hlavním palivem Slunce; běžná sluneční fúze začíná vodíkem." },
            { text: "Led.", explanation: "Led je pevná voda a není palivem jaderné fúze ve Slunci." }
          ] },
          { text: "Proč může jaderná fúze ve hvězdě probíhat?", clue: "Jádro hvězdy je velmi horké a stlačené.", answers: [
            { text: "V jádru panuje obrovská teplota a tlak.", correct: true, explanation: "Vysoká teplota a tlak pomáhají atomovým jádrům překonat vzájemné odpuzování a slučovat se." },
            { text: "Hvězda je plná vzduchových bublin.", explanation: "Bubliny nejsou příčinou fúze; důležité jsou extrémní podmínky v jádru." },
            { text: "Světlo hvězdu samo zapaluje jako sirka.", explanation: "Fúzi umožňují podmínky v nitru hvězdy, ne zapálení světlem zvenčí." }
          ] }
        ]
      }
    ]
  },
  {
    id: "telo",
    name: "Lidské tělo",
    icon: "🫀",
    description: "Smysly, orgány a tělesné záhady.",
    color: "orange",
    levels: [
      {
        title: "Kam zmizel oběd?",
        mystery: "Po obědě se jídlo postupně ztratí z talíře, ale tělo z něj získá energii. Co se s ním stane?",
        solution: "Trávicí soustava jídlo rozmělní a rozloží na živiny. Ty se vstřebají, putují tělem a buňky je využijí; nestrávené zbytky tělo vyloučí.",
        questions: [
          { text: "Kde trávení začíná?", clue: "První zastávka jsou ústa.", answers: [
            { text: "V ústech, kde jídlo koušeme a mícháme se slinami.", correct: true, explanation: "Zuby rozmělňují potravu a sliny začínají trávit některé její složky." },
            { text: "V koleni.", explanation: "Koleno pomáhá s pohybem, ale není součástí trávicí soustavy." },
            { text: "V plicích.", explanation: "Plíce zajišťují výměnu plynů, nikoli trávení jídla." }
          ] },
          { text: "K čemu slouží žaludek?", clue: "Žaludek promíchává potravu.", answers: [
            { text: "Míchá potravu s trávicími šťávami a dále ji rozkládá.", correct: true, explanation: "Svaly žaludku potravu promíchávají a žaludeční šťávy pomáhají s trávením." },
            { text: "Čerpá krev do celého těla.", explanation: "Krev pumpuje srdce, nikoli žaludek." },
            { text: "Vyrábí veškerý kyslík pro tělo.", explanation: "Kyslík získáváme dýcháním; žaludek tráví potravu." }
          ] },
          { text: "Kde se vstřebává většina živin z potravy?", clue: "Živiny přecházejí střevem.", answers: [
            { text: "V tenkém střevě.", correct: true, explanation: "Stěna tenkého střeva vstřebává většinu živin do krve." },
            { text: "V kostech prstů.", explanation: "Kosti prstů podpírají tělo, ale živiny se vstřebávají hlavně ve střevě." },
            { text: "V ušním bubínku.", explanation: "Ušní bubínek souvisí se sluchem, ne se vstřebáváním živin." }
          ] }
        ]
      },
      {
        title: "Tajemství hlubokého nádechu",
        mystery: "Po běhu dýcháme rychleji. Jak se díky dýchání dostává kyslík do těla?",
        solution: "V plicních sklípcích přechází kyslík ze vzduchu do krve. Krev ho rozváží buňkám a přivádí zpět část oxidu uhličitého, který vydechneme.",
        questions: [
          { text: "Který plyn tělo potřebuje ze vzduchu pro většinu buněk?", clue: "Krev přenáší kyslík.", answers: [
            { text: "Kyslík.", correct: true, explanation: "Buňky většiny těla využívají kyslík při získávání energie z živin." },
            { text: "Helium z balónků.", explanation: "Helium není plyn, který buňky potřebují k získávání energie." },
            { text: "Pouze vodní páru.", explanation: "Vlhkost je běžná ve vydechovaném vzduchu, ale buňky potřebují především kyslík." }
          ] },
          { text: "Kde v plicích přechází kyslík do krve?", clue: "Výměna probíhá ve sklípcích.", answers: [
            { text: "V drobných plicních sklípcích.", correct: true, explanation: "Tenké stěny plicních sklípků umožňují výměnu kyslíku a oxidu uhličitého s krví." },
            { text: "V průdušnici, která vede vzduch.", explanation: "Průdušnice vede vzduch, hlavní výměna plynů probíhá v plicních sklípcích." },
            { text: "V žaludku.", explanation: "Žaludek tráví potravu; kyslík přechází do krve v plicích." }
          ] },
          { text: "Proč po běhu obvykle dýcháme rychleji?", clue: "Pracující svaly potřebují více kyslíku.", answers: [
            { text: "Tělo přivádí více kyslíku a odvádí více oxidu uhličitého.", correct: true, explanation: "Při námaze svaly spotřebovávají více kyslíku a vzniká více oxidu uhličitého." },
            { text: "Plíce se snaží vyrábět jídlo.", explanation: "Plíce potravu nevyrábějí; zajišťují výměnu plynů." },
            { text: "Běh zastaví krevní oběh.", explanation: "Při námaze srdce a dýchání obvykle pracují rychleji, krevní oběh se nezastaví." }
          ] }
        ]
      },
      {
        title: "Záhada bušícího srdce",
        mystery: "Polož prsty na zápěstí a ucítíš tep. Co srdce při každém úderu dělá?",
        solution: "Srdce je svalová pumpa. Stahy vytlačuje krev do cév, které ji rozvádějí po těle a přivádějí zpět.",
        questions: [
          { text: "Jakou hlavní práci vykonává srdce?", clue: "Srdce pumpuje krev.", answers: [
            { text: "Přečerpává krev do oběhu.", correct: true, explanation: "Srdce svými stahy pohání krev cévami." },
            { text: "Tráví potravu místo žaludku.", explanation: "Srdce pumpuje krev; potrava se tráví v trávicí soustavě." },
            { text: "Vyrábí vzduch v plicích.", explanation: "Srdce vzduch nevyrábí, ale pomáhá rozvádět kyslík přijatý v plicích." }
          ] },
          { text: "Která céva přivádí krev zpět k srdci?", clue: "Žíly vedou krev k srdci.", answers: [
            { text: "Žíla.", correct: true, explanation: "Žíly vedou krev směrem k srdci; tepny ji vedou od srdce." },
            { text: "Tepna vždy jen k srdci.", explanation: "Tepny vedou krev od srdce; směr vůči srdci určuje jejich název." },
            { text: "Průdušnice.", explanation: "Průdušnice vede vzduch do plic, krev jí neproudí." }
          ] },
          { text: "Proč se tep při pohybu zrychluje?", clue: "Krev zásobuje pracující svaly.", answers: [
            { text: "Svaly potřebují rychlejší přísun kyslíku a živin.", correct: true, explanation: "Rychlejší oběh přivádí pracujícím svalům kyslík a živiny a odvádí odpadní látky." },
            { text: "Srdce se snaží zpomalit trávení.", explanation: "Zrychlený tep při pohybu souvisí hlavně se zvýšenými nároky svalů." },
            { text: "Krev při běhu zmizí.", explanation: "Krev zůstává v oběhu; srdce ji při námaze pumpuje rychleji." }
          ] }
        ]
      },
      {
        title: "Neviditelný obránce",
        mystery: "Do těla se dostal mikrob. Jak může tělo poznat, že ho má bránit?",
        solution: "Imunitní systém rozpoznává cizorodé původce a různými způsoby proti nim zasahuje. Bílé krvinky patří mezi důležité součásti této obrany.",
        questions: [
          { text: "Jak se nazývá obranný systém těla proti původcům nemocí?", clue: "Tělo má imunitní systém.", answers: [
            { text: "Imunitní systém.", correct: true, explanation: "Imunitní systém zahrnuje buňky a další mechanismy, které pomáhají chránit tělo." },
            { text: "Trávicí systém.", explanation: "Trávicí systém zpracovává potravu; obranu zajišťuje imunitní systém." },
            { text: "Kosterní soustava.", explanation: "Kostra tělo podpírá a chrání některé orgány, ale není hlavním obranným systémem." }
          ] },
          { text: "Které buňky pomáhají tělu bojovat s infekcí?", clue: "Bílé krvinky jsou součást obrany.", answers: [
            { text: "Některé bílé krvinky.", correct: true, explanation: "Různé druhy bílých krvinek rozpoznávají a napadají původce nemocí." },
            { text: "Červené krvinky jako jediná obrana.", explanation: "Červené krvinky hlavně přenášejí kyslík; obrany se účastní například bílé krvinky." },
            { text: "Buňky vlasů.", explanation: "Vlasy mohou zachytit prach, ale jejich buňky nejsou hlavní obranou proti infekci." }
          ] },
          { text: "Proč si po pobytu venku myjeme ruce?", clue: "Mytí pomáhá odstranit mikroby.", answers: [
            { text: "Mýdlo a voda pomáhají odstranit nečistoty a část mikrobů.", correct: true, explanation: "Správné mytí rukou snižuje množství mikrobů, které bychom mohli přenést." },
            { text: "Voda promění mikroby v živiny.", explanation: "Mytí mikroby neproměňuje v potravu; pomáhá je z rukou odstranit." },
            { text: "Ruce po umytí už nikdy nemohou nést mikroby.", explanation: "Mytí riziko snižuje, ale ruce se mohou znovu kontaminovat." }
          ] }
        ]
      },
      {
        title: "Zpráva od nervů",
        mystery: "Dotkneš se teplého hrnku a ruku rychle odtáhneš. Jak se zpráva dostala od prstu k mozku a svalům?",
        solution: "Nervové buňky přenášejí signály. U rychlého ochranného reflexu může mícha spustit pohyb dříve, než si člověk pocit plně uvědomí; mozek se o něm také dozví.",
        questions: [
          { text: "Co přenášejí nervové buňky?", clue: "Nervy vedou signály.", answers: [
            { text: "Signály mezi tělem a nervovou soustavou.", correct: true, explanation: "Nervové buňky předávají informace elektrickými a chemickými signály." },
            { text: "Potravu přímo do svalů.", explanation: "Živiny přenáší krev; nervy předávají především informace." },
            { text: "Vzduch z plic do kostí.", explanation: "Vzduch proudí dýchacími cestami, nervy vedou signály." }
          ] },
          { text: "Která část nervové soustavy může rychle spustit jednoduchý reflex?", clue: "Mícha zvládne rychlou odpověď.", answers: [
            { text: "Mícha.", correct: true, explanation: "U některých reflexů zpracuje mícha signál rychle a vyšle pokyn svalům." },
            { text: "Žaludek.", explanation: "Žaludek tráví potravu; reflexní pohyb koordinuje nervová soustava." },
            { text: "Nehet.", explanation: "Nehet není řídicím centrem pohybu ani nervové soustavy." }
          ] },
          { text: "Proč je rychlé odtažení ruky užitečné?", clue: "Reflex pomáhá chránit tělo.", answers: [
            { text: "Může omezit poranění dříve, než nebezpečí plně vyhodnotíme.", correct: true, explanation: "Rychlý reflex je ochranná reakce; mozek se o podnětu zároveň dozví." },
            { text: "Zaručí, že se člověk nikdy nespálí.", explanation: "Reflex může pomoci, ale nezaručuje úplnou ochranu před poraněním." },
            { text: "Zastaví činnost všech nervů.", explanation: "Reflex využívá nervové signály; činnost nervové soustavy nezastavuje." }
          ] }
        ]
      }
    ]
  }
];
