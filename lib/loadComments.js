import { prisma } from "./prisma";
export async function loadComments(id) {
  const comments = await prisma.comment.findMany({
    where: {
      postId: id,
    },
    include: {
      user: true,
    },
  });
  return comments;
}
