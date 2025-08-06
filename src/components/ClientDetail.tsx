import Image from "next/image"
import styles from "@/styles/components/ClientDetail.module.css"

const ClientDetail = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Client Details</div>
        <div className={styles.header}>
        <div className={styles.items}>
    <div className={styles.item}>
        <div className={styles['label-container']}>
        <Image src="/images/facebook.png" alt="Logo" width={18} height={18} className={styles.icon} />
            <span className={styles.heading}>Title of the project</span> Website development
        </div>
    </div>
    <div className={styles.item}>
        <div className={styles['label-container']}>
        <Image src="/images/facebook.png" alt="Logo" width={18} height={18} className={styles.icon} />
            <span className={styles.heading}>Service offered</span> Web development
        </div>
    </div>
    <div className={styles.item}>
        <div className={styles['label-container']}>
        <Image src="/images/facebook.png" alt="Logo" width={18} height={18} className={styles.icon} />
            <span className={styles.heading}>Project size</span> &lt; AED 3000
        </div>
    </div>
    <div className={styles.item}>
        <div className={styles['label-container']}>
        <Image src="/images/facebook.png" alt="Logo" width={18} height={18} className={styles.icon} />
            <span className={styles.heading}>Start date</span> 29 Dec 2023
        </div>
    </div>
</div>

      </div>
      </div>
    </>
  )
}

export default ClientDetail
