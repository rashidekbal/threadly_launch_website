import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
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
        backgroundColor: scrolled ? "var(--nav-bg-scrolled)" : "transparent",
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
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <span>Threadly</span>
        </Link>
      </div>

      <div className="desktop-menu">
        {["Features", "Open Source", "FAQ", "Donate"].map((item) => (
          <button
            key={item}
            onClick={() =>
              handleNavigation(item.toLowerCase().replace(" ", "-"))
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
        <ThemeToggle />
      </div>

      <div className="mobile-toggle-wrapper">
        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
        {/* Theme Toggle for Mobile (Visible when desktop menu hidden, but we might want it always accessible or inside menu? Let's keep it in desktop menu for now, but valid point. Actually, easier to duplicate or move theme toggle. Let's put theme toggle next to hamburger on mobile.) */}
        <div className="mobile-only-toggle" style={{ display: "none" }}>
          {" "}
          {/* We handles this via CSS if needed, but for now let's just use the one in menu or separate. Simple approach: Keep theme toggle in desktop menu, add another one for mobile or just show it.*/}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          {["Features", "Open Source", "FAQ", "Donate"].map((item) => (
            <button
              key={item}
              onClick={() => {
                handleNavigation(item.toLowerCase().replace(" ", "-"));
                setIsOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.1rem",
                color: "var(--text-color)",
                cursor: "pointer",
                fontWeight: 500,
                width: "100%",
                textAlign: "center",
                padding: "12px",
              }}
            >
              {item}
            </button>
          ))}
          <button
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <a
              href="https://github.com/rashidekbal/threadly/releases"
              style={{
                textDecoration: "none",
                color: "white",
                width: "100%",
                display: "block",
              }}
            >
              Download App
            </a>
          </button>
          <div style={{ marginTop: "16px" }}>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
