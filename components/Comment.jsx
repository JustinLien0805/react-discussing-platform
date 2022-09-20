import React, { useState } from "react";
import axios from "axios";
import { useSession, signIn } from "next-auth/react";
import { AiFillHeart } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { useQuery, useMutation } from "@tanstack/react-query";
import CommentList from "./CommentList";
import { FiSend } from "react-icons/fi";
import PulseLoader from "react-spinners/PulseLoader";
const Comment = ({ comment }) => {
  const { data: session, status } = useSession();
  const [reply, setReply] = useState("");
  const [isReplying, setIsReplying] = useState(false);
  const [showChild, setShowChild] = useState(false);
  // format createdAt
  const dateFormater = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
  // usequery get child comments
  const {
    data: childComments,
    isLoading,
    refetch,
  } = useQuery([`${comment.id}:childComments`], async () => {
    const res = await axios.get(`/api/comments/${comment.id}`);
    return res.data;
  });

  const mutation = useMutation(
    (reply) => {
      return axios.post(`/api/comments/${comment.id}`, reply);
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleReply = (e) => {
    e.preventDefault();
    if (status === "unauthenticated") {
      signIn();
    } else {
      mutation.mutate({
        name: session.user.name,
        reply: reply,
        postId: comment.postId,
      });
      setReply("");
    }
  };

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
      {isReplying && (
        <form onSubmit={handleReply} className="flex space-x-4 h-16 w-full">
          <input
            type="text"
            className="grow bg-transparent border-[1px] rounded-lg border-indigo-400"
            onChange={(e) => setReply(e.target.value)}
            value={reply}
          />
          <button
            type="submit"
            className="grow-0 w-16 flex items-center justify-center bg-indigo-400 rounded-lg"
          >
            <FiSend className="h-8 w-8 text-white hover:text-indigo-700" />
          </button>
        </form>
      )}
      {isLoading && <PulseLoader color={"#818cf8"} />}
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
