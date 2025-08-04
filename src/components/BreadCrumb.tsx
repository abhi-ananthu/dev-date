import Image from "next/image"

const BreadCrumb = ({title, className, image}:{
    title: string,
    className?: any,
    image?: string
}) => {
  return (
    <div className={className.breadcrumbContainer}>
      {image && <Image src={image} alt="Breadcrumb Icon" width={25} height={15} className={className.breadcrumb} />}
      <span className={className.breadcrumbTitle}>{title}</span>
    </div>
  )
}

export default BreadCrumb
