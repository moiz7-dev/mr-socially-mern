import React from "react";
import "./Posts.scss";
import { Button, Card, Input } from "@mui/material";

const Posts = () => {
  const onCommentHandler = () => {};

  return (
    <Card className='posts-container'>
      <img
        src='https://mycalcas.com/wp-content/uploads/2020/07/Copy-of-Untitled-2020-07-08T105340.290-1080x630.png'
        alt='post'
      />
      <div className="comment-field">
        <Input placeholder='Enter comment' />
      </div>
      <div className='buttons-wrapper'>
        <Button>Like</Button>
        <Button onClick={onCommentHandler}>Comment</Button>
        <Button>Share</Button>
      </div>
    </Card>
  );
};

export default Posts;
