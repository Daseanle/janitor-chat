import Link from "next/link";

export const metadata = {
  title: "Ultimate AI Chat Platform - Janitor AI",
  description: "Your all-in-one AI character chat experience starts here.",
  keywords: "AI chat, ultimate platform, roleplay AI"
};

export default function SEOPage10() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>Ultimate AI Chat Platform</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
        Your all-in-one AI character chat experience starts here.
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
