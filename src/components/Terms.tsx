import Accordion from "./Accordion";
import CommonFooter from "./CommonFooter";
import ImageCard from "./ImageCard";
import styles from "@/styles/components/Terms.module.css";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // Import rehypeRaw to parse raw HTML
import rehypeSanitize from 'rehype-sanitize'; // Import rehypeSanitize for sanitization

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
        <div className={styles.intro}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                    rehypeRaw, // Needed to parse any raw HTML that might be in 'intro'
                    // rehypeSanitize without a second argument uses its secure default schema
                    rehypeSanitize
                ]}
            >
                {intro}
            </ReactMarkdown>
        </div>
        <Accordion
          className={styles}
          sections={sections.map(section => ({
           ...section,
            content: (
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[
                        rehypeRaw, // Needed to parse any raw HTML that might be in section.content
                        // rehypeSanitize without a second argument uses its secure default schema
                        rehypeSanitize
                    ]}
                >
                    {section.content}
                </ReactMarkdown>
            )
          }))}
        />
      </div>
      <CommonFooter/>
     </>
 )
}

export default Terms