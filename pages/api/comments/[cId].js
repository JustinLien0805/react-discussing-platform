import { prisma } from "../../../lib/prisma";
// get Child comments
export default async function handle(req, res) {
  const { cId } = req.query;
  const {name, reply, postId } = req.body;
  if (req.method === "GET") {
    console.log("get")
    const childComments = await prisma.comment.findMany({
      where: {
        parentId: cId,
      },
      include: {
        user: true,
      },
    });
    res.send(childComments);
  }
  if (req.method === "POST") {
    console.log(reply);
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
      const newReply = await prisma.comment.create({
        data: {
          message: reply,
          userId: user.id,
          parentId: cId,
          postId: postId,
        },
      });
      res.send("reply added");
    }
  }
}
