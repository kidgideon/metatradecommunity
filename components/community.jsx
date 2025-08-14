export default function CommunityImpact() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#006f94",
      color: "white",
      marginBottom: "1.5rem",
    },
    heading: {
      fontSize: "1.8rem",
      marginBottom: "1rem",
      color: "#ffe082",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Community Impact</h2>
      <p>
        Beyond trading, we believe in giving back. Our outreach programs have
        funded educational workshops, supported small business growth, and
        offered scholarships to aspiring traders from underrepresented
        backgrounds.
      </p>
      <p>
        Every trade you make with us helps fuel initiatives that empower lives
        and create real-world change.
      </p>
    </div>
  );
}
