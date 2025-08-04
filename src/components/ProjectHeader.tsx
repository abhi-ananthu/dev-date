import styles from "@/styles/components/ProjectHeader.module.css"
import Image from "next/image"

const ProjectHeader = () => {
  return (
    <>
        <div className={styles.content}>

      <div className={styles.header}>
        <Image src="/images/project.webp" alt="Project Header" width={330} height={270} className={styles.image} priority={false}/>
        <div className={styles.title}>Online advertising</div>
        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui modi est maiores eos, assumenda placeat minima, perferendis soluta repellendus</div>
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
    <div className={styles.item}>
        <div className={styles['label-container']}>
        <Image src="/images/facebook.png" alt="Logo" width={18} height={18} className={styles.icon} />
            <span className={styles.heading}>End date</span> 24 Feb 2024
        </div>
    </div>
</div>

      </div>
        </div>
    </>
  )
}

export default ProjectHeader
