import Accordion from "./Accordion";
import CommonFooter from "./CommonFooter";
import ImageCard from "./ImageCard";
import styles from "@/styles/components/Terms.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Policy = ({
  title,
  image,
  lastUpdated,
  intro,
  sections
}: {
  title: string,
  image: string,
  lastUpdated: string,
  intro: string,
  sections: Array<{ title: string; content: string }>
}) => {
  return (
    <>
      <ImageCard imageUrl={image} title={title} lastUpdated={lastUpdated} />
      <div className={styles.body}>
        <h3 className={styles.title}>Topsdraw {title}</h3>
        <div className={styles.intro}><ReactMarkdown remarkPlugins={[remarkGfm]}>{intro}</ReactMarkdown></div>
        <Accordion
          className={styles}
          sections={sections.map(section => ({
            ...section,
            content: <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.content}</ReactMarkdown>
          }))}
        />
      </div>
      <CommonFooter />
    </>
  );
};

export default Policy;
