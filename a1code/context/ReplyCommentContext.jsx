"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ReplyContext = createContext();
export const ReplyProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [replyingTo, setReplyingTo] = useState(null);
  const[user,setUser] = useState([])
  const[loggedIn,setLoggedIn] = useState(false)

  const addReply = (parentId, replyData) => {
    const addReplyRecursive = (commentsList) => {
      return commentsList.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [
              ...(comment.replies || []),
              { ...replyData, id: Date.now() },
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
  };

  

  return (
    <ReplyContext.Provider
      value={{ comments, setComments,user,setUser, addReply,loggedIn,setLoggedIn, replyingTo, setReplyingTo }}
    >
      {children}
    </ReplyContext.Provider>
  );
};

export const useComment = () => useContext(ReplyContext);
