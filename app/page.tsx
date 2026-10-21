import { redirect } from "next/navigation";

// "/" is rewritten to /site.html in next.config.ts, this is only a fallback.
export default function Page() {
  redirect("/site.html");
}
