import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./AddPost.scss";
import { Button, Card, Input, Snackbar } from "@mui/material";
import { addNewPost } from "../../../actions/post";
import { ADD_POST_RESET, CLEAR_ERRORS } from "../../../constants/post";
import Alert from "../../../utils/Alert";

const Post = () => {
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const dispatch = useDispatch();
  const {error, success, loading} = useSelector(state => state.addPost);

  useEffect(() => {
    if(error) {
      <Alert message={error} />
      dispatch({type: CLEAR_ERRORS});
    }

    if(success) {
      <Alert message="Post added successfully!" />
      dispatch({type: ADD_POST_RESET});
    }
  }, [dispatch, error, success])  

  const onImageSelectHandler = (e) => {
    if(e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        setImage(reader.result);
      }
    }
    
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('caption', caption);
    data.append('postImage', image);

    if(image) {
      dispatch(addNewPost(data));
    }

  };

  return (
    
    <div className='post-container'>
      <Card className='card'>
        <form onSubmit={onSubmitHandler}>
          <input type='file' accept="image/png, image/jpeg" onChange={onImageSelectHandler} name="post_image" required />
          <Input type='text' name="caption" onChange={(e) => setCaption(e.target.value)} placeholder='Enter Caption' />
          <Button type="submit" disabled={!image || loading}>Add Post</Button>
        </form>
      </Card>
    </div>
  );
};

export default Post;
