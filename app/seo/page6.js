import Link from "next/link";

export const metadata = {
  title: "Uncensored AI Chat - Janitor AI",
  description: "Experience uncensored AI character interactions safely.",
  keywords: "AI chat, uncensored, roleplay AI"
};

export default function SEOPage6() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>Uncensored AI Chat</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
        Experience uncensored AI character interactions safely and instantly.
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
