import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--footer-bg)",
        padding: "48px 24px",
        textAlign: "center",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="container">
        <h4 style={{ marginBottom: "16px", color: "var(--text-secondary)" }}>
          Threadly
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <a
            href="#"
            style={{ color: "var(--text-secondary)", textDecoration: "none" }}
          >
            Privacy
          </a>
          <a
            href="#"
            style={{ color: "var(--text-secondary)", textDecoration: "none" }}
          >
            Terms
          </a>
          <a
            href="#"
            style={{ color: "var(--text-secondary)", textDecoration: "none" }}
          >
            Contact
          </a>
        </div>
        <p style={{ fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} Threadly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
