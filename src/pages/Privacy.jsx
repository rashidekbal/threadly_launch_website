import React, { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-content">
      <h1>Privacy Policy</h1>
      <p className="last-updated">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Threadly ("we," "our," or "us"). We are committed to
          protecting your personal information and your right to privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you assume the role of User on our application,
          Threadly. Please read this privacy policy carefully. If you do not
          agree with the terms of this privacy policy, please do not access the
          application.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the application. The personal information we
          collect may include the following:
        </p>
        <ul>
          <li>
            <strong>Personal Data:</strong> Personally identifiable information,
            such as your name, email address, and profile image, that you
            voluntarily give to us when you register.
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers
            automatically collect when you access the application, such as your
            IP address, your browser type, your operating system, your access
            times, and the pages you have viewed directly before and after
            accessing the application.
          </li>
          <li>
            <strong>Mobile Device Access:</strong> We may request access or
            permission to certain features from your mobile device, including
            your mobile device's camera, microphone, storage, and other
            features.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Use of Your Information</h2>
        <p>
          having accurate information about you permits us to provide you with a
          smooth, efficient, and customized experience. Specifically, we may use
          information collected about you via the application to:
        </p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Enable user-to-user communications.</li>
          <li>
            Compile anonymous statistical data and analysis for use internally.
          </li>
          <li>
            Prevent fraudulent transactions, monitor against theft, and protect
            against criminal activity.
          </li>
          <li>
            Request feedback and contact you about your use of the application.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Disclosure of Your Information</h2>
        <p>
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
        </p>
        <ul>
          <li>
            <strong>By Law or to Protect Rights:</strong> If we believe the
            release of information about you is necessary to respond to legal
            process, to investigate or remedy potential violations of our
            policies, or to protect the rights, property, and safety of others,
            we may share your information as permitted or required by any
            applicable law, rule, or regulation.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your
            information with third parties that perform services for us or on
            our behalf, including payment processing, data analysis, email
            delivery, hosting services, customer service, and marketing
            assistance.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please
          contact us at:
          <br />
          <br />
          <strong>Email: </strong>
          <a
            href="mailto:rtechdevlopment123@gmail.com"
            style={{ color: "var(--primary-color)" }}
          >
            rtechdevlopment123@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default Privacy;
