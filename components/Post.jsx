import React from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

const Post = () => {
  return (
    <div className="flex flex-col border-y-[0.5px] p-3 pb-4">
      <div className="flex items-center space-x-4 mb-2">
        <AiFillGithub className="h-4 w-4" />
        <h3 className="font-light text-sm">Rick Astley</h3>
      </div>
      <h3 className="font-bold text-2xl mb-2">
        Rick Astley - Never Gonna Give You Up (Official Music Video)
      </h3>
      <img
        src="http://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
        alt="THIS IS THE VIDEO THUMBNAIL"
      />
      <div className="flex items-center mt-4">
        <button className="flex items-center justify-center grow">
          <BiUpvote className="h-8 w-8 text-emerald-400" />
          <h3 className="font-semibold text-xl">50</h3>
          <BiDownvote className="h-8 w-8 text-emerald-400" />
        </button>
        <button className="grow flex items-center justify-center space-x-2">
          <FaRegCommentDots className="h-8 w-8 text-emerald-400" />
          <h3 className="font-semibold text-xl">comments</h3>
        </button>
      </div>
    </div>
  );
};

export default Post;
