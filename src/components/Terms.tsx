import Accordion from "./Accordion";
import ImageCard from "./ImageCard";
import styles from "@/styles/components/Terms.module.css";
const Terms = ({
    title,
    image,
    lastUpdated,
    intro,
    sections
}:{
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
        <h3 className={styles.title}>Topsdraw general {title}</h3>
        <p className={styles.intro}>{intro}</p>
        <Accordion className={styles} sections={sections} />
      </div>
    </>
  )
}

export default Terms
