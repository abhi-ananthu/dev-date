import BreadCrumb from "./BreadCrumb"
import styles from "@/styles/components/ProjectDetail.module.css"

const ProjectDetail = () => {
  return (
    <>
    <div className={styles.content}>
        <div className={styles.header}>
      <BreadCrumb title="Online Advertising" className={styles} image="/images/breadcrumb.png" />
        <div className={styles.title}>Project Detail</div>
        <div className={styles.desc}>
            <div className={styles.descTitle}>Abstract Of The Project</div>
            <div className={styles.descContent}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada, libero nec eleifend eleifend, nunc justo porta nisi, vel viverra elit felis eget ipsum. Donec in felis eget sapien imperdiet c            </div>
            <div className={styles.descTitle}>Solution</div>
            <div className={styles.descContent}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada, libero nec eleifend eleifend, nunc justo porta nisi, vel viverra elit felis eget ipsum. Donec in felis eget sapien imperdiet condimentum. Sed id dui nec ipsum accumsan commodo. Ut vel magna sapien. Nulla vel dui in mauris volutpat feugiat. Integer posuere eros non nisi ultricies luctus. Vivamus auctor fermentum tellus, in volutpat ante fermentum nec. Integer sit amet justo et dui blandit vestibulum. Sed laoreet, risus in tincidunt posuere, nisi felis tincidunt felis, eu semper purus mauris et libero. Etiam vitae velit vel tortor vehicula efficitur.            </div>
            <div className={styles.descTitle}>Impact Of The Solution</div>
            <div className={styles.descContent}>
Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada, libero nec eleifend eleifend, nunc justo porta nisi, vel viverra elit felis eget ipsum. Donec in felis eget sapien imperdiet c            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default ProjectDetail
