import React, { useState } from "react";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import CommentList from "./CommentList";
const Comment = ({ comment }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [showChild, setShowChild] = useState(false);
  // format createdAt
  const dateFormater = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
  // usequery get child comments
  const { data: childComments } = useQuery(
    [`${comment.id}:childComments`],
    async () => {
      const res = await axios.get(`/api/comments/${comment.id}`);
      return res.data;
    }
  );

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className="flex border-[0.5px] rounded-md p-4 flex-col space-y-2 w-full">
        <div className="flex text-indigo-400">
          <h2 className="mr-auto">{comment.user.name}</h2>
          <h3>{dateFormater.format(Date.parse(comment.createdAt))}</h3>
        </div>
        <div>
          <p className="text-lg font-semibold text-[#e8e8e8]">
            {comment.message}
          </p>
        </div>
        <div className="flex flex-grow spacing-x-4">
          <AiFillHeart className="w-6 h-6 grow cursor-pointer hover:text-indigo-400 hover:opacity-100 opacity-50" />
          <IoIosShareAlt
            className="w-6 h-6 grow cursor-pointer hover:text-indigo-400 hover:opacity-100 opacity-50"
            onClick={() => setIsReplying((prev) => !prev)}
          />
        </div>
      </div>
      {childComments?.length > 0 && (
        <div className="flex w-full justify-center">
          <button
            className={`collapse-line ${showChild ? "" : "hidden"}`}
            onClick={() => setShowChild(false)}
          />
          <button
            className={`${
              showChild ? "hidden" : ""
            } border-[0.5px] border-indigo-400 w-60 rounded-md hover:bg-indigo-400 hover:text-black`}
            onClick={() => {
              setShowChild(true);
            }}
          >
            Show More
          </button>
          <div className={`${showChild ? "" : "hidden"} pl-10 w-full`}>
            <CommentList comments={childComments} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
