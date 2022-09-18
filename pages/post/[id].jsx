import React, { useState, useEffect } from "react";
import Background from "../../components/Background";
import { prisma } from "../../lib/prisma";
import { AiFillGithub } from "react-icons/ai";
import ReactPlayer from "react-player/lazy";
import { useSession, signIn } from "next-auth/react";
import { FiSend } from "react-icons/fi";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import CommentList from "../../components/CommentList";
import { loadComments } from "../../lib/loadComments";
const PostPage = ({ post, comments }) => {
  const { data: session, status } = useSession();
  const [vID, setVID] = useState(post.body.slice(26, -18));
  const [hasWindow, setHasWindow] = useState(false);
  const [comment, setComment] = useState("");
  // get router params
  const router = useRouter();
  const { id } = router.query;

  // for react-player
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  // save initial comments in useQuery
  const { data } = useQuery(
    ["comments"],
    async () => {
      return await axios.get("/api/comments", { id });
    },
    {
      initialData: comments,
      enabled: false,
    }
  );

  // mutation for adding comments and user
  const mutation = useMutation((newUserAndComment) => {
    return axios.post("/api/user", newUserAndComment);
  });
  const handlePost = (e) => {
    e.preventDefault();
    if (status === "unauthenticated") {
      signIn();
    } else {
      mutation.mutate({
        name: session.user.name,
        comment: { comment, id },
      });
      setComment("");
    }
  };
  return (
    <Background>
      <div className="flex flex-col justify-center text-white lg:mx-80 md:mx-40 lg:my-16 mx-4">
        <div className="flex items-center space-x-4">
          <AiFillGithub className="h-4 w-4" />
          <h3 className="font-light text-sm">Rick Astley</h3>
        </div>
        <h2 className="font-extrabold md:text-4xl text-xl mb-4">
          {post.title}
        </h2>
        {hasWindow && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${vID}`}
            controls={true}
            className="w-full h-full"
          />
        )}
        <div className="my-4">
          <h2 className=" font-extrabold md:text-4xl text-xl border-b-2 mb-4">
            Comments
          </h2>
          <form onSubmit={handlePost} className="flex space-x-4 h-16">
            <input
              type="text"
              className="grow bg-transparent border-[1px] rounded-lg border-emerald-400"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <button
              type="submit"
              className="grow-0 w-16 flex items-center justify-center bg-emerald-400 rounded-lg"
            >
              <FiSend className="h-8 w-8 text-white hover:text-emerald-700" />
            </button>
          </form>
        </div>
        <CommentList comments={data} />
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
  const comments = await loadComments(id);

  return {
    props: {
      post,
      comments: JSON.parse(JSON.stringify(comments)),
    },
  };
};