import { PrismaClient } from "@prisma/client";
// fetch post desc
export default async function fetchNewPost(req, res) {
  const prisma = new PrismaClient();
  const post = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
  });
  res.send({post});
}
