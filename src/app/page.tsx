export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <section
        style={{
          width: "min(720px, 100%)",
          padding: "3rem",
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.88)",
          boxShadow: "0 24px 80px rgba(15, 23, 42, 0.12)",
          backdropFilter: "blur(16px)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#2563eb",
          }}
        >
          Next.js is ready
        </p>
        <h1
          style={{
            margin: "1rem 0 0.75rem",
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            lineHeight: 1,
          }}
        >
          Your project has been set up successfully.
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "#334155",
          }}
        >
          Start editing <code>src/app/page.tsx</code> and run <code>npm run dev</code>{" "}
          to launch the local development server.
        </p>
      </section>
    </main>
  );
}
