import styles from "@/styles/components/ImageCard.module.css";
import Image from "next/image";
const ImageCard = ({
    imageUrl,
    title,
    lastUpdated
}:{
    imageUrl:string,
    title:string,
    lastUpdated:string
}) => {
  return (
    <>
      <div className={styles.content}>
        <Image src={imageUrl} alt={title} width={300} height={200} className={styles.image} />
        <div className={styles.textOverlay}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
        </div>
      </div>
    </>
  )
}

export default ImageCard
