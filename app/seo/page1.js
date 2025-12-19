import Link from "next/link";

export const metadata = {
  title: "AI Character Chat Tips - Janitor AI",
  description: "Discover top AI character prompts and start chatting with AI today.",
  keywords: "AI chat, AI character, AI prompts, roleplay AI, Janitor AI"
};

export default function SEOPage1() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>AI Character Chat Tips</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
        Discover top prompts and AI character interactions to enhance your chat experience.
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
