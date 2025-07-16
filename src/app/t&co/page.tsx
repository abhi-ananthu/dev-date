import Terms from "@/components/Terms";
import { getPageContent } from "@/utils/markdownUtil"

const page = async () => {
    let meta: { title?: string; image?: string; updated?: string } = {};
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
        title={meta.title || "Terms and Conditions"}
        image={meta.image || ""}
        lastUpdated={meta.updated || "Not specified"}
        intro={sections[0]?.content || ""}
        sections={sections.slice(1)}
      />
    </>
  )
}

export default page
