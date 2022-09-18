import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";
const Comment = ({ comment }) => {
  // format createdAt
  const dateFormater = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="flex border-[0.5px] rounded-md p-4 flex-col space-y-2">
      <div className="flex text-indigo-400">
        <h2 className="mr-auto">{comment.user.name}</h2>
        <h3>{dateFormater.format(Date.parse(comment.createdAt))}</h3>
      </div>
      <div>
        <p className="text-lg font-semibold text-[#e8e8e8]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          reprehenderit ducimus magni placeat dignissimos illum, earum tempore!
          Impedit, porro. Ea iure corrupti impedit.
        </p>
      </div>
      <div className="flex flex-grow spacing-x-4">
        <AiFillHeart className="w-6 h-6 grow cursor-pointer hover:text-indigo-400 hover:opacity-100 opacity-50" />
        <FaRegCommentDots className="w-6 h-6 grow cursor-pointer hover:text-indigo-400 hover:opacity-100 opacity-50" />
        <IoIosShareAlt className="w-6 h-6 grow cursor-pointer hover:text-indigo-400 hover:opacity-100 opacity-50" />
      </div>
    </div>
  );
};

export default Comment;
