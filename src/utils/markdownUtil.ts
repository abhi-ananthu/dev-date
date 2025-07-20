import path from "path";
import fs from "fs";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content");

export const getPageContent = async (slug: string) => {
  const filePath = path.join(contentDir, `${slug}.md`);
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: meta, content: rawContent } = matter(fileContent);
    const sections = splitMarkdownSections(rawContent);
    return { meta, sections };
  } catch (err) {
    console.error(`Error reading file at ${filePath}:`, err);
  }
};

function splitMarkdownSections(markdown: string) {
  const lines = markdown.split('\n');
  const result: { title: string; content: string }[] = [];

  let current = { title: '', content: '' };

  for (const line of lines) {
    if (/^## /.test(line)) {
      if (current.title) result.push(current);
      current = {
        title: line.replace(/^## /, '').trim(),
        content: '',
      };
    } else if (/^### /.test(line)) {
      current.content += `\n<strong>${line.replace(/^### /, '').trim()}</strong>\n`;
    } else {
      current.content += line + '\n';
    }
  }

  if (current.title) result.push(current);
  return result;
}
