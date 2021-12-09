import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button, CardActions, Input } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"
import {postSlice} from "../../Reduxs/ReduxSlice"
import {addPost} from "../../Reduxs/StoreReducer"


export default function MultiActionAreaCard() {
  const posts= useSelector((state)=>state.addPost.value);
  const [text, setText] = useState();

  const textHandler = (e) => {
    setText(e.target.value);
  };
  const [image, setImage] = useState();

  const imageHandler = (e) => {
    setImage(e.target.value);
  };

  const dispatch = useDispatch();
  return (
    
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Box component="form" noValidate autoComplete="off">
          <FormControl sx={{ width: "30ch" }}>
            <TextareaAutosize onChange={textHandler} value={text} style={{ width: "auto" }}  placeholder="Write SomeThing Here" />
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={imageHandler}
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </Stack>
          </FormControl>
        </Box>
      </CardContent>
      
      <CardActions>
        <Button onClick={()=>{
          dispatch(addPost({
            posttext:text,
            postImage: image
            
          },
          console.log({
            posts
          })
          ))
        }} size="small" color="primary">
          Post
        </Button>
      </CardActions>
    
    </Card>
  );
}
