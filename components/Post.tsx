import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Post = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="flex flex-col border-y-[0.5px] p-3 pb-4 cursor-pointer">
        <div className="flex items-center space-x-4 mb-2">
          <AiFillGithub className="h-4 w-4" />
          <h3 className="font-light text-sm">Rick Astley</h3>
        </div>
        <h3 className="font-bold text-2xl mb-2">{post.title}</h3>
        <Image
          src={post.body}
          alt="THIS IS THE VIDEO THUMBNAIL"
          width={690}
          height={388}
        />
        <div className="flex items-center mt-4">
          <button className="grow flex items-center justify-center space-x-2">
            <FaRegCommentDots className="h-8 w-8 text-emerald-400" />
            <h3 className="font-semibold text-xl">comments</h3>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Post;
