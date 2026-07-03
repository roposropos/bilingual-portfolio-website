export const locales = ["pl", "en"] as const;

export type Locale = (typeof locales)[number];

export type ProjectCategory =
  | "all"
  | "web"
  | "desktop"
  | "systems"
  | "database"
  | "testing";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const baseLinks = {
  email: "mailto:rtworek24@gmail.com",
  github: "https://github.com/roposropos",
  linkedin: "https://linkedin.com/in/tworekrobert"
};

export const content = {
  pl: {
    meta: {
      title: "Robert Tworek - Portfolio",
      description:
        "Portfolio Roberta Tworka: projekty akademickie i techniczne z aplikacji webowych, systemów desktopowych, baz danych, sieci oraz dokumentacji."
    },
    links: {
      ...baseLinks,
      cv: "/Robert-Tworek-CV-PL.pdf"
    },
    nav: [
      { href: "#projects", label: "Projekty" },
      { href: "#stack", label: "Technologie" },
      { href: "#education", label: "Edukacja" },
      { href: "#contact", label: "Kontakt" }
    ],
    hero: {
      eyebrow: "Informatyka Techniczna / Politechnika Wrocławska",
      title: "Robert Tworek",
      body:
        "Studiuję Informatykę Techniczną na Politechnice Wrocławskiej, na specjalności Systemy informatyczne w medycynie. Mam tytuł technika informatyka, a moje dotychczasowe projekty obejmują aplikacje desktopowe i webowe, relacyjne bazy danych, komunikację TCP, testy oraz dokumentację techniczną. Szukam możliwości pracy przy praktycznych zadaniach IT, które pozwolą mi rozwijać warsztat techniczny i lepiej poznać realne systemy.",
      primaryCta: "Zobacz projekty",
      secondaryCta: "Pobierz CV",
      tertiaryCta: "GitHub",
      linkedinCta: "LinkedIn"
    },
    recruiterStrip: {
      title: "Profil w skrócie",
      items: [
        {
          value: "PWr",
          label: "Informatyka Techniczna",
          detail: "specjalność: systemy informatyczne w medycynie"
        },
        {
          value: "5",
          label: "opisanych projektów",
          detail: "case studies oraz projekty z GitHuba",
          dynamicMetric: "githubPublicRepos",
          dynamicLabel: "kompletnych projektów",
          dynamicDetail: "dostępnych na GitHubie"
        },
        {
          value: "PL / EN",
          label: "języki",
          detail: "polski ojczysty, angielski wyższy średniozaawansowany"
        }
      ]
    },
    heroPanel: {
      title: "Obszary, w których pracowałem",
      items: [
        {
          label: "Aplikacje webowe i desktopowe",
          value: "C#/.NET, Avalonia, Django",
          detail: "widoki, formularze, przepływ pracy i walidacja danych"
        },
        {
          label: "Bazy danych",
          value: "PostgreSQL, SQL, SQLite",
          detail: "model relacyjny, uprawnienia, integralność i widoki raportowe"
        },
        {
          label: "Systemy i komunikacja",
          value: "Java, TCP sockets, procesy",
          detail: "komunikacja między procesami, zasoby i obserwacja stanu systemu"
        }
      ]
    },
    sections: {
      projects: {
        kicker: "Projekty",
        title: "Wyróżnione projekty",
        intro:
          "To projekty, które najlepiej pokazują mój sposób pracy: system desktopowy z relacyjną bazą danych, wieloprocesową symulację komunikującą się przez TCP oraz aplikację webową do nauki słownictwa. Wspólnym elementem jest praktyczne podejście do modelu danych, przepływu aplikacji, testowania i dokumentowania rozwiązań.",
        githubTitle: "Wszystkie projekty dostępne na GitHubie",
        githubIntro:
          "Indeks publicznych repozytoriów powiązanych z portfolio. Każda karta prowadzi bezpośrednio do GitHuba i pokazuje krótki opis, główną technologię oraz ostatnią aktywność projektu.",
        githubEmptyTitle: "Brak publicznych projektów do wyświetlenia",
        githubEmptyText:
          "Gdy na profilu pojawi się publiczne repozytorium projektowe, zostanie pokazane w tej sekcji.",
        githubNoDescription: "Repozytorium nie ma jeszcze krótkiego opisu na GitHubie.",
        githubUpdatedLabel: "Aktualizacja",
        githubLanguageFallback: "Projekt"
      },
      stack: {
        kicker: "Technologie",
        title: "Technologie i narzędzia",
        intro:
          "To technologie i narzędzia, z których korzystałem w projektach, zadaniach akademickich oraz pracy nad własnym portfolio. Najwięcej praktyki mam w obszarze aplikacji, baz danych, podstaw systemów, sieci i dokumentacji."
      },
      education: {
        kicker: "Edukacja",
        title: "Wykształcenie i specjalizacja",
        intro:
          "Moja ścieżka edukacyjna łączy przygotowanie techniczne z pracą nad oprogramowaniem, bazami danych i systemami informatycznymi. Specjalność związana z medycyną dodatkowo wzmacnia nacisk na poprawność danych, procesów i dokumentacji."
      },
      contact: {
        kicker: "Kontakt",
        title: "Kontakt i materiały",
        intro:
          "Jestem otwarty na rozmowę o możliwościach współpracy przy projektach i praktycznych zadaniach IT, w których mógłbym rozwijać umiejętności oraz lepiej poznawać pracę z realnymi systemami."
      }
    },
    filters: [
      { id: "all" as ProjectCategory, label: "Wszystkie" },
      { id: "web" as ProjectCategory, label: "Web" },
      { id: "desktop" as ProjectCategory, label: "Desktop" },
      { id: "systems" as ProjectCategory, label: "Systemy" },
      { id: "database" as ProjectCategory, label: "Bazy danych" },
      { id: "testing" as ProjectCategory, label: "Testy" }
    ],
    projects: [
      {
        id: "pharmacy",
        title: "Pharmacy management system",
        shortTitle: "Pharmacy management system",
        label: "C# desktop + PostgreSQL",
        repo: "https://github.com/roposropos/pharmacy-management-system",
        demo: null as string | null,
        categories: ["desktop", "database", "testing"] as ProjectCategory[],
        facts: [
          { label: "rola", value: "aplikacja, baza danych, relacje" },
          { label: "typ", value: "projekt zespołowy" },
          { label: "status", value: "publiczne repo" },
          { label: "zakres", value: "sprzedaż, magazyn, recepty, audyt" }
        ],
        stack: ["C#", ".NET", "Avalonia UI", "PostgreSQL", "ODBC", "SQL", "MVVM", "CSV"],
        summary:
          "Rozbudowany projekt zespołowy lokalnego systemu desktopowego dla apteki. Aplikacja obejmuje kartoteki klientów i leków, sprzedaż, recepty i receptury, magazyn partii, dostawy, zamówienia, raporty, audyt operacji, backup/restore oraz role kierownika i farmaceuty.",
        challenge:
          "Największym wyzwaniem było połączenie wielu obszarów domenowych w jeden spójny przepływ pracy: od kartotek i magazynu, przez sprzedaż i recepty, po raportowanie oraz kontrolę zmian. Projekt wymagał pilnowania integralności danych, stanów magazynowych, ról aplikacyjnych i bazodanowych, bezpieczeństwa PESEL oraz poprawnej współpracy Avalonia UI z lokalnym PostgreSQL przez ODBC.",
        contribution:
          "Współtworzyłem elementy warstwy aplikacji oraz bazy danych: modele, widoki, walidację formularzy, przepływy pracy użytkownika, relacje między encjami, ograniczenia integralności i część dokumentacji technicznej. Pracowałem nad tym, aby operacje wykonywane w interfejsie były spójne z logiką domenową, strukturą PostgreSQL i regułami zapisanymi w bazie, a finalna paczka była możliwa do uruchomienia lokalnie z przygotowanym seedem demonstracyjnym i opisem procesu instalacji.",
        proof: [
          "moduły dla klientów, leków, dostawców, magazynu, sprzedaży, recept, receptur, zamówień, raportów i użytkowników",
          "PostgreSQL z migracjami, seedem demonstracyjnym, rolami bazodanowymi, ograniczeniami integralności i smoke testem SQL",
          "ochrona danych wrażliwych: szyfrowanie PESEL jako enc:v1, hash do unikalności oraz maskowanie danych w interfejsie",
          "magazyn partii leków i surowców, terminy ważności, korekty stanów, alerty niskich stanów oraz zużycie przy sprzedaży i recepturach",
          "audyt operacji, eksport raportów do CSV, ręczny backup/restore z potwierdzeniem oraz rozdzielenie ról kierownika i farmaceuty",
          "self-contained paczki dla macOS Apple Silicon i Windows x64 z launcherami oraz skryptami przygotowania bazy"
        ],
        metrics: [
          { label: "moduły", value: "10+" },
          { label: "model danych", value: "relacje + role" },
          { label: "dystrybucja", value: "macOS/Windows" }
        ]
      },
      {
        id: "restaurant",
        title: "Restaurant process simulation",
        shortTitle: "Restaurant process simulation",
        label: "Java + TCP sockets",
        repo: "https://github.com/roposropos/restaurant-process-simulation",
        demo: null as string | null,
        categories: ["systems", "desktop", "testing"] as ProjectCategory[],
        facts: [
          { label: "rola", value: "komunikacja, zasoby, GUI" },
          { label: "typ", value: "projekt akademicki" },
          { label: "status", value: "publiczne repo" },
          { label: "zakres", value: "procesy + TCP" }
        ],
        stack: ["Java 17", "Swing", "TCP sockets", "Bash", "process management"],
        summary:
          "Projekt akademicki symulujący restaurację jako zestaw niezależnych procesów systemu operacyjnego. Centralny serwer zarządza stanem restauracji, procesy klientów konkurują o stoliki, kelnerów, posiłki i przybory, osobny restocker odnawia zasoby, a panel Swing prezentuje stan symulacji na żywo.",
        challenge:
          "Największym wyzwaniem było utrzymanie spójnego stanu systemu przy wielu procesach działających równolegle. Projekt wymagał zaprojektowania prostego protokołu tekstowego TCP, synchronizacji dostępu do współdzielonych zasobów, obsługi kolejek oczekiwania oraz trybów symulacji, które realnie zmieniają liczbę klientów, tempo uzupełniania zasobów i poziom obciążenia restauracji.",
        contribution:
          "Pracowałem nad logiką komunikacji TCP, przebiegiem cyklu klienta, koordynacją zasobów, konfiguracją scenariuszy oraz prezentacją stanu symulacji w GUI. Projekt dał mi praktykę w modelowaniu procesu biznesowego jako systemu współbieżnego, w którym czytelny podział odpowiedzialności między serwerem, klientami, restockerem i panelem obserwacyjnym ma bezpośredni wpływ na przewidywalność działania aplikacji.",
        proof: [
          "launcher uruchamia serwer, GUI, restockera i wiele niezależnych procesów klientów",
          "centralny serwer przyjmuje połączenia TCP i zarządza współdzielonym stanem restauracji",
          "tekstowy protokół obsługuje zdarzenia ARRIVE, REQUEST_TABLE, REQUEST_WAITER, RESTOCK, WASH i migawki SNAPSHOT",
          "model zasobów obejmuje stoliki, kelnerów, składniki, gotowe porcje potraw, sztućce i łyżki",
          "tryby NORMAL, RUSH_HOUR, LIMITED_RESOURCES, NO_RESTOCK i SHORT_DEMO zmieniają realne parametry symulacji",
          "panel Swing pokazuje liczniki zasobów, zajętość stolików, stany klientów i średni czas oczekiwania"
        ],
        metrics: [
          { label: "komunikacja", value: "TCP" },
          { label: "tryby", value: "5" },
          { label: "model", value: "procesy OS" }
        ]
      },
      {
        id: "vocabulary",
        title: "Vocabulary learning app",
        shortTitle: "Vocabulary learning app",
        label: "Django + REST API",
        repo: "https://github.com/roposropos/vocabulary-learning-app",
        demo: null as string | null,
        categories: ["web", "database", "testing"] as ProjectCategory[],
        facts: [
          { label: "rola", value: "frontend, widoki, interakcje" },
          { label: "typ", value: "projekt zespołowy" },
          { label: "status", value: "publiczne repo" },
          { label: "zakres", value: "web + REST API" }
        ],
        stack: ["Python", "Django", "Django REST Framework", "SQLite", "HTML", "CSS", "JavaScript"],
        summary:
          "Rozbudowany projekt zespołowy aplikacji webowej do nauki słownictwa. System obejmuje konta użytkowników, publiczne i prywatne zestawy słów, import danych z plików, fiszki, ćwiczenie odpowiedzi wpisywanych z klawiatury, automatycznie generowane quizy oraz statystyki postępów w nauce.",
        challenge:
          "Największym wyzwaniem było połączenie prostego interfejsu użytkownika z backendem Django i endpointami REST API. Projekt wymagał zachowania spójności między modelem danych, autoryzacją tokenową, widocznością prywatnych zestawów, przepływem nauki oraz zapisem postępów użytkownika wykorzystywanym przez fiszki, powtórki, quizy i statystyki.",
        contribution:
          "Pracowałem głównie nad warstwą frontendową aplikacji, obejmującą strukturę szablonów Django, układ dashboardu, responsywne stylowanie, interakcje w JavaScripcie oraz podłączenie przepływów użytkownika do endpointów REST API. Dzięki temu projekt pokazał nie tylko sam backend i modele danych, ale też praktyczne przełożenie API na czytelne widoki do tworzenia zestawów, nauki, rozwiązywania quizów i obserwowania postępów.",
        proof: [
          "rejestracja i logowanie oparte na użytkownikach Django oraz DRF Token Authentication",
          "publiczne i prywatne zestawy słów z kontrolą właściciela oraz operacjami CRUD",
          "import par słów z CSV i JSON oraz ręczne dodawanie, edycja i usuwanie słówek",
          "tryby nauki obejmują fiszki, odpowiedzi wpisywane z klawiatury, trudne słowa, powtórki i quizy wielokrotnego wyboru",
          "modele przechowują zestawy, słowa, quizy, pytania, postęp pojedynczych słów i wyniki quizów",
          "testy Django obejmują stronę główną, autoryzację, tworzenie zestawów, import, fiszki i przebieg quizu"
        ],
        metrics: [
          { label: "zespół", value: "5 osób" },
          { label: "API", value: "REST" },
          { label: "testy", value: "11" }
        ]
      }
    ],
    skillGroups: [
      {
        title: "Aplikacje webowe i desktopowe",
        items: ["React", "TypeScript", "ASP.NET", "Django", "Avalonia UI", "HTML", "CSS"],
        note: "widoki, formularze, routing, interakcje użytkownika i obsługa danych z backendu"
      },
      {
        title: "Backend i bazy danych",
        items: ["C#/.NET", "Python", "PostgreSQL", "MySQL", "SQL", "SQLite"],
        note: "modelowanie danych, repozytoria, walidacja, raportowanie, API i persystencja danych"
      },
      {
        title: "Systemy, sieci i diagnostyka",
        items: ["Windows", "Linux", "TCP/IP", "DNS", "DHCP", "VLAN", "analiza logów"],
        note: "podstawy administracji środowiskami, komunikacja sieciowa, analiza logów i diagnozowanie problemów"
      },
      {
        title: "Narzędzia inżynierskie",
        items: ["Git", "GitHub", "Docker", "Java", "C++17", "VHDL", "Excel"],
        note: "kontrola wersji, uruchamianie środowisk, eksperymenty techniczne, dokumentacja i organizacja pracy"
      }
    ],
    timeline: [
      {
        period: "2022 - obecnie",
        title: "Politechnika Wrocławska",
        subtitle: "Informatyka Techniczna - studia inżynierskie",
        body:
          "Studia inżynierskie na Wydziale Informatyki i Telekomunikacji, specjalność IMT - Systemy informatyczne w medycynie. Program obejmuje programowanie, bazy danych, systemy informatyczne oraz zastosowanie technologii w obszarach, w których ważna jest poprawność przetwarzania informacji."
      },
      {
        period: "2018 - 2022",
        title: "Zespół Szkół Elektronicznych w Bolesławcu",
        subtitle: "Technik informatyk",
        body:
          "Technikum informatyczne zakończone uzyskaniem tytułu technika informatyka. Zakres nauki obejmował eksploatację systemów komputerowych, urządzenia peryferyjne, sieci, tworzenie stron internetowych i bazy danych. Praktyki zawodowe odbyłem w Szpitalu św. Łukasza w Bolesławcu."
      }
    ],
    strengths: [
      "szybko porządkuję nowe narzędzia, wymagania i dokumentację",
      "dbam o czytelność rozwiązań i sensowne uzasadnienie decyzji technicznych",
      "dobrze odnajduję się w zadaniach opartych na danych, procesach i strukturze aplikacji",
      "potrafię pracować samodzielnie, ale dobrze funkcjonuję też w projekcie zespołowym"
    ],
    contact: {
      emailLabel: "rtworek24@gmail.com",
      composeTitle: "Wiadomość email",
      subjectLabel: "Temat",
      subjectPlaceholder: "Temat wiadomości...",
      messageLabel: "Wiadomość",
      messagePlaceholder: "Napisz krótką wiadomość...",
      sendEmailLabel: "Wyślij email",
      copyEmailLabel: "Kopiuj email",
      emailCopiedLabel: "Skopiowano",
      githubActionLabel: "GitHub",
      githubLabel: "github.com/roposropos",
      linkedinActionLabel: "LinkedIn",
      linkedinLabel: "linkedin.com/in/tworekrobert",
      cvLabel: "Pobierz CV PDF",
      cvDescription: "wersja polska",
      location: "Nowogrodziec / Wrocław"
    }
  },
  en: {
    meta: {
      title: "Robert Tworek - Portfolio",
      description:
        "Robert Tworek's portfolio: academic and technical projects covering web applications, desktop systems, databases, networking and documentation."
    },
    links: {
      ...baseLinks,
      cv: "/Robert-Tworek-CV-EN.pdf"
    },
    nav: [
      { href: "#projects", label: "Projects" },
      { href: "#stack", label: "Stack" },
      { href: "#education", label: "Education" },
      { href: "#contact", label: "Contact" }
    ],
    hero: {
      eyebrow: "Technical Computer Science / Wrocław University of Science and Technology",
      title: "Robert Tworek",
      body:
        "I study Technical Computer Science at Wrocław University of Science and Technology, specializing in medical information systems. I also hold an IT technician qualification. My projects so far cover desktop and web applications, relational databases, TCP communication, testing and technical documentation. I am open to practical IT tasks that let me build technical confidence and learn how real systems are maintained.",
      primaryCta: "View projects",
      secondaryCta: "Download CV",
      tertiaryCta: "GitHub",
      linkedinCta: "LinkedIn"
    },
    recruiterStrip: {
      title: "Profile summary",
      items: [
        {
          value: "PWr",
          label: "Technical Computer Science",
          detail: "specialization: medical information systems"
        },
        {
          value: "5",
          label: "described projects",
          detail: "case studies and GitHub projects",
          dynamicMetric: "githubPublicRepos",
          dynamicLabel: "complete projects",
          dynamicDetail: "available on GitHub"
        },
        {
          value: "PL / EN",
          label: "languages",
          detail: "Polish native, English upper-intermediate"
        }
      ]
    },
    heroPanel: {
      title: "Areas I have worked with",
      items: [
        {
          label: "Web and desktop applications",
          value: "C#/.NET, Avalonia, Django",
          detail: "views, forms, workflows and data validation"
        },
        {
          label: "Databases",
          value: "PostgreSQL, SQL, SQLite",
          detail: "relational models, permissions, integrity and reporting views"
        },
        {
          label: "Systems and communication",
          value: "Java, TCP sockets, processes",
          detail: "inter-process communication, resources and runtime state observation"
        }
      ]
    },
    sections: {
      projects: {
        kicker: "Projects",
        title: "Featured projects",
        intro:
          "These projects best show how I approach technical work: a desktop system with a relational database, a multi-process simulation communicating over TCP, and a vocabulary learning web application. Across them, I focused on data models, application flow, testing and clear technical documentation.",
        githubTitle: "All projects available on GitHub",
        githubIntro:
          "An index of public repositories connected with the portfolio. Each card links directly to GitHub and shows a short description, primary technology and recent project activity.",
        githubEmptyTitle: "No public projects to display",
        githubEmptyText:
          "When a public project repository appears on the profile, it will be shown in this section.",
        githubNoDescription: "This repository does not have a short GitHub description yet.",
        githubUpdatedLabel: "Updated",
        githubLanguageFallback: "Project"
      },
      stack: {
        kicker: "Technologies",
        title: "Technologies and tools",
        intro:
          "These are the technologies and tools I have used in projects, academic assignments and my own portfolio work. My strongest practical exposure is around applications, databases, systems basics, networking and documentation."
      },
      education: {
        kicker: "Education",
        title: "Education and specialization",
        intro:
          "My education combines technical IT foundations with work on software, databases and information systems. The medical information systems specialization adds a strong focus on data correctness, processes and documentation."
      },
      contact: {
        kicker: "Contact",
        title: "Contact and materials",
        intro:
          "I am open to conversations about project work and practical IT tasks where I can develop technical skills through concrete responsibilities and learn from real systems."
      }
    },
    filters: [
      { id: "all" as ProjectCategory, label: "All" },
      { id: "web" as ProjectCategory, label: "Web" },
      { id: "desktop" as ProjectCategory, label: "Desktop" },
      { id: "systems" as ProjectCategory, label: "Systems" },
      { id: "database" as ProjectCategory, label: "Databases" },
      { id: "testing" as ProjectCategory, label: "Testing" }
    ],
    projects: [
      {
        id: "pharmacy",
        title: "Pharmacy management system",
        shortTitle: "Pharmacy management system",
        label: "C# desktop + PostgreSQL",
        repo: "https://github.com/roposropos/pharmacy-management-system",
        demo: null as string | null,
        categories: ["desktop", "database", "testing"] as ProjectCategory[],
        facts: [
          { label: "role", value: "application, database, relations" },
          { label: "type", value: "team project" },
          { label: "status", value: "public repository" },
          { label: "scope", value: "sales, inventory, prescriptions, audit" }
        ],
        stack: ["C#", ".NET", "Avalonia UI", "PostgreSQL", "ODBC", "SQL", "MVVM", "CSV"],
        summary:
          "An extensive team project for a local desktop pharmacy management system. The application covers customers and medicines, sales, prescriptions and compounded medicines, batch-based inventory, deliveries, orders, reports, operation audit, backup/restore and manager/pharmacist roles.",
        challenge:
          "The main challenge was connecting many domain areas into one coherent workflow: records and inventory, sales and prescriptions, reporting and change control. The project required attention to data integrity, stock state, application and database roles, PESEL protection and reliable cooperation between Avalonia UI and a local PostgreSQL database through ODBC.",
        contribution:
          "I co-created parts of both the application layer and the database: models, views, form validation, user workflows, relations between entities, integrity constraints and parts of the technical documentation. I worked on keeping interface actions consistent with domain logic, the PostgreSQL structure and rules enforced in the database, while the final package remained possible to run locally with demo seed data and clear installation notes.",
        proof: [
          "modules for customers, medicines, suppliers, inventory, sales, prescriptions, compounded medicines, orders, reports and users",
          "PostgreSQL with migrations, demo seed data, database roles, integrity constraints and an SQL smoke test",
          "sensitive data protection: PESEL encrypted as enc:v1, uniqueness hash and UI masking",
          "medicine and ingredient batches, expiry dates, stock corrections, low-stock alerts and consumption through sales and compounded medicines",
          "operation audit, CSV report export, manual backup/restore with confirmation and separated manager/pharmacist responsibilities",
          "self-contained packages for macOS Apple Silicon and Windows x64 with launchers and database setup scripts"
        ],
        metrics: [
          { label: "modules", value: "10+" },
          { label: "data model", value: "relations + roles" },
          { label: "delivery", value: "macOS/Windows" }
        ]
      },
      {
        id: "restaurant",
        title: "Restaurant process simulation",
        shortTitle: "Restaurant process simulation",
        label: "Java + TCP sockets",
        repo: "https://github.com/roposropos/restaurant-process-simulation",
        demo: null as string | null,
        categories: ["systems", "desktop", "testing"] as ProjectCategory[],
        facts: [
          { label: "role", value: "communication, resources, GUI" },
          { label: "type", value: "academic project" },
          { label: "status", value: "public repository" },
          { label: "scope", value: "processes + TCP" }
        ],
        stack: ["Java 17", "Swing", "TCP sockets", "Bash", "process management"],
        summary:
          "An extensive academic project that models a restaurant as a set of independent operating-system processes. A central server owns the shared restaurant state, client processes compete for tables, waiters, meals and utensils, a separate restocker renews resources, and a Swing panel visualizes the simulation state live.",
        challenge:
          "The main challenge was keeping the system state consistent while many processes were running in parallel. The project required a simple text-based TCP protocol, synchronized access to shared resources, waiting queues and simulation modes that change real parameters such as client count, restocking pace and restaurant load.",
        contribution:
          "I worked on TCP communication logic, the client lifecycle, resource coordination, scenario configuration and GUI presentation of the simulation state. The project gave me practical experience in modeling a business process as a concurrent system where a clear split of responsibilities between the server, clients, restocker and observation panel directly affects predictable application behavior.",
        proof: [
          "launcher starts the server, GUI, restocker and many independent client processes",
          "central server accepts TCP connections and owns the shared restaurant state",
          "text protocol handles ARRIVE, REQUEST_TABLE, REQUEST_WAITER, RESTOCK, WASH and SNAPSHOT events",
          "resource model covers tables, waiters, ingredients, ready meals, cutlery and spoons",
          "NORMAL, RUSH_HOUR, LIMITED_RESOURCES, NO_RESTOCK and SHORT_DEMO modes change real simulation parameters",
          "Swing panel shows resource counters, table occupancy, client states and average waiting time"
        ],
        metrics: [
          { label: "communication", value: "TCP" },
          { label: "modes", value: "5" },
          { label: "model", value: "OS processes" }
        ]
      },
      {
        id: "vocabulary",
        title: "Vocabulary learning app",
        shortTitle: "Vocabulary learning app",
        label: "Django + REST API",
        repo: "https://github.com/roposropos/vocabulary-learning-app",
        demo: null as string | null,
        categories: ["web", "database", "testing"] as ProjectCategory[],
        facts: [
          { label: "role", value: "frontend, views, interactions" },
          { label: "type", value: "team project" },
          { label: "status", value: "public repository" },
          { label: "scope", value: "web + REST API" }
        ],
        stack: ["Python", "Django", "Django REST Framework", "SQLite", "HTML", "CSS", "JavaScript"],
        summary:
          "An extensive team project for a web application focused on vocabulary learning. The system covers user accounts, public and private word sets, file imports, flashcards, typed-answer practice, automatically generated quizzes and learning-progress statistics.",
        challenge:
          "The main challenge was connecting a simple user interface with the Django backend and REST API endpoints. The project required consistency between the data model, token authentication, private-set visibility, the learning flow and user progress reused by flashcards, review queues, quizzes and statistics.",
        contribution:
          "I worked mainly on the frontend layer of the application, covering the Django template structure, dashboard layout, responsive styling, JavaScript interactions and connecting user flows to REST API endpoints. This made the project show not only backend models and API behavior, but also the practical translation of API data into clear views for creating sets, learning, solving quizzes and tracking progress.",
        proof: [
          "registration and login built with Django users and DRF Token Authentication",
          "public and private word sets with ownership checks and CRUD operations",
          "CSV and JSON imports plus manual adding, editing and deleting of word pairs",
          "learning modes cover flashcards, typed answers, difficult words, review flow and multiple-choice quizzes",
          "models store word sets, words, quizzes, questions, per-word progress and quiz results",
          "Django tests cover the homepage, authentication, set creation, imports, flashcards and quiz flow"
        ],
        metrics: [
          { label: "team", value: "5 people" },
          { label: "API", value: "REST" },
          { label: "tests", value: "11" }
        ]
      }
    ],
    skillGroups: [
      {
        title: "Web and desktop applications",
        items: ["React", "TypeScript", "ASP.NET", "Django", "Avalonia UI", "HTML", "CSS"],
        note: "views, forms, routing, user interactions and backend data handling"
      },
      {
        title: "Backend and databases",
        items: ["C#/.NET", "Python", "PostgreSQL", "MySQL", "SQL", "SQLite"],
        note: "data modeling, repositories, validation, reporting, APIs and data persistence"
      },
      {
        title: "Systems, networks and diagnostics",
        items: ["Windows", "Linux", "TCP/IP", "DNS", "DHCP", "VLAN", "log analysis"],
        note: "basic environment administration, network communication, log analysis and troubleshooting"
      },
      {
        title: "Engineering tools",
        items: ["Git", "GitHub", "Docker", "Java", "C++17", "VHDL", "Excel"],
        note: "version control, environment setup, technical experiments, documentation and work organization"
      }
    ],
    timeline: [
      {
        period: "2022 - present",
        title: "Wrocław University of Science and Technology",
        subtitle: "Technical Computer Science - engineering studies",
        body:
          "Engineering studies at the Faculty of Information and Communication Technology, specialization: IMT - Medical Information Systems. The program covers programming, databases, information systems and technology applications in areas where correct information processing is important."
      },
      {
        period: "2018 - 2022",
        title: "Electronic Schools Complex in Bolesławiec",
        subtitle: "IT technician",
        body:
          "Technical secondary education completed with the IT technician title. The program covered computer systems, peripheral devices, networks, website creation and databases. I completed my vocational work placement at St. Luke's Hospital in Bolesławiec."
      }
    ],
    strengths: [
      "I quickly organize new tools, requirements and documentation",
      "I care about readable solutions and sensible technical reasoning",
      "I work well with tasks based on data, processes and application structure",
      "I can work independently while also contributing responsibly to team projects"
    ],
    contact: {
      emailLabel: "rtworek24@gmail.com",
      composeTitle: "Email message",
      subjectLabel: "Subject",
      subjectPlaceholder: "Message subject...",
      messageLabel: "Message",
      messagePlaceholder: "Write a short message...",
      sendEmailLabel: "Send email",
      copyEmailLabel: "Copy email",
      emailCopiedLabel: "Copied",
      githubActionLabel: "GitHub",
      githubLabel: "github.com/roposropos",
      linkedinActionLabel: "LinkedIn",
      linkedinLabel: "linkedin.com/in/tworekrobert",
      cvLabel: "Download CV PDF",
      cvDescription: "English version",
      location: "Nowogrodziec / Wrocław"
    }
  }
} as const;

export type PortfolioContent = (typeof content)[Locale];
