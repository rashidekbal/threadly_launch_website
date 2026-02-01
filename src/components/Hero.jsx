import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="animate-fade-in hero-content">
        <h1 style={{ marginBottom: "24px" }}>
          Connect <span style={{ color: "var(--primary-color)" }}>Deeply</span>,
          <br />
          Share <span style={{ color: "var(--secondary-color)" }}>Freely</span>.
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "480px",
            margin: "0 auto 24px 0",
          }}
        >
          Threadly is the open-source social platform for real-time connection.
          Experience native speed, offline access, and a community-first design.
        </p>
        <div className="hero-buttons">
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
        className="animate-fade-in hero-image"
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
            backgroundColor: "var(--card-bg)",
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
