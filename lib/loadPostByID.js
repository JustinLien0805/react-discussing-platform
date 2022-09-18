import { prisma } from "./prisma";
export async function loadPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}
