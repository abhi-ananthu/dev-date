import Link from "next/link";
import styles from "@/styles/components/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Next.js Boilerplate</h3>
            <p className={styles.description}>
              Production-ready boilerplate for modern web applications
            </p>
          </div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Resources</h4>
            <ul className={styles.links}>
              <li>
                <a
                  href="https://nextjs.org"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://www.typescriptlang.org"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TypeScript
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 Next.js Boilerplate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
