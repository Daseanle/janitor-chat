import Link from "next/link";

export const metadata = {
  title: "Advanced AI Roleplay - Janitor AI",
  description: "Unlock advanced AI roleplay techniques for immersive chat.",
  keywords: "AI roleplay, advanced prompts, AI chat"
};

export default function SEOPage5() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>Advanced AI Roleplay</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
        Learn advanced AI roleplay techniques for immersive character interactions.
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
