import Link from "next/link";

export const metadata = {
  title: "AI Chat Tricks & Prompts - Janitor AI",
  description: "Discover tricks and prompts to make AI chats more fun.",
  keywords: "AI tricks, AI prompts, roleplay AI"
};

export default function SEOPage7() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>AI Chat Tricks & Prompts</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
        Discover tricks and prompts to make your AI chats more fun.
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
