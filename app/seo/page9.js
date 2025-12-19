import Link from "next/link";

export const metadata = {
  title: "AI Roleplay Stories - Janitor AI",
  description: "Read and interact with AI roleplay stories instantly.",
  keywords: "AI roleplay, stories, AI chat"
};

export default function SEOPage9() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>AI Roleplay Stories</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
        Read and interact with AI roleplay stories instantly.
      </p>
      <div style={{ marginTop: 20 }}>
        <Link href="/redirect">
          <button
            style={{
              padding: "12px 24px",
              fontSize: "1rem",
              borderRadius: 6,
              backgroundColor: "#6c5ce7",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Start Chat →
          </button>
        </Link>
      </div>
    </main>
  );
}
