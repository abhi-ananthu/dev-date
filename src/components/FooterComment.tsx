import Image from "next/image"
import styles from "@/styles/components/FooterComment.module.css"
import Card from "./Card"
const FooterComment = () => {
    const title = "Ruben";
    const subtitle = "Founder at Alinoa(small provider)";
    const content = "I totally understand your 12-month minimum commitment, because I clearly feel that my way of selling with a Sortlist lead is not the same after 6 months than at the beginning."
    const image = "/images/instagram.png"
  return (
    <>
        <div className={styles.footer}>
        <div className={styles.combo}>
            <Image src="/images/footer.webp" alt="Footer" width={100} height={100} className={styles.FooterComment}/>
        </div>
        <div className={styles.title}>
            <span>Our</span><span>Community</span>Speaks For Us
        </div>
        <div>
            <Card className={styles} title={title} subtitle={subtitle} content={content} image={image}/>
        </div>
        </div>
    </>
  )
}

export default FooterComment
