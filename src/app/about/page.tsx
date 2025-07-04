import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "@/styles/pages/About.module.css";

export default function About() {
  return (
    <div className="app">
      <Header />
      <main className={styles.about}>
        <div className={styles.container}>
          <h1 className={styles.title}>About This Boilerplate</h1>
          <div className={styles.content}>
            <section className={styles.section}>
              <h2>What is this?</h2>
              <p>
                This is a production-ready Next.js boilerplate built with
                TypeScript and modern CSS. It includes all the essential
                configurations and best practices you need to start building
                modern web applications.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Features</h2>
              <ul className={styles.list}>
                <li>Next.js 14 with App Router</li>
                <li>TypeScript for type safety</li>
                <li>CSS Modules for scoped styling</li>
                <li>ESLint for code quality</li>
                <li>Production optimizations</li>
                <li>SEO-friendly configuration</li>
                <li>Responsive design</li>
                <li>Dark mode support</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Getting Started</h2>
              <p>
                To get started with this boilerplate, simply install the
                dependencies and run the development server:
              </p>
              <pre className={styles.code}>
                <code>
                  npm install{"\n"}
                  npm run dev
                </code>
              </pre>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
