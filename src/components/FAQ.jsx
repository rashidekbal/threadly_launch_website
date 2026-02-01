import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is Threadly free to use?",
      answer:
        "Yes! Threadly is completely free and open-source. You can download the app, use it, or even host your own server.",
    },
    {
      question: "Is it available on iOS?",
      answer:
        "Currently, Threadly is a native Android application. An iOS version is not planned at the moment, but contributions are welcome!",
    },
    {
      question: "How can I contribute?",
      answer:
        "We welcome contributions! Check out our GitHub repositories for the Client and Server. You can report bugs, suggest features, or submit Pull Requests.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Threadly uses industry-standard encryption and security practices. Since it's open-source, the code is transparent for anyone to audit.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ backgroundColor: "var(--surface-color)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h2>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer", padding: "16px 24px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                }}
              >
                {faq.question}
                <span
                  style={{
                    transform:
                      activeIndex === index ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s",
                  }}
                >
                  ▼
                </span>
              </div>
              {activeIndex === index && (
                <div
                  style={{
                    marginTop: "16px",
                    borderTop: "1px solid var(--border-color)",
                    paddingTop: "16px",
                    color: "var(--text-secondary)",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
