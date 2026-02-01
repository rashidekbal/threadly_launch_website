import React from "react";

const Privacy = () => {
  return (
    <div className="container" style={{ padding: "120px 24px 80px" }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <section style={{ marginTop: "32px" }}>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Threadly. We respect your privacy and are committed to
          protecting your personal data. This privacy policy will inform you as
          to how we look after your personal data when you visit our website or
          use our application and tell you about your privacy rights and how the
          law protects you.
        </p>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2>2. Data We Collect</h2>
        <p>
          We currently do not collect any personal data through this landing
          page. The Threadly application may collect data as described in its
          specific terms and within the app itself.
        </p>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2>3. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us
          at:
          <a
            href="mailto:rtechdevlopment123@gmail.com"
            style={{ color: "var(--primary-color)", marginLeft: "4px" }}
          >
            rtechdevlopment123@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default Privacy;
