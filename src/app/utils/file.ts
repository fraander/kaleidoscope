import fs from "fs/promises";
import path from "path";

export async function readLocalFile(filepath: string): Promise<string> {
  const fullFilepath = path.join(process.cwd(), filepath);

  try {
    const content = await fs.readFile(fullFilepath, "utf8");
    return content;
  } catch (e) {
    throw new Error(`Unable to read file: ${fullFilepath}`);
  }
}
