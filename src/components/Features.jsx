import React from "react";

const Features = () => {
  const features = [
    {
      title: "Real-Time Chat",
      description:
        "Powered by Socket.IO for instant messaging and seamless connectivity.",
      icon: "⚡",
    },
    {
      title: "Offline First",
      description:
        "Built with Room Database to keep your content accessible anywhere.",
      icon: "💾",
    },
    {
      title: "Native Performance",
      description:
        "Crafted with Java & MVVM architecture for a smooth Android experience.",
      icon: "🚀",
    },
    {
      title: "Rich Media",
      description:
        "Watch Reels with ExoPlayer and capture moments with CameraX.",
      icon: "🎬",
    },
  ];

  return (
    <section id="features" style={{ backgroundColor: "var(--surface-color)" }}>
      <div className="container">
        <h2>Why Threadly?</h2>
        <div className="grid grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div style={{ fontSize: "2.5rem" }}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p style={{ margin: 0 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshot Gallery */}
      <div style={{ marginTop: "80px", textAlign: "center" }}>
        <h3 style={{ marginBottom: "40px" }}>See it in Action</h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            padding: "24px 4px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[2, 3, 10, 6].map((num) => (
            <div
              key={num}
              style={{
                width: "220px",
                height: "auto",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                border: "4px solid #e0e0e0",
                padding: "4px",
                backgroundColor: "var(--card-bg)",
                flexShrink: 0,
              }}
            >
              <img
                src={`/assets/screenshots/${num}.jpg`}
                alt={`Screenshot ${num}`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "18px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
