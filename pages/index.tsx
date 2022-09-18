import PostList from "../components/PostList";
import Background from "../components/Background";
import { IoRocketOutline } from "react-icons/io5";
import { RiLightbulbLine } from "react-icons/ri";
import React from "react";
import { loadPosts } from "../lib/loadPosts";


export default function Home({ posts }) {
  return (
    <Background>
      <div className="flex lg:mx-80 md:mx-40 lg:my-16 flex-col">
        <div className="flex md:mb-8 my-4 space-x-8 ">
          <button className="flex items-center font-extrabold md:text-[2.5rem] rounded-full bg-[#303030] p-2 text-emerald-400 hover:bg-[#202020]">
            <IoRocketOutline className="mr-2" />
            Trending
          </button>
          <button className="flex items-center font-extrabold md:text-[2.5rem] rounded-full hover:bg-[#202020] p-2">
            <RiLightbulbLine className="mr-2" />
            New
          </button>
        </div>
        <PostList posts={posts} />
      </div>
    </Background>
  );
}
export async function getServerSideProps() {
  const posts = await loadPosts();
  return {
    props: {
      posts,
    },
  };
}
