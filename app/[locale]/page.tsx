import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioExperience } from "@/components/PortfolioExperience";
import { content, isLocale, locales, type Locale } from "@/data/content";
import {
  getPublicGithubRepoCount,
  getPublicGithubRepositories
} from "@/lib/github";
import { metadataBase, socialPreviewImage } from "../siteMetadata";

const GITHUB_USERNAME = "roposropos";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const page = content[locale];

  return {
    metadataBase,
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      languages: {
        pl: "/pl",
        en: "/en"
      }
    },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      locale: locale === "pl" ? "pl_PL" : "en_US",
      images: [socialPreviewImage]
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta.title,
      description: page.meta.description,
      images: [socialPreviewImage.url]
    }
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [githubRepositories, publicGithubRepoCount] = await Promise.all([
    getPublicGithubRepositories(GITHUB_USERNAME),
    getPublicGithubRepoCount(GITHUB_USERNAME)
  ]);
  const githubProjectRepositories =
    githubRepositories?.filter(
      (repository) => repository.name.toLowerCase() !== GITHUB_USERNAME
    ) ?? [];
  const fallbackGithubRepoCount =
    Number(
      content[locale].recruiterStrip.items.find(
        (item) =>
          "dynamicMetric" in item &&
          item.dynamicMetric === "githubPublicRepos"
      )?.value
    ) || null;
  const githubRepoCount =
    githubRepositories === null
      ? getFallbackProjectRepoCount(
          publicGithubRepoCount,
          fallbackGithubRepoCount
        )
      : githubProjectRepositories.length;

  return (
    <PortfolioExperience
      locale={locale as Locale}
      content={content[locale]}
      githubRepoCount={githubRepoCount}
      githubRepositories={githubProjectRepositories}
    />
  );
}

function getFallbackProjectRepoCount(
  publicGithubRepoCount: number | null,
  fallbackGithubRepoCount: number | null
) {
  if (typeof publicGithubRepoCount === "number" && publicGithubRepoCount > 0) {
    return Math.max(publicGithubRepoCount - 1, 0);
  }

  return fallbackGithubRepoCount;
}
