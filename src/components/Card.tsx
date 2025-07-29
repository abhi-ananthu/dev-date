import Image from "next/image"

const Card = ({className, title, subtitle, content, image}:{
    className: any,
    title: string,
    subtitle: string,
    content: string,
    image: string
}) => {
  return (
    <>
      <div className={className.card}>
            <Image src={image} alt="Image" width={20} height={20}/>
            <div className={className.title}>
                {title}
            </div>
            <div className={className.subtitle}>
                    {subtitle}
            </div>
            <div className={className.content}>{content}</div>
      </div>
    </>
  )
}

export default Card
