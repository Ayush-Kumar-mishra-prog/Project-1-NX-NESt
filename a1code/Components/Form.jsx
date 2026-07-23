"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CommentCard from "./CommentCard";
import { useComment } from "../context/ReplyCommentContext";

const Form = () => {
  const { setComments } = useComment();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setComments((prev) => [...prev, { ...data, id: Date.now(), replies: [] }]);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="bg-white p-4 mx-auto lg:w-3/4  sm:w-full mt-3"
      >
        <h1 className="text-3xl mt-3 mb-2 text-start ">Comments</h1>
        <hr className="mb-4" />
        <div className="mb-2">
          <label htmlFor="" className="text-lg text-zinc-800">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-slate-200 text-sm rounded-md"
            {...register("name", { requried: "Name is requried" })}
          />
          {errors.name && (
            <p className="text-base-text-red mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="" className="text-lg text-zinc-800">
            Email
          </label>
          <input
            {...register("email", { requried: "Email is requried" })}
            type="email"
            className="w-full p-2 border border-slate-200 text-sm rounded-md"
          />
          {errors.email && (
            <p className="text-base-text-red mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="" className="text-lg text-zinc-800">
            Comment
          </label>
          <textarea
            {...register("comment", { requried: "Comment is requried" })}
            className="w-full p-2 border border-slate-200 text-sm rounded-md"
          />
          {errors.comment && (
            <p className="text-base-text-red mt-1">{errors.comment.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-400 text-white p-3 hover:bg-blue-600 rounded-md text-lg font-bold"
        >
          Submit Comment
        </button>
      </form>
      <div className="">
        <CommentCard />
      </div>
    </>
  );
};

export default Form;
