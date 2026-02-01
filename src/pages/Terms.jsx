import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-content">
      <h1>Terms of Service</h1>
      <p className="last-updated">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <section>
        <h2>1. Agreement to Terms</h2>
        <p>
          These Terms of Service constitute a legally binding agreement made
          between you, whether personally or on behalf of an entity ("you") and
          Threadly ("we," "us," or "our"), concerning your access to and use of
          the Threadly application as well as any other media form, media
          channel, mobile website, or mobile application related, linked, or
          otherwise connected thereto (collectively, the "Site"). You agree that
          by accessing the Site, you have read, understood, and agreed to be
          bound by all of these Terms of Service.
        </p>
      </section>

      <section>
        <h2>2. Intellectual Property Rights</h2>
        <p>
          Unless otherwise indicated, the Site is our proprietary property and
          all source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the "Content") and the trademarks, service marks, and
          logos contained therein (the "Marks") are owned or controlled by us or
          licensed to us, and are protected by copyright and trademark laws.
        </p>
      </section>

      <section>
        <h2>3. User Representations</h2>
        <p>By using the Site, you represent and warrant that:</p>
        <ul>
          <li>
            All registration information you submit will be true, accurate,
            current, and complete.
          </li>
          <li>
            You will maintain the accuracy of such information and promptly
            update such registration information as necessary.
          </li>
          <li>
            You have the legal capacity and you agree to comply with these Terms
            of Service.
          </li>
          <li>
            You will not access the Site through automated or non-human means,
            whether through a bot, script, or otherwise.
          </li>
          <li>
            You will not use the Site for any illegal or unauthorized purpose.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. User Contributions</h2>
        <p>
          The Site may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality, and may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Site, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          "Contributions").
        </p>
        <p>
          Any Contributions you transmit may be treated as non-confidential and
          non-proprietary. When you create or make available any Contributions,
          you thereby represent and warrant that you are the creator and owner
          of or have the necessary licenses, rights, consents, releases, and
          permissions to use and to authorize us, the Site, and other users of
          the Site to use your Contributions.
        </p>
      </section>

      <section>
        <h2>5. Prohibited Activities</h2>
        <p>
          You may not access or use the Site for any purpose other than that for
          which we make the Site available. The Site may not be used in
          connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </p>
        <ul>
          <li>
            Systematically retrieve data or other content from the Site to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </li>
          <li>
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </li>
          <li>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Site.
          </li>
          <li>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Site.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Termination</h2>
        <p>
          These Terms of Service shall remain in full force and effect while you
          use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF
          SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
          NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
          REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
          WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY
          APPLICABLE LAW OR REGULATION.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          In order to resolve a complaint regarding the Site or to receive
          further information regarding use of the Site, please contact us at:
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

export default Terms;
