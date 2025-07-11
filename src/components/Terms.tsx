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
      <h1>{title}</h1>
    </>
  )
}

export default Terms
