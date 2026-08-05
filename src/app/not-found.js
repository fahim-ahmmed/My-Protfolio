export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          margin: 0,
          fontWeight: "bold",
        }}
      >
        404
      </h1>

      <h2
        style={{
          marginTop: "10px",
          fontSize: "28px",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          color: "#666",
          marginTop: "10px",
        }}
      >
        The page you are looking for does not exist.
      </p>

      <a
        href="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#000",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
        }}
      >
        Go Home
      </a>
    </main>
  );
}