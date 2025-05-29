export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      textAlign: "center"
    }}>
      <img
        src="/aiero_logo.png"
        alt="AIero Logo"
        width={200}
        height={200}
        style={{ marginBottom: "1rem" }}
      />
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>AIero</h1>
      <p style={{ fontSize: "1.25rem", color: "#ccc", marginBottom: "1.5rem" }}>
        Autonomous Conflict Detection for the Skies
      </p>
      <a
        href="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/"
        target="_blank"
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#2563eb",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "0.5rem",
          fontSize: "1.125rem"
        }}
      >
        Launch Conflict Detector →
      </a>
      <div style={{
        backgroundColor: "#111",
        border: "1px solid #333",
        padding: "2rem",
        marginTop: "2rem",
        borderRadius: "0.75rem",
        maxWidth: "600px"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Our Mission</h2>
        <p style={{ color: "#aaa", marginTop: "1rem" }}>
          AIero empowers airspace safety with AI-driven detection and visualization.
          We help defense, commercial, and aerospace partners identify in-flight conflicts
          faster and more reliably.
        </p>
      </div>
    </main>
  );
}