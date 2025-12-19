import Link from "next/link";

export const metadata = {
  title: "Best AI Roleplay Prompts - Janitor AI",
  description: "Explore AI roleplay prompts to enhance character chat experiences.",
  keywords: "AI prompts, roleplay AI, AI chat, Janitor AI"
};

export default function SEOPage2() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 20 }}>Best AI Roleplay Prompts</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
        Explore AI character prompts and roleplay scenarios for better chat.
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
