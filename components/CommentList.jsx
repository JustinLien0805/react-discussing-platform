import Comment from "./Comment";
import React from "react";

const CommentList = ({ comments }) => {
  console.log(comments)
  return (
    <div className="flex justify-center flex-col space-y-4">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
