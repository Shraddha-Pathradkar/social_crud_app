import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./Styles";
import FileBase from "react-file-base64"; // converts filedata to string
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../Redux/Actions/index";

const From = ({ currentId, setCurrentId }) => {
  const [requestObj, setRequestObj] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });

  const classes = useStyles();
  const postReducerResponse = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) dispatch(updatePost(currentId, requestObj));
    else dispatch(createPost(requestObj));

    handleClear();
  };
  useEffect(() => {
    if (currentId) {
      let editPost = postReducerResponse.find((post) => post._id === currentId);
      setRequestObj({
        creator: editPost.creator,
        title: editPost.title,
        message: editPost.message,
        tags: editPost.tags,
        selectedFile: editPost.selectedFile,
      });
    }
  }, [currentId, postReducerResponse]);
  const handleClear = () => {
    setCurrentId(null);
    setRequestObj({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing a memory" : "Creating a memory"}
        </Typography>
        <TextField
          fullWidth
          name="creator"
          variant="outlined"
          label="Creator"
          value={requestObj.creator}
          onChange={(e) =>
            setRequestObj({ ...requestObj, creator: e.target.value })
          }
        />
        <TextField
          fullWidth
          name="title"
          variant="outlined"
          label="Title"
          value={requestObj.title}
          onChange={(e) =>
            setRequestObj({ ...requestObj, title: e.target.value })
          }
        />
        <TextField
          fullWidth
          name="message"
          variant="outlined"
          label="Message"
          value={requestObj.message}
          onChange={(e) =>
            setRequestObj({ ...requestObj, message: e.target.value })
          }
        />
        <TextField
          fullWidth
          name="tags"
          variant="outlined"
          label="Tags"
          value={requestObj.tags}
          onChange={(e) =>
            setRequestObj({ ...requestObj, tags: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setRequestObj({ ...requestObj, selectedFile: base64 });
            }}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={handleClear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default From;
