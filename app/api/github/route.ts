import { NextResponse } from "next/server";

export async function GET() {
  const username = process.env.GITHUB_USERNAME;

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    // Sirf public repos + fork remove
    const filtered = data
      .filter((repo: any) => !repo.fork)
      .slice(0, 6);

    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch repos" });
  }
}