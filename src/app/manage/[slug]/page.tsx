import { readMarkdown } from "@/app/markdown";
import { readLocalFile } from "@/app/utils/file";
import { readFile } from "fs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Props = {
  params: { slug: string };
};

export default async function DetailPage({ params }: Props) {
  const { frontmatter, content } = await readMarkdown(`./content/manage/${params.slug}.md`);
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown children={content} />
    </div>
  );
}
