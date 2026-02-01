import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        paddingTop: "120px",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <div className="animate-fade-in">
        <h1 style={{ marginBottom: "24px" }}>
          Connect <span style={{ color: "var(--primary-color)" }}>Deeply</span>,
          <br />
          Share <span style={{ color: "var(--secondary-color)" }}>Freely</span>.
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "480px" }}>
          Threadly is the open-source social platform designed for authentic
          connections. No algorithms, just you and your community.
        </p>
        <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
          <a
            href="https://github.com/rashidekbal/threadly/releases"
            className="btn btn-primary"
          >
            Get the App
          </a>
          <a href="#open-source" className="btn btn-outline">
            View Source
          </a>
        </div>
      </div>

      <div
        className="animate-fade-in"
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "auto",
            backgroundColor: "#fff",
            borderRadius: "24px",
            boxShadow: "var(--shadow-md)",
            border: "4px solid #e0e0e0",
            padding: "4px",
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/screenshots/3.jpg"
            alt="Threadly App Interface"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "18px",
            }}
          />
        </div>
        {/* Floating elements could go here */}
      </div>
    </section>
  );
};

export default Hero;
