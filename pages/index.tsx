import Header from "../components/Header";
import PostList from "../components/PostList";
import Background from "../components/Background";
import { IoRocketOutline } from "react-icons/io5";
import { RiLightbulbLine } from "react-icons/ri";
import React from "react";
import { loadPosts } from "../lib/loadPosts";
import fetchNewPost from "./api/fetchNewPost";
import { useQuery } from "@tanstack/react-query";

export default function Home({ posts }) {
  const { data, isLoading, refetch, isFetching } = useQuery(["newPost"], fetchNewPost, {
    enabled: false,
  });
  if(isFetching) console.log("fetching")
  if (data) console.log(data);
  return (
    <Background>
      <div className="flex lg:mx-80 md:mx-40 lg:my-16 flex-col">
        <div className="flex md:mb-8 my-4 space-x-8 ">
          <button className="flex items-center font-extrabold md:text-[2.5rem] rounded-full bg-[#303030] p-2 text-emerald-400 hover:bg-[#202020]">
            <IoRocketOutline className="mr-2" />
            Trending
          </button>
          <button
            className="flex items-center font-extrabold md:text-[2.5rem] rounded-full hover:bg-[#202020] p-2"
            onClick={() => refetch}
          >
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
