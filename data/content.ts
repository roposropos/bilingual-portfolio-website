export const locales = ["pl", "en"] as const;

export type Locale = (typeof locales)[number];

export type ProjectCategory =
  | "all"
  | "dotnet"
  | "web"
  | "desktop"
  | "algorithms";

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
      title: "Robert Tworek - Junior C#/.NET Developer",
      description:
        "Portfolio Roberta Tworka: projekty C#/.NET, ASP.NET Core, React, PostgreSQL, aplikacje desktopowe, testy i dokumentacja techniczna."
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
      eyebrow: "Student Informatyki Technicznej / Junior C#/.NET Developer",
      title: "Robert Tworek",
      body:
        "Tworzę aplikacje w C#/.NET - od REST API w ASP.NET Core i relacyjnych baz PostgreSQL po interfejsy React oraz desktop w Avalonia UI. Studiuję Informatykę Techniczną na Politechnice Wrocławskiej i szukam pierwszej roli jako Junior .NET Developer, w której będę mógł rozwijać backend, testy i pracę nad realnym produktem.",
      primaryCta: "Zobacz projekty",
      secondaryCta: "Pobierz CV",
      tertiaryCta: "GitHub",
      linkedinCta: "LinkedIn"
    },
    recruiterStrip: {
      title: "Profil w skrócie",
      items: [
        {
          value: "Full-stack .NET",
          label: "ASP.NET Core, React, PostgreSQL",
          detail:
            "REST API, JWT, role użytkowników i workflow zgłoszeń"
        },
        {
          value: "Testy i delivery",
          label: "xUnit, Testcontainers, Playwright",
          detail:
            "Docker Compose, GitHub Actions i lokalne uruchamianie środowiska"
        },
        {
          value: "C# desktop + SQL",
          label: "Avalonia UI, MVVM, PostgreSQL",
          detail: "role, audyt, raporty i dystrybucja Windows/macOS"
        }
      ]
    },
    heroPanel: {
      title: "Kierunek rozwoju",
      items: [
        {
          label: "Backend .NET",
          value: "ASP.NET Core, C#, EF Core, PostgreSQL",
          detail:
            "REST API, logika biznesowa, autoryzacja JWT, role i relacyjny model danych"
        },
        {
          label: "Frontend i desktop",
          value: "React, TypeScript, Avalonia UI, MVVM",
          detail: "panele operacyjne, formularze, przepływy pracy i czytelne interfejsy"
        },
        {
          label: "Jakość i delivery",
          value: "xUnit, Testcontainers, Playwright, Docker",
          detail:
            "testy domenowe, API i E2E, środowisko demo oraz dokumentacja uruchomienia"
        },
        {
          label: "Zaplecze inżynierskie",
          value: "C++, Python, Java, Linux, Git",
          detail:
            "benchmarki, komunikacja TCP, praca z repozytoriami i raportowanie wyników"
        }
      ]
    },
    sections: {
      projects: {
        kicker: "Projekty",
        title: "Wyróżnione projekty",
        intro:
          "Wybrane projekty pokazują trzy uzupełniające obszary mojego warsztatu: pełną aplikację webową w .NET, desktopowy system C# z rozbudowaną bazą PostgreSQL oraz eksperymentalny benchmark algorytmów C++.",
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
          "Technologie porządkuję według siły dowodu w projektach: główny stack .NET, praktyka frontendowa i desktopowa, testy oraz narzędzia delivery, a niżej szersze zaplecze akademickie."
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
          "Szukam stażu lub pierwszej roli jako Junior C#/.NET Developer, szczególnie przy backendzie ASP.NET Core, aplikacjach full-stack i systemach wykorzystujących relacyjne bazy danych. Jestem otwarty na pracę we Wrocławiu, hybrydowo lub zdalnie."
      }
    },
    filters: [
      { id: "all" as ProjectCategory, label: "Wszystkie" },
      { id: "dotnet" as ProjectCategory, label: ".NET" },
      { id: "web" as ProjectCategory, label: "Web" },
      { id: "desktop" as ProjectCategory, label: "Desktop" },
      { id: "algorithms" as ProjectCategory, label: "Algorytmy" }
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
        categories: ["dotnet", "desktop"] as ProjectCategory[],
        context:
          "Projekt zespołowy rozwijany jako lokalny system desktopowy dla apteki, z mocnym naciskiem na relacyjny model danych, spójność operacji i realny przepływ pracy użytkownika.",
        teaser:
          "C# desktop + SQL: lokalny system apteczny z realnymi relacjami, rolami, audytem i procesami magazynowo-sprzedażowymi.",
        signals: ["aplikacja desktopowa", "relacyjny model danych", "procesy apteczne"],
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
          "Projekt realizowałem w trzyosobowym zespole. Mój zakres obejmował pracę nad modelem danych i ograniczeniami PostgreSQL, współtworzenie widoków i przepływów sprzedaży, magazynu oraz raportów, walidację danych, dokumentację uruchomienia i przygotowanie paczek aplikacji dla Windows oraz macOS.",
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
        categories: ["dotnet", "web"] as ProjectCategory[],
        context:
          "Projekt własny pełnego systemu helpdeskowego, który łączy obsługę zgłoszeń, ewidencję sprzętu, role użytkowników, audyt i raportowanie w jednej aplikacji webowej.",
        teaser:
          "Główny projekt .NET: pełny wewnętrzny helpdesk z rolami, ticketami, assetami, API, testami i dokumentacją.",
        signals: ["workflow zgłoszeń", "role i uprawnienia", "testy + Docker"],
        facts: [
          { label: "obszar", value: "helpdesk IT" },
          { label: "rdzeń", value: "ASP.NET Core + React" },
          { label: "workflow", value: "ticketing, assety, audyt" },
          { label: "uruchomienie", value: "Docker Compose" }
        ],
        stack: ["ASP.NET Core", "C#", "React", "TypeScript", "PostgreSQL", "EF Core", "Docker", "Playwright"],
        summary:
          "Full-stackowy system wewnętrznego wsparcia IT z backendem ASP.NET Core Web API, panelem React i bazą PostgreSQL. Obejmuje role Employee, Technician i Admin, cykl życia zgłoszeń, SLA, komentarze publiczne i wewnętrzne, ewidencję sprzętu, audyt, raporty oraz testy jednostkowe, integracyjne i E2E.",
        challenge:
          "Problemem, który rozwiązuje projekt, są rozproszone zgłoszenia IT oraz brak kontroli nad odpowiedzialnością, terminami SLA i sprzętem firmowym. System porządkuje ticket od utworzenia do zamknięcia i łączy go z użytkownikami, technikami oraz assetami.",
        importance:
          "To najmocniejszy projekt pod rekrutację .NET, ponieważ pokazuje nie tylko CRUD, lecz kompletny biznesowy workflow, podział warstw, bezpieczeństwo, testy na kilku poziomach i uruchomienie całego środowiska.",
        contribution:
          "Największym wyzwaniem było utrzymanie spójnych reguł uprawnień i przejść statusów między API, bazą oraz interfejsem. Rozdzieliłem odpowiedzialności pomiędzy warstwy rozwiązania, zastosowałem role i polityki autoryzacji w ASP.NET Core, a kluczowe scenariusze zweryfikowałem testami domenowymi, API i Playwright E2E.",
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
          { label: "testy", value: "14 unit / 9 E2E" },
          { label: "autoryzacja", value: "JWT + role" },
          { label: "delivery", value: "Docker + CI" }
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
        categories: ["algorithms"] as ProjectCategory[],
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
          "Kluczowym wyzwaniem było porównanie metod o zupełnie innej charakterystyce: dokładnych, heurystycznych i metaheurystycznych. Ujednoliciłem konfigurację eksperymentów oraz raportowanie czasu, długości trasy, błędu względnego i statystyk wyszukiwania, dzięki czemu wyniki można odtworzyć i porównać.",
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
        title: "Główny stack",
        items: ["C#", ".NET", "ASP.NET Core", "EF Core", "PostgreSQL", "REST API"],
        note: "najmocniejszy kierunek portfolio, poparty Helpdeskiem i projektem desktopowym C#"
      },
      {
        title: "Frontend / desktop",
        items: ["React", "TypeScript", "Avalonia UI", "MVVM", "Next.js"],
        note: "panele operacyjne, formularze, widoki desktopowe i kompletne przepływy użytkownika"
      },
      {
        title: "Testing / DevOps",
        items: ["xUnit", "Testcontainers", "Playwright", "Docker", "GitHub Actions"],
        note: "testy jednostkowe, integracyjne i E2E, środowiska demo oraz automatyzacja uruchomienia"
      },
      {
        title: "Pozostała praktyka",
        items: ["Python/Django", "Java", "C++", "SQL", "Linux", "TCP/IP"],
        note: "projekty akademickie, benchmarki, komunikacja sieciowa, dokumentacja i praca z repozytoriami"
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
      "zaczynam od zrozumienia procesu i modelu danych",
      "rozdzielam odpowiedzialności aplikacji, zamiast mieszać logikę z interfejsem",
      "implementuję najważniejszy workflow i weryfikuję go testami",
      "dbam o uruchomienie projektu, dane demonstracyjne i dokumentację README"
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
      title: "Robert Tworek - Junior C#/.NET Developer",
      description:
        "Robert Tworek's portfolio: C#/.NET, ASP.NET Core, React, PostgreSQL, desktop applications, tests and technical documentation."
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
      eyebrow: "Technical Computer Science student / Junior C#/.NET Developer",
      title: "Robert Tworek",
      body:
        "I build C#/.NET applications - from REST APIs in ASP.NET Core and relational PostgreSQL databases to React interfaces and Avalonia UI desktop software. I study Technical Computer Science at Wrocław University of Science and Technology and I am looking for my first Junior .NET Developer role where I can develop backend, testing and product-oriented engineering skills.",
      primaryCta: "View projects",
      secondaryCta: "Download CV",
      tertiaryCta: "GitHub",
      linkedinCta: "LinkedIn"
    },
    recruiterStrip: {
      title: "Profile summary",
      items: [
        {
          value: "Full-stack .NET",
          label: "ASP.NET Core, React, PostgreSQL",
          detail:
            "REST API, JWT, user roles and ticket workflow"
        },
        {
          value: "Testing and delivery",
          label: "xUnit, Testcontainers, Playwright",
          detail:
            "Docker Compose, GitHub Actions and local environment setup"
        },
        {
          value: "C# desktop + SQL",
          label: "Avalonia UI, MVVM, PostgreSQL",
          detail: "roles, audit, reports and Windows/macOS distribution"
        }
      ]
    },
    heroPanel: {
      title: "Development direction",
      items: [
        {
          label: ".NET backend",
          value: "ASP.NET Core, C#, EF Core, PostgreSQL",
          detail:
            "REST APIs, business logic, JWT authorization, roles and relational data models"
        },
        {
          label: "Frontend and desktop",
          value: "React, TypeScript, Avalonia UI, MVVM",
          detail: "operations panels, forms, workflows and readable user interfaces"
        },
        {
          label: "Quality and delivery",
          value: "xUnit, Testcontainers, Playwright, Docker",
          detail:
            "domain, API and E2E tests, demo environments and startup documentation"
        },
        {
          label: "Engineering background",
          value: "C++, Python, Java, Linux, Git",
          detail:
            "benchmarks, TCP communication, repository work and result reporting"
        }
      ]
    },
    sections: {
      projects: {
        kicker: "Projects",
        title: "Featured projects",
        intro:
          "Selected projects show three complementary areas of my practice: a full .NET web application, a C# desktop system backed by PostgreSQL and an experimental C++ algorithms benchmark.",
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
          "I group technologies by the strength of evidence in my projects: core .NET stack, frontend and desktop practice, testing and delivery tools, plus broader academic engineering experience."
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
          "I am looking for an internship or first Junior C#/.NET Developer role, especially around ASP.NET Core backend, full-stack applications and systems using relational databases. I am open to work in Wrocław, hybrid or remote."
      }
    },
    filters: [
      { id: "all" as ProjectCategory, label: "All" },
      { id: "dotnet" as ProjectCategory, label: ".NET" },
      { id: "web" as ProjectCategory, label: "Web" },
      { id: "desktop" as ProjectCategory, label: "Desktop" },
      { id: "algorithms" as ProjectCategory, label: "Algorithms" }
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
        categories: ["dotnet", "desktop"] as ProjectCategory[],
        context:
          "Team project developed as a local desktop pharmacy system, with a strong focus on the relational data model, operation consistency and realistic user workflows.",
        teaser:
          "C# desktop + SQL: a local pharmacy system with real relations, roles, audit and inventory-sales workflows.",
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
          "I worked on this project in a three-person team. My scope included the data model and PostgreSQL constraints, co-creating views and workflows for sales, inventory and reports, data validation, startup documentation and application packages for Windows and macOS.",
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
        categories: ["dotnet", "web"] as ProjectCategory[],
        context:
          "Personal full-stack helpdesk system combining ticket handling, asset inventory, user roles, audit history and reporting in one web application.",
        teaser:
          "The most commercially oriented case: a full internal helpdesk with roles, tickets, assets, API, tests and documentation.",
        signals: ["full-stack workflow", "roles and permissions", "tests + Docker"],
        facts: [
          { label: "area", value: "IT helpdesk" },
          { label: "core", value: "ASP.NET Core + React" },
          { label: "workflow", value: "tickets, assets, audit" },
          { label: "runtime", value: "Docker Compose" }
        ],
        stack: ["ASP.NET Core", "C#", "React", "TypeScript", "PostgreSQL", "EF Core", "Docker", "Playwright"],
        summary:
          "Full-stack internal IT support system with an ASP.NET Core Web API backend, React panel and PostgreSQL database. It covers Employee, Technician and Admin roles, ticket lifecycle, SLA, public and internal comments, asset inventory, audit logs, reports and unit, integration and E2E tests.",
        challenge:
          "The project addresses scattered IT requests and lack of control over responsibility, SLA deadlines and company assets. It organizes a ticket from creation to closure and connects it with users, technicians and assets.",
        importance:
          "This is the strongest project for .NET recruitment because it shows more than CRUD: a complete business workflow, layered responsibilities, security, several levels of tests and local environment startup.",
        contribution:
          "The biggest challenge was keeping permission rules and status transitions consistent across the API, database and interface. I separated responsibilities between solution layers, used roles and authorization policies in ASP.NET Core, and verified key scenarios with domain, API and Playwright E2E tests.",
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
          { label: "tests", value: "14 unit / 9 E2E" },
          { label: "auth", value: "JWT + roles" },
          { label: "delivery", value: "Docker + CI" }
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
        categories: ["algorithms"] as ProjectCategory[],
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
          "The key challenge was comparing methods with very different characteristics: exact, heuristic and metaheuristic. I standardized experiment configuration and reporting of runtime, tour length, relative error and search statistics, making the results reproducible and comparable.",
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
        title: "Core stack",
        items: ["C#", ".NET", "ASP.NET Core", "EF Core", "PostgreSQL", "REST API"],
        note: "the main direction of the portfolio, supported by the Helpdesk system and the C# desktop project"
      },
      {
        title: "Frontend / desktop",
        items: ["React", "TypeScript", "Avalonia UI", "MVVM", "Next.js"],
        note: "operations panels, forms, desktop views and complete user workflows"
      },
      {
        title: "Testing / DevOps",
        items: ["xUnit", "Testcontainers", "Playwright", "Docker", "GitHub Actions"],
        note: "unit, integration and E2E tests, demo environments and startup automation"
      },
      {
        title: "Additional practice",
        items: ["Python/Django", "Java", "C++", "SQL", "Linux", "TCP/IP"],
        note: "academic projects, benchmarks, network communication, documentation and repository work"
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
      "I start by understanding the process and the data model",
      "I separate application responsibilities instead of mixing logic with the interface",
      "I implement the main workflow and verify it with tests",
      "I care about project startup, demo data and clear README documentation"
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
