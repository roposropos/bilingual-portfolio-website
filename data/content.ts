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
      title: "Robert Tworek | Junior C#/.NET Developer",
      description:
        "Portfolio Roberta Tworka: projekty C#/.NET, ASP.NET Core, PostgreSQL, React i Avalonia UI, testy automatyczne, Docker oraz dokumentacja techniczna."
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
      eyebrow: "Junior C#/.NET Developer | Student Informatyki Technicznej",
      title: "Robert Tworek",
      body:
        "Tworzę aplikacje biznesowe w C# i .NET, koncentrując się na backendzie ASP.NET Core, relacyjnych bazach PostgreSQL i czytelnych przepływach użytkownika. W projektach łączę logikę domenową, autoryzację, testy automatyczne, Docker oraz interfejsy React lub Avalonia UI. Szukam pierwszej roli, w której będę rozwijać się przy produkcyjnym kodzie i pracy zespołowej.",
      primaryCta: "Zobacz projekty",
      secondaryCta: "Pobierz CV",
      tertiaryCta: "GitHub",
      linkedinCta: "LinkedIn"
    },
    recruiterStrip: {
      title: "W skrócie",
      items: [
        {
          value: "Backend .NET",
          label: "ASP.NET Core, EF Core, PostgreSQL",
          detail:
            "REST API, JWT, role, transakcje i procesy biznesowe"
        },
        {
          value: "Testy i delivery",
          label: "xUnit, Testcontainers, Playwright",
          detail:
            "testy jednostkowe, integracyjne i E2E, Docker Compose oraz GitHub Actions"
        },
        {
          value: "Frontend i desktop",
          label: "React, TypeScript, Avalonia UI",
          detail: "panele operacyjne, formularze i aplikacje wieloplatformowe"
        }
      ]
    },
    sections: {
      projects: {
        kicker: "Projekty",
        title: "Wyróżnione projekty",
        intro:
          "Najwięcej miejsca poświęcam trzem projektom opartym na C#/.NET i PostgreSQL. Każdy opisuje problem, najważniejsze decyzje techniczne, działający zakres systemu oraz mój konkretny wkład w implementację.",
        githubTitle: "Pozostałe projekty na GitHubie",
        githubIntro:
          "Wybrane repozytoria uzupełniające główny kierunek .NET: projekty webowe, algorytmiczne i akademickie. Każda karta prowadzi bezpośrednio do kodu i dokumentacji projektu.",
        githubEmptyTitle: "Brak dodatkowych repozytoriów do wyświetlenia",
        githubEmptyText:
          "Nowe publiczne projekty pojawią się w tej sekcji po opublikowaniu ich na GitHubie.",
        githubNoDescription: "Repozytorium nie ma jeszcze krótkiego opisu.",
        githubUpdatedLabel: "Aktualizacja",
        githubLanguageFallback: "Projekt"
      },
      stack: {
        kicker: "Technologie",
        title: "Technologie i narzędzia",
        intro:
          "Poniższe technologie wykorzystywałem w projektach własnych i zespołowych. Główny kierunek stanowią C#, ASP.NET Core, Entity Framework Core i PostgreSQL; pozostałe narzędzia wspierają interfejsy, testowanie, uruchamianie środowisk i dokumentację."
      },
      education: {
        kicker: "Edukacja",
        title: "Wykształcenie i specjalizacja",
        intro:
          "Wykształcenie techniczne i studia inżynierskie dały mi szerokie podstawy z programowania, baz danych, systemów komputerowych, sieci, testowania i dokumentacji. W projektach rozwijam te podstawy w kierunku aplikacji biznesowych w .NET."
      },
      contact: {
        kicker: "Kontakt",
        title: "Skontaktuj się ze mną",
        intro:
          "Szukam pierwszej roli jako Junior C#/.NET Developer lub stażu z możliwością dalszego rozwoju. Interesuje mnie backend ASP.NET Core, aplikacje full-stack i systemy oparte na relacyjnych bazach danych. Jestem otwarty na pracę we Wrocławiu, hybrydowo lub zdalnie."
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
        title: "Pharmacy Management System",
        shortTitle: "Pharmacy Management System",
        label: "Aplikacja desktopowa C# + PostgreSQL",
        repo: "https://github.com/roposropos/pharmacy-management-system",
        readme: "https://github.com/roposropos/pharmacy-management-system#readme",
        demo: null as string | null,
        image: {
          src: "/assets/pharmacy-dashboard.png",
          alt: "Panel systemu Pharmacy Management System z widokiem modułów aplikacji"
        },
        gallery: [
          {
            src: "/assets/pharmacy-dashboard.png",
            alt: "Panel główny systemu Pharmacy Management System",
            caption: "Panel główny"
          },
          {
            src: "/assets/pharmacy-products.png",
            alt: "Widok kartoteki produktów w systemie Pharmacy Management System",
            caption: "Kartoteka produktów"
          }
        ],
        categories: ["dotnet", "desktop"] as ProjectCategory[],
        context:
          "Projekt zespołowy rozwijany jako lokalny system desktopowy dla apteki, z mocnym naciskiem na relacyjny model danych, spójność operacji i realny przepływ pracy użytkownika.",
        teaser:
          "Zespołowy system desktopowy dla apteki obejmujący sprzedaż, recepty, magazyn partii, dostawy, raporty, audyt i role użytkowników oparte na relacyjnej bazie PostgreSQL.",
        signals: ["relacyjny model danych", "procesy apteczne", "aplikacja wieloplatformowa"],
        facts: [
          { label: "obszar", value: "system apteczny" },
          { label: "rdzeń", value: "Avalonia UI + PostgreSQL" },
          { label: "dane", value: "relacje, widoki, ograniczenia" },
          { label: "dystrybucja", value: "Windows i macOS" }
        ],
        stack: ["C#", ".NET", "Avalonia UI", "PostgreSQL", "ODBC", "SQL", "MVVM", "CSV"],
        summary:
          "Zespołowy projekt lokalnego systemu desktopowego dla apteki. Aplikacja obejmuje kartoteki klientów i leków, sprzedaż, recepty i receptury, magazyn partii, dostawy, zamówienia, raporty, audyt operacji, backup/restore oraz role kierownika i farmaceuty.",
        challenge:
          "Celem projektu było połączenie kartotek leków i klientów, sprzedaży, recept, magazynu, dostaw, raportów i audytu w jednym lokalnym systemie. Kluczowe znaczenie miała poprawność relacji oraz spójność operacji wykonywanych na partiach leków, stanach magazynowych i danych wrażliwych.",
        importance:
          "Baza danych wykorzystuje relacje, ograniczenia integralności, widoki, role, audyt i dane demonstracyjne. Operacje magazynowe są oparte na partiach i terminach ważności, a dostęp do funkcji jest rozdzielony pomiędzy role kierownika i farmaceuty. Projekt obejmuje również skrypty przygotowania bazy, test SQL oraz procedury backupu i odtwarzania.",
        contribution:
          "Projekt realizowałem w trzyosobowym zespole. Odpowiadałem głównie za bazę danych i dokumentację techniczną: model relacyjny, ograniczenia, widoki, role, skrypty przygotowania środowiska, dane demonstracyjne i testy SQL. Wspierałem również integrację z aplikacją, walidację danych oraz prace nad pozostałymi modułami.",
        contributionPoints: [
          "odpowiadałem głównie za model danych, relacje, ograniczenia integralności, widoki i role w PostgreSQL",
          "przygotowywałem skrypty bazy, dane demonstracyjne, testy SQL i dokumentację techniczną projektu",
          "wspierałem integrację warstwy danych z aplikacją oraz walidację operacji wykonywanych w interfejsie",
          "pomagałem zespołowi w pozostałych modułach, uruchomieniu i weryfikacji działania aplikacji"
        ],
        proof: [
          "moduły klientów, leków, dostawców, magazynu, sprzedaży, recept, receptur, zamówień, raportów i użytkowników",
          "PostgreSQL z migracjami, seedem demonstracyjnym, rolami bazodanowymi, ograniczeniami integralności i smoke testem SQL",
          "ochrona danych wrażliwych przez szyfrowanie, hash do kontroli unikalności i maskowanie wartości w interfejsie",
          "magazyn partii leków i surowców, terminy ważności, korekty stanów oraz alerty niskich stanów",
          "audyt operacji, eksport raportów do CSV, backup/restore i podział uprawnień kierownika oraz farmaceuty"
        ],
        metrics: [
          { label: "moduły", value: "10+" },
          { label: "model danych", value: "relacje + role" },
          { label: "dystrybucja", value: "Windows / macOS" }
        ]
      },
      {
        id: "helpdesk",
        title: "Helpdesk Management System",
        shortTitle: "Helpdesk Management System",
        label: "ASP.NET Core + React",
        repo: "https://github.com/roposropos/helpdesk-management-system",
        readme: "https://github.com/roposropos/helpdesk-management-system#readme",
        demo: null as string | null,
        image: {
          src: "/assets/helpdesk-dashboard.png",
          alt: "Dashboard systemu Helpdesk Management System z metrykami zgłoszeń"
        },
        gallery: [
          {
            src: "/assets/helpdesk-dashboard.png",
            alt: "Dashboard systemu Helpdesk Management System",
            caption: "Dashboard"
          },
          {
            src: "/assets/helpdesk-tickets.png",
            alt: "Lista zgłoszeń w systemie Helpdesk Management System",
            caption: "Zgłoszenia"
          },
          {
            src: "/assets/helpdesk-assets.png",
            alt: "Ewidencja sprzętu w systemie Helpdesk Management System",
            caption: "Asset inventory"
          }
        ],
        categories: ["dotnet", "web"] as ProjectCategory[],
        context:
          "Projekt własny pełnego systemu helpdeskowego, który łączy obsługę zgłoszeń, ewidencję sprzętu, role użytkowników, audyt i raportowanie w jednej aplikacji webowej.",
        teaser:
          "Wewnętrzny system wsparcia IT łączący obsługę zgłoszeń, ewidencję sprzętu, role użytkowników, SLA, audyt i raportowanie w jednej aplikacji webowej.",
        signals: ["obsługa zgłoszeń i SLA", "role oraz uprawnienia", "testy i Docker Compose"],
        facts: [
          { label: "obszar", value: "wewnętrzny helpdesk IT" },
          { label: "rdzeń", value: "ASP.NET Core + React" },
          { label: "proces", value: "zgłoszenia, sprzęt, audyt" },
          { label: "uruchomienie", value: "Docker Compose" }
        ],
        stack: ["ASP.NET Core", "C#", "React", "TypeScript", "PostgreSQL", "EF Core", "Docker", "Playwright"],
        summary:
          "Full-stackowy system wewnętrznego wsparcia IT z backendem ASP.NET Core Web API, panelem React i bazą PostgreSQL. Obejmuje role Employee, Technician i Admin, cykl życia zgłoszeń, SLA, komentarze publiczne i wewnętrzne, ewidencję sprzętu, audyt, raporty oraz testy jednostkowe, integracyjne i E2E.",
        challenge:
          "Projekt porządkuje rozproszone zgłoszenia IT oraz informacje o sprzęcie firmowym. Każde zgłoszenie przechodzi kontrolowany cykl od utworzenia i przypisania technika do rozwiązania lub zamknięcia, z zachowaniem historii zmian, priorytetu, komentarzy i terminów SLA.",
        importance:
          "Reguły uprawnień są egzekwowane w API, a nie wyłącznie ukrywane w interfejsie. Zgłoszenia, komentarze, załączniki, przypisania i zmiany statusu tworzą audytowalną historię. Testy jednostkowe, integracyjne i E2E obejmują zarówno logikę backendu, jak i najważniejsze ścieżki użytkownika w React.",
        contribution:
          "Największym wyzwaniem było utrzymanie spójnych reguł uprawnień i przejść statusów pomiędzy API, bazą danych i interfejsem. Rozdzieliłem odpowiedzialności pomiędzy warstwy rozwiązania, zastosowałem role i polityki autoryzacji w ASP.NET Core, a kluczowe scenariusze zweryfikowałem testami backendu, API i Playwright E2E.",
        contributionPoints: [
          "zaprojektowałem model danych, relacje i migracje EF Core dla PostgreSQL",
          "zaimplementowałem endpointy API z JWT, rolami i obsługą cyklu życia zgłoszeń",
          "przygotowałem panel React + TypeScript z filtrami, formularzami i stanami pracy",
          "dodałem testy jednostkowe, integracyjne i E2E oraz uruchamianie środowiska przez Docker Compose"
        ],
        proof: [
          "role Employee, Technician i Admin z oddzielnymi uprawnieniami oraz widocznością funkcji w interfejsie",
          "obsługa zgłoszeń: tworzenie, przypisanie technika, status, priorytet, komentarze, załączniki i historia zmian",
          "ewidencja sprzętu z przypisaniami, historią, importem i eksportem CSV oraz powiązaniem ze zgłoszeniami",
          "PostgreSQL z Entity Framework Core, migracjami, danymi demonstracyjnymi, relacjami i ograniczeniami modelu",
          "dashboard, SLA, eksporty CSV/PDF, globalny audyt i testy Playwright E2E"
        ],
        metrics: [
          { label: "testy", value: "14 unit / 9 E2E" },
          { label: "autoryzacja", value: "JWT + role" },
          { label: "uruchomienie", value: "Docker + CI" }
        ]
      },
      {
        id: "orderflow",
        title: "Order Flow Management System",
        shortTitle: "Order Flow Management System",
        label: "ASP.NET Core + PostgreSQL",
        repo: "https://github.com/roposropos/order-flow-management-system",
        readme: "https://github.com/roposropos/order-flow-management-system#readme",
        demo: null as string | null,
        image: {
          src: "/assets/orderflow-window-management.jpg",
          alt: "Interfejs systemu Order Flow z panelami obsługi zamówień i magazynu"
        },
        gallery: [
          {
            src: "/assets/orderflow-window-management.jpg",
            alt: "Pulpit systemu Order Flow z oknami aplikacji i zwiniętym panelem",
            caption: "Pulpit operacyjny"
          },
          {
            src: "/assets/orderflow-warehouse-operations.jpg",
            alt: "Kolejka operacji magazynowych w systemie Order Flow",
            caption: "Operacje magazynowe"
          },
          {
            src: "/assets/orderflow-customer-workflow.jpg",
            alt: "Historia zamówienia i oś zmian statusu w systemie Order Flow",
            caption: "Przepływ klienta"
          }
        ],
        categories: ["dotnet", "web"] as ProjectCategory[],
        context:
          "Projekt własny systemu realizacji zamówień e-commerce, łączący API, płatności, magazyn, wysyłkę i raportowanie w jednym kontrolowanym procesie biznesowym.",
        teaser:
          "System obsługi zamówień, płatności, stanów magazynowych i wysyłki z kontrolowanym cyklem statusów, rolami użytkowników oraz obsługą operacji równoległych.",
        signals: ["cykl realizacji zamówienia", "spójność stanów magazynowych", "Outbox i testy integracyjne"],
        facts: [
          { label: "obszar", value: "zamówienia i realizacja" },
          { label: "rdzeń", value: ".NET 8 + PostgreSQL" },
          { label: "proces", value: "płatność, magazyn, wysyłka" },
          { label: "jakość", value: "45 testów + Docker" }
        ],
        stack: ["ASP.NET Core 8", "C#", "EF Core 8", "PostgreSQL 16", "MediatR", "JWT", "Docker", "xUnit", "Testcontainers"],
        summary:
          "Autorski system zarządzania zamówieniami, zapasami, płatnościami i operacjami magazynowymi dla procesu realizacji e-commerce. Backend ASP.NET Core 8 łączy model domenowy, autoryzację JWT, transakcyjny magazyn, Outbox Worker, raporty i audyt z responsywnym interfejsem demonstracyjnym.",
        challenge:
          "Najważniejszym problemem była spójność całego procesu: status zamówienia, rezerwacja towaru, płatność i wysyłka muszą pozostać zgodne również przy błędach oraz równoległych żądaniach. Reguły przejść są kontrolowane przez model domenowy, a operacje magazynowe wykorzystują transakcje i optymistyczną współbieżność PostgreSQL.",
        importance:
          "Cykl życia zamówienia jest zamknięty w modelu domenowym zamiast rozproszony po kontrolerach. Rezerwacja zapasu korzysta z transakcji i mechanizmu xmin, a zdarzenia wymagające przetwarzania w tle są zapisywane w Outboxie w tej samej transakcji co zmiana biznesowa. Osobny Worker obsługuje ponowienia oraz przeniesienie komunikatu do dead-letter po pięciu nieudanych próbach.",
        contribution:
          "Samodzielnie zaprojektowałem model domenowy, podział rozwiązania, API i bazę PostgreSQL. Zaimplementowałem cykl życia zamówienia, autoryzację, transakcyjną rezerwację zapasu, płatności, wysyłkę, Outbox Worker, raporty i audyt, a kluczowe reguły zabezpieczyłem testami jednostkowymi, integracyjnymi i testami zachowania interfejsu.",
        contributionPoints: [
          "zaprojektowałem model domenowy, relacje i kontrolowany cykl życia zamówienia",
          "zaimplementowałem ASP.NET Core Web API z JWT, rolami, walidacją i błędami ProblemDetails",
          "zabezpieczyłem rezerwację zapasu transakcjami i optymistyczną współbieżnością PostgreSQL",
          "przygotowałem 45 testów automatycznych, środowisko Docker Compose i pipeline GitHub Actions"
        ],
        proof: [
          "cykl zamówienia od Draft i PendingPayment do Processing, Shipped i Completed, wraz ze ścieżkami anulowania i zwrotu",
          "role Customer, WarehouseEmployee, Manager i Administrator z politykami dostępu do operacji i danych",
          "transakcyjna rezerwacja magazynu z optymistyczną współbieżnością PostgreSQL, zapobiegająca sprzedaży ostatniej sztuki dwóm klientom",
          "płatności, przesyłki, historia statusów, raporty sprzedażowe, niskie stany, audyt operacji i obsługa błędów ProblemDetails",
          "Outbox Worker z ponowieniami, rejestrowaniem błędów i obsługą dead-letter"
        ],
        metrics: [
          { label: "testy", value: "45" },
          { label: "role", value: "4" },
          { label: "uruchomienie", value: "Docker + CI" }
        ]
      }
    ],
    skillGroups: [
      {
        title: "Główny stack",
        items: ["C#", ".NET", "ASP.NET Core", "EF Core", "PostgreSQL", "REST API"],
        note: "API, logika biznesowa, autoryzacja, transakcje i dostęp do danych"
      },
      {
        title: "Frontend i desktop",
        items: ["React", "TypeScript", "Avalonia UI", "MVVM", "Next.js"],
        note: "panele operacyjne, formularze i aplikacje wieloplatformowe"
      },
      {
        title: "Testy i DevOps",
        items: ["xUnit", "Testcontainers", "Playwright", "Docker", "GitHub Actions"],
        note: "testy na kilku poziomach, konteneryzacja i automatyzacja CI"
      },
      {
        title: "Zaplecze techniczne",
        items: ["Python/Django", "Java", "C++", "SQL", "Linux", "TCP/IP", "Microsoft 365", "Excel"],
        note: "projekty akademickie, systemy i sieci, analiza danych, dokumentacja i praca z repozytoriami"
      }
    ],
    timeline: [
      {
        period: "2022 - obecnie",
        title: "Politechnika Wrocławska",
        subtitle: "Informatyka Techniczna - studia inżynierskie",
        body:
          "Specjalność: Systemy informatyczne w medycynie. Program obejmuje programowanie, bazy danych, systemy informatyczne, sieci, testowanie oraz pracę z dokumentacją techniczną i projektową."
      },
      {
        period: "2018 - 2022",
        title: "Zespół Szkół Elektronicznych w Bolesławcu",
        subtitle: "Technik informatyk",
        body:
          "Wykształcenie obejmowało systemy komputerowe, sieci, urządzenia peryferyjne, podstawy baz danych, tworzenie stron internetowych i pakiet Microsoft 365. Praktyki zawodowe odbyłem w Szpitalu św. Łukasza w Bolesławcu."
      }
    ],
    strengths: [
      "zaczynam od zrozumienia procesu, użytkowników i modelu danych",
      "rozdzielam odpowiedzialności backendu, bazy danych i interfejsu",
      "weryfikuję kluczowe scenariusze testami jednostkowymi, integracyjnymi lub E2E",
      "dbam o czytelną dokumentację, dane demonstracyjne i powtarzalne uruchomienie projektu"
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
      location: "Wrocław, Polska"
    }
  },
  en: {
    meta: {
      title: "Robert Tworek | Junior C#/.NET Developer",
      description:
        "Robert Tworek's portfolio: C#/.NET, ASP.NET Core, PostgreSQL, React and Avalonia UI projects, automated tests, Docker and technical documentation."
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
      eyebrow: "Junior C#/.NET Developer | Computer Engineering Student",
      title: "Robert Tworek",
      body:
        "I build business applications in C# and .NET, focusing on ASP.NET Core backends, relational PostgreSQL databases and clear user workflows. My projects combine domain logic, authorization, automated tests, Docker and React or Avalonia UI interfaces. I am looking for my first role where I can grow through production code, code review and teamwork.",
      primaryCta: "View projects",
      secondaryCta: "Download CV",
      tertiaryCta: "GitHub",
      linkedinCta: "LinkedIn"
    },
    recruiterStrip: {
      title: "At a glance",
      items: [
        {
          value: ".NET backend",
          label: "ASP.NET Core, EF Core, PostgreSQL",
          detail:
            "REST APIs, JWT, roles, transactions and business workflows"
        },
        {
          value: "Testing and delivery",
          label: "xUnit, Testcontainers, Playwright",
          detail:
            "unit, integration and E2E tests, Docker Compose and GitHub Actions"
        },
        {
          value: "Frontend and desktop",
          label: "React, TypeScript, Avalonia UI",
          detail: "operations panels, forms and cross-platform applications"
        }
      ]
    },
    sections: {
      projects: {
        kicker: "Projects",
        title: "Featured projects",
        intro:
          "I focus on three C#/.NET and PostgreSQL projects. Each case explains the problem, key technical decisions, implemented scope and my specific contribution to the system.",
        githubTitle: "Other projects on GitHub",
        githubIntro:
          "Selected repositories that complement my main .NET focus, including web, algorithmic and academic projects. Each card links directly to the code and project documentation.",
        githubEmptyTitle: "No additional repositories to display",
        githubEmptyText:
          "New public projects will appear here after they are published on GitHub.",
        githubNoDescription: "This repository does not have a short description yet.",
        githubUpdatedLabel: "Updated",
        githubLanguageFallback: "Project"
      },
      stack: {
        kicker: "Technologies",
        title: "Technologies and tools",
        intro:
          "I have used the following technologies in personal and team projects. My core direction is C#, ASP.NET Core, Entity Framework Core and PostgreSQL; the remaining tools support interfaces, testing, repeatable environments and technical documentation."
      },
      education: {
        kicker: "Education",
        title: "Education and specialization",
        intro:
          "My technical education and engineering studies gave me broad foundations in programming, databases, computer systems, networking, testing and documentation. I apply those foundations to business applications built with .NET."
      },
      contact: {
        kicker: "Contact",
        title: "Get in touch",
        intro:
          "I am looking for my first Junior C#/.NET Developer role or an internship with a path to further development. I am particularly interested in ASP.NET Core backends, full-stack applications and systems built on relational databases. I am open to opportunities in Wrocław, hybrid or remote."
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
        title: "Pharmacy Management System",
        shortTitle: "Pharmacy Management System",
        label: "C# desktop application + PostgreSQL",
        repo: "https://github.com/roposropos/pharmacy-management-system",
        readme: "https://github.com/roposropos/pharmacy-management-system#readme",
        demo: null as string | null,
        image: {
          src: "/assets/pharmacy-dashboard.png",
          alt: "Pharmacy Management System dashboard with application modules"
        },
        gallery: [
          {
            src: "/assets/pharmacy-dashboard.png",
            alt: "Main dashboard of the Pharmacy Management System",
            caption: "Main dashboard"
          },
          {
            src: "/assets/pharmacy-products.png",
            alt: "Product records view in the Pharmacy Management System",
            caption: "Product records"
          }
        ],
        categories: ["dotnet", "desktop"] as ProjectCategory[],
        context:
          "Team project developed as a local desktop pharmacy system, with a strong focus on the relational data model, operation consistency and realistic user workflows.",
        teaser:
          "A team-built desktop pharmacy system covering sales, prescriptions, batch inventory, deliveries, reports, audit history and user roles backed by a relational PostgreSQL database.",
        signals: ["relational data model", "pharmacy workflows", "cross-platform desktop app"],
        facts: [
          { label: "area", value: "pharmacy system" },
          { label: "core", value: "Avalonia UI + PostgreSQL" },
          { label: "data", value: "relations, views, constraints" },
          { label: "distribution", value: "Windows and macOS" }
        ],
        stack: ["C#", ".NET", "Avalonia UI", "PostgreSQL", "ODBC", "SQL", "MVVM", "CSV"],
        summary:
          "A team project for a local desktop pharmacy management system. The application covers customer and medicine records, sales, prescriptions and compounded medicines, batch inventory, deliveries, orders, reports, operation audit, backup/restore and manager and pharmacist roles.",
        challenge:
          "The goal was to connect medicine and customer records, sales, prescriptions, inventory, deliveries, reports and audit history in one local system. Correct relations and consistent operations on medicine batches, stock levels and sensitive data were central to the design.",
        importance:
          "The database uses relations, integrity constraints, views, roles, audit records and demo data. Inventory operations are based on batches and expiry dates, while access to features is separated between manager and pharmacist roles. The project also includes database setup scripts, an SQL smoke test and backup and restore procedures.",
        contribution:
          "I worked on the project in a three-person team. I was mainly responsible for the database and technical documentation: the relational model, constraints, views, roles, environment setup scripts, demo data and SQL tests. I also supported application integration, data validation and work on the remaining modules.",
        contributionPoints: [
          "was mainly responsible for the PostgreSQL data model, relations, integrity constraints, views and roles",
          "prepared database scripts, demo data, SQL tests and the project technical documentation",
          "supported integration between the data layer and the application and helped validate UI operations",
          "assisted the team with other modules, application startup and end-to-end verification"
        ],
        proof: [
          "modules for customers, medicines, suppliers, inventory, sales, prescriptions, compounded medicines, orders, reports and users",
          "PostgreSQL with migrations, demo seed data, database roles, integrity constraints and an SQL smoke test",
          "sensitive data protection through encryption, a uniqueness hash and masked values in the interface",
          "medicine and ingredient batches, expiry dates, stock corrections and low-stock alerts",
          "operation audit, CSV report export, backup/restore and separated manager and pharmacist permissions"
        ],
        metrics: [
          { label: "modules", value: "10+" },
          { label: "data model", value: "relations + roles" },
          { label: "distribution", value: "Windows / macOS" }
        ]
      },
      {
        id: "helpdesk",
        title: "Helpdesk Management System",
        shortTitle: "Helpdesk Management System",
        label: "ASP.NET Core + React",
        repo: "https://github.com/roposropos/helpdesk-management-system",
        readme: "https://github.com/roposropos/helpdesk-management-system#readme",
        demo: null as string | null,
        image: {
          src: "/assets/helpdesk-dashboard.png",
          alt: "Helpdesk Management System dashboard with ticket metrics"
        },
        gallery: [
          {
            src: "/assets/helpdesk-dashboard.png",
            alt: "Helpdesk Management System dashboard",
            caption: "Dashboard"
          },
          {
            src: "/assets/helpdesk-tickets.png",
            alt: "Tickets list in the Helpdesk Management System",
            caption: "Tickets"
          },
          {
            src: "/assets/helpdesk-assets.png",
            alt: "Asset inventory in the Helpdesk Management System",
            caption: "Asset inventory"
          }
        ],
        categories: ["dotnet", "web"] as ProjectCategory[],
        context:
          "Personal full-stack helpdesk system combining ticket handling, asset inventory, user roles, audit history and reporting in one web application.",
        teaser:
          "An internal IT support system combining ticket handling, asset inventory, user roles, SLA tracking, audit history and reporting in one web application.",
        signals: ["ticket lifecycle and SLA", "roles and permissions", "tests and Docker Compose"],
        facts: [
          { label: "area", value: "internal IT helpdesk" },
          { label: "core", value: "ASP.NET Core + React" },
          { label: "process", value: "tickets, assets, audit" },
          { label: "runtime", value: "Docker Compose" }
        ],
        stack: ["ASP.NET Core", "C#", "React", "TypeScript", "PostgreSQL", "EF Core", "Docker", "Playwright"],
        summary:
          "Full-stack internal IT support system with an ASP.NET Core Web API backend, React panel and PostgreSQL database. It covers Employee, Technician and Admin roles, ticket lifecycle, SLA, public and internal comments, asset inventory, audit logs, reports and unit, integration and E2E tests.",
        challenge:
          "The project organizes scattered IT requests and company asset information. Each ticket follows a controlled lifecycle from creation and technician assignment to resolution or closure, while preserving status history, priority, comments, attachments and SLA deadlines.",
        importance:
          "Authorization rules are enforced by the API rather than only hidden in the interface. Tickets, comments, attachments, assignments and status changes create an auditable history. Unit, integration and E2E tests cover both backend logic and the main React user journeys.",
        contribution:
          "The biggest challenge was keeping permission rules and status transitions consistent across the API, database and interface. I separated responsibilities between solution layers, used roles and authorization policies in ASP.NET Core, and verified key scenarios with domain, API and Playwright E2E tests.",
        contributionPoints: [
          "designed the data model, relations and EF Core migrations for PostgreSQL",
          "implemented API endpoints with JWT, roles and ticket lifecycle handling",
          "built the React + TypeScript panel with filters, forms and workflow states",
          "added unit, integration and E2E tests plus Docker Compose startup"
        ],
        proof: [
          "Employee, Technician and Admin roles with separated permissions and UI access",
          "ticket handling covering creation, technician assignment, status, priority, comments, attachments and change history",
          "asset inventory with assignments, history, CSV import/export and links between assets and tickets",
          "PostgreSQL with Entity Framework Core, migrations, demo data, relations and model constraints",
          "dashboard, SLA tracking, CSV/PDF exports, global audit history and Playwright E2E tests"
        ],
        metrics: [
          { label: "tests", value: "14 unit / 9 E2E" },
          { label: "auth", value: "JWT + roles" },
          { label: "delivery", value: "Docker + CI" }
        ]
      },
      {
        id: "orderflow",
        title: "Order Flow Management System",
        shortTitle: "Order Flow Management System",
        label: "ASP.NET Core + PostgreSQL",
        repo: "https://github.com/roposropos/order-flow-management-system",
        readme: "https://github.com/roposropos/order-flow-management-system#readme",
        demo: null as string | null,
        image: {
          src: "/assets/orderflow-window-management.jpg",
          alt: "Order Flow interface with order and warehouse operation panels"
        },
        gallery: [
          {
            src: "/assets/orderflow-window-management.jpg",
            alt: "Order Flow workspace with application windows and a collapsed panel",
            caption: "Operations workspace"
          },
          {
            src: "/assets/orderflow-warehouse-operations.jpg",
            alt: "Warehouse operations queue in Order Flow",
            caption: "Warehouse operations"
          },
          {
            src: "/assets/orderflow-customer-workflow.jpg",
            alt: "Order history and persisted status timeline in Order Flow",
            caption: "Customer workflow"
          }
        ],
        categories: ["dotnet", "web"] as ProjectCategory[],
        context:
          "Personal e-commerce fulfilment system combining API, payments, inventory, shipment and reporting in one controlled business workflow.",
        teaser:
          "An order, payment, inventory and shipment management system with a controlled status lifecycle, user roles and safe handling of concurrent operations.",
        signals: ["order fulfilment lifecycle", "inventory consistency", "Outbox and integration tests"],
        facts: [
          { label: "area", value: "orders and fulfilment" },
          { label: "core", value: ".NET 8 + PostgreSQL" },
          { label: "process", value: "payment, inventory, shipment" },
          { label: "quality", value: "45 tests + Docker" }
        ],
        stack: ["ASP.NET Core 8", "C#", "EF Core 8", "PostgreSQL 16", "MediatR", "JWT", "Docker", "xUnit", "Testcontainers"],
        summary:
          "A personal order, inventory, payment and warehouse management system for an e-commerce fulfilment process. The ASP.NET Core 8 backend combines a domain model, JWT authorization, transactional inventory, an Outbox Worker, reporting and audit with a responsive demonstration interface.",
        challenge:
          "The main challenge was keeping the complete process consistent: order status, stock reservation, payment and shipment must remain aligned even when failures or concurrent requests occur. Lifecycle rules are controlled by the domain model, while inventory operations use PostgreSQL transactions and optimistic concurrency.",
        importance:
          "The order lifecycle is encapsulated in the domain model instead of being scattered across controllers. Stock reservation uses transactions and xmin-based concurrency, while events that require background processing are written to an Outbox in the same transaction as the business change. A separate Worker handles retries and moves a message to dead-letter after five failed attempts.",
        contribution:
          "I independently designed the domain model, solution structure, API and PostgreSQL database. I implemented the order lifecycle, authorization, transactional stock reservation, payments, shipments, the Outbox Worker, reporting and audit, then protected the main rules with unit, integration and frontend behaviour tests.",
        contributionPoints: [
          "designed the domain model, relations and controlled order lifecycle",
          "implemented an ASP.NET Core Web API with JWT, roles, validation and ProblemDetails responses",
          "protected stock reservation with transactions and PostgreSQL optimistic concurrency",
          "created 45 automated tests, a Docker Compose environment and a GitHub Actions pipeline"
        ],
        proof: [
          "order lifecycle from Draft and PendingPayment to Processing, Shipped and Completed, including cancellation and refund paths",
          "Customer, WarehouseEmployee, Manager and Administrator roles with policies controlling operations and data access",
          "transactional stock reservation with PostgreSQL optimistic concurrency preventing two customers from buying the last unit",
          "payments, shipments, status history, sales reports, low-stock reporting, audit logs and centralized ProblemDetails errors",
          "Outbox Worker with retry tracking, error logging and dead-letter handling"
        ],
        metrics: [
          { label: "tests", value: "45" },
          { label: "roles", value: "4" },
          { label: "delivery", value: "Docker + CI" }
        ]
      }
    ],
    skillGroups: [
      {
        title: "Core stack",
        items: ["C#", ".NET", "ASP.NET Core", "EF Core", "PostgreSQL", "REST API"],
        note: "APIs, business logic, authorization, transactions and data access"
      },
      {
        title: "Frontend and desktop",
        items: ["React", "TypeScript", "Avalonia UI", "MVVM", "Next.js"],
        note: "operations panels, forms and cross-platform applications"
      },
      {
        title: "Testing and DevOps",
        items: ["xUnit", "Testcontainers", "Playwright", "Docker", "GitHub Actions"],
        note: "multi-level testing, containerization and CI automation"
      },
      {
        title: "Technical background",
        items: ["Python/Django", "Java", "C++", "SQL", "Linux", "TCP/IP", "Microsoft 365", "Excel"],
        note: "academic projects, systems and networking, data analysis, documentation and repository work"
      }
    ],
    timeline: [
      {
        period: "2022 - present",
        title: "Wrocław University of Science and Technology",
        subtitle: "B.Eng. in Computer Engineering - in progress",
        body:
          "Specialization: Information Systems in Medicine. The program covers programming, databases, information systems, networking, testing and technical and project documentation."
      },
      {
        period: "2018 - 2022",
        title: "Electronic Schools Complex in Bolesławiec",
        subtitle: "IT Technician",
        body:
          "The program covered computer systems, networking, peripheral devices, database fundamentals, website development and Microsoft 365. I completed my vocational work placement at St. Luke's Hospital in Bolesławiec."
      }
    ],
    strengths: [
      "I start by understanding the process, users and data model",
      "I separate backend, database and interface responsibilities",
      "I verify key scenarios with unit, integration or E2E tests",
      "I care about clear documentation, demo data and repeatable project startup"
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
      location: "Wrocław, Poland"
    }
  }
} as const;

export type PortfolioContent = (typeof content)[Locale];
