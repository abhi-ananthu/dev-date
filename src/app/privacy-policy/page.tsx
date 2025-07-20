import Policy from "@/components/Policy";
import { getPageContent } from "@/utils/markdownUtil";

export const dynamic = 'force-static';

const page = async () => {
  let meta: { title?: string; image?: string; updated?: string } = {};
  let sections: Array<{ title: string; content: string }> = [];

  const data = await getPageContent("policy");

  if (data) {
    meta = data.meta;
    sections = data.sections;
  } else {
    console.error("Failed to load privacy policy content.");
    return <div>Error loading content.</div>;
  }

  return (
    <>
      <Policy
        title={meta.title || "Privacy Policy"}
        image={meta.image || ""}
        lastUpdated={meta.updated || "Not specified"}
        intro={sections[0]?.content || ""}
        sections={sections.slice(1)}
      />
    </>
  );
};

export default page;
