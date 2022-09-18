import React, { useState, useEffect } from "react";
import Background from "../../components/Background";
import { prisma } from "../../lib/prisma";
import { AiFillGithub } from "react-icons/ai";
import ReactPlayer from "react-player/lazy";

const PostPage = ({ post }) => {
  const [vID, setVID] = useState(post.body.slice(26, -18));
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <Background>
      <div className="flex flex-col justify-center text-white lg:mx-80 md:mx-40 lg:my-16 mx-4">
        <div className="flex items-center space-x-4">
          <AiFillGithub className="h-4 w-4" />
          <h3 className="font-light text-sm">Rick Astley</h3>
        </div>
        <h1 className="font-extrabold md:text-4xl ">{post.title}</h1>
        {hasWindow && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${vID}`}
            controls={true}
            className=""
          />
        )}
      </div>
    </Background>
  );
};

export default PostPage;

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  return {
    props: {
      post,
    },
  };
};
