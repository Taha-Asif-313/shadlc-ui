export async function GET() {
    return new Response(`User-agent: *
  Disallow:
  Sitemap: https://shadlc.vercel.app/sitemap.xml`, {
      headers: { "Content-Type": "text/plain" },
    });
  }
  