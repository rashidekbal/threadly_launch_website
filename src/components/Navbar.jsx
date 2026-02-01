import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        zIndex: 1000,
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontWeight: "bold",
          fontSize: "1.25rem",
          color: "var(--primary-color)",
        }}
      >
        <span>Threadly</span>
      </div>

      <div style={{ display: "flex", gap: "24px" }}>
        {["Features", "Open Source", "FAQ", "Donate"].map((item) => (
          <button
            key={item}
            onClick={() =>
              scrollToSection(item.toLowerCase().replace(" ", "-"))
            }
            style={{
              background: "none",
              border: "none",
              fontSize: "1rem",
              color: "var(--text-color)",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            {item}
          </button>
        ))}
        <button
          className="btn btn-primary"
          style={{ padding: "8px 16px", fontSize: "0.9rem" }}
        >
          <a
            href="https://github.com/rashidekbal/threadly/releases"
            style={{ textDecoration: "none", color: "white" }}
          >
            Download
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
