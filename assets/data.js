// Dati condivisi tra le due lingue (nomi tecnologie, link, slug — non vanno tradotti)
const STACK_TECH = [
  { "slug": "flutter", "hex": "02569B", "label": "Flutter" },
  { "slug": "angular", "hex": "DD0031", "label": "Angular" },
  { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js" },
  { "slug": "rabbitmq", "hex": "FF6600", "label": "RabbitMQ" },
  { "slug": "redis", "hex": "FF4438", "label": "Redis" },
  { "slug": "typescript", "hex": "3178C6", "label": "TypeScript" },
  { "slug": "javascript", "hex": "F7DF1E", "label": "JavaScript" },
  { "slug": "figma", "hex": "F24E1E", "label": "Figma" },
  { "slug": "cloudflare", "hex": "F38020", "label": "Cloudflare" },
  { "slug": "python", "hex": "3776AB", "label": "Python" },
  { "slug": "docker", "hex": "2496ED", "label": "Docker" },
  { "slug": "git", "hex": "F03C2E", "label": "Git" },
  { "slug": "stripe", "hex": "635BFF", "label": "Stripe" },
  { "slug": "google", "hex": "4285F4", "label": "Google API" },
  { "slug": "postgresql", "hex": "4169E1", "label": "PostgreSQL" },
  { "slug": "firebase", "hex": "DD2C00", "label": "Firebase" },
  { "slug": "supabase", "hex": "3FCF8E", "label": "Supabase" },
  { "slug": "mongodb", "hex": "47A248", "label": "MongoDB" },
  { "slug": "openjdk", "hex": "ED8B00", "label": "Java" },
  { "slug": "spring", "hex": "6DB33F", "label": "Spring" },
  { "slug": "claude", "hex": "D97757", "label": "Claude Code" }
];

const PROFILE_SHARED = {
  "name": "Samuele Carpani",
  "photo": "assets/images/profile.jpg",
  "email": "samuele.carpani2@gmail.com",
  "phone": "+39 345 767 9526",
  "location": "Poggio Rusco, Lombardia, Italia",
  "linkedin": "https://www.linkedin.com/in/samuelecarpani/",
  "website": "https://my-web-site-kappa.vercel.app/",
  "github": "https://github.com/samuele2298",
  "cv": ""
};

const BRANDS = [
  { "name": "Rate", "logo": "assets/images/brands/rate.png" },
  { "name": "Unipol", "logo": "assets/images/brands/unipol.png" },
  { "name": "Direq", "logo": "assets/images/brands/direq.png" }
];

const PROJECT_SHARED = {
  refida: {
    "slug": "refida",
    "tag": "WEB APP — SaaS",
    "stack": [
      { "slug": "flutter", "hex": "02569B", "label": "Flutter Web" },
      { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js / Express" },
      { "slug": "postgresql", "hex": "4169E1", "label": "PostgreSQL" },
      { "slug": "redis", "hex": "FF4438", "label": "Redis" },
      { "code": "Aw", "label": "AWS S3" },
      { "slug": "jsonwebtokens", "hex": "000000", "label": "JWT / 2FA" }
    ],
    "screens": [
      "assets/images/projects/refida/1.png",
      "assets/images/projects/refida/2.png",
      "assets/images/projects/refida/3.png",
      "assets/images/projects/refida/4.png"
    ],
    "link": "https://refida.eu/",
    "hasLiveLink": true,
    "size": "wide"
  },
  rate: {
    "slug": "rate",
    "tag": "MOBILE / WEB APP — Social",
    "stack": [
      { "slug": "flutter", "hex": "02569B", "label": "Flutter" },
      { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js / Express" },
      { "slug": "postgresql", "hex": "4169E1", "label": "PostgreSQL" },
      { "slug": "redis", "hex": "FF4438", "label": "Redis" },
      { "slug": "firebase", "hex": "DD2C00", "label": "Firebase" },
      { "code": "Aw", "label": "AWS S3" },
      { "slug": "ffmpeg", "hex": "007808", "label": "FFmpeg" }
    ],
    "screens": [
      "assets/images/projects/rate/1.png",
      "assets/images/projects/rate/2.png",
      "assets/images/projects/rate/3.jpg",
      "assets/images/projects/rate/4.jpg",
      "assets/images/projects/rate/5.jpg",
      "assets/images/projects/rate/6.jpg",
      "assets/images/projects/rate/7.jpg",
      "assets/images/projects/rate/8.jpg"
    ],
    "link": "https://myrate.me/",
    "hasLiveLink": true,
    "size": "wide"
  },
  helperclock: {
    "slug": "helperclock",
    "tag": "MOBILE APP — Tool",
    "stack": [
      { "slug": "flutter", "hex": "02569B", "label": "Flutter" },
      { "slug": "sqlite", "hex": "003B57", "label": "SQLite (sqflite)" },
      { "code": "Nt", "label": "Notifiche locali / Local notifications" }
    ],
    "screens": [
      "assets/images/projects/helperclock/1.jpg",
      "assets/images/projects/helperclock/2.jpg",
      "assets/images/projects/helperclock/3.jpg",
      "assets/images/projects/helperclock/4.jpg"
    ],
    "link": "",
    "hasLiveLink": false,
    "size": "normal"
  },
  thera: {
    "slug": "thera",
    "tag": "MOBILE / WEB APP — AI Personal Assistant",
    "stack": [
      { "slug": "flutter", "hex": "02569B", "label": "Flutter" },
      { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js / Express" },
      { "slug": "postgresql", "hex": "4169E1", "label": "PostgreSQL" },
      { "slug": "redis", "hex": "FF4438", "label": "Redis" },
      { "slug": "firebase", "hex": "DD2C00", "label": "Firebase (Auth / Push)" },
      { "slug": "google", "hex": "4285F4", "label": "Google OAuth / Calendar" },
      { "code": "An", "label": "Claude API (Anthropic)" }
    ],
    "screens": [
      "assets/images/projects/thera/1.jpg",
      "assets/images/projects/thera/2.jpg",
      "assets/images/projects/thera/3.jpg",
      "assets/images/projects/thera/4.jpg",
      "assets/images/projects/thera/5.jpg",
      "assets/images/projects/thera/6.jpg",
      "assets/images/projects/thera/7.jpg",
      "assets/images/projects/thera/8.jpg",
      "assets/images/projects/thera/9.jpg",
      "assets/images/projects/thera/10.jpg",
      "assets/images/projects/thera/11.jpg"
    ],
    "link": "",
    "hasLiveLink": false,
    "size": "wide"
  },
  emailradar: {
    "slug": "emailradar",
    "tag": "WEB APP — SaaS / AI Email",
    "stack": [
      { "slug": "flutter", "hex": "02569B", "label": "Flutter Web" },
      { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js / Express" },
      { "slug": "postgresql", "hex": "4169E1", "label": "PostgreSQL" },
      { "slug": "redis", "hex": "FF4438", "label": "Redis" },
      { "slug": "google", "hex": "4285F4", "label": "Google API (Gmail)" },
      { "slug": "stripe", "hex": "635BFF", "label": "Stripe" },
      { "code": "Aw", "label": "AWS S3" },
      { "code": "AI", "label": "AI email routing (Gemini / Groq)" }
    ],
    "screens": [
      "assets/images/projects/emailradar/1.png",
      "assets/images/projects/emailradar/2.png",
      "assets/images/projects/emailradar/3.png",
      "assets/images/projects/emailradar/4.png",
      "assets/images/projects/emailradar/5.png",
      "assets/images/projects/emailradar/6.png",
      "assets/images/projects/emailradar/7.png",
      "assets/images/projects/emailradar/8.png",
      "assets/images/projects/emailradar/9.png"
    ],
    "link": "",
    "hasLiveLink": false,
    "size": "wide"
  },
  tactica: {
    "slug": "tactica",
    "tag": "WEB APP — Educational Game",
    "stack": [
      { "slug": "flutter", "hex": "02569B", "label": "Flutter Web" },
      { "code": "Gt", "label": "Game theory engine" }
    ],
    "screens": [
      "assets/images/projects/tactica/1.png",
      "assets/images/projects/tactica/2.png",
      "assets/images/projects/tactica/3.png",
      "assets/images/projects/tactica/4.png",
      "assets/images/projects/tactica/5.png",
      "assets/images/projects/tactica/6.png"
    ],
    "link": "",
    "hasLiveLink": false,
    "size": "normal"
  },
  aoefightsimulator: {
    "slug": "aoefightsimulator",
    "tag": "WEB APP — Simulation Tool",
    "stack": [
      { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js / Express" },
      { "slug": "javascript", "hex": "F7DF1E", "label": "JavaScript (Canvas UI)" },
      { "code": "Ws", "label": "WebSocket" }
    ],
    "screens": [
      "assets/images/projects/aoefightsimulator/1.png",
      "assets/images/projects/aoefightsimulator/2.png"
    ],
    "link": "https://aoefightsimulator.onrender.com/",
    "hasLiveLink": true,
    "size": "normal"
  },
  trendr: {
    "slug": "trendr",
    "tag": "MOBILE / WEB APP — Social Polling",
    "stack": [
      { "slug": "flutter", "hex": "02569B", "label": "Flutter" },
      { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js / Express" },
      { "slug": "postgresql", "hex": "4169E1", "label": "PostgreSQL" },
      { "slug": "redis", "hex": "FF4438", "label": "Redis" },
      { "slug": "firebase", "hex": "DD2C00", "label": "Firebase" },
      { "slug": "stripe", "hex": "635BFF", "label": "Stripe" },
      { "code": "Aw", "label": "AWS S3" }
    ],
    "screens": [],
    "link": "",
    "hasLiveLink": false,
    "size": "wide"
  },
  queeup: {
    "slug": "queeup",
    "tag": "WEB APP — SaaS / Queue Management",
    "stack": [
      { "slug": "angular", "hex": "DD0031", "label": "Angular / PrimeNG" },
      { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js / Express" },
      { "slug": "postgresql", "hex": "4169E1", "label": "PostgreSQL" },
      { "slug": "redis", "hex": "FF4438", "label": "Redis" },
      { "slug": "stripe", "hex": "635BFF", "label": "Stripe" },
      { "code": "Ws", "label": "WebSocket (real-time queue)" }
    ],
    "screens": [
      "assets/images/projects/queeup/1.png",
      "assets/images/projects/queeup/2.png",
      "assets/images/projects/queeup/3.png"
    ],
    "link": "",
    "hasLiveLink": false,
    "size": "wide"
  },
  sonar: {
    "slug": "sonar",
    "tag": "WEB APP — Fintech / Crypto Arbitrage",
    "stack": [
      { "slug": "angular", "hex": "DD0031", "label": "Angular" },
      { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js / Express" },
      { "slug": "postgresql", "hex": "4169E1", "label": "PostgreSQL" },
      { "slug": "redis", "hex": "FF4438", "label": "Redis" },
      { "code": "Ws", "label": "WebSocket (exchange feeds)" },
      { "code": "Ti", "label": "Technical indicators engine" }
    ],
    "screens": [],
    "link": "",
    "hasLiveLink": false,
    "size": "wide"
  },
  signal: {
    "slug": "signal",
    "tag": "TOOL — Quant Trading Engine",
    "stack": [
      { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js" },
      { "slug": "supabase", "hex": "3FCF8E", "label": "Supabase" },
      { "code": "Bt", "label": "Strategy backtesting" }
    ],
    "screens": [],
    "link": "",
    "hasLiveLink": false,
    "size": "normal"
  },
  leadsniper: {
    "slug": "leadsniper",
    "tag": "WEB APP — SaaS / Lead Generation",
    "stack": [
      { "slug": "angular", "hex": "DD0031", "label": "Angular / PrimeNG" },
      { "slug": "nodedotjs", "hex": "5FA04E", "label": "Node.js / Express" },
      { "slug": "postgresql", "hex": "4169E1", "label": "PostgreSQL" },
      { "slug": "stripe", "hex": "635BFF", "label": "Stripe" },
      { "code": "Re", "label": "Reddit API" },
      { "code": "Au", "label": "Passport / Auth" }
    ],
    "screens": [],
    "link": "",
    "hasLiveLink": false,
    "size": "normal"
  },
  mosaicimagepicker: {
    "slug": "mosaicimagepicker",
    "tag": "LIBRARY — Flutter Package",
    "stack": [
      { "slug": "flutter", "hex": "02569B", "label": "Flutter" },
      { "code": "Im", "label": "Image / video processing" }
    ],
    "screens": [],
    "link": "",
    "hasLiveLink": false,
    "size": "normal"
  }
};

window.SITE_DATA = {

  it: {
    "ui": {
      "nav": { "services": "Servizi", "projects": "Progetti", "skills": "Competenze", "experience": "Esperienza", "formation": "Formazione", "hobbies": "Hobby", "ai": "AI", "contact": "Contatti" },
      "hero": { "ctaWork": "Guarda i lavori", "ctaContact": "Contattami" },
      "brandsLabel": "AZIENDE CON CUI HO LAVORATO",
      "projectsSection": { "eyebrow": "LAVORI SELEZIONATI", "heading": "Progetti", "lead": "Una parte di quello che ho realizzato. Apri una card per la scheda completa, stack e risorse.", "viewDetails": "Vedi dettagli →" },
      "bringSection": { "eyebrow": "COSA PORTO", "heading": "Cosa so gestire" },
      "experienceSection": { "eyebrow": "CARRIERA", "heading": "Esperienza" },
      "aiSection": { "eyebrow": "SVILUPPO CON L'AI", "heading": "Workflow AI-first", "lead": "Negli ultimi mesi mi sono dedicato ad approfondire e ridisegnare il mio workflow di sviluppo attorno all'AI, con Claude al centro. Continuo a studiare e a tenermi aggiornato sulle novità del settore, portando ogni nuovo strumento direttamente sui progetti reali." },
      "servicesSection": { "eyebrow": "COSA OFFRO", "heading": "Servizi" },
      "stackSection": { "eyebrow": "STRUMENTI DEL MESTIERE", "heading": "Stack", "primaryTag": "Principale" },
      "educationSection": { "eyebrow": "FORMAZIONE", "heading": "Formazione" },
      "hobbiesSection": { "eyebrow": "FUORI DAL LAVORO", "heading": "Hobby e traguardi" },
      "testimonialsSection": { "eyebrow": "PAROLE GENTILI", "heading": "Testimonianze" },
      "contactSection": { "heading": "Parliamone.", "lead": "Aperto a ruoli full-time e a progetti freelance interessanti.", "githubLabel": "GitHub", "cvLabel": "Scarica CV" },
      "footer": { "rights": "Tutti i diritti riservati.", "linkedin": "LinkedIn" },
      "modal": { "stackHeading": "Stack", "visitSite": "Visita il sito →", "show": "Mostra screenshot →" }
    },

    "profile": Object.assign({}, PROFILE_SHARED, {
      "role": "Sviluppatore Full Stack",
      "tagline": "Prodotti full stack, dall'inizio alla fine."
    }),

    "brands": BRANDS,

    "experience": [
      {"role": "Sviluppatore Full-stack", "company": "DireQ Srl", "dateStart": "agosto 2024", "dateEnd": "Oggi", "description": "Sviluppo e gestisco un sistema di arbitraggio crypto a microservizi che movimenta circa 2 milioni di euro, integrato con le API di più exchange per monitorare ed eseguire le opportunità in tempo reale. Lavoro inoltre full stack in Angular, Node.js e TypeScript su una piattaforma di messaggistica (app B2C, prodotto B2B, tool interni), incluso il monitoraggio con Nagios."},
      {"role": "Sviluppatore Full Stack", "company": "Rate · social network · part-time · remoto", "dateStart": "agosto 2024", "dateEnd": "giugno 2026", "description": "Ho sviluppato l'app end-to-end: architettura, API REST, app Flutter, deploy e infrastruttura. Ho realizzato feed con stories e reels, messaggi diretti e una pipeline media lato server (FFmpeg), oltre a notifiche push e login Google/Apple. Stack: Node.js/Express, PostgreSQL, Redis, Firebase, AWS S3."},
      {"role": "Sviluppatore front-end", "company": "undicizerouno (succursale Gruppo Unipol)", "dateStart": "gennaio 2024", "dateEnd": "agosto 2024", "description": "Sviluppo front-end in Angular sui prodotti assicurativi core e sui processi interni di Unipol, in collaborazione con il team back-end Java/Spring sull'integrazione delle API."},
      {"role": "Tecnico di Deployment", "company": "Gruppo Unipol", "dateStart": "agosto 2023", "dateEnd": "dicembre 2023", "description": "Rilascio e troubleshooting delle applicazioni aziendali Angular e Java/Spring su IBM WebSphere, insieme ai team di sviluppo e infrastruttura."},
      {"role": "Sviluppatore front-end", "company": "Edooko | Building knowledge", "dateStart": "gennaio 2023", "dateEnd": "giugno 2024", "description": "Ho lavorato come sviluppatore front-end in Flutter su UI/UX e design per la web app e l'app Android di Edooko, integrando il front-end con il back-end Node.js e MongoDB. Mi sono occupato dell'interfaccia utente e dell'esperienza utente, curando l'aspetto grafico e l'usabilità dell'applicazione, in stretta collaborazione con il team di prodotto per tradurre le esigenze in soluzioni funzionali e coerenti su web e mobile."},
      { "role": "Tecnico Sistemista", "company": "PC Pratica", "dateStart": "aprile 2022", "dateEnd": "ottobre 2022", "description": "Mi sono occupato di ripristinare e riparare i computer aziendali, oltre a creare e gestire reti interne (Ethernet, ripetitori Wi-Fi, configurazione DHCP, ecc.). Ho installato sistemi VOIP e centralini telefonici presso diverse aziende clienti, maturando esperienza pratica sull'hardware e lavorando con sistemi NAS e soluzioni di archiviazione, seguendo anche i relativi processi operativi aziendali." }
    ],

    "aiTools": [
      { "code": "Cc", "title": "Claude Code", "description": "Agentic coding nel lavoro di tutti i giorni: feature end to end, refactoring, code review, subagent, skill e hook personalizzati." },
      { "code": "Ch", "title": "Claude in Chrome", "description": "Automazione e test nel browser: navigazione, verifica delle interfacce, debugging di console e richieste di rete direttamente sulle pagine." },
      { "code": "Di", "title": "Dispatch", "description": "Delego attività anche da mobile e coordino più sessioni in parallelo, lasciando lavorare gli agenti in background." },
      { "code": "Cw", "title": "Cowork", "description": "Agenti anche oltre il codice: ricerca, documenti, analisi di file e automazione delle attività ricorrenti." },
      { "code": "De", "title": "Moduli Design", "description": "Dall'idea al prototipo: mockup, design system e interfacce generate e iterate con l'AI prima di scrivere codice." },
      { "code": "Mc", "title": "MCP, plugin e API", "description": "Connettori MCP, plugin e integrazione dei modelli Claude via API nei prodotti (assistenti, classificazione, tool use)." }
    ],

    "education": [
      { "degree": "Laurea in Ingegneria Informatica", "school": "Alma Mater Studiorum – Università di Bologna", "dateStart": "2019", "dateEnd": "2024", "description": "Percorso incentrato su fondamenti di programmazione, algoritmi e strutture dati, basi di dati, reti e ingegneria del software, con progetti pratici in diversi linguaggi e paradigmi." },
      { "degree": "BTEC International Level 3 Extended Diploma, Produzione Musicale", "school": "Aloud", "dateStart": "2017", "dateEnd": "2019", "description": "Diploma internazionale focalizzato su produzione musicale, registrazione e mixaggio audio, uso di DAW e software di editing, con attenzione anche agli aspetti tecnici e creativi del suono." },
      { "degree": "Diploma di Ragioneria", "school": "Luosi - Mirandola", "dateStart": "2012", "dateEnd": "2017", "description": "Diploma tecnico-economico con studio di contabilità, economia aziendale, diritto ed elementi di informatica gestionale, che ha posto le basi per un approccio analitico e organizzato al lavoro." }
    ],

    "offerings": [
      { "icon": "📱", "color": "#22d3ee", "title": "App Mobile", "description": "iOS e Android, native o cross-platform con Flutter." },
      { "icon": "💻", "color": "#a78bfa", "title": "Web App", "description": "Dashboard, SaaS e siti dinamici: frontend e backend." },
      { "icon": "🤖", "color": "#4ade80", "title": "AI & ML Integrations", "description": "Integrazione di modelli AI e machine learning nei prodotti." },
      { "icon": "🧩", "color": "#f97316", "title": "Gestionali ed Automazioni per Aziende", "description": "Software gestionali su misura e automazioni dei processi interni." },
      { "icon": "🎨", "color": "#f472b6", "title": "UI/UX & Prototipazione", "description": "Wireframe, prototipi Figma e consulenza design." },
      { "icon": "🚀", "color": "#facc15", "title": "Consulenza End-to-End", "description": "Architettura, sviluppo e deploy in piena autonomia." }
    ],

    "stack": STACK_TECH,

    "services": [
      { "num": "01", "title": "MVP", "description": "Da idea a prodotto funzionante, in fretta — costruito per testare il mercato, non per essere buttato via." },
      { "num": "02", "title": "Prodotti software", "description": "Prodotti di piccole-medie dimensioni, end to end — design, sviluppo, rilascio e mantenimento." },
      { "num": "03", "title": "Automazioni", "description": "Automazioni mirate e specifiche che eliminano un passaggio manuale dal tuo workflow." },
      { "num": "04", "title": "Strumenti semplici", "description": "Tool interni leggeri, realizzati in fretta e senza complessità inutili." }
    ],

    "projects": [
      Object.assign({}, PROJECT_SHARED.refida, {
        "title": "Refida",
        "shortDescription": "Piattaforma per la gestione di commesse di costruzione/ristrutturazione: budget, gare d'appalto, contratti e cash flow.",
        "description": [
          "Refida è una piattaforma verticale per il project management nel settore costruzioni/ristrutturazioni. Copre l'intero ciclo di vita di una commessa: pianificazione del budget, gestione delle voci di lavoro (item), gare d'appalto con fornitori (pre-qualifica, offerta, aggiudicazione), fino a purchase order/contratti e al relativo cash flow con rate e pagamenti.",
          "Supporta due tipi di utenti: l'organizzazione principale che gestisce progetti, item e gare, e i collaboratori invitati con accesso limitato ai soli item assegnati. Include autenticazione con 2FA via email e un flusso di invito per i sub-user.",
          "Ho sviluppato architettura, backend API, frontend, deploy e infrastruttura."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.rate, {
        "title": "Rate",
        "shortDescription": "App social per condividere contenuti e ricevere feedback: feed con storie e reel, messaggistica diretta e domande alla community.",
        "description": [
          "Rate è un'app social pensata attorno al concetto di rating dei contenuti: gli utenti pubblicano foto/video, li condividono in un feed con storie e reel, e ricevono reazioni e feedback dalla community. Include anche una sezione \"asks\" per domande/prompt, ricerca utenti/contenuti e messaggistica diretta (inbox).",
          "Login con Google e Apple, notifiche push, upload ed elaborazione media (immagini e video, con conversione/compressione lato server).",
          "Ho sviluppato architettura, backend API, app Flutter, deploy e infrastruttura."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.helperclock, {
        "title": "HelperClock",
        "shortDescription": "App Flutter per timbrare entrata/uscita dal lavoro, con riepilogo ore giornaliere/settimanali e promemoria via notifiche locali.",
        "description": [
          "HelperClock è un semplice tool per tracciare le ore di lavoro: timbratura di entrata/uscita, calcolo automatico delle ore lavorate nella giornata e riepilogo settimanale. Tutto funziona offline, senza account né server: i dati restano sul dispositivo.",
          "Include notifiche locali per ricordare di timbrare l'uscita, così da non perdere traccia delle ore.",
          "Interamente client-side: niente hosting da mantenere, per questo il link qui sotto apre un mock cliccabile invece di un sito live."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.thera, {
        "title": "Thera",
        "shortDescription": "Assistente personale AI: task, abitudini, persone, stato emotivo e calendario in un'unica chat con memoria a lungo termine.",
        "description": [
          "Thera è un assistente personale basato su Claude (Anthropic) pensato come \"secondo cervello\": una chat che tiene traccia di task, progetti, abitudini, persone/relazioni e stato emotivo dell'utente, con notifiche proattive e promemoria calcolati (ricorrenze via rrule, notifiche push).",
          "Il backend espone moduli dedicati per memoria a lungo termine, tag, quick actions e dashboard riepilogativa; il client Flutter (mobile + web) gestisce autenticazione Google, notifiche locali/push e sync offline-first.",
          "Ho sviluppato architettura, backend Node/Express, app Flutter e integrazione LLM."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.emailradar, {
        "title": "EmailRadar",
        "shortDescription": "Piattaforma di email intelligence: instradamento AI della posta, gestione lead/contatti e campagne, con billing integrato.",
        "description": [
          "EmailRadar analizza e instrada le email in arrivo con un motore AI (Gemini/Groq) che classifica messaggi, estrae contesto ed li assegna alle code corrette (inbox, review, lead). Include gestione contatti, campagne email e allegati.",
          "Billing via Stripe con piani a consumo, autenticazione utenti e un client Flutter Web per la dashboard operativa.",
          "Ho sviluppato architettura, backend Node/Express, integrazione dei modelli AI e frontend Flutter Web."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.tactica, {
        "title": "Tactica",
        "shortDescription": "Gioco educativo di strategia basato sulla teoria dei giochi, pensato per bambini 7-10 anni, con 5 modalità di gioco.",
        "description": [
          "Tactica è un gioco educativo Flutter Web che insegna concetti di teoria dei giochi e pensiero strategico a bambini tra i 7 e i 10 anni, attraverso 5 modalità di gioco differenti.",
          "Ho curato design didattico, UX per un pubblico giovane e sviluppo dell'app, interamente client-side."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.aoefightsimulator, {
        "title": "AoE4 Fight Simulator",
        "shortDescription": "Simulatore di combattimenti 2D per Age of Empires IV, con strategie configurabili e modalità Monte Carlo.",
        "description": [
          "Simulatore di scontri per Age of Empires IV: motore di combattimento 2D semplificato (mischia/distanza, cooldown, ambienti con ostacoli o strutture guarnite) alimentato dai dati reali del gioco (aoe4world/data).",
          "UI dark con campo di battaglia live, grafici delle risorse in tempo reale e una modalità Monte Carlo per stimare win rate e trade ratio su migliaia di simulazioni.",
          "Ho sviluppato il motore di simulazione, il backend Node/Express con WebSocket per l'aggiornamento live e l'interfaccia Canvas."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.trendr, {
        "title": "Trendr",
        "shortDescription": "App di polling sociale in stile swipe: domande di tendenza segmentate per età, genere, settore e interessi.",
        "description": [
          "Trendr è un'app social dove gli utenti rispondono con uno swipe a domande/trend, con risultati segmentati per fascia d'età, genere, settore e interessi per esplorare come cambiano le opinioni tra gruppi diversi.",
          "Backend con localizzazione multi-lingua, gestione di tag/interessi/settori e categorie anagrafiche; app Flutter con swipe card, condivisione risultati e notifiche push.",
          "Ho sviluppato architettura, backend Node/Express, app Flutter, deploy e infrastruttura."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.queeup, {
        "title": "QueeUp",
        "shortDescription": "SaaS per la gestione di code virtuali: creazione code in tempo reale, notifiche al cliente e billing integrato.",
        "description": [
          "QueeUp permette ad attività commerciali di sostituire la fila fisica con una coda virtuale: i clienti si prenotano, ricevono aggiornamenti in tempo reale via WebSocket sulla propria posizione e vengono notificati quando è il loro turno.",
          "Dashboard di gestione coda per l'operatore, autenticazione e billing via Stripe per i piani a abbonamento.",
          "Ho sviluppato architettura, backend Node/Express e frontend Angular/PrimeNG."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.sonar, {
        "title": "Sonar",
        "shortDescription": "Dashboard di trading in arbitraggio crypto: monitoraggio multi-exchange, gestione ordini e opportunità in tempo reale.",
        "description": [
          "Sonar è un sistema di trading che monitora più exchange crypto in tempo reale per individuare opportunità di arbitraggio, con un motore di indicatori tecnici, gestione ordini/coda tramite code Redis e cancellazione ordini cross-exchange.",
          "Dashboard Angular con viste su bilanci, opportunità, storico, simboli/coppie e configurazione strategie; comunicazione realtime via WebSocket con i worker di backend.",
          "Ho sviluppato il motore di monitoraggio degli exchange, la gestione ordini su Redis, i worker di backend e la dashboard Angular."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.signal, {
        "title": "Signal",
        "shortDescription": "Motore di generazione segnali e backtesting per strategie di trading algoritmico (breakout, ranging, momentum).",
        "description": [
          "Signal è un motore Node.js per lo sviluppo e il backtesting di strategie di trading quantitativo: include diverse strategie (breakout, ranging, random benchmark) e un modulo di backtest con salvataggio dei risultati.",
          "Dati e stato persistiti su Supabase; pensato per validare idee di trading prima di portarle in produzione.",
          "Ho sviluppato il motore, le strategie e il modulo di backtest (solo backend, senza interfaccia grafica)."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.leadsniper, {
        "title": "LeadSniper",
        "shortDescription": "SaaS per la ricerca di lead su Reddit: screening per keyword/subreddit, storico ricerche e billing integrato.",
        "description": [
          "LeadSniper è uno strumento di lead generation che analizza Reddit alla ricerca di post e commenti rilevanti per un set di keyword e subreddit scelti dall'utente, restituendo una lista di potenziali lead.",
          "Storico delle ricerche (screening) salvato per utente, autenticazione con Passport e billing via Stripe per i piani a abbonamento.",
          "Ho sviluppato architettura, backend Node/Express e frontend Angular/PrimeNG."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.mosaicimagepicker, {
        "title": "Mosaic Image Picker",
        "shortDescription": "Package Flutter per selezionare foto/video e comporli in layout a mosaico, con ottimizzazione media integrata.",
        "description": [
          "Mosaic Image Picker è un package Flutter riutilizzabile per selezionare più immagini/video e disporli in layout a mosaico personalizzabili (drag & drop degli slot), con estrazione EXIF e compressione media integrata.",
          "Pensato per essere riutilizzato in più app (incluso Rate) che necessitano di un media picker con layout a griglia avanzati.",
          "Ho sviluppato il package, i layout a mosaico, la pipeline di compressione e l'app di esempio."
        ]
      })
    ],

    "hobbies": [
      { "code": "Rt", "title": "RTS competitivi", "description": "Rank Conqueror in Age of Empires IV, attivo anche in Company of Heroes 3, StarCraft II, Age of Empires III e Hearts of Iron IV." },
      { "code": "Th", "title": "Teatro d'improvvisazione e public speaking", "description": "Ho partecipato a un saggio di teatro d'improvvisazione, oltre a diversi corsi di recitazione e public speaking." },
      { "code": "Ps", "title": "Psicologia, filosofia e fisica", "description": "Una curiosità di lunga data, coltivata soprattutto da autodidatta tra libri e corsi." },
      { "code": "In", "title": "Mercati e investimenti", "description": "Portfolio personale in crypto e azioni dal 2020, con qualche esposizione di trading discrezionale e automatico." }
    ],

    "highlights": [
      { "tag": "SCACCHI", "title": "Titolo nazionale di scacchi", "description": "FIDE ~1800, in Prima Nazionale — la massima serie a squadre in Italia." },
      { "tag": "MUSICA", "title": "Brano pubblicato con etichetta EDM", "description": "Ho prodotto e pubblicato un brano tramite un'etichetta discografica EDM." },
      { "tag": "AUDIO", "title": "Wind Music Awards, Arena di Verona", "description": "Assistente fonico di sala; per 3 anni ho gestito uno studio di registrazione professionale." },
      { "tag": "CONTENUTI", "title": "Canale YouTube da 2.000 iscritti", "description": "Ho costruito da zero un canale crypto/finanza fino a ~2.000 iscritti." }
    ],

    "testimonials": [
      { "quote": "Samuele ha seguito il rifacimento della fatturazione end to end, tenendoci sempre aggiornati. La riconciliazione è passata da un mal di testa settimanale a un non-problema.", "author": "Marta Ricci", "role": "Head of Product, Nordwind Labs", "initials": "MR" },
      { "quote": "Avevamo bisogno di un MVP velocemente per validarlo con clienti reali. Lo ha consegnato in settimane, non mesi, senza tagliare gli angoli che contavano davvero.", "author": "Davide Lombardi", "role": "Founder, Refida", "initials": "DL" },
      { "quote": "Comunicatore chiaro, mette tutto per iscritto, e ti fa notare quando uno scope non ha senso. Esattamente quello che vuoi da un freelancer.", "author": "Giulia Conti", "role": "Operations Lead, Edooko", "initials": "GC" }
    ]
  },

  en: {
    "ui": {
      "nav": { "services": "Services", "projects": "Projects", "skills": "Skills", "experience": "Experience", "formation": "Formation", "hobbies": "Hobbies", "ai": "AI", "contact": "Contact" },
      "hero": { "ctaWork": "See the work", "ctaContact": "Get in touch" },
      "brandsLabel": "BRANDS I'VE WORKED WITH",
      "projectsSection": { "eyebrow": "SELECTED WORK", "heading": "Projects", "lead": "A slice of what I've shipped. Tap any card for the full write-up, stack, and resources.", "viewDetails": "View details →" },
      "bringSection": { "eyebrow": "WHAT I BRING", "heading": "What I can own" },
      "experienceSection": { "eyebrow": "CAREER", "heading": "Experience" },
      "aiSection": { "eyebrow": "BUILDING WITH AI", "heading": "AI-first workflow", "lead": "Over the past months I've focused on deepening and reshaping my development workflow around AI, with Claude at the center. I keep studying and staying up to date with what's new in the field, bringing every new tool straight into real projects." },
      "servicesSection": { "eyebrow": "WHAT I OFFER", "heading": "Services" },
      "stackSection": { "eyebrow": "TOOLS OF THE TRADE", "heading": "Stack", "primaryTag": "Primary" },
      "educationSection": { "eyebrow": "FORMATION", "heading": "Education" },
      "hobbiesSection": { "eyebrow": "OUTSIDE OF WORK", "heading": "Hobbies & achievements" },
      "testimonialsSection": { "eyebrow": "KIND WORDS", "heading": "Testimonials" },
      "contactSection": { "heading": "Let's talk.", "lead": "Open to full-time roles and interesting freelance work.", "githubLabel": "GitHub", "cvLabel": "Download CV" },
      "footer": { "rights": "All rights reserved.", "linkedin": "LinkedIn" },
      "modal": { "stackHeading": "Stack", "visitSite": "Visit the site →", "show": "Show screenshots →" }
    },

    "profile": Object.assign({}, PROFILE_SHARED, {
      "role": "Full Stack Developer",
      "tagline": "Full stack products, end to end."
    }),

    "brands": BRANDS,

    "experience": [
      {"role": "Full-stack Developer", "company": "DireQ Srl", "dateStart": "August 2024", "dateEnd": "Now", "description": "I develop and manage a microservices-based crypto arbitrage system handling around €2M in capital, integrating multiple exchange APIs to monitor and execute opportunities in real time. I also work full stack with Angular, Node.js and TypeScript on a messaging platform (B2C app, B2B product, internal tools), including monitoring with Nagios."},
      {"role": "Full Stack Developer", "company": "Rate · social network · part-time · remote", "dateStart": "August 2024", "dateEnd": "June 2026", "description": "Developed the app end to end: architecture, REST APIs, the Flutter app, deployment and infrastructure. Built feed with stories and reels, direct messaging and a server-side media pipeline (FFmpeg), plus push notifications and Google/Apple sign-in. Stack: Node.js/Express, PostgreSQL, Redis, Firebase, AWS S3."},
      {"role": "Front-end Developer", "company": "undicizerouno (Gruppo Unipol branch)", "dateStart": "January 2024", "dateEnd": "August 2024", "description": "Front-end development in Angular on Unipol's core insurance products and internal processes, working with the Java/Spring back-end team on API integration."},
      {"role": "Deployment Technician", "company": "Gruppo Unipol", "dateStart": "August 2023", "dateEnd": "December 2023", "description": "Release and troubleshooting of Angular and Java/Spring company applications on IBM WebSphere, working with development and infrastructure teams."},
      {"role": "Front-end Developer", "company": "Edooko | Building knowledge", "dateStart": "January 2023", "dateEnd": "June 2024", "description": "I worked as a front-end developer in Flutter on UI/UX and design for Edooko's web app and Android app, integrating the front-end with the Node.js and MongoDB back-end. I handled the user interface and user experience, taking care of the visual design and usability of the application, working closely with the product team to translate requirements into functional, consistent solutions across web and mobile."},
      { "role": "IT Systems Technician", "company": "PC Pratica", "dateStart": "April 2022", "dateEnd": "October 2022", "description": "I handled restoring and repairing company computers, as well as setting up and managing internal networks (Ethernet, Wi-Fi repeaters, DHCP configuration, etc.). I installed VOIP systems and phone switchboards at various client companies, gaining hands-on hardware experience, working with NAS systems and storage solutions, and following related company operational processes." }
    ],

    "aiTools": [
      { "code": "Cc", "title": "Claude Code", "description": "Agentic coding in my day-to-day work: end-to-end features, refactoring, code review, subagents, custom skills and hooks." },
      { "code": "Ch", "title": "Claude in Chrome", "description": "Browser automation and testing: navigating, checking interfaces, debugging console and network requests right on the page." },
      { "code": "Di", "title": "Dispatch", "description": "Handing off tasks even from mobile and coordinating several sessions in parallel, with agents working in the background." },
      { "code": "Cw", "title": "Cowork", "description": "Agents beyond code: research, documents, file analysis and automating recurring work." },
      { "code": "De", "title": "Design modules", "description": "From idea to prototype: mockups, design systems and interfaces generated and iterated with AI before writing code." },
      { "code": "Mc", "title": "MCP, plugins & API", "description": "MCP connectors, plugins and integrating Claude models via API into products (assistants, classification, tool use)." }
    ],

    "education": [
      { "degree": "Bachelor of Engineering, Computer Science", "school": "Alma Mater Studiorum – Università di Bologna", "dateStart": "2019", "dateEnd": "2024", "description": "A program focused on programming fundamentals, algorithms and data structures, databases, networks and software engineering, with hands-on projects across different languages and paradigms." },
      { "degree": "BTEC International Level 3 Extended Diploma, Music Production", "school": "Aloud", "dateStart": "2017", "dateEnd": "2019", "description": "An international diploma centered on music production, audio recording and mixing, and the use of DAWs and editing software, with a focus on both the technical and creative sides of sound." },
      { "degree": "Higher National Diploma, Accounting", "school": "Luosi - Mirandola", "dateStart": "2012", "dateEnd": "2017", "description": "A technical-economic diploma covering accounting, business economics, law and elements of business computing, which laid the foundation for an analytical and organized approach to work." }
    ],

    "offerings": [
      { "icon": "📱", "color": "#22d3ee", "title": "Mobile Apps", "description": "iOS and Android, native or cross-platform with Flutter." },
      { "icon": "💻", "color": "#a78bfa", "title": "Web Apps", "description": "Dashboards, SaaS and dynamic sites: frontend and backend." },
      { "icon": "🤖", "color": "#4ade80", "title": "AI & ML Integrations", "description": "Integrating AI and machine learning models into products." },
      { "icon": "🧩", "color": "#f97316", "title": "Business Software & Automation", "description": "Custom management software and internal process automation." },
      { "icon": "🎨", "color": "#f472b6", "title": "UI/UX & Prototyping", "description": "Wireframes, Figma prototypes and design consulting." },
      { "icon": "🚀", "color": "#facc15", "title": "End-to-End Consulting", "description": "Architecture, development and deployment, fully autonomous." }
    ],

    "stack": STACK_TECH,

    "services": [
      { "num": "01", "title": "MVPs", "description": "From idea to a working product, fast — built to test the market, not to throw away." },
      { "num": "02", "title": "Software products", "description": "Small to mid-size products, end to end — design, build, ship, and keep running." },
      { "num": "03", "title": "Automations", "description": "Specific, targeted automations that remove a manual step from your workflow." },
      { "num": "04", "title": "Simple tools", "description": "Lightweight internal tools, done quickly and without unnecessary overhead." }
    ],

    "projects": [
      Object.assign({}, PROJECT_SHARED.refida, {
        "title": "Refida",
        "shortDescription": "A platform for managing construction/renovation contracts: budget, tenders, contracts and cash flow.",
        "description": [
          "Refida is a vertical project management platform for the construction/renovation industry. It covers the full lifecycle of a project: budget planning, work item management, supplier tenders (pre-qualification, bidding, award), all the way to purchase orders/contracts and the related cash flow with installments and payments.",
          "It supports two user types: the main organization managing projects, items and tenders, and invited collaborators with access limited to their assigned items. Includes email 2FA authentication and an invite flow for sub-users.",
          "I built the architecture, backend API, frontend, deployment and infrastructure."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.rate, {
        "title": "Rate",
        "shortDescription": "A social app for sharing content and getting feedback: feed with stories and reels, direct messaging and community questions.",
        "description": [
          "Rate is a social app built around content rating: users post photos/videos, share them in a feed with stories and reels, and get reactions and feedback from the community. It also includes an \"asks\" section for questions/prompts, search, and direct messaging (inbox).",
          "Google and Apple sign-in, push notifications, media upload and processing (images and video, with server-side conversion/compression).",
          "I built the architecture, backend API, the Flutter app, deployment and infrastructure."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.helperclock, {
        "title": "HelperClock",
        "shortDescription": "A Flutter app to clock in/out of work, with daily/weekly hour summaries and local-notification reminders.",
        "description": [
          "HelperClock is a simple tool for tracking work hours: clock in/out, automatic calculation of hours worked per day, and a weekly summary. Everything runs offline, no account or server needed — data stays on the device.",
          "Includes local notifications to remind you to clock out, so you never lose track of your hours.",
          "Fully client-side: no hosting to maintain, which is why the link below opens a clickable mock instead of a live site."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.thera, {
        "title": "Thera",
        "shortDescription": "AI personal assistant: tasks, habits, people, emotional state and calendar in one chat with long-term memory.",
        "description": [
          "Thera is a personal assistant built on Claude (Anthropic), designed as a \"second brain\": a chat that tracks tasks, projects, habits, people/relationships and emotional state, with proactive notifications and computed reminders (recurrences via rrule, push notifications).",
          "The backend exposes dedicated modules for long-term memory, tags, quick actions and a summary dashboard; the Flutter client (mobile + web) handles Google auth, local/push notifications and offline-first sync.",
          "I built the architecture, Node/Express backend, Flutter app and LLM integration."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.emailradar, {
        "title": "EmailRadar",
        "shortDescription": "Email intelligence platform: AI-based email routing, lead/contact and campaign management, with integrated billing.",
        "description": [
          "EmailRadar analyzes and routes incoming email with an AI engine (Gemini/Groq) that classifies messages, extracts context and assigns them to the right queues (inbox, review, leads). Includes contact management, email campaigns and attachments.",
          "Stripe billing with usage-based plans, user authentication and a Flutter Web client for the operational dashboard.",
          "I built the architecture, Node/Express backend, AI model integration and Flutter Web frontend."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.tactica, {
        "title": "Tactica",
        "shortDescription": "An educational strategy game based on game theory, built for kids aged 7-10, with 5 game modes.",
        "description": [
          "Tactica is an educational Flutter Web game that teaches game theory concepts and strategic thinking to children aged 7 to 10, across 5 different game modes.",
          "I handled the instructional design, UX for a young audience and app development, fully client-side."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.aoefightsimulator, {
        "title": "AoE4 Fight Simulator",
        "shortDescription": "A 2D combat simulator for Age of Empires IV, with configurable strategies and a Monte Carlo mode.",
        "description": [
          "A combat simulator for Age of Empires IV: a simplified 2D fight engine (melee/ranged, cooldowns, environments with obstacles or garrisoned structures) powered by real in-game data (aoe4world/data).",
          "Dark UI with a live battlefield, real-time resource charts, and a Monte Carlo mode to estimate win rate and trade ratio across thousands of simulations.",
          "I built the simulation engine, the Node/Express backend with WebSocket for live updates, and the Canvas UI."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.trendr, {
        "title": "Trendr",
        "shortDescription": "A swipe-style social polling app: trending questions segmented by age, gender, sector and interests.",
        "description": [
          "Trendr is a social app where users swipe to answer trending questions, with results segmented by age group, gender, sector and interests to explore how opinions differ across groups.",
          "Backend with multi-language localization, tag/interest/sector management and demographic categories; Flutter app with swipe cards, result sharing and push notifications.",
          "I built the architecture, Node/Express backend, Flutter app, deployment and infrastructure."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.queeup, {
        "title": "QueeUp",
        "shortDescription": "A SaaS for managing virtual queues: real-time queue creation, customer notifications and integrated billing.",
        "description": [
          "QueeUp lets businesses replace a physical line with a virtual queue: customers join remotely, get real-time updates on their position via WebSocket, and are notified when it's their turn.",
          "A queue management dashboard for the operator, authentication and Stripe billing for subscription plans.",
          "I built the architecture, Node/Express backend and Angular/PrimeNG frontend."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.sonar, {
        "title": "Sonar",
        "shortDescription": "A crypto arbitrage trading dashboard: multi-exchange monitoring, order management and real-time opportunities.",
        "description": [
          "Sonar is a trading system that monitors multiple crypto exchanges in real time to spot arbitrage opportunities, with a technical-indicators engine, order/queue management through Redis queues and cross-exchange order cancellation.",
          "Angular dashboard with views for balances, opportunities, history, symbols/pairs and strategy configuration; real-time communication via WebSocket with backend workers.",
          "I built the exchange monitoring engine, Redis-based order management, the backend workers and the Angular dashboard."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.signal, {
        "title": "Signal",
        "shortDescription": "A signal-generation and backtesting engine for algorithmic trading strategies (breakout, ranging, momentum).",
        "description": [
          "Signal is a Node.js engine for developing and backtesting quantitative trading strategies: it includes several strategies (breakout, ranging, random benchmark) and a backtesting module with result persistence.",
          "Data and state persisted on Supabase; built to validate trading ideas before moving them to production.",
          "I built the engine, the strategies and the backtesting module (backend only, no graphical interface)."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.leadsniper, {
        "title": "LeadSniper",
        "shortDescription": "A SaaS for finding leads on Reddit: keyword/subreddit screening, search history and integrated billing.",
        "description": [
          "LeadSniper is a lead generation tool that scans Reddit for posts and comments matching a set of keywords and subreddits chosen by the user, returning a list of potential leads.",
          "Per-user search (screening) history, Passport-based authentication and Stripe billing for subscription plans.",
          "I built the architecture, Node/Express backend and Angular/PrimeNG frontend."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.mosaicimagepicker, {
        "title": "Mosaic Image Picker",
        "shortDescription": "A Flutter package for picking photos/videos and arranging them into mosaic layouts, with built-in media optimization.",
        "description": [
          "Mosaic Image Picker is a reusable Flutter package for selecting multiple images/videos and arranging them into customizable mosaic layouts (drag & drop slots), with EXIF extraction and built-in media compression.",
          "Designed to be reused across several apps (including Rate) that need a media picker with advanced grid layouts.",
          "I built the package, the mosaic layouts, the compression pipeline and the example app."
        ]
      })
    ],

    "hobbies": [
      { "code": "Rt", "title": "Competitive RTS", "description": "Conqueror rank in Age of Empires IV, also active in Company of Heroes 3, StarCraft II, Age of Empires III and Hearts of Iron IV." },
      { "code": "Th", "title": "Improv & public speaking", "description": "Performed in an improv theatre showcase, plus several acting and public speaking courses." },
      { "code": "Ps", "title": "Psychology, philosophy & physics", "description": "A long-running curiosity, mostly self-taught through books and courses." },
      { "code": "In", "title": "Markets & investing", "description": "Personal crypto and equities portfolio since 2020, with some discretionary and automated trading on the side." }
    ],

    "highlights": [
      { "tag": "CHESS", "title": "Italian national title", "description": "FIDE ~1800, competing in Italy's Prima Nazionale — the country's top team league." },
      { "tag": "MUSIC", "title": "EDM track released", "description": "Produced and released a track through an EDM record label." },
      { "tag": "AUDIO", "title": "Wind Music Awards, Arena di Verona", "description": "Assisted front-of-house sound engineering; ran a professional recording studio for 3 years." },
      { "tag": "CONTENT", "title": "2K-subscriber YouTube channel", "description": "Built a crypto/finance channel from scratch to ~2,000 subscribers." }
    ],

    "testimonials": [
      { "quote": "Samuele owned the billing rebuild end to end and kept us in the loop the whole way. Reconciliation went from a weekly headache to a non-issue.", "author": "Marta Ricci", "role": "Head of Product, Nordwind Labs", "initials": "MR" },
      { "quote": "We needed an MVP fast to validate with real customers. He shipped it in weeks, not months, without cutting corners on the parts that mattered.", "author": "Davide Lombardi", "role": "Founder, Refida", "initials": "DL" },
      { "quote": "Clear communicator, writes things down, and pushes back when a scope doesn't make sense. Exactly what you want from a freelancer.", "author": "Giulia Conti", "role": "Operations Lead, Edooko", "initials": "GC" }
    ]
  }

};
