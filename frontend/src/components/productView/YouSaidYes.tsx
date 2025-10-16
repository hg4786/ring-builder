export const YouSaidYes = () => {
  return (
    <div className="section" style={{ background: "#f9f9f9" }}>
      <h2 className="section-title">You Said Yes</h2>
      <div className="gallery-grid">
        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            src={`https://media.istockphoto.com/id/2190395779/photo/people-hands-or-empathy-with-consultation-for-counseling-understanding-or-therapy-at-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=cL_9e3FFhFxaGwe5Q1X6Gis4rh_Opaimjo_zzX-AovM=`}
            alt={`Gallery image ${i + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
};
