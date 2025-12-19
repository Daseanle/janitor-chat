import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 700 }}>
        <h1 style={{ fontSize: "3rem", marginBottom: 20 }}>
          Janitor AI Chat
        </h1>

        <p style={{ fontSize: "1.2rem", lineHeight: 1.7, opacity: 0.9 }}>
          Experience next-level AI character chat and roleplay.
          Discover uncensored prompts, immersive personalities,
          and realistic AI conversations used by thousands of users daily.
        </p>

        <div style={{ marginTop: 40 }}>
          <Link href="/redirect">
            <button
              style={{
                background: "#6c5ce7",
                border: "none",
                padding: "16px 36px",
                fontSize: "1.1rem",
                borderRadius: 10,
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Start AI Chat Now →
            </button>
          </Link>
        </div>

        <p style={{ marginTop: 20, fontSize: 14, opacity: 0.6 }}>
          Free access • No signup required
        </p>
      </div>
    </main>
  );
}
