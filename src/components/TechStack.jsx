import React from "react";

const TechStack = () => {
  const stack = [
    {
      category: "Android Client",
      techs: [
        "Java",
        "Kotlin",
        "MVVM",
        "Room",
        "Retrofit",
        "Glide",
        "ExoPlayer",
        "CameraX",
        "Fast Android Networking",
        "Shimmer",
        "WorkManager",
        "Coil",
        "Navigation Component",
        "Material Components",
      ],
    },
    {
      category: "Backend Server",
      techs: [
        "Node.js",
        "Express",
        "MySQL",
        "Socket.IO",
        "Firebase (FCM)",
        "Cloudinary",
        "JWT",
        "Bcrypt",
        "Axios",
        "Cors",
        "Multer",
        "Nodemailer",
        "UUID",
      ],
    },
  ];

  return (
    <section id="tech-stack">
      <div className="container">
        <h2>Built With Modern Tech</h2>
        <div className="grid grid-cols-2">
          {stack.map((group, index) => (
            <div key={index} className="card">
              <h3
                style={{
                  borderBottom: "1px solid var(--border-color)",
                  paddingBottom: "16px",
                  marginBottom: "16px",
                }}
              >
                {group.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {group.techs.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "var(--surface-color)",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--text-color)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
