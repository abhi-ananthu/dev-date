import ImageCard from "./ImageCard";

const Terms = ({
    title,
    image,
    lastUpdated,
    intro,
    sections
}:{
    title: string,
    image: string,
    lastUpdated: string,
    intro: string,
    sections: Array<{ title: string; content: string }>
}) => {
  return (
    <>
      <ImageCard imageUrl={image} title={title} lastUpdated={lastUpdated} />
      <h1>{title}</h1>
    </>
  )
}

export default Terms
