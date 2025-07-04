import styles from "@/styles/components/Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Next.js TypeScript Boilerplate</h1>
        <p className={styles.subtitle}>
          Production-ready boilerplate with modern CSS, TypeScript, and best
          practices
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
    </section>
  );
};
