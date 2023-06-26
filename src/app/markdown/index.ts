import matter from "gray-matter";
import { readLocalFile } from "../utils/file";

export async function readMarkdown(filepath: string) {
  const fileContent = await readLocalFile(filepath);
  const { data: frontmatter, content } = matter(fileContent);
  return { frontmatter, content };
}
