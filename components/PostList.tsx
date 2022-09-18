import React from "react";
import Post from "./Post";
const PostList = ({ posts }) => {
  return (
    <div className="lg:border-l-[6px] h-full lg:pl-20 space-y-8">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
