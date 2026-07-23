"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useComment } from "../context/ReplyCommentContext";

const ReplyModelBoxPage = ({ parentCommentId, handleClose }) => {
  const { addReply } = useComment();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addReply(parentCommentId, data);
    reset();
    handleClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 border border-blue-300 rounded-md shadow-sm"
    >
      <h2 className="text-lg font-bold text-blue-800 mb-3">Reply to Comment</h2>
      <input
        type="text"
        className="border w-full border-slate-200 rounded-md p-2 mt-2"
        placeholder="Your name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && (
        <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
      )}

      <input
        type="email"
        className="border w-full border-slate-200 rounded-md p-2 mt-2"
        placeholder="Your email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && (
        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
      )}

      <textarea
        {...register("comment", { required: "Comment is required" })}
        className="w-full p-2 border border-slate-200 text-sm rounded-md mt-2"
        placeholder="Write your reply here"
      ></textarea>
      {errors.comment && (
        <p className="text-red-600 text-sm mt-1">{errors.comment.message}</p>
      )}

      <div className="flex gap-2 mt-3">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md flex-1"
        >
          Reply
        </button>
        <button
          type="button"
          onClick={handleClose}
          className="bg-gray-400 hover:bg-gray-600 text-white p-2 rounded-md flex-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ReplyModelBoxPage;
