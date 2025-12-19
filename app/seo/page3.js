import Link from "next/link";

export const metadata = {
  title: "Top AI Chat Characters - Janitor AI",
  description: "Meet popular AI characters and start chatting instantly.",
  keywords: "AI chat, AI characters, roleplay AI"
};

export default function SEOPage3() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>Top AI Chat Characters</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
        Meet the most popular AI characters and start chatting today.
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
