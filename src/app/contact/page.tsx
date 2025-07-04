import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/styles/pages/Contact.module.css";

export default function Contact() {
  return (
    <div className="app">
      <Header />
      <main className={styles.contact}>
        <div className={styles.container}>
          <h1 className={styles.title}>Contact Us</h1>
          <div className={styles.content}>
            <div className={styles.info}>
              <h2>Get in Touch</h2>
              <p>
                Have questions about this boilerplate? Want to contribute or
                report issues? We'd love to hear from you!
              </p>

              <div className={styles.contactItem}>
                <h3>GitHub</h3>
                <p>Find the source code and contribute on GitHub</p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository
                </a>
              </div>

              <div className={styles.contactItem}>
                <h3>Documentation</h3>
                <p>Check out the official Next.js documentation</p>
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Docs
                </a>
              </div>
            </div>

            <div className={styles.form}>
              <h2>Send a Message</h2>
              <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={styles.textarea}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
