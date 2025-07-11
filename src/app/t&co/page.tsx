import Terms from "@/components/Terms";
import { getPageContent } from "@/utils/markdownUtil"

const page = async () => {
    let meta:Object = {};
    let sections: Array<{ title: string; content: string }> = [];
    const data = await getPageContent("sample");
    if(data){
      meta = data.meta;
      //console.log(meta);
      sections = data.sections;
    }else{
      console.error("Failed to load terms and conditions content.");
      return <div>Error loading content.</div>;
    }
  return (
    <>
      <Terms
        title={meta.title}
        image={meta.image}
        lastUpdated={meta.lastUpdated}
        intro={sections[0]?.content || ""}
        sections={sections.slice(1)}
      />
    </>
  )
}

export default page
