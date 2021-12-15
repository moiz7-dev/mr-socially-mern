import React from "react";
import "./AddPost.scss";
import { Button, Card, Input } from "@mui/material";

const Post = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(e.target);

  };

  return (
    <div className='post-container'>
      <Card className='card'>
        <form onSubmit={onSubmitHandler}>
          <Input type='file' name="post_image" required />
          <Input type='text' name="caption" placeholder='About...' />
          <Button type="submit">Add Post</Button>
        </form>
      </Card>
    </div>
  );
};

export default Post;
