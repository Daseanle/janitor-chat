import Link from "next/link";

export const metadata = {
  title: "AI Chat Tips for Beginners - Janitor AI",
  description: "Step-by-step guide to start AI character chat with prompts.",
  keywords: "AI chat, beginners, prompts, Janitor AI"
};

export default function SEOPage4() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>AI Chat Tips for Beginners</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
        Step-by-step guide to start AI character chat effectively.
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
