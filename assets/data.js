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
  { "slug": "supabase", "hex": "3FCF8E", "label": "Supabase" }
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

const BRANDS = ["Unipol", "Direq", "Rate", "Refida", "Edooko"];

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
    "screens": [],
    "link": "https://refida.eu/",
    "linkIsMock": false,
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
    "screens": [],
    "link": "https://myrate.me/",
    "linkIsMock": false,
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
    "screens": [],
    "link": "mocks/helperclock/index.html",
    "linkIsMock": true,
    "size": "normal"
  }
};

window.SITE_DATA = {

  it: {
    "ui": {
      "nav": { "services": "Servizi", "projects": "Progetti", "skills": "Competenze", "experience": "Esperienza", "formation": "Formazione", "hobbies": "Hobby", "contact": "Contatti" },
      "hero": { "ctaWork": "Guarda i lavori", "ctaContact": "Contattami" },
      "brandsLabel": "AZIENDE CON CUI HO LAVORATO",
      "projectsSection": { "eyebrow": "LAVORI SELEZIONATI", "heading": "Progetti", "lead": "Una parte di quello che ho realizzato. Apri una card per la scheda completa, stack e risorse.", "viewDetails": "Vedi dettagli →" },
      "bringSection": { "eyebrow": "COSA PORTO", "heading": "Cosa so gestire", "engineering": "Ingegneria", "product": "Prodotto & business", "waysOfWorking": "Modo di lavorare" },
      "experienceSection": { "eyebrow": "CARRIERA", "heading": "Esperienza" },
      "servicesSection": { "eyebrow": "COSA OFFRO", "heading": "Servizi" },
      "stackSection": { "eyebrow": "STRUMENTI DEL MESTIERE", "heading": "Stack", "primaryTag": "Principale" },
      "educationSection": { "eyebrow": "FORMAZIONE", "heading": "Formazione" },
      "hobbiesSection": { "eyebrow": "FUORI DAL LAVORO", "heading": "Hobby e traguardi" },
      "testimonialsSection": { "eyebrow": "PAROLE GENTILI", "heading": "Testimonianze" },
      "contactSection": { "heading": "Parliamone.", "lead": "Aperto a ruoli full-time e a progetti freelance interessanti.", "githubLabel": "GitHub", "cvLabel": "Scarica CV" },
      "footer": { "rights": "Tutti i diritti riservati.", "linkedin": "LinkedIn" },
      "modal": { "stackHeading": "Stack", "visitSite": "Visita il sito →", "openMock": "Apri demo (mock) →" }
    },

    "profile": Object.assign({}, PROFILE_SHARED, {
      "role": "Sviluppatore Full Stack",
      "tagline": "Prodotti full stack, dall'inizio alla fine."
    }),

    "brands": BRANDS,

    "experience": [
      { "role": "Sviluppatore Full-stack", "company": "DireQ Srl", "dateStart": "2024", "dateEnd": "Oggi", "description": "Progettazione e sviluppo di un sistema di trading in arbitraggio crypto basato su microservizi, con monitoraggio in tempo reale di più exchange per individuare ed eseguire opportunità di arbitraggio su diversi asset crypto." },
      { "role": "Sviluppatore front-end", "company": "undicizerouno", "dateStart": "gennaio 2024", "dateEnd": "agosto 2024", "description": "" },
      { "role": "Sviluppatore Flutter", "company": "Edooko | Building knowledge", "dateStart": "2023", "dateEnd": "2024", "description": "Ho lavorato su front-end, UI/UX e design per la web app e l'app Android." },
      { "role": "Tecnico di Deployment", "company": "Gruppo Unipol", "dateStart": "agosto 2023", "dateEnd": "dicembre 2023", "description": "Ho lavorato nell'ufficio Deployment, utilizzando la tecnologia WAS (IBM)." },
      { "role": "Tecnico IT", "company": "PcPratic", "dateStart": "aprile 2022", "dateEnd": "ottobre 2022", "description": "" }
    ],

    "education": [
      { "degree": "Laurea in Ingegneria Informatica", "school": "Alma Mater Studiorum – Università di Bologna", "dateStart": "2019", "dateEnd": "2024" },
      { "degree": "BTEC International Level 3 Extended Diploma, Produzione Musicale", "school": "Aloud", "dateStart": "2017", "dateEnd": "2019" },
      { "degree": "Diploma di Ragioneria", "school": "Luosi - Mirandola", "dateStart": "2012", "dateEnd": "2017" }
    ],

    "skills": {
      "engineering": "Flutter, Angular e Node.js, con solide basi PostgreSQL e un focus centrale sullo sviluppo front-end.",
      "product": "Background come UI/UX designer e graphic designer, con un occhio orientato al design nel lavoro di prodotto.",
      "waysOfWorking": "Piena autonomia dall'inizio alla fine, dal design allo sviluppo, attualmente al lavoro su un sistema di arbitraggio crypto a microservizi."
    },

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
          "Ho seguito il progetto end to end: architettura, backend API, frontend, deploy e infrastruttura."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.rate, {
        "title": "Rate",
        "shortDescription": "App social per condividere contenuti e ricevere feedback: feed con storie e reel, messaggistica diretta e domande alla community.",
        "description": [
          "Rate è un'app social pensata attorno al concetto di rating dei contenuti: gli utenti pubblicano foto/video, li condividono in un feed con storie e reel, e ricevono reazioni e feedback dalla community. Include anche una sezione \"asks\" per domande/prompt, ricerca utenti/contenuti e messaggistica diretta (inbox).",
          "Login con Google e Apple, notifiche push, upload ed elaborazione media (immagini e video, con conversione/compressione lato server).",
          "Ho seguito il progetto end to end: architettura, backend API, app Flutter, deploy e infrastruttura."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.helperclock, {
        "title": "HelperClock",
        "shortDescription": "App Flutter per timbrare entrata/uscita dal lavoro, con riepilogo ore giornaliere/settimanali e promemoria via notifiche locali.",
        "description": [
          "HelperClock è un semplice tool personale per tracciare le ore di lavoro: timbratura di entrata/uscita, calcolo automatico delle ore lavorate nella giornata e riepilogo settimanale. Tutto funziona offline, senza account né server: i dati restano sul dispositivo.",
          "Include notifiche locali per ricordare di timbrare l'uscita, così da non perdere traccia delle ore.",
          "Progetto interamente client-side: niente hosting da mantenere, per questo il link qui sotto apre un mock cliccabile invece di un sito live."
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
      "nav": { "services": "Services", "projects": "Projects", "skills": "Skills", "experience": "Experience", "formation": "Formation", "hobbies": "Hobbies", "contact": "Contact" },
      "hero": { "ctaWork": "See the work", "ctaContact": "Get in touch" },
      "brandsLabel": "BRANDS I'VE WORKED WITH",
      "projectsSection": { "eyebrow": "SELECTED WORK", "heading": "Projects", "lead": "A slice of what I've shipped. Tap any card for the full write-up, stack, and resources.", "viewDetails": "View details →" },
      "bringSection": { "eyebrow": "WHAT I BRING", "heading": "What I can own", "engineering": "Engineering", "product": "Product & business", "waysOfWorking": "Ways of working" },
      "experienceSection": { "eyebrow": "CAREER", "heading": "Experience" },
      "servicesSection": { "eyebrow": "WHAT I OFFER", "heading": "Services" },
      "stackSection": { "eyebrow": "TOOLS OF THE TRADE", "heading": "Stack", "primaryTag": "Primary" },
      "educationSection": { "eyebrow": "FORMATION", "heading": "Education" },
      "hobbiesSection": { "eyebrow": "OUTSIDE OF WORK", "heading": "Hobbies & achievements" },
      "testimonialsSection": { "eyebrow": "KIND WORDS", "heading": "Testimonials" },
      "contactSection": { "heading": "Let's talk.", "lead": "Open to full-time roles and interesting freelance work.", "githubLabel": "GitHub", "cvLabel": "Download CV" },
      "footer": { "rights": "All rights reserved.", "linkedin": "LinkedIn" },
      "modal": { "stackHeading": "Stack", "visitSite": "Visit the site →", "openMock": "Open demo (mock) →" }
    },

    "profile": Object.assign({}, PROFILE_SHARED, {
      "role": "Full Stack Developer",
      "tagline": "Full stack products, end to end."
    }),

    "brands": BRANDS,

    "experience": [
      { "role": "Full-stack Developer", "company": "DireQ Srl", "dateStart": "2024", "dateEnd": "Now", "description": "Designing and developing a microservices-based crypto arbitrage trading system, monitoring multiple exchanges in real-time to identify and execute arbitrage opportunities across a variety of crypto assets." },
      { "role": "Front-end Developer", "company": "undicizerouno", "dateStart": "January 2024", "dateEnd": "August 2024", "description": "" },
      { "role": "Flutter Developer", "company": "Edooko | Building knowledge", "dateStart": "2023", "dateEnd": "2024", "description": "Worked on Front End, UI/UX and design for the Web App and Android app." },
      { "role": "Deployment Technician", "company": "Gruppo Unipol", "dateStart": "August 2023", "dateEnd": "December 2023", "description": "Worked in the Deployment office, using WAS technology (IBM)." },
      { "role": "IT Technician", "company": "PcPratic", "dateStart": "April 2022", "dateEnd": "October 2022", "description": "" }
    ],

    "education": [
      { "degree": "Bachelor of Engineering, Computer Science", "school": "Alma Mater Studiorum – Università di Bologna", "dateStart": "2019", "dateEnd": "2024" },
      { "degree": "BTEC International Level 3 Extended Diploma, Music Production", "school": "Aloud", "dateStart": "2017", "dateEnd": "2019" },
      { "degree": "Higher National Diploma, Accounting", "school": "Luosi - Mirandola", "dateStart": "2012", "dateEnd": "2017" }
    ],

    "skills": {
      "engineering": "Flutter, Angular and Node.js, with solid PostgreSQL foundations and front-end development at the core.",
      "product": "Background as a UI/UX designer and graphic designer, bringing a design-first eye to product work.",
      "waysOfWorking": "Full ownership end to end, from design to development, currently building a microservices-based crypto arbitrage system."
    },

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
          "I worked on the project end to end: architecture, backend API, frontend, deployment and infrastructure."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.rate, {
        "title": "Rate",
        "shortDescription": "A social app for sharing content and getting feedback: feed with stories and reels, direct messaging and community questions.",
        "description": [
          "Rate is a social app built around content rating: users post photos/videos, share them in a feed with stories and reels, and get reactions and feedback from the community. It also includes an \"asks\" section for questions/prompts, search, and direct messaging (inbox).",
          "Google and Apple sign-in, push notifications, media upload and processing (images and video, with server-side conversion/compression).",
          "I worked on the project end to end: architecture, backend API, the Flutter app, deployment and infrastructure."
        ]
      }),
      Object.assign({}, PROJECT_SHARED.helperclock, {
        "title": "HelperClock",
        "shortDescription": "A Flutter app to clock in/out of work, with daily/weekly hour summaries and local-notification reminders.",
        "description": [
          "HelperClock is a simple personal tool for tracking work hours: clock in/out, automatic calculation of hours worked per day, and a weekly summary. Everything runs offline, no account or server needed — data stays on the device.",
          "Includes local notifications to remind you to clock out, so you never lose track of your hours.",
          "A fully client-side project: no hosting to maintain, which is why the link below opens a clickable mock instead of a live site."
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
