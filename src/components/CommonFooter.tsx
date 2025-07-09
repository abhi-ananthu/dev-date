import styles from "@/styles/components/CommonFooter.module.css";
import Image from "next/image";
const CommonFooter = () => {
  return (
    <div className={styles.body}>
        <div className={styles.logo_div}><Image src="/images/logo.png" alt="Logo" width={100} height={100} className={styles.logo}/></div>
      <div className={styles.footer}>
        <div className={styles.content}>
            Topsdraw works as a strategic partner facilitating the right business connections to boost growth and market value.
        </div>
        <div className={styles.cards}>
          
          <div className={styles.options}>
            <p className={styles.title}>Topsdraw</p>
            <p className={styles.option}>About Us</p>
            <p className={styles.option}>Contact Us</p>
            <p className={styles.option}>Terms of Use</p>
        </div>
        <div className={styles.options}>
            <p className={styles.title}>Clients</p>
            <p className={styles.option}>Vendor Discovery</p>
            <p className={styles.option}>Post My Project</p>
            <p className={styles.option}>Help Center</p>
        </div>
        <div className={styles.options}>
            <p className={styles.title}>Vendors</p>
            <p className={styles.option}>How it Works</p>
            <p className={styles.option}>Register Your Company</p>
            <p className={styles.option}>Help Center</p>
        </div>
        <div className={styles.options}>
            <p className={styles.title}>Social Connect</p>
            <div className={styles.socials}>
                <h6 className={styles.icon}>Fb</h6>
                <h6 className={styles.icon}>X</h6>
                <h6 className={styles.icon}>Yt</h6>
                <h6 className={styles.icon}>Ln</h6>
                <h6 className={styles.icon}>In</h6>
            </div>
        </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.copyright_text}>2024. Topsdraw – all rights reserved.</p>
      </div>
    </div>
  )
}

export default CommonFooter
