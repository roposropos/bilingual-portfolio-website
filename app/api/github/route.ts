import { NextResponse } from "next/server";
import {
  getPublicGithubRepoCount,
  getPublicGithubRepositories
} from "@/lib/github";

export const dynamic = "force-dynamic";

const GITHUB_USERNAME = "roposropos";
const FALLBACK_PROJECT_REPO_COUNT = 5;

export async function GET() {
  const [repositories, publicGithubRepoCount] = await Promise.all([
    getPublicGithubRepositories(GITHUB_USERNAME, {
      fresh: true
    }),
    getPublicGithubRepoCount(GITHUB_USERNAME, {
      fresh: true
    })
  ]);

  if (repositories === null) {
    return NextResponse.json(
      {
        repoCount: getFallbackProjectRepoCount(publicGithubRepoCount)
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0"
        }
      }
    );
  }

  const projectRepositories = repositories.filter(
    (repository) => repository.name.toLowerCase() !== GITHUB_USERNAME
  );
  const repoCount = projectRepositories.length;

  return NextResponse.json(
    {
      repoCount,
      repositories: projectRepositories
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0"
      }
    }
  );
}

function getFallbackProjectRepoCount(publicGithubRepoCount: number | null) {
  if (typeof publicGithubRepoCount === "number" && publicGithubRepoCount > 0) {
    return Math.max(publicGithubRepoCount - 1, 0);
  }

  return FALLBACK_PROJECT_REPO_COUNT;
}
