// app/api/blogs/route.js
// Next.js App Router API route — proxies Django's GET /blogs/

const DJANGO_BASE_URL = process.env.DJANGO_API_URL || "http://127.0.0.1:8000/api";

export async function GET() {
  try {
    const res = await fetch(`${DJANGO_BASE_URL}/blogs/`, {
      headers: {
        "Content-Type": "application/json",
      },
      // Revalidate every 60 seconds (ISR-style caching)
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return Response.json(
        { error: `Django API error: ${res.status} ${res.statusText}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return Response.json(data, { status: 200 });

  } catch (error) {
    return Response.json(
      { error: "Failed to connect to the backend.", details: error.message },
      { status: 500 }
    );
  }
}