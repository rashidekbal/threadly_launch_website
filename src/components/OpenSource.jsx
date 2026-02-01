import React from "react";

const OpenSource = () => {
  return (
    <section id="open-source">
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Open Source by Design</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 48px auto" }}>
          Threadly is built with transparency and community in mind. Check out
          our code, contribute, or build your own version.
        </p>

        <div
          className="grid grid-cols-2"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <div className="card" style={{ textAlign: "left" }}>
            <h3>📱 Android Client</h3>
            <p>Native Android application built with Java, MVVM, and Room.</p>
            <a
              href="https://github.com/rashidekbal/Threadly"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ marginTop: "auto" }}
            >
              View Client Repo
            </a>
          </div>

          <div className="card" style={{ textAlign: "left" }}>
            <h3>🖥️ Server</h3>
            <p>Robust backend API built with Node.js, Express, and MySQL.</p>
            <a
              href="https://github.com/rashidekbal/ThreadlyServer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ marginTop: "auto" }}
            >
              View Server Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
