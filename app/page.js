import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 20 }}>
        Janitor AI Chat
      </h1>
      <p style={{ fontSize: "1.2rem", lineHeight: 1.7, opacity: 0.8 }}>
        Experience AI character chat and roleplay prompts. Start chatting now!
      </p>

      <div style={{ marginTop: 30 }}>
        <Link href="/redirect">
          <button
            style={{
              padding: "14px 28px",
              fontSize: "1.1rem",
              borderRadius: 8,
              backgroundColor: "#6c5ce7",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Start AI Chat →
          </button>
        </Link>
      </div>
    </main>
  );
}
