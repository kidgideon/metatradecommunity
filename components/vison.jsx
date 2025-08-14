export default function VisionStatement() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#003242",
      color: "white",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "1rem",
      color: "#00bcd4",
    },
    quote: {
      fontStyle: "italic",
      fontSize: "1.2rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Vision</h2>
      <p style={styles.quote}>
        "To create a world-class trading community where knowledge, trust, and
        opportunity converge — empowering every member to achieve financial
        freedom."
      </p>
    </div>
  );
}
