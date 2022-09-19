import { prisma } from "../../../lib/prisma";
// get Child comments
export default async function handle(req, res) {
  const { cId } = req.query;

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
