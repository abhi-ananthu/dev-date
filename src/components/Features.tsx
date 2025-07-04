import styles from "@/styles/components/Features.module.css";

const features = [
  {
    title: "TypeScript",
    description: "Full TypeScript support with strict type checking",
    icon: "🔷",
  },
  {
    title: "Next.js 14",
    description: "Latest Next.js with App Router and Server Components",
    icon: "⚡",
  },
  {
    title: "Modern CSS",
    description: "CSS Modules with modern CSS features and best practices",
    icon: "🎨",
  },
  {
    title: "Production Ready",
    description: "Optimized build, security headers, and performance",
    icon: "🚀",
  },
  {
    title: "ESLint",
    description: "Code linting and formatting with TypeScript rules",
    icon: "🔧",
  },
  {
    title: "SEO Optimized",
    description: "Meta tags, structured data, and performance optimization",
    icon: "📈",
  },
];

export const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Features</h2>
        <p className={styles.subtitle}>
          Everything you need to build modern web applications
        </p>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
