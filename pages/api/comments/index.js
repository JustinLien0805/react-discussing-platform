import { loadComments } from '../../../lib/loadComments';
export default async function handle(req, res) {
  const { id } = req.body;
  const comments = await loadComments(id);
  res.send(comments);
}
