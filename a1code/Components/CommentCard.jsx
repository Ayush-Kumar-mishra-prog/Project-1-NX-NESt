"use client";
import { ReplyAll, User2Icon, XIcon } from "lucide-react";
import { useState } from "react";
import ReplyModelBoxPage from "./ReplyModelBoxPage";
import { useComment } from "../context/ReplyCommentContext";

const CommentCard = () => {
  const { comments, replyingTo, setReplyingTo } = useComment();

  const handleReply = (commentId) => {
    setReplyingTo(replyingTo === commentId ? null : commentId);
  };

  const CommentItem = ({ comment, level = 0 }) => {
    const colorConfigs = [
      {
        bg: "bg-purple-100",
        border: "border-blue-600",
        text: "text-blue-800",
        borderLeft: "border-l-blue-600",
      },
      {
        bg: "bg-pink-100",
        border: "border-pink-600",
        text: "text-pink-800",
        borderLeft: "border-l-pink-600",
      },
      {
        bg: "bg-yellow-100",
        border: "border-yellow-600",
        text: "text-yellow-800",
        borderLeft: "border-l-yellow-600",
      },
      {
        bg: "bg-green-100",
        border: "border-green-600",
        text: "text-green-800",
        borderLeft: "border-l-green-600",
      },
      {
        bg: "bg-indigo-100",
        border: "border-indigo-600",
        text: "text-indigo-800",
        borderLeft: "border-l-indigo-600",
      },
    ];

    const color = colorConfigs[level % colorConfigs.length];

    return (
      <div key={comment.id}>
        {/* Main Comment */}
        <div
          className={`${color.bg} ${color.borderLeft} border-l-8 border relative rounded-md shadow-md mb-3 p-4`}
        >
          <p className={`text-base font-semibold ml-2 ${color.text}`}>
            {comment.name}
          </p>

          <div className="ml-2 mt-2">
            <span className="">{comment.comment}</span>

            <ReplyAll
              size={20}
              className="absolute right-2 top-2 cursor-pointer hover:opacity-70 transition"
              onClick={() => handleReply(comment.id)}
            />
          </div>
        </div>

        {/* Reply Form */}
        {replyingTo === comment.id && (
          <div className="mb-3">
            <ReplyModelBoxPage
              parentCommentId={comment.id}
              handleClose={() => setReplyingTo(null)}
            />
          </div>
        )}

        {/* Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mb-3">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white p-4 mx-auto lg:w-3/4 mt-3 sm:w-full">
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <p className="text-gray-500">No comments yet</p>
      )}
    </div>
  );
};

export default CommentCard;
