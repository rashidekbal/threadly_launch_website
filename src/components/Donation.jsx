import React from "react";
import qrCode_icon from "/assets/Qr.jpeg";
const Donation = () => {
  return (
    <section id="donate" style={{ backgroundColor: "var(--donate-bg)" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Support the Project</h2>
        <p>
          If you love Threadly, consider buying us a coffee. Your support keeps
          the servers running!
        </p>

        <div
          style={{
            marginTop: "48px",
            padding: "24px",
            background: "var(--card-bg)",
            display: "inline-block",
            borderRadius: "16px",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {/* Placeholder for QR code if image not available yet, but using a generic placeholder or the actual one if provided */}
          <img
            src={qrCode_icon}
            alt="UPI QR Code"
            style={{ width: "200px", height: "200px", display: "block" }}
          />
          {/* NOTE: Updating this to use a real local asset if user provides one later. For now using a placeholder or we can use a generated one if we had the tool. Using a placeholder for now. */}
          <div
            style={{
              marginTop: "16px",
              fontWeight: "bold",
              color: "var(--text-secondary)",
            }}
          >
            Scan to Pay via UPI
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
