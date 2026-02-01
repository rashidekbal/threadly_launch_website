import React from "react";

const Terms = () => {
  return (
    <div className="container" style={{ padding: "120px 24px 80px" }}>
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <section style={{ marginTop: "32px" }}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Threadly, you accept and agree to be bound by
          the terms and provision of this agreement.
        </p>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2>2. Use License</h2>
        <p>
          Threadly is an open-source project. You are free to view the source
          code and contribute as per the license specified in our GitHub
          repository.
        </p>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2>3. Disclaimer</h2>
        <p>
          The materials on Threadly's website and application are provided on an
          'as is' basis. Threadly makes no warranties, expressed or implied, and
          hereby disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </p>
      </section>
    </div>
  );
};

export default Terms;
