export default function Partnerships() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#f5f9fa",
      color: "#003242",
      borderLeft: "6px solid #006f94",
      borderRadius: "6px",
      marginBottom: "1.5rem",
    },
    heading: {
      fontSize: "1.8rem",
      color: "#006f94",
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Strategic Partnerships</h2>
      <p>
        Over the years, Meta Trading Community has partnered with reputable
        brokerages, fintech innovators, and global financial educators to bring
        exclusive benefits to our members.
      </p>
      <p>
        These partnerships allow us to provide lower trading fees, early access
        to emerging markets, and mentorship from industry veterans — giving our
        traders the edge they need to succeed.
      </p>
    </div>
  );
}
