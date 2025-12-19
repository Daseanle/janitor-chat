import Link from "next/link";

export const metadata = {
  title: "Daily AI Character Chat - Janitor AI",
  description: "Join thousands chatting with AI characters every day.",
  keywords: "AI chat daily, AI characters, roleplay AI"
};

export default function SEOPage8() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>Daily AI Character Chat</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
        Join thousands who chat with AI characters daily.
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
