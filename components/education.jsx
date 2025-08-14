export default function EducationHub() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#eaf4f6",
      color: "#003242",
      marginBottom: "1.5rem",
      border: "1px solid #006f94",
    },
    heading: {
      fontSize: "1.8rem",
      color: "#006f94",
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Meta Education Hub</h2>
      <p>
        Knowledge is the most powerful currency. Through the Meta Education
        Hub, members gain access to webinars, trading simulations, strategy
        breakdowns, and one-on-one coaching sessions with experienced traders.
      </p>
      <p>
        Whether you’re a beginner or seasoned investor, our tailored learning
        paths ensure you’re always ahead of market trends.
      </p>
    </div>
  );
}
