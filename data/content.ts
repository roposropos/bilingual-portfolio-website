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
        "Studiuję Informatykę Techniczną na Politechnice Wrocławskiej, specjalność Systemy informatyczne w medycynie. Tworzę projekty webowe i desktopowe, pracuję z relacyjnymi bazami danych, dokumentacją techniczną oraz praktycznymi problemami z obszaru aplikacji, systemów i wsparcia IT. Szukam pierwszych praktycznych doświadczeń w IT, w których będę mógł rozwijać warsztat techniczny przy realnych systemach.",
      primaryCta: "Zobacz projekty",
      secondaryCta: "Pobierz CV",
      tertiaryCta: "GitHub",
      linkedinCta: "LinkedIn"
    },
    recruiterStrip: {
      title: "Profil w skrócie",
      items: [
        {
          value: "Student IT",
          label: "Politechnika Wrocławska",
          detail:
            "Informatyka Techniczna, specjalność: systemy informatyczne w medycynie"
        },
        {
          value: "3 Case Studies",
          label: "Pharmacy, Helpdesk, TSP",
          detail:
            "Wybrane projekty opisane technicznie, z repozytoriami i dokumentacją"
        },
        {
          value: "Kierunek rozwoju",
          label: "Aplikacje, bazy danych, systemy",
          detail: "Szukam praktycznych zadań IT i pracy z realnymi rozwiązaniami"
        }
      ]
    },
    heroPanel: {
      title: "Przekrój techniczny",
      items: [
        {
          label: "Aplikacje użytkowe",
          value: "C#/.NET, Avalonia, ASP.NET Core, Django, React",
          detail:
            "aplikacje desktopowe i webowe, formularze, role, walidacja danych, przepływy pracy"
        },
        {
          label: "Bazy danych i dane",
          value: "PostgreSQL, MySQL, SQLite, SQL",
          detail: "modele relacyjne, zapytania, integralność danych, raporty i widoki"
        },
        {
          label: "Systemy i komunikacja",
          value: "Java, TCP sockets, Linux, Windows",
          detail:
            "komunikacja między procesami, podstawy sieci, zarządzanie zasobami, obserwacja działania systemu"
        },
        {
          label: "Algorytmy, testy i dokumentacja",
          value: "Python, C++, Git, GitHub",
          detail:
            "benchmarki, porównywanie podejść, testowanie funkcji, dokumentacja techniczna i README"
        }
      ]
    },
    sections: {
      projects: {
        kicker: "Projekty",
        title: "Wyróżnione projekty",
        intro:
          "Trzy projekty pokazujące różne strony mojego warsztatu: aplikację desktopową z bazą danych, pełny system webowy oraz benchmark algorytmiczny.",
        githubTitle: "Wszystkie repozytoria",
        githubIntro:
          "Przegląd publicznych repozytoriów z GitHuba w formie szybkich odnośników. Karty prowadzą do konkretnych projektów i pokazują krótki opis, główną technologię oraz tematy repozytorium.",
        githubEmptyTitle: "Brak repozytoriów do wyświetlenia",
        githubEmptyText:
          "Gdy na profilu pojawi się kolejny projekt, zostanie pokazany w tej sekcji.",
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
        title: "Skontaktuj się ze mną",
        intro:
          "Jestem otwarty na praktyki, staż lub pierwsze zadania komercyjne związane z IT, aplikacjami, bazami danych, wsparciem technicznym i dokumentacją."
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
        readme: "https://github.com/roposropos/pharmacy-management-system#readme",
        demo: null as string | null,
        image: {
          src: "/assets/pharmacy-dashboard.png",
          alt: "Panel systemu Pharmacy management system z widokiem modułów aplikacji"
        },
        gallery: [
          {
            src: "/assets/pharmacy-dashboard.png",
            alt: "Panel główny systemu Pharmacy management system",
            caption: "Panel główny"
          },
          {
            src: "/assets/pharmacy-products.png",
            alt: "Widok kartoteki produktów w systemie Pharmacy management system",
            caption: "Kartoteka produktów"
          }
        ],
        categories: ["desktop", "database", "testing"] as ProjectCategory[],
        context:
          "Projekt zespołowy rozwijany jako lokalny system desktopowy dla apteki, z mocnym naciskiem na relacyjny model danych, spójność operacji i realny przepływ pracy użytkownika.",
        teaser:
          "Najmocniejszy projekt bazodanowo-aplikacyjny: lokalny system apteczny z realnymi relacjami, rolami i procesami.",
        signals: ["desktop app", "relacyjny model danych", "procesy apteczne"],
        facts: [
          { label: "obszar", value: "system apteczny" },
          { label: "rdzeń", value: "Avalonia + PostgreSQL" },
          { label: "dane", value: "relacje, widoki, walidacja" },
          { label: "dystrybucja", value: "paczki macOS i Windows" }
        ],
        stack: ["C#", ".NET", "Avalonia UI", "PostgreSQL", "ODBC", "SQL", "MVVM", "CSV"],
        summary:
          "Rozbudowany projekt zespołowy lokalnego systemu desktopowego dla apteki. Aplikacja obejmuje kartoteki klientów i leków, sprzedaż, recepty i receptury, magazyn partii, dostawy, zamówienia, raporty, audyt operacji, backup/restore oraz role kierownika i farmaceuty.",
        challenge:
          "Celem projektu było przygotowanie lokalnego systemu aptecznego, który łączy kartoteki, sprzedaż, recepty, magazyn, raporty i audyt w jednym spójnym przepływie pracy opartym na relacyjnej bazie danych.",
        importance:
          "Ten projekt najlepiej pokazuje pracę z relacyjnym modelem danych, poprawnością operacji i aplikacją desktopową pod realny scenariusz domenowy. Ważną częścią jest nie tylko interfejs, ale też baza: schematy, role, ograniczenia, widoki, audyt, seed i test SQL.",
        contribution:
          "Współtworzyłem elementy warstwy aplikacji oraz bazy danych: modele, widoki, walidację formularzy, przepływy pracy użytkownika, relacje między encjami, ograniczenia integralności i część dokumentacji technicznej. Pracowałem nad tym, aby operacje wykonywane w interfejsie były spójne z logiką domenową, strukturą PostgreSQL i regułami zapisanymi w bazie, a finalna paczka była możliwa do uruchomienia lokalnie z przygotowanym seedem demonstracyjnym i opisem procesu instalacji.",
        contributionPoints: [
          "przygotowanie modeli danych, relacji i ograniczeń integralności w PostgreSQL",
          "współtworzenie widoków oraz przepływów pracy dla sprzedaży, recept, magazynu i raportów",
          "walidacja formularzy i pilnowanie spójności operacji z logiką domenową",
          "dokumentacja uruchomienia oraz przygotowanie paczek dla macOS i Windows"
        ],
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
        id: "helpdesk",
        title: "Helpdesk management system",
        shortTitle: "Helpdesk management system",
        label: "ASP.NET Core + React",
        repo: "https://github.com/roposropos/helpdesk-management-system",
        readme: "https://github.com/roposropos/helpdesk-management-system#readme",
        demo: null as string | null,
        image: {
          src: "/assets/helpdesk-dashboard.png",
          alt: "Dashboard systemu Helpdesk management system z metrykami zgłoszeń"
        },
        gallery: [
          {
            src: "/assets/helpdesk-dashboard.png",
            alt: "Dashboard systemu Helpdesk management system",
            caption: "Dashboard"
          },
          {
            src: "/assets/helpdesk-tickets.png",
            alt: "Lista zgłoszeń w systemie Helpdesk management system",
            caption: "Zgłoszenia"
          },
          {
            src: "/assets/helpdesk-assets.png",
            alt: "Ewidencja sprzętu w systemie Helpdesk management system",
            caption: "Asset inventory"
          }
        ],
        categories: ["web", "database", "testing"] as ProjectCategory[],
        context:
          "Projekt własny pełnego systemu helpdeskowego, który łączy obsługę zgłoszeń, ewidencję sprzętu, role użytkowników, audyt i raportowanie w jednej aplikacji webowej.",
        teaser:
          "Najbardziej komercyjny case: pełny system IT support z rolami, ticketami, assetami, API, testami i dokumentacją.",
        signals: ["full-stack workflow", "role i uprawnienia", "testy + Docker"],
        facts: [
          { label: "obszar", value: "helpdesk IT" },
          { label: "rdzeń", value: "ASP.NET Core + React" },
          { label: "workflow", value: "ticketing, assety, audyt" },
          { label: "uruchomienie", value: "Docker Compose" }
        ],
        stack: ["ASP.NET Core", "C#", "React", "TypeScript", "PostgreSQL", "EF Core", "Docker", "Playwright"],
        summary:
          "Projekt full-stackowego systemu do obsługi wewnętrznego helpdesku IT i ewidencji sprzętu firmowego. Aplikacja łączy ASP.NET Core Web API, React + TypeScript, PostgreSQL i Docker, obejmując role Employee, Technician i Admin, cykl życia zgłoszeń, komentarze, SLA, audyt, asset inventory oraz raporty CSV/PDF.",
        challenge:
          "Celem było zbudowanie systemu do obsługi wewnętrznego helpdesku IT, który porządkuje zgłoszenia, role użytkowników, pracę technika, ewidencję sprzętu, audyt i raportowanie.",
        importance:
          "To projekt najbliższy realnej pracy przy narzędziach wewnętrznych: ma podział na role, API, frontend operacyjny, model domenowy, testy, Docker Compose, GitHub Actions i dokumentację architektury.",
        contribution:
          "Projektowałem i implementowałem warstwę domenową, mapowanie EF Core, migracje PostgreSQL, autoryzację JWT, endpointy dla zgłoszeń, komentarzy, załączników, assetów, audytu i raportów oraz frontendową konsolę operacyjną w React. Przygotowałem też lokalne uruchamianie przez Docker Compose, seed danych demonstracyjnych, testy jednostkowe, integracyjne i E2E oraz dokumentację z opisem architektury.",
        contributionPoints: [
          "projekt modelu domenowego, relacji i migracji EF Core dla PostgreSQL",
          "endpointy API z JWT, rolami i workflow obsługi zgłoszeń",
          "konsola React + TypeScript z filtrami, formularzami i stanami pracy",
          "testy jednostkowe, integracyjne i E2E oraz uruchamianie przez Docker Compose"
        ],
        proof: [
          "role Employee, Technician i Admin z oddzielnymi uprawnieniami oraz widocznością funkcji w UI",
          "workflow zgłoszeń: tworzenie, przypisanie technika, zmiana statusu, priorytet, komentarze, załączniki i historia",
          "moduł asset inventory z przypisaniem sprzętu, historią zmian, importem/eksportem CSV i powiązaniem assetów ze zgłoszeniami",
          "PostgreSQL z Entity Framework Core, migracjami, seedem demo, relacjami i ograniczeniami modelu",
          "dashboard, SLA, eksporty CSV/PDF, globalny audyt operacji i koncepcja powiadomień email",
          "Docker Compose, launchery dla macOS/Windows, GitHub Actions oraz testy unit, integration i Playwright E2E"
        ],
        metrics: [
          { label: "moduły", value: "tickets + assets" },
          { label: "autoryzacja", value: "JWT + role" },
          { label: "testy", value: "unit/API/E2E" }
        ]
      },
      {
        id: "tsp",
        title: "TSP algorithms benchmark",
        shortTitle: "TSP algorithms benchmark",
        label: "C++ algorithms + benchmarks",
        repo: "https://github.com/roposropos/tsp-algorithms-benchmark",
        readme: "https://github.com/roposropos/tsp-algorithms-benchmark#readme",
        demo: null as string | null,
        image: {
          src: "/assets/tsp-benchmark.png",
          alt: "Wykres porównujący wyniki benchmarku algorytmów TSP"
        },
        gallery: [
          {
            src: "/assets/tsp-benchmark.png",
            alt: "Wykres jakości rozwiązań w benchmarku TSP",
            caption: "Porównanie jakości"
          },
          {
            src: "/assets/tsp-stage2-bnb-time.png",
            alt: "Wykres czasu działania Branch and Bound",
            caption: "Branch and Bound"
          },
          {
            src: "/assets/tsp-stage3-sa-error.png",
            alt: "Wykres błędu względnego dla Simulated Annealing",
            caption: "Simulated Annealing"
          }
        ],
        categories: ["systems", "testing"] as ProjectCategory[],
        context:
          "Projekt akademicki skupiony na porównaniu algorytmów dla TSP i ATSP przez powtarzalne eksperymenty, pomiary czasu, eksport wyników i analizę jakości rozwiązań.",
        teaser:
          "Projekt algorytmiczny: porównanie metod dla TSP/ATSP z pomiarami, wynikami CSV, wykresami i dokumentacją.",
        signals: ["algorytmy", "benchmarki", "powtarzalne wyniki"],
        facts: [
          { label: "obszar", value: "algorytmy TSP/ATSP" },
          { label: "rdzeń", value: "C++ + benchmarki" },
          { label: "eksperymenty", value: "pomiary, konfiguracje" },
          { label: "wyniki", value: "CSV, wykresy, raporty" }
        ],
        stack: ["C++17/C++20", "Makefile", "TSPLIB", "CSV", "benchmarking", "plots"],
        summary:
          "Projekt benchmarkowy porównujący algorytmy dokładne, heurystyki i metaheurystyki dla symetrycznych oraz asymetrycznych instancji problemu komiwojażera. Repozytorium obejmuje cztery etapy: brute force i heurystyki konstrukcyjne, Branch and Bound, Simulated Annealing oraz Genetic Algorithm z lokalnym ulepszaniem.",
        challenge:
          "Celem projektu było porównanie kilku podejść do problemów TSP i ATSP w sposób możliwy do powtórzenia: z wieloma formatami danych, pomiarem czasu, zapisem wyników i analizą jakości rozwiązań.",
        importance:
          "Ten projekt uzupełnia portfolio o część stricte algorytmiczną. Pokazuje nie tylko implementację w C++, ale też podejście do eksperymentów: konfiguracje, stałe seedy, CSV, wykresy, raporty i prostą weryfikację przez smoke testy.",
        contribution:
          "Pracowałem nad implementacją i porządkowaniem etapów benchmarku, konfiguracjami eksperymentów, loaderami danych, zapisem wyników do CSV oraz dokumentacją techniczną. Projekt pozwolił mi przećwiczyć analizę algorytmów nie tylko od strony kodu, ale też przez powtarzalne pomiary, porównanie jakości wyników i przygotowanie repozytorium w formie czytelnej dla odbiorcy technicznego.",
        contributionPoints: [
          "implementacja i uporządkowanie czterech etapów algorytmicznych",
          "loadery danych dla macierzy, TSPLIB TSP, TSPLIB ATSP i zbiorów VLSI",
          "eksport wyników do CSV, wykresy i porównanie jakości rozwiązań",
          "Makefile, smoke testy i dokumentacja techniczna repozytorium"
        ],
        proof: [
          "cztery etapy projektu obejmujące algorytmy dokładne, heurystyki, Branch and Bound, SA i GA",
          "obsługa macierzy, instancji generowanych, TSPLIB TSP, TSPLIB ATSP oraz zbiorów VLSI",
          "pomiary czasu, długości trasy, błędu względnego, statystyk drzewa przeszukiwania i podsumowań grup",
          "konfiguracje tekstowe oraz stałe ziarna losowania wspierające powtarzalność eksperymentów",
          "wyniki w CSV, wykresy PNG, raporty PDF i dokumentacja projektowa w języku polskim",
          "Makefile z komendami do budowania etapów i uruchamiania smoke testów dla reprezentatywnych przypadków"
        ],
        metrics: [
          { label: "etapy", value: "4" },
          { label: "dane", value: "TSP/ATSP" },
          { label: "wyniki", value: "CSV + plots" }
        ]
      }
    ],
    skillGroups: [
      {
        title: "Języki i platformy",
        items: ["C#", "Python", "Java", "C++", "TypeScript", "SQL", "VHDL"],
        note: "języki używane w projektach aplikacyjnych, algorytmicznych, bazodanowych i systemowych"
      },
      {
        title: "Aplikacje i frameworki",
        items: [".NET", "ASP.NET Core", "Avalonia UI", "React", "Next.js", "Django"],
        note: "interfejsy webowe i desktopowe, API, formularze, role, walidacja i przepływy pracy"
      },
      {
        title: "Bazy danych",
        items: ["PostgreSQL", "MySQL", "SQLite", "SQL"],
        note: "modele relacyjne, zapytania, integralność danych, raporty, widoki i migracje"
      },
      {
        title: "Systemy i narzędzia",
        items: ["Git", "GitHub", "Docker", "Linux", "Windows", "TCP/IP", "DNS", "DHCP"],
        note: "kontrola wersji, uruchamianie środowisk, podstawy sieci, diagnostyka i dokumentacja"
      }
    ],
    timeline: [
      {
        period: "2022 - obecnie",
        title: "Politechnika Wrocławska",
        subtitle: "Informatyka Techniczna - studia inżynierskie",
        body:
          "Specjalność: Systemy informatyczne w medycynie. Program łączy programowanie, bazy danych, systemy informatyczne, sieci oraz zastosowania technologii w obszarach wymagających poprawności danych i dokumentacji."
      },
      {
        period: "2018 - 2022",
        title: "Zespół Szkół Elektronicznych w Bolesławcu",
        subtitle: "Technik informatyk",
        body:
          "Technikum informatyczne zakończone uzyskaniem tytułu technika informatyka. Zakres obejmował systemy komputerowe, sieci, urządzenia peryferyjne, podstawy baz danych i tworzenie stron internetowych. Praktyki zawodowe odbyłem w Szpitalu św. Łukasza w Bolesławcu."
      }
    ],
    strengths: [
      "szybko porządkuję nowe narzędzia, wymagania i dokumentację",
      "staram się pisać rozwiązania tak, żeby były czytelne, możliwe do wyjaśnienia i łatwe do dalszego rozwijania",
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
        "I study Technical Computer Science at Wrocław University of Science and Technology, specializing in medical information systems. I build web and desktop projects, work with relational databases, technical documentation and practical problems around applications, systems and IT support. I am looking for first practical IT experience where I can develop my technical skills around real systems.",
      primaryCta: "View projects",
      secondaryCta: "Download CV",
      tertiaryCta: "GitHub",
      linkedinCta: "LinkedIn"
    },
    recruiterStrip: {
      title: "Profile summary",
      items: [
        {
          value: "IT student",
          label: "Wrocław University of Science and Technology",
          detail:
            "Technical Computer Science, specialization: medical information systems"
        },
        {
          value: "3 Case Studies",
          label: "Pharmacy, Helpdesk, TSP",
          detail:
            "Selected projects described technically, with repositories and documentation"
        },
        {
          value: "Development direction",
          label: "Applications, databases, systems",
          detail: "Looking for practical IT tasks and work with real solutions"
        }
      ]
    },
    heroPanel: {
      title: "Technical scope",
      items: [
        {
          label: "User-facing applications",
          value: "C#/.NET, Avalonia, ASP.NET Core, Django, React",
          detail:
            "desktop and web applications, forms, roles, data validation and workflows"
        },
        {
          label: "Databases and data",
          value: "PostgreSQL, MySQL, SQLite, SQL",
          detail: "relational models, queries, data integrity, reports and views"
        },
        {
          label: "Systems and communication",
          value: "Java, TCP sockets, Linux, Windows",
          detail:
            "inter-process communication, networking basics, resource management and system behavior observation"
        },
        {
          label: "Algorithms, tests and documentation",
          value: "Python, C++, Git, GitHub",
          detail:
            "benchmarks, approach comparison, feature testing, technical documentation and README files"
        }
      ]
    },
    sections: {
      projects: {
        kicker: "Projects",
        title: "Featured projects",
        intro:
          "Three projects showing different sides of my technical practice: a desktop database application, a full web system and an algorithmic benchmark.",
        githubTitle: "All repositories",
        githubIntro:
          "A compact overview of public GitHub repositories as quick project links. Each card points to a specific project and shows a short description, main language and repository topics.",
        githubEmptyTitle: "No repositories to display",
        githubEmptyText:
          "When another project appears on the profile, it will be shown in this section.",
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
        title: "Get in touch",
        intro:
          "I am open to internships, trainee opportunities or first commercial IT tasks connected with applications, databases, technical support and documentation."
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
        readme: "https://github.com/roposropos/pharmacy-management-system#readme",
        demo: null as string | null,
        image: {
          src: "/assets/pharmacy-dashboard.png",
          alt: "Pharmacy management system dashboard with application modules"
        },
        gallery: [
          {
            src: "/assets/pharmacy-dashboard.png",
            alt: "Main dashboard of the Pharmacy management system",
            caption: "Main dashboard"
          },
          {
            src: "/assets/pharmacy-products.png",
            alt: "Product records view in the Pharmacy management system",
            caption: "Product records"
          }
        ],
        categories: ["desktop", "database", "testing"] as ProjectCategory[],
        context:
          "Team project developed as a local desktop pharmacy system, with a strong focus on the relational data model, operation consistency and realistic user workflows.",
        teaser:
          "The strongest database-and-application project: a local pharmacy system with real relations, roles and domain processes.",
        signals: ["desktop app", "relational data model", "pharmacy processes"],
        facts: [
          { label: "area", value: "pharmacy system" },
          { label: "core", value: "Avalonia + PostgreSQL" },
          { label: "data", value: "relations, views, validation" },
          { label: "delivery", value: "macOS and Windows packages" }
        ],
        stack: ["C#", ".NET", "Avalonia UI", "PostgreSQL", "ODBC", "SQL", "MVVM", "CSV"],
        summary:
          "An extensive team project for a local desktop pharmacy management system. The application covers customers and medicines, sales, prescriptions and compounded medicines, batch-based inventory, deliveries, orders, reports, operation audit, backup/restore and manager/pharmacist roles.",
        challenge:
          "The goal was to prepare a local pharmacy system that connects records, sales, prescriptions, inventory, reports and audit into one coherent workflow backed by a relational database.",
        importance:
          "This project best shows work with a relational data model, operation correctness and a desktop application built around a realistic domain scenario. The database is a major part of it: schemas, roles, constraints, views, audit, seed data and an SQL smoke test.",
        contribution:
          "I co-created parts of both the application layer and the database: models, views, form validation, user workflows, relations between entities, integrity constraints and parts of the technical documentation. I worked on keeping interface actions consistent with domain logic, the PostgreSQL structure and rules enforced in the database, while the final package remained possible to run locally with demo seed data and clear installation notes.",
        contributionPoints: [
          "data models, relations and integrity constraints in PostgreSQL",
          "views and workflows for sales, prescriptions, inventory and reports",
          "form validation and consistency between UI operations and domain logic",
          "startup documentation and packages prepared for macOS and Windows"
        ],
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
        id: "helpdesk",
        title: "Helpdesk management system",
        shortTitle: "Helpdesk management system",
        label: "ASP.NET Core + React",
        repo: "https://github.com/roposropos/helpdesk-management-system",
        readme: "https://github.com/roposropos/helpdesk-management-system#readme",
        demo: null as string | null,
        image: {
          src: "/assets/helpdesk-dashboard.png",
          alt: "Helpdesk management system dashboard with ticket metrics"
        },
        gallery: [
          {
            src: "/assets/helpdesk-dashboard.png",
            alt: "Helpdesk management system dashboard",
            caption: "Dashboard"
          },
          {
            src: "/assets/helpdesk-tickets.png",
            alt: "Tickets list in the Helpdesk management system",
            caption: "Tickets"
          },
          {
            src: "/assets/helpdesk-assets.png",
            alt: "Asset inventory in the Helpdesk management system",
            caption: "Asset inventory"
          }
        ],
        categories: ["web", "database", "testing"] as ProjectCategory[],
        context:
          "Personal full-stack helpdesk system combining ticket handling, asset inventory, user roles, audit history and reporting in one web application.",
        teaser:
          "The most commercially oriented case: a full IT support system with roles, tickets, assets, API, tests and documentation.",
        signals: ["full-stack workflow", "roles and permissions", "tests + Docker"],
        facts: [
          { label: "area", value: "IT helpdesk" },
          { label: "core", value: "ASP.NET Core + React" },
          { label: "workflow", value: "tickets, assets, audit" },
          { label: "runtime", value: "Docker Compose" }
        ],
        stack: ["ASP.NET Core", "C#", "React", "TypeScript", "PostgreSQL", "EF Core", "Docker", "Playwright"],
        summary:
          "Personal project for a full-stack internal IT helpdesk and company asset inventory system. The application combines ASP.NET Core Web API, React + TypeScript, PostgreSQL and Docker, covering Employee, Technician and Admin roles, ticket lifecycle management, comments, SLA tracking, audit history, asset inventory and CSV/PDF reporting.",
        challenge:
          "The goal was to build an internal IT helpdesk system that organizes tickets, user roles, technician work, asset inventory, audit history and reporting.",
        importance:
          "This is the project closest to real internal tooling work: it includes role separation, an API, an operational frontend, a domain model, tests, Docker Compose, GitHub Actions and architecture documentation.",
        contribution:
          "I designed and implemented the domain layer, EF Core mapping, PostgreSQL migrations, JWT authorization, endpoints for tickets, comments, attachments, assets, audit logs and reports, plus the React operations console. I also prepared Docker Compose local startup, demo seed data, unit, integration and E2E tests, and architecture documentation.",
        contributionPoints: [
          "domain model, relations and EF Core migrations for PostgreSQL",
          "API endpoints with JWT, roles and ticket workflow handling",
          "React + TypeScript console with filters, forms and work states",
          "unit, integration and E2E tests plus Docker Compose startup"
        ],
        proof: [
          "Employee, Technician and Admin roles with separated permissions and UI access",
          "ticket workflow covering creation, technician assignment, status changes, priority, comments, attachments and history",
          "asset inventory with device assignment, assignment history, CSV import/export and ticket-asset linking",
          "PostgreSQL with Entity Framework Core, migrations, demo seed data, relations and domain constraints",
          "dashboard, SLA tracking, CSV/PDF exports, global audit log and email notification outbox concept",
          "Docker Compose, macOS/Windows launchers, GitHub Actions and unit, integration and Playwright E2E tests"
        ],
        metrics: [
          { label: "modules", value: "tickets + assets" },
          { label: "auth", value: "JWT + roles" },
          { label: "tests", value: "unit/API/E2E" }
        ]
      },
      {
        id: "tsp",
        title: "TSP algorithms benchmark",
        shortTitle: "TSP algorithms benchmark",
        label: "C++ algorithms + benchmarks",
        repo: "https://github.com/roposropos/tsp-algorithms-benchmark",
        readme: "https://github.com/roposropos/tsp-algorithms-benchmark#readme",
        demo: null as string | null,
        image: {
          src: "/assets/tsp-benchmark.png",
          alt: "Chart comparing TSP benchmark algorithm results"
        },
        gallery: [
          {
            src: "/assets/tsp-benchmark.png",
            alt: "Solution-quality chart for the TSP benchmark",
            caption: "Quality comparison"
          },
          {
            src: "/assets/tsp-stage2-bnb-time.png",
            alt: "Branch and Bound runtime chart",
            caption: "Branch and Bound"
          },
          {
            src: "/assets/tsp-stage3-sa-error.png",
            alt: "Simulated Annealing relative error chart",
            caption: "Simulated Annealing"
          }
        ],
        categories: ["systems", "testing"] as ProjectCategory[],
        context:
          "Academic project focused on comparing algorithms for TSP and ATSP through repeatable experiments, runtime measurements, result export and solution-quality analysis.",
        teaser:
          "Algorithmic project comparing methods for TSP/ATSP with measurements, CSV outputs, charts and documentation.",
        signals: ["algorithms", "benchmarks", "reproducible results"],
        facts: [
          { label: "area", value: "TSP/ATSP algorithms" },
          { label: "core", value: "C++ + benchmarks" },
          { label: "experiments", value: "measurements, configs" },
          { label: "outputs", value: "CSV, charts, reports" }
        ],
        stack: ["C++17/C++20", "Makefile", "TSPLIB", "CSV", "benchmarking", "plots"],
        summary:
          "Benchmark project comparing exact algorithms, heuristics and metaheuristics for symmetric and asymmetric Travelling Salesman Problem instances. The repository covers four stages: brute force and constructive heuristics, Branch and Bound, Simulated Annealing and a Genetic Algorithm with local improvement.",
        challenge:
          "The goal was to compare several approaches to TSP and ATSP problems in a repeatable way, with multiple input formats, runtime measurements, result export and solution-quality analysis.",
        importance:
          "This project adds a strictly algorithmic part to the portfolio. It shows not only C++ implementation, but also experiment structure: configurations, fixed seeds, CSV outputs, charts, reports and lightweight smoke verification.",
        contribution:
          "I worked on implementing and organizing benchmark stages, experiment configurations, data loaders, CSV result output and technical documentation. The project let me practice algorithm analysis not only as code, but also through repeatable measurements, result-quality comparison and preparing the repository for technical review.",
        contributionPoints: [
          "implementation and organization of four algorithmic benchmark stages",
          "data loaders for matrices, TSPLIB TSP, TSPLIB ATSP and VLSI-style datasets",
          "CSV result export, plots and comparison of solution quality",
          "Makefile, smoke checks and technical repository documentation"
        ],
        proof: [
          "four project stages covering exact algorithms, heuristics, Branch and Bound, SA and GA",
          "support for matrices, generated instances, TSPLIB TSP, TSPLIB ATSP and VLSI-style datasets",
          "measurements for runtime, tour length, relative error, search-tree statistics and grouped summaries",
          "text configurations and fixed seeds supporting experiment reproducibility",
          "CSV results, PNG plots, PDF reports and Polish project documentation",
          "Makefile commands for building stages and running smoke checks on representative cases"
        ],
        metrics: [
          { label: "stages", value: "4" },
          { label: "data", value: "TSP/ATSP" },
          { label: "results", value: "CSV + plots" }
        ]
      }
    ],
    skillGroups: [
      {
        title: "Languages and platforms",
        items: ["C#", "Python", "Java", "C++", "TypeScript", "SQL", "VHDL"],
        note: "languages used across application, algorithmic, database and systems-focused projects"
      },
      {
        title: "Applications and frameworks",
        items: [".NET", "ASP.NET Core", "Avalonia UI", "React", "Next.js", "Django"],
        note: "web and desktop interfaces, APIs, forms, roles, validation and workflows"
      },
      {
        title: "Databases",
        items: ["PostgreSQL", "MySQL", "SQLite", "SQL"],
        note: "relational models, queries, data integrity, reports, views and migrations"
      },
      {
        title: "Systems and tools",
        items: ["Git", "GitHub", "Docker", "Linux", "Windows", "TCP/IP", "DNS", "DHCP"],
        note: "version control, environment setup, networking basics, diagnostics and documentation"
      }
    ],
    timeline: [
      {
        period: "2022 - present",
        title: "Wrocław University of Science and Technology",
        subtitle: "Technical Computer Science - engineering studies",
        body:
          "Specialization: Medical Information Systems. The program combines programming, databases, information systems, networking and technology use in areas that require data correctness and documentation."
      },
      {
        period: "2018 - 2022",
        title: "Electronic Schools Complex in Bolesławiec",
        subtitle: "IT technician",
        body:
          "Technical secondary education completed with the IT technician title. The program covered computer systems, networks, peripheral devices, database basics and website creation. I completed my vocational work placement at St. Luke's Hospital in Bolesławiec."
      }
    ],
    strengths: [
      "I quickly organize new tools, requirements and documentation",
      "I try to write solutions that are readable, explainable and easy to develop further",
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
