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
            <Image src={image} alt="Image" width={30} height={20} className={className.icon}/>
            <div className={className.card_title}>
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
