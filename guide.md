# Comment System - Backend Integration Guide

## Overview

Yeh guide batata hai ki kaise aap comment data ko axios se backend me bhej sakte ho aur database me save kar sakte ho.

---

## Step 1: Axios Install Karein

```bash
npm install axios
```

---

## Step 2: Frontend se Data Bhejne ke Liye Setup

### A. Context me API call ka function add karein

[ReplyCommentContext.jsx](context/ReplyCommentContext.jsx) me ye code add karein:

```javascript
"use client";

import { createContext, useContext, useState } from "react";
import axios from "axios";

const ReplyContext = createContext();

export const ReplyProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [replyingTo, setReplyingTo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Main comment add karein
  const addComment = async (commentData) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/comments", // Backend URL
        {
          ...commentData,
          parentId: null, // Main comment ke liye null
        },
      );

      // Local state me add karein
      setComments((prev) => [
        ...prev,
        { ...response.data, id: response.data._id, replies: [] },
      ]);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.message);
      console.error("Error adding comment:", err);
    } finally {
      setLoading(false);
    }
  };

  // Reply add karein
  const addReply = async (parentId, replyData) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/comments", {
        ...replyData,
        parentId: parentId, // Parent comment ka ID
      });

      // Local state me add karein recursively
      const addReplyRecursive = (commentsList) => {
        return commentsList.map((comment) => {
          if (comment.id === parentId || comment._id === parentId) {
            return {
              ...comment,
              replies: [
                ...(comment.replies || []),
                { ...response.data, id: response.data._id, replies: [] },
              ],
            };
          }
          if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: addReplyRecursive(comment.replies),
            };
          }
          return comment;
        });
      };

      setComments(addReplyRecursive(comments));
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.message);
      console.error("Error adding reply:", err);
    } finally {
      setLoading(false);
    }
  };

  // Backend se comments fetch karein (page load par)
  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/comments");
      setComments(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching comments:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReplyContext.Provider
      value={{
        comments,
        setComments,
        addComment,
        addReply,
        replyingTo,
        setReplyingTo,
        loading,
        error,
        fetchComments,
      }}
    >
      {children}
    </ReplyContext.Provider>
  );
};

export const useComment = () => useContext(ReplyContext);
```

---

### B. Form.jsx me update karein

```javascript
"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CommentCard from "./CommentCard";
import { useComment } from "../context/ReplyCommentContext";

const Form = () => {
  const { addComment, fetchComments, loading } = useComment();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Page load par comments fetch karein
    fetchComments();
  }, []);

  const onSubmit = async (data) => {
    await addComment(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="bg-white p-4 mx-auto lg:w-3/4 sm:w-full mt-3"
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
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="" className="text-lg text-zinc-800">
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="w-full p-2 border border-slate-200 text-sm rounded-md"
          />
          {errors.email && (
            <p className="text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="" className="text-lg text-zinc-800">
            Comment
          </label>
          <textarea
            {...register("comment", { required: "Comment is required" })}
            className="w-full p-2 border border-slate-200 text-sm rounded-md"
          />
          {errors.comment && (
            <p className="text-red-600 mt-1">{errors.comment.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-400 text-white p-3 hover:bg-blue-600 rounded-md text-lg font-bold"
        >
          {loading ? "Posting..." : "Submit Comment"}
        </button>
      </form>
      <div className="">
        <CommentCard />
      </div>
    </>
  );
};

export default Form;
```

---

### C. ReplyModelBoxPage.jsx me update karein

```javascript
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useComment } from "../context/ReplyCommentContext";

const ReplyModelBoxPage = ({ parentCommentId, handleClose }) => {
  const { addReply, loading } = useComment();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await addReply(parentCommentId, data);
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
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md flex-1"
        >
          {loading ? "Replying..." : "Reply"}
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
```

---

## Step 3: Backend Setup (Node.js + Express + MongoDB)

### A. Backend project structure

```
backend/
├── server.js
├── models/
│   └── Comment.js
├── routes/
│   └── comments.js
├── .env
└── package.json
```

### B. server.js

```javascript
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/comments", require("./routes/comments"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### C. models/Comment.js

```javascript
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "Comment",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
```

### D. routes/comments.js

```javascript
const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Get all comments with replies nested
router.get("/", async (req, res) => {
  try {
    // Sirf main comments lein (parentId null)
    const comments = await Comment.find({ parentId: null }).sort({
      createdAt: -1,
    });

    // Har comment ke liye replies populate karein recursively
    const populateReplies = async (comments) => {
      return await Promise.all(
        comments.map(async (comment) => {
          const replies = await Comment.find({ parentId: comment._id }).sort({
            createdAt: -1,
          });

          return {
            ...comment.toObject(),
            replies: replies.length > 0 ? await populateReplies(replies) : [],
          };
        }),
      );
    };

    const populatedComments = await populateReplies(comments);
    res.json(populatedComments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new comment
router.post("/", async (req, res) => {
  const { name, email, comment, parentId } = req.body;

  try {
    // Validation
    if (!name || !email || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newComment = new Comment({
      name,
      email,
      comment,
      parentId: parentId || null,
    });

    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete comment
router.delete("/:id", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    // Delete ye comment ke replies bhi
    await Comment.deleteMany({ parentId: req.params.id });
    res.json({ message: "Comment deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
```

### E. .env file

```
MONGODB_URI=mongodb://localhost:27017/comments_db
PORT=5000
```

### F. package.json

```json
{
  "name": "comment-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

---

## Step 4: Backend Start Karein

```bash
npm install
npm run dev
```

---

## Step 5: Frontend ka URL Backend URL se match karein

`.env.local` file banaayen:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Ya context me hardcoded use karein:

```javascript
const response = await axios.post("http://localhost:5000/api/comments", {
  ...commentData,
  parentId: null,
});
```

---

## Summary Flow

```
Frontend (Form)
    ↓ (axios.post)
Backend API (/api/comments)
    ↓
Validation + DB Save
    ↓
Response back to Frontend
    ↓
Context state update
    ↓
UI re-render with nested comments
```

---

## Important Notes

- **MongoDB**: Local ya MongoDB Atlas use karein
- **CORS**: Frontend aur backend different ports par hon to CORS enable karein
- **Error Handling**: Network errors ke liye proper error messages show karein
- **Loading State**: Form submit hote time button disable karein
- **Unique ID**: MongoDB automatically `_id` generate karega

---

## Testing Steps

1. ✅ Form submit karein
2. ✅ Axios request backend par jayega
3. ✅ MongoDB me data save hoga
4. ✅ Response frontend ko milega
5. ✅ Comment list update hogi
6. ✅ Reply karne par same process hogi but `parentId` set hoga
