import Image from "next/image"
import styles from "@/styles/components/FooterComment.module.css"
import Card from "./Card"
const FooterComment = () => {
    const title = "Ruben";
    const subtitle = "Founder at Alinoa(small provider)";
    const content = "I totally understand your 12-month minimum commitment, because I clearly feel that my way of selling with a Sortlist lead is not the same after 6 months than at the beginning."
    const image = "/images/footer.webp"
  return (
    <>
        <div className={styles.footer}>
        <div className={styles.combo}>
            <Image src={image} alt="Footer" width={400} height={300} className={styles.FooterComment}/>
        </div>
        <div className={styles.title}>
            <span className={styles.heading}>Our</span><span className={styles.heading}> Community</span><span className={styles.subheading}>Speaks For Us</span>
        </div>
        <div className={styles.reviews}>
            <Card className={styles} title={title} subtitle={subtitle} content={content} image={image}/>
            <Card className={styles} title={title} subtitle={subtitle} content={content} image={image}/>
            <Card className={styles} title={title} subtitle={subtitle} content={content} image={image}/>
        </div>
        </div>
    </>
  )
}

export default FooterComment
