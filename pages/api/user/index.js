import { prisma } from "../../../lib/prisma";

// add user to DATABASE
export default async function handle(req, res) {
  const { name, comment } = req.body;
  const user = await prisma.user.upsert({
    where: {
      name: name,
    },
    update: {},
    create: {
      name: name,
    },
  });
  if (user) {
    const newComment = await prisma.comment.create({
      data: {
        message: comment.comment,
        userId: user.id,
        postId: comment.id,
      },
    });
    res.send("comment added");
  }
}
