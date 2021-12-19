import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export interface Post {
  author: string;
  slug: string;
  content: string;
  date: string;
  title: string;
  subTitle: string;
  readTimeMinutes: number;
}

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(): string[] {
  try {
    return fs.readdirSync(postsDirectory);
  } catch (e) {
    return [];
  }
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // here we assume data has all the fields
  return {
    slug: realSlug,
    content,
    ...data,
  } as Post;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug)).sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}
