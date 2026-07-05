"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  type FormEvent,
  type SVGProps,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  Database,
  Download,
  ExternalLink,
  Filter,
  GitFork,
  GraduationCap,
  Images,
  Languages,
  Mail,
  MapPin,
  Maximize2,
  Network,
  Send,
  Sparkles,
  Star,
  Terminal,
  Workflow,
  X,
  Zap
} from "lucide-react";
import type { Locale, PortfolioContent, ProjectCategory } from "@/data/content";
import type { GithubRepository } from "@/lib/github";
import { cn } from "@/lib/utils";

type PortfolioExperienceProps = {
  locale: Locale;
  content: PortfolioContent;
  githubRepositories: GithubRepository[];
};

type Project = PortfolioContent["projects"][number];
type GithubApiPayload = {
  repoCount?: unknown;
  repositories?: unknown;
};
type GithubRepositoryApiResponse = {
  id?: number;
  name?: string;
  full_name?: string;
  html_url?: string;
  description?: string | null;
  language?: string | null;
  stargazers_count?: number;
  forks_count?: number;
  fork?: boolean;
  archived?: boolean;
  updated_at?: string | null;
  topics?: string[];
};
type GithubUserApiResponse = {
  public_repos?: number;
};

const iconClass = "h-4 w-4";

const stackIcons = [Code2, Database, Network, Terminal];

function extractGithubProfileName(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (!parsedUrl.hostname.endsWith("github.com")) {
      return null;
    }

    const [profileName] = parsedUrl.pathname.split("/").filter(Boolean);

    return profileName?.toLowerCase() ?? null;
  } catch {
    return null;
  }
}

function getGithubProjectRepositories(
  content: PortfolioContent,
  repositories: GithubRepository[]
) {
  const profileRepositoryName = extractGithubProfileName(content.links.github);

  return repositories
    .filter(
      (repository) =>
        repository.name.toLowerCase() !== profileRepositoryName
    );
}

function normalizeGithubRepository(
  repository: GithubRepositoryApiResponse
): GithubRepository | null {
  if (!repository.id || !repository.name || !repository.html_url) {
    return null;
  }

  return {
    id: repository.id,
    name: repository.name,
    fullName: repository.full_name ?? repository.name,
    url: repository.html_url,
    description: repository.description ?? null,
    language: repository.language ?? null,
    stars: repository.stargazers_count ?? 0,
    forks: repository.forks_count ?? 0,
    isFork: repository.fork ?? false,
    isArchived: repository.archived ?? false,
    updatedAt: repository.updated_at ?? null,
    topics: repository.topics ?? []
  };
}

async function fetchPortfolioGithubData(
  githubProfileUrl: string
): Promise<GithubApiPayload | null> {
  const username = extractGithubProfileName(githubProfileUrl);

  if (!username) {
    return null;
  }

  try {
    const [repositoriesResponse, userResponse] = await Promise.all([
      fetch(
        `https://api.github.com/users/${username}/repos?type=owner&sort=updated&direction=desc&per_page=100`,
        {
          cache: "no-store",
          headers: {
            Accept: "application/vnd.github+json"
          }
        }
      ),
      fetch(`https://api.github.com/users/${username}`, {
        cache: "no-store",
        headers: {
          Accept: "application/vnd.github+json"
        }
      })
    ]);

    const repositories = repositoriesResponse.ok
      ? ((await repositoriesResponse.json()) as GithubRepositoryApiResponse[])
          .map(normalizeGithubRepository)
          .filter((repository): repository is GithubRepository =>
            Boolean(repository)
          )
          .filter(
            (repository) => repository.name.toLowerCase() !== username.toLowerCase()
          )
      : null;
    const user = userResponse.ok
      ? ((await userResponse.json()) as GithubUserApiResponse)
      : null;
    const repoCount =
      repositories?.length ??
      (typeof user?.public_repos === "number"
        ? Math.max(user.public_repos - 1, 0)
        : undefined);

    return {
      repoCount,
      repositories: repositories ?? undefined
    };
  } catch {
    return null;
  }
}

async function fetchGithubRouteData() {
  const response = await fetch("/api/github", {
    cache: "no-store"
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as GithubApiPayload;
}

function repositoryMatchesFilter(
  repository: GithubRepository,
  filter: ProjectCategory
) {
  if (filter === "all") {
    return true;
  }

  const haystack = [
    repository.name,
    repository.fullName,
    repository.description ?? "",
    repository.language ?? "",
    ...repository.topics
  ]
    .join(" ")
    .toLowerCase();

  const filterKeywords: Record<Exclude<ProjectCategory, "all">, string[]> = {
    web: [
      "web",
      "website",
      "portfolio",
      "nextjs",
      "react",
      "django",
      "html",
      "css",
      "javascript",
      "typescript",
      "vocabulary"
    ],
    desktop: ["desktop", "avalonia", "csharp", "c#", ".net", "pharmacy"],
    systems: [
      "system",
      "systems",
      "java",
      "tcp",
      "socket",
      "sockets",
      "process",
      "vhdl",
      "fpga",
      "restaurant"
    ],
    database: [
      "database",
      "postgresql",
      "postgres",
      "sqlite",
      "mysql",
      "sql"
    ],
    testing: ["test", "testing", "benchmark", "algorithms", "tsp", "atsp"]
  };

  return filterKeywords[filter].some((keyword) => haystack.includes(keyword));
}

function formatRepositoryName(name: string) {
  return name.replaceAll("-", " ").replaceAll("_", " ");
}

function formatRepositoryDate(updatedAt: string | null, locale: Locale) {
  if (!updatedAt) {
    return null;
  }

  const date = new Date(updatedAt);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-US", {
    month: "short",
    year: "numeric"
  }).format(date);
}

function getFallbackGithubRepositories(locale: Locale): GithubRepository[] {
  const isPolish = locale === "pl";

  return [
    {
      id: -98,
      name: "pharmacy-management-system",
      fullName: "roposropos/pharmacy-management-system",
      url: "https://github.com/roposropos/pharmacy-management-system",
      description: isPolish
        ? "Desktopowy system zarządzania apteką z bazą PostgreSQL, modułami sprzedaży, magazynu, recept, raportów i audytu."
        : "Desktop pharmacy management system with PostgreSQL, sales, inventory, prescriptions, reports and audit modules.",
      language: "C#",
      stars: 0,
      forks: 0,
      isFork: false,
      isArchived: false,
      updatedAt: null,
      topics: ["csharp", "avalonia", "postgresql", "desktop"]
    },
    {
      id: -99,
      name: "helpdesk-management-system",
      fullName: "roposropos/helpdesk-management-system",
      url: "https://github.com/roposropos/helpdesk-management-system",
      description: isPolish
        ? "Full-stackowy system helpdeskowy z obsługą zgłoszeń, ewidencją sprzętu, rolami, audytem i testami."
        : "Full-stack helpdesk system with tickets, asset inventory, roles, audit history and tests.",
      language: "C#",
      stars: 0,
      forks: 0,
      isFork: false,
      isArchived: false,
      updatedAt: null,
      topics: ["aspnetcore", "react", "postgresql", "helpdesk"]
    },
    {
      id: -100,
      name: "tsp-algorithms-benchmark",
      fullName: "roposropos/tsp-algorithms-benchmark",
      url: "https://github.com/roposropos/tsp-algorithms-benchmark",
      description: isPolish
        ? "Benchmark algorytmów dla TSP i ATSP z pomiarami, eksportem CSV, wykresami i dokumentacją techniczną."
        : "Algorithms benchmark for TSP and ATSP with measurements, CSV output, charts and technical documentation.",
      language: "C++",
      stars: 0,
      forks: 0,
      isFork: false,
      isArchived: false,
      updatedAt: null,
      topics: ["cpp", "tsp", "benchmark", "algorithms"]
    },
    {
      id: -101,
      name: "restaurant-process-simulation",
      fullName: "roposropos/restaurant-process-simulation",
      url: "https://github.com/roposropos/restaurant-process-simulation",
      description: isPolish
        ? "Symulacja procesów restauracji z komunikacją klient-serwer, socketami TCP, alokacją zasobów i wizualizacją stanu w GUI."
        : "Restaurant process simulation with client-server communication, TCP sockets, resource allocation and GUI state visualization.",
      language: "Java",
      stars: 0,
      forks: 0,
      isFork: false,
      isArchived: false,
      updatedAt: null,
      topics: ["java", "tcp", "sockets", "simulation"]
    },
    {
      id: -102,
      name: "vocabulary-learning-app",
      fullName: "roposropos/vocabulary-learning-app",
      url: "https://github.com/roposropos/vocabulary-learning-app",
      description: isPolish
        ? "Aplikacja webowa do nauki słówek z zestawami, fiszkami, quizami i śledzeniem postępów użytkownika."
        : "Web application for learning vocabulary with word sets, flashcards, quizzes and user progress tracking.",
      language: "Python",
      stars: 0,
      forks: 0,
      isFork: false,
      isArchived: false,
      updatedAt: null,
      topics: ["django", "python", "web", "learning"]
    },
    {
      id: -103,
      name: "bilingual-portfolio-website",
      fullName: "roposropos/bilingual-portfolio-website",
      url: "https://github.com/roposropos/bilingual-portfolio-website",
      description: isPolish
        ? "Dwujęzyczne portfolio z case studies projektów, pobieraniem CV, formularzem mailowym i dynamicznym indeksem GitHuba."
        : "Bilingual portfolio with project case studies, CV downloads, email compose flow and a dynamic GitHub repository index.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      isFork: false,
      isArchived: false,
      updatedAt: null,
      topics: ["nextjs", "react", "typescript", "portfolio"]
    }
  ];
}

function GithubLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.16 1.18A10.95 10.95 0 0 1 12 6.15c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.77 1.06.77 2.13v3.15c0 .31.21.67.79.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0ZM7.12 20.45H3.56V9h3.56v11.45ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm15.11 13.02h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28Z" />
    </svg>
  );
}

export function PortfolioExperience({
  locale,
  content,
  githubRepositories
}: PortfolioExperienceProps) {
  const [activeProjectId, setActiveProjectId] = useState<Project["id"]>(
    content.projects[0].id
  );
  const fallbackGithubRepositories = useMemo(
    () => getFallbackGithubRepositories(locale),
    [locale]
  );
  const [liveGithubRepositoryData, setLiveGithubRepositoryData] =
    useState(
      githubRepositories.length > 0 ? githubRepositories : fallbackGithubRepositories
    );
  const otherLocale = locale === "pl" ? "en" : "pl";
  const liveGithubRepositories = useMemo(
    () => getGithubProjectRepositories(content, liveGithubRepositoryData),
    [content, liveGithubRepositoryData]
  );

  useEffect(() => {
    let isActive = true;

    async function refreshGithubData() {
      try {
        const routeData = await fetchGithubRouteData();
        const routeRepositories =
          routeData && Array.isArray(routeData.repositories)
            ? routeData.repositories
            : null;
        const shouldUseDirectFallback =
          !routeData || !routeRepositories || routeRepositories.length === 0;
        const directData = shouldUseDirectFallback
          ? await fetchPortfolioGithubData(content.links.github)
          : null;
        const data = directData ?? routeData;

        if (!data) {
          return;
        }

        if (!isActive) {
          return;
        }

        if (Array.isArray(data.repositories)) {
          const repositories = data.repositories as GithubRepository[];

          setLiveGithubRepositoryData((currentRepositories) =>
            repositories.length > 0 || currentRepositories.length === 0
              ? repositories
              : currentRepositories
          );
        }
      } catch {
        // The server-rendered GitHub data stays visible if the live refresh fails.
      }
    }

    void refreshGithubData();

    return () => {
      isActive = false;
    };
  }, [content.links.github]);

  const activeProject =
    content.projects.find((project) => project.id === activeProjectId) ??
    content.projects[0];

  return (
    <main>
      <Hero content={content} locale={locale} otherLocale={otherLocale} />
      <RecruiterStrip content={content} />
      <MobileSectionNav items={content.nav} />

      <section id="projects" className="section-block">
        <div className="page-shell">
          <SectionHeading
            kicker={content.sections.projects.kicker}
            title={content.sections.projects.title}
            intro={content.sections.projects.intro}
          />

          <div className="mt-8 grid gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-stretch">
            <div className="featured-project-list -mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-3 xl:mx-0 xl:grid xl:h-full xl:grid-rows-3 xl:overflow-visible xl:px-0 xl:pb-0 xl:self-stretch">
              <AnimatePresence initial={false}>
                {content.projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isActive={activeProject.id === project.id}
                    onSelect={() => setActiveProjectId(project.id)}
                  />
                ))}
              </AnimatePresence>
            </div>

            <ProjectDetail project={activeProject} locale={locale} />
          </div>

          <LiveGithubRepositories
            content={content}
            locale={locale}
            repositories={liveGithubRepositories}
          />
        </div>
      </section>

      <section id="stack" className="section-block border-y border-soft bg-white/50">
        <div className="page-shell">
          <SectionHeading
            kicker={content.sections.stack.kicker}
            title={content.sections.stack.title}
            intro={content.sections.stack.intro}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
            {content.skillGroups.map((group, index) => {
              const Icon = stackIcons[index] ?? Code2;

              return (
                <article key={group.title} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-soft text-violet">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ink">{group.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{group.note}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag px-3 py-1.5 text-sm font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education" className="section-block">
        <div className="page-shell">
          <SectionHeading
            kicker={content.sections.education.kicker}
            title={content.sections.education.title}
            intro={content.sections.education.intro}
          />

          <div className="mt-8 grid gap-5 md:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4">
              {content.timeline.map((item) => (
                <article key={item.title} className="card p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-violet-dark">
                        <GraduationCap className={iconClass} />
                        {item.period}
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-semibold text-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.body}</p>
                </article>
              ))}
            </div>

            <aside className="dark-card p-6 text-white">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-violet-on-dark" />
                <h3 className="text-xl font-bold">
                  {locale === "pl" ? "Jak pracuję" : "How I work"}
                </h3>
              </div>
              <div className="mt-6 grid gap-3">
                {content.strengths.map((strength) => (
                  <div key={strength} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-on-dark" />
                    <span className="text-sm leading-6 text-white/80">{strength}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 border-t border-white/15 pt-6">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className={iconClass} />
                  {content.contact.location}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Contact content={content} />
    </main>
  );
}

function Hero({
  content,
  locale,
  otherLocale
}: {
  content: PortfolioContent;
  locale: Locale;
  otherLocale: Locale;
}) {
  return (
    <section className="relative min-h-[82svh] overflow-hidden bg-[#0c0a14] text-white md:min-h-[86svh]">
      <div className="hero-grid absolute inset-0" />

      <header className="relative z-10 pt-5">
        <nav className="page-shell glass-nav site-nav flex min-h-14 items-center justify-between gap-4 rounded-lg px-3 py-2 text-white">
          <a href="#top" className="brand-link focus-ring flex items-center gap-3 rounded-md px-2 py-1.5">
            <span className="brand-mark flex h-9 w-9 items-center justify-center rounded-lg bg-violet text-sm font-black text-white">
              RT
            </span>
            <span className="hidden text-sm font-bold sm:inline">Robert Tworek</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link focus-ring rounded-md px-3 py-2 text-sm font-semibold"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/${otherLocale}`}
              className="nav-action interactive-lift focus-ring inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white"
              aria-label={locale === "pl" ? "Switch to English" : "Przełącz na polski"}
            >
              <Languages className={iconClass} />
              {otherLocale.toUpperCase()}
            </Link>
            <a
              href={content.links.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className="nav-icon-action interactive-lift focus-ring hidden h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white sm:flex"
            >
              <GithubLogo className="h-5 w-5" />
            </a>
            <a
              href={content.links.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
              className="nav-icon-action interactive-lift focus-ring hidden h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white sm:flex"
            >
              <LinkedinLogo className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </header>

      <div id="top" className="relative z-10">
        <div className="page-shell grid min-h-[calc(82svh-88px)] items-center gap-10 py-12 md:min-h-[calc(86svh-88px)] md:py-16 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="section-kicker text-violet-on-dark">{content.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-none whitespace-nowrap text-[clamp(2.45rem,10.4vw,4.25rem)] font-black leading-[0.96] text-white md:text-[clamp(3.75rem,5.35vw,5.65rem)]">
              {content.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              {content.hero.body}
            </p>

            <div className="hero-action-grid mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="#projects"
                className="hero-action hero-action-primary interactive-lift focus-ring group flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/10 p-4 text-left hover:bg-white/15"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="hero-action-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-glass text-violet-on-dark">
                    <ArrowDown className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-white/95">
                      {content.hero.primaryCta}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-white/52">
                      {locale === "pl" ? "wybrane realizacje" : "featured work"}
                    </span>
                  </span>
                </span>
                <ArrowDown className="h-4 w-4 shrink-0 text-white/50 transition group-hover-text-violet-on-dark" />
              </a>
              <a
                href={content.links.cv}
                download
                className="hero-action interactive-lift focus-ring group flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/10 p-4 text-left hover:bg-white/15"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="hero-action-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-glass text-violet-on-dark">
                    <Download className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-white/90">
                      {content.hero.secondaryCta}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-white/50">
                      PDF
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/50 transition group-hover-text-violet-on-dark" />
              </a>
              <a
                href={content.links.github}
                target="_blank"
                rel="noreferrer"
                className="hero-action interactive-lift focus-ring group flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/10 p-4 text-left hover:bg-white/15"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="hero-action-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-glass text-violet-on-dark">
                    <GithubLogo className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-white/90">
                      {content.hero.tertiaryCta}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-white/50">
                      roposropos
                    </span>
                  </span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 text-white/50 transition group-hover-text-violet-on-dark" />
              </a>
              <a
                href={content.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hero-action interactive-lift focus-ring group flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/10 p-4 text-left hover:bg-white/15"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="hero-action-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-glass text-violet-on-dark">
                    <LinkedinLogo className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-white/90">
                      {content.hero.linkedinCta}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-white/50">
                      {locale === "pl" ? "profil" : "profile"}
                    </span>
                  </span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 text-white/50 transition group-hover-text-violet-on-dark" />
              </a>
            </div>

          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="hero-scope-panel dark-card hidden p-0 lg:block"
          >
            <div className="hero-scope-header flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-sm font-bold text-white/80">{content.heroPanel.title}</p>
              </div>
              <Terminal className="h-5 w-5 text-violet-on-dark" />
            </div>
            <div className="grid gap-0">
              {content.heroPanel.items.map((item, index) => (
                <div key={item.label} className="hero-scope-item">
                  <div className="flex items-start gap-4">
                    <span className="hero-scope-icon">
                      {(() => {
                        const Icon = stackIcons[index] ?? Code2;

                        return <Icon className="h-4 w-4" />;
                      })()}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-bold text-white">{item.label}</p>
                        <span className="hero-scope-dot" aria-hidden="true" />
                      </div>
                      <p className="mt-1 text-sm font-semibold text-violet-faint">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-white/60">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function RecruiterStrip({ content }: { content: PortfolioContent }) {
  const stripIcons = [GraduationCap, Boxes, Workflow];

  return (
    <section className="relative z-20 -mt-7 pb-8 md:-mt-8 md:pb-10">
      <div className="page-shell">
        <div className="profile-summary-bar -mx-3 flex snap-x gap-3 overflow-x-auto px-3 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-0 md:overflow-hidden md:px-0 md:pb-0">
          {content.recruiterStrip.items.map((item, index) => {
            const Icon = stripIcons[index] ?? Sparkles;

            return (
              <article key={item.label} className="profile-summary-item min-w-[82%] snap-start md:min-w-0">
                <div className="profile-summary-icon" aria-hidden="true">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="profile-summary-copy min-w-0">
                  <p className="profile-summary-value text-sm font-black uppercase tracking-[0.04em]">
                    {item.value}
                  </p>
                  <p className="profile-summary-label mt-1 text-sm font-bold leading-5">
                    {item.label}
                  </p>
                  <p className="profile-summary-detail mt-1 text-sm leading-5">
                    {item.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MobileSectionNav({
  items
}: {
  items: PortfolioContent["nav"];
}) {
  return (
    <div className="sticky top-0 z-30 border-b border-soft bg-[rgba(247,245,251,0.9)] py-2 backdrop-blur-xl md:hidden">
      <nav
        className="page-shell -my-1 flex gap-2 overflow-x-auto py-1"
        aria-label="Mobile section navigation"
      >
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="interactive-lift focus-ring shrink-0 rounded-md border border-soft-strong bg-white/80 px-3 py-2 text-xs font-black text-ink shadow-sm"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  intro,
  tone = "light"
}: {
  kicker: string;
  title: string;
  intro: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="section-heading-block max-w-3xl">
      <p
        className={cn(
          "section-kicker",
          tone === "dark" ? "text-violet-on-dark" : "text-violet-dark"
        )}
      >
        {kicker}
      </p>
      <h2
        className={cn(
          "section-title mt-3 text-balance",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 text-sm leading-6 md:text-lg md:leading-7",
          tone === "dark" ? "text-white/70" : "text-muted"
        )}
      >
        {intro}
      </p>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isActive,
  onSelect
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const cardSignals = project.signals.slice(0, 3);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.24, delay: index * 0.03 }}
      className="h-full min-w-[86%] snap-start sm:min-w-[72%] xl:min-w-0"
    >
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={isActive}
        className={cn(
          "featured-project-card interactive-lift focus-ring card group flex h-full w-full flex-col p-4 text-left md:p-5",
          isActive && "is-active"
        )}
      >
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-bold",
                isActive
                  ? "border border-white/10 bg-white/10 text-violet-on-dark"
                  : "bg-violet-soft text-violet-dark"
              )}
            >
              {project.label}
            </span>
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-md border transition",
                isActive
                  ? "border-white/15 bg-white text-violet-dark"
                  : "border-black/10 bg-white/70 text-violet-dark group-hover:border-violet group-hover:bg-violet-soft"
              )}
              aria-hidden="true"
            >
              {isActive ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              )}
            </span>
          </div>
          {project.shortTitle.toLowerCase() !== project.title.toLowerCase() ? (
            <p
              className={cn(
                "mt-4 text-xs font-black uppercase",
                isActive ? "text-white/55" : "text-muted"
              )}
            >
              {project.shortTitle}
            </p>
          ) : null}
          <h3
            className={cn(
              "text-lg font-black leading-tight md:text-xl",
              isActive ? "text-white" : "text-ink",
              project.shortTitle.toLowerCase() !== project.title.toLowerCase()
                ? "mt-3"
                : "mt-4"
            )}
          >
            {project.title}
          </h3>
          <p
            className={cn(
              "mt-3 text-sm leading-6 md:text-[0.95rem]",
              isActive ? "text-white/74" : "text-muted"
            )}
          >
            {project.teaser}
          </p>
          <div className="project-card-signals mt-4 grid flex-1 grid-rows-3 gap-2">
            {cardSignals.map((item) => (
              <div
                key={item}
                className={cn(
                  "flex min-h-0 items-center gap-3 rounded-md border px-3 py-2 text-sm font-bold",
                  isActive
                    ? "border-white/15 bg-white/10 text-white/82"
                    : "border-soft bg-white/75 text-foreground"
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
                    isActive
                      ? "border border-white/25 bg-violet shadow-[0_0_18px_rgba(123,63,242,0.42)]"
                      : "border border-soft bg-violet-soft"
                  )}
                  aria-hidden="true"
                >
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      isActive
                        ? "bg-white shadow-[0_0_14px_rgba(255,255,255,0.62)]"
                        : "bg-violet"
                    )}
                  />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-4">
            <div
              className={cn(
                "mb-3 h-px w-full",
                isActive ? "bg-white/15" : "bg-black/10"
              )}
            />
            <p
              className={cn(
                "mb-3 text-xs font-black uppercase",
                isActive ? "text-white/48" : "text-muted"
              )}
            >
              Case study
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "rounded-md border px-2.5 py-1 text-xs font-semibold",
                    isActive
                      ? "border-white/15 bg-white/10 text-white"
                      : "tag"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </button>
    </motion.article>
  );
}

function ProjectDetail({ project, locale }: { project: Project; locale: Locale }) {
  const [selectedScreenshotSrc, setSelectedScreenshotSrc] = useState<string | null>(
    null
  );
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const screenshots = project.gallery;
  const implementedProof = project.proof.slice(0, 5);
  const selectedScreenshotIndex = Math.max(
    screenshots.findIndex((screenshot) => screenshot.src === selectedScreenshotSrc),
    0
  );
  const selectedScreenshot = screenshots[selectedScreenshotIndex] ?? project.image;
  const galleryTitle = locale === "pl" ? "Galeria projektu" : "Project gallery";
  const factIcons = [Workflow, Code2, Database, Sparkles];

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={project.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.24 }}
        className="featured-project-detail card h-full p-4 md:p-6"
      >
        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-bold text-violet-dark">
                {project.label}
              </p>
              <h3 className="mt-2 text-2xl font-black leading-tight text-ink">
                {project.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-lift focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-violet bg-violet px-3 py-2 text-sm font-bold text-white"
                >
                  <ExternalLink className={iconClass} />
                  Live demo
                </a>
              ) : null}
              <a
                href={project.readme}
                target="_blank"
                rel="noreferrer"
                className="interactive-lift focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-soft-strong bg-white px-3 py-2 text-sm font-bold text-ink"
              >
                <ExternalLink className={iconClass} />
                README
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="interactive-lift focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-black/10 bg-ink px-3 py-2 text-sm font-bold text-on-dark hover-bg-violet-dark"
              >
                <GithubLogo className={iconClass} />
                {locale === "pl" ? "Repozytorium" : "Repository"}
              </a>
            </div>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.facts.map((fact, factIndex) => {
              const FactIcon = factIcons[factIndex] ?? Sparkles;

              return (
                <span
                  key={fact.label}
                  className="flex min-h-14 items-center gap-3 rounded-md border border-soft bg-violet-soft/80 px-3 py-2 text-sm font-bold leading-5 text-ink"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-violet-dark shadow-[0_8px_22px_rgba(123,63,242,0.12)]">
                    <FactIcon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.68rem] font-black uppercase text-violet-dark">
                      {fact.label}
                    </span>
                    <span className="block text-sm leading-5">{fact.value}</span>
                  </span>
                </span>
              );
            })}
          </div>

          <div className="project-detail-layout mt-5 grid gap-4 xl:grid-cols-2">
            <section className="project-detail-panel rounded-lg border border-soft bg-white/65 p-4">
              <h4 className="flex items-center gap-2 text-sm font-black text-ink">
                <Workflow className={iconClass} />
                {locale === "pl" ? "Problem / Cel" : "Problem / Goal"}
              </h4>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.challenge}
              </p>
            </section>
            <section className="project-detail-panel rounded-lg border border-soft bg-white/65 p-4">
              <h4 className="flex items-center gap-2 text-sm font-black text-ink">
                <Star className={iconClass} />
                {locale === "pl"
                  ? "Dlaczego ten projekt jest ważny"
                  : "Why this project matters"}
              </h4>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.importance}
              </p>
            </section>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
            <section className="project-detail-panel rounded-lg border border-soft bg-white/65 p-4">
              <h4 className="flex items-center gap-2 text-sm font-black text-ink">
                <Boxes className={iconClass} />
                {locale === "pl" ? "Co jest zaimplementowane" : "Implemented scope"}
              </h4>
              <ul className="mt-3 grid gap-2">
                {implementedProof.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                    <span className="text-sm leading-6 text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="project-detail-panel rounded-lg border border-soft bg-white/65 p-4">
              <h4 className="flex items-center gap-2 text-sm font-black text-ink">
                <Code2 className={iconClass} />
                {locale === "pl" ? "Zakres pracy" : "Scope of work"}
              </h4>
              <ul className="mt-3 grid gap-2">
                {project.contributionPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                    <span className="text-sm leading-6 text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="project-detail-panel mt-4 rounded-lg border border-soft bg-white/65 p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <h4 className="flex items-center gap-2 text-sm font-black text-ink">
                  <Zap className={iconClass} />
                  {locale === "pl" ? "Zakres techniczny" : "Technical scope"}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag px-3 py-1.5 text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid shrink-0 grid-cols-3 gap-2 lg:min-w-[15rem] lg:grid-cols-1">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-md border border-soft bg-white/75 px-3 py-2"
                  >
                    <p className="text-sm font-black text-ink">{metric.value}</p>
                    <p className="mt-0.5 text-[0.68rem] font-bold uppercase text-muted">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="project-gallery mt-4 rounded-lg border border-soft bg-white/55 p-3">
            <div className="grid gap-3 lg:grid-cols-[minmax(9rem,0.7fr)_minmax(0,1.8fr)_auto] lg:items-stretch">
              <div className="flex flex-col justify-center">
                <h4 className="flex items-center gap-2 text-sm font-black text-ink">
                  <Images className={iconClass} />
                  {galleryTitle}
                </h4>
                <p className="mt-1 text-xs font-semibold text-muted">
                  {locale === "pl"
                    ? "Wybrane ekrany i wyniki projektu."
                    : "Selected project screens and results."}
                </p>
              </div>

              <div
                className="grid min-w-0 gap-2 overflow-x-auto pb-1 lg:pb-0"
                style={{
                  gridTemplateColumns: `repeat(${screenshots.length}, minmax(7.5rem, 1fr))`
                }}
              >
                {screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot.src}
                    type="button"
                    onClick={() => {
                      setSelectedScreenshotSrc(screenshot.src);
                      setIsGalleryOpen(true);
                    }}
                    aria-pressed={selectedScreenshotIndex === index}
                    className={cn(
                      "project-gallery-thumb focus-ring group relative h-[5.2rem] min-w-[7.5rem] w-full overflow-hidden rounded-md border bg-ink/5",
                      selectedScreenshotIndex === index
                        ? "border-violet shadow-[0_0_0_2px_rgba(123,63,242,0.14)]"
                        : "border-black/10 hover-border-violet"
                    )}
                  >
                    <Image
                      src={screenshot.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 14rem, 45vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-ink/72 px-2 py-1 text-left text-[0.62rem] font-bold text-white">
                      {screenshot.caption}
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsGalleryOpen(true)}
                className="interactive-lift focus-ring inline-flex min-h-16 w-fit items-center justify-center gap-2 rounded-md border border-soft-strong bg-white px-3 py-2 text-xs font-black text-ink lg:h-full lg:justify-self-end"
                aria-label={
                  locale === "pl"
                    ? `Otwórz screen: ${selectedScreenshot.caption}`
                    : `Open screenshot: ${selectedScreenshot.caption}`
                }
              >
                <Maximize2 className="h-3.5 w-3.5" />
                {locale === "pl" ? "Otwórz" : "Open"}
              </button>
            </div>
          </section>

          {isGalleryOpen ? (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-ink/88 p-4 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-label={galleryTitle}
            >
              <div className="relative w-full max-w-5xl rounded-lg border border-white/12 bg-[#0c0a14] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.44)] md:p-4">
                <button
                  type="button"
                  onClick={() => setIsGalleryOpen(false)}
                  className="interactive-lift focus-ring absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white"
                  aria-label={locale === "pl" ? "Zamknij galerię" : "Close gallery"}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="project-gallery-modal-image relative overflow-hidden rounded-md bg-white">
                  <Image
                    src={selectedScreenshot.src}
                    alt={selectedScreenshot.alt}
                    fill
                    sizes="92vw"
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 pr-12 text-sm font-bold text-white">
                  {selectedScreenshot.caption}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </motion.article>
    </AnimatePresence>
  );
}

function LiveGithubRepositories({
  content,
  locale,
  repositories
}: {
  content: PortfolioContent;
  locale: Locale;
  repositories: GithubRepository[];
}) {
  const [activeRepositoryFilter, setActiveRepositoryFilter] =
    useState<ProjectCategory>("all");
  const filteredRepositories = useMemo(
    () =>
      repositories.filter((repository) =>
        repositoryMatchesFilter(repository, activeRepositoryFilter)
      ),
    [activeRepositoryFilter, repositories]
  );
  const hasRepositories = repositories.length > 0;
  const hasFilteredRepositories = filteredRepositories.length > 0;
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollRepositories(direction: "previous" | "next") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: direction === "next" ? carousel.clientWidth * 0.82 : -carousel.clientWidth * 0.82,
      behavior: "smooth"
    });
  }

  return (
    <section className="mt-9 border-t border-soft pt-7 md:mt-11 md:pt-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="section-kicker text-violet-dark">
            {locale === "pl" ? "GitHub" : "GitHub"}
          </p>
          <h3 className="mt-3 text-2xl font-black text-ink md:text-3xl">
            {content.sections.projects.githubTitle}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted md:text-base">
            {content.sections.projects.githubIntro}
          </p>
        </div>
        <a
          href={content.links.github}
          target="_blank"
          rel="noreferrer"
          className="interactive-lift focus-ring inline-flex w-fit items-center gap-2 rounded-md border border-soft-strong bg-white px-4 py-3 text-sm font-bold text-ink"
        >
          <GithubLogo className={iconClass} />
          {locale === "pl" ? "Profil GitHub" : "GitHub profile"}
          <ExternalLink className={iconClass} />
        </a>
      </div>

      {hasRepositories ? (
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-2">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted">
              <Filter className={iconClass} />
              {locale === "pl" ? "Filtr GitHub" : "GitHub filter"}
            </span>
            <div className="-mx-3 overflow-x-auto px-3 pb-1 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
              <div
                className="flex w-max gap-2 md:w-auto md:flex-wrap"
                role="group"
                aria-label={
                  locale === "pl"
                    ? "Filtry repozytoriów GitHub"
                    : "GitHub repository filters"
                }
              >
                {content.filters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveRepositoryFilter(filter.id)}
                    aria-pressed={activeRepositoryFilter === filter.id}
                    className={cn(
                      "interactive-lift focus-ring rounded-md border px-3 py-2 text-sm font-semibold",
                      activeRepositoryFilter === filter.id
                        ? "border-violet bg-violet text-white shadow-lg shadow-violet-950/10"
                        : "border-soft-strong bg-white/70 text-ink hover-border-violet"
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className="hidden shrink-0 items-center gap-2 md:flex"
            aria-label={
              locale === "pl"
                ? "Przewijanie projektów GitHub"
                : "GitHub projects carousel controls"
            }
          >
            <button
              type="button"
              onClick={() => scrollRepositories("previous")}
              className="interactive-lift focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-soft-strong bg-white text-ink"
              aria-label={locale === "pl" ? "Poprzednie projekty" : "Previous projects"}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollRepositories("next")}
              className="interactive-lift focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-violet bg-violet text-white"
              aria-label={locale === "pl" ? "Następne projekty" : "Next projects"}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : null}

      {hasRepositories && hasFilteredRepositories ? (
        <div className="github-carousel-shell mt-6">
          <div
            ref={carouselRef}
            className="github-repository-carousel flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
            aria-label={
              locale === "pl"
                ? "Przewijana lista projektów z GitHuba"
                : "Scrollable list of GitHub projects"
            }
          >
          {filteredRepositories.map((repository, index) => {
            const updatedAt = formatRepositoryDate(repository.updatedAt, locale);
            const openLabel =
              locale === "pl" ? "Otwórz repozytorium" : "Open repository";
            const archivedLabel =
              locale === "pl" ? "archiwalne" : "archived";
            const forkLabel = locale === "pl" ? "fork" : "fork";

            return (
              <motion.a
                key={repository.id}
                href={repository.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.22, delay: Math.min(index * 0.025, 0.16) }}
                className="github-repository-card interactive-lift card focus-ring group relative flex shrink-0 snap-start overflow-hidden p-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-violet"
                />
                <div className="flex w-full flex-col p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-md bg-violet-soft px-2.5 py-1 text-xs font-black uppercase text-violet-dark">
                          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                          {repository.language ??
                            content.sections.projects.githubLanguageFallback}
                        </span>
                        {repository.isArchived ? (
                          <span className="rounded-md border border-black/10 px-2.5 py-1 text-xs font-bold text-muted">
                            {archivedLabel}
                          </span>
                        ) : null}
                        {repository.isFork ? (
                          <span className="rounded-md border border-black/10 px-2.5 py-1 text-xs font-bold text-muted">
                            {forkLabel}
                          </span>
                        ) : null}
                      </div>
                      <h4 className="mt-3 text-lg font-black leading-tight text-ink">
                        {formatRepositoryName(repository.name)}
                      </h4>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink text-on-dark transition group-hover:bg-violet">
                      <GithubLogo className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-6 text-muted">
                    {repository.description ??
                      content.sections.projects.githubNoDescription}
                  </p>

                  {repository.topics.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {repository.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="tag px-2.5 py-1 text-xs font-semibold"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-black/10 pt-4 text-xs font-bold text-muted">
                    {updatedAt ? (
                      <span>
                        {content.sections.projects.githubUpdatedLabel}: {updatedAt}
                      </span>
                    ) : null}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-violet" />
                      {repository.stars}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5 text-violet" />
                      {repository.forks}
                    </span>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-black text-violet-dark">
                    {openLabel}
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.a>
            );
          })}
          </div>
        </div>
      ) : (
        <div className="card mt-6 border-dashed p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-soft text-violet">
              <GithubLogo className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-black text-ink">
                {hasRepositories
                  ? locale === "pl"
                    ? "Brak projektów w tym filtrze"
                    : "No projects in this filter"
                  : content.sections.projects.githubEmptyTitle}
              </h4>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                {hasRepositories
                  ? locale === "pl"
                    ? "Wybierz inny filtr albo pokaż wszystkie repozytoria."
                    : "Choose another filter or show all repositories."
                  : content.sections.projects.githubEmptyText}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Contact({ content }: { content: PortfolioContent }) {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const emailAddress = content.links.email.replace("mailto:", "");

  function buildEmailHref() {
    const params = new URLSearchParams();
    const trimmedSubject = emailSubject.trim();
    const trimmedMessage = emailMessage.trim();

    if (trimmedSubject) {
      params.set("subject", trimmedSubject);
    }

    if (trimmedMessage) {
      params.set("body", trimmedMessage);
    }

    const query = params.toString();

    return query ? `${content.links.email}?${query}` : content.links.email;
  }

  function openEmailComposer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildEmailHref();
  }

  function copyTextFallback(value: string) {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();

    try {
      return document.execCommand("copy");
    } finally {
      document.body.removeChild(textArea);
    }
  }

  async function copyEmail() {
    let didCopy = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
        didCopy = true;
      }
    } catch {
      didCopy = false;
    }

    if (!didCopy) {
      didCopy = copyTextFallback(emailAddress);
    }

    if (didCopy) {
      setIsEmailCopied(true);
      window.setTimeout(() => setIsEmailCopied(false), 1800);
    } else {
      setIsEmailCopied(false);
    }
  }

  const actions = [
    {
      href: content.links.linkedin,
      label: content.contact.linkedinActionLabel,
      description: content.contact.linkedinLabel,
      icon: LinkedinLogo,
      external: true
    },
    {
      href: content.links.github,
      label: content.contact.githubActionLabel,
      description: content.contact.githubLabel,
      icon: GithubLogo,
      external: true
    },
    {
      href: content.links.cv,
      label: content.contact.cvLabel,
      description: content.contact.cvDescription,
      icon: Download,
      external: false,
      download: true
    }
  ];

  return (
    <section id="contact" className="section-block section-block-contact relative overflow-hidden bg-ink text-white">
      <div className="contact-photo-layer absolute inset-0" />
      <div className="page-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="flex h-full flex-col">
            <SectionHeading
              kicker={content.sections.contact.kicker}
              title={content.sections.contact.title}
              intro={content.sections.contact.intro}
              tone="dark"
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <button
                type="button"
                onClick={() => {
                  void copyEmail();
                }}
                className="interactive-lift focus-ring group flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/10 p-4 text-left hover:bg-white/15"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-glass text-violet-on-dark">
                    {isEmailCopied ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </span>
                  <span aria-live="polite" className="min-w-0">
                    <span className="block truncate text-sm font-bold text-white/90">
                      {isEmailCopied
                        ? content.contact.emailCopiedLabel
                        : content.contact.copyEmailLabel}
                    </span>
                    <span className="mt-1 block truncate text-xs font-semibold text-white/50">
                      {emailAddress}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/50 transition group-hover-text-violet-on-dark" />
              </button>

              {actions.map((action) => {
                const Icon = action.icon;

                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                    download={action.download}
                    className="interactive-lift focus-ring group flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/10 p-4 hover:bg-white/15"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-glass text-violet-on-dark">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-bold text-white/90">
                          {action.label}
                        </span>
                        <span className="mt-1 block truncate text-xs font-semibold text-white/50">
                          {action.description}
                        </span>
                      </span>
                    </span>
                    {action.external ? (
                      <ExternalLink className="h-4 w-4 shrink-0 text-white/50 transition group-hover-text-violet-on-dark" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-white/50 transition group-hover-text-violet-on-dark" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={openEmailComposer}
            className="flex h-full min-h-full flex-col rounded-lg border border-white/15 bg-white p-5 text-ink shadow-2xl shadow-black/20 md:p-6"
          >
            <div className="flex items-center gap-3 border-b border-black/10 pb-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-soft text-violet">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-black text-ink">
                  {content.contact.composeTitle}
                </h3>
                <p className="mt-1 truncate text-sm font-semibold text-muted">
                  {emailAddress}
                </p>
              </div>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-black text-ink">
                {content.contact.subjectLabel}
              </span>
              <input
                type="text"
                value={emailSubject}
                onChange={(event) => setEmailSubject(event.target.value)}
                placeholder={content.contact.subjectPlaceholder}
                className="focus-ring mt-2 min-h-12 w-full rounded-md border border-black/10 bg-surface px-4 py-3 text-sm font-semibold text-ink outline-none transition focus:border-violet"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-black text-ink">
                {content.contact.messageLabel}
              </span>
              <textarea
                value={emailMessage}
                onChange={(event) => setEmailMessage(event.target.value)}
                placeholder={content.contact.messagePlaceholder}
                rows={7}
                className="focus-ring mt-2 min-h-44 w-full flex-1 resize-y rounded-md border border-black/10 bg-surface px-4 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-violet"
              />
            </label>

            <button
              type="submit"
              className="interactive-lift focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-violet px-4 py-3 text-sm font-black text-white"
            >
              <Send className={iconClass} />
              {content.contact.sendEmailLabel}
            </button>
          </form>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Robert Tworek - 2026</p>
          <p>Next.js / React / TypeScript / Tailwind CSS / Motion</p>
        </div>
      </div>
    </section>
  );
}
