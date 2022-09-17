import React from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import Image from "next/image";
const Post = ({post}) => {
  return (
    <div className="flex flex-col border-y-[0.5px] p-3 pb-4 cursor-pointer">
      <div className="flex items-center space-x-4 mb-2">
        <AiFillGithub className="h-4 w-4" />
        <h3 className="font-light text-sm">Rick Astley</h3>
      </div>
      <h3 className="font-bold text-2xl mb-2">
        {post.title}
      </h3>
      <Image
        src={post.body}
        alt="THIS IS THE VIDEO THUMBNAIL"
        width={690}
        height={388}
      />
      <div className="flex items-center mt-4">
        <button className="flex items-center justify-center grow">
          <BiUpvote className="h-8 w-8 hover:text-emerald-400 text-[#303030]" />
          <h3 className="font-semibold text-xl">50</h3>
          <BiDownvote className="h-8 w-8 hover:text-emerald-400 text-[#303030]" />
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
