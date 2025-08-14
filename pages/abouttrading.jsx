export default function AboutTrading() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#003242",
      color: "white",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
    },
    heading: {
      fontSize: "1.8rem",
      marginBottom: "1rem",
      color: "#00bcd4",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Why Trading Matters</h2>
      <p>
        In today’s fast-paced global economy, trading is more than just buying
        and selling — it’s a bridge that connects opportunities across borders.
        At Meta Trading Community, we equip our members with the tools,
        knowledge, and network they need to thrive in forex, crypto, and
        commodities markets.
      </p>
      <p>
        Our focus is not just on profits, but on building financial literacy and
        resilience so our community can grow together sustainably.
      </p>
    </div>
  );
}
