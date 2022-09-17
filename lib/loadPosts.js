import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function loadPosts() {
  const posts = await prisma.post.findMany();
  return posts
}