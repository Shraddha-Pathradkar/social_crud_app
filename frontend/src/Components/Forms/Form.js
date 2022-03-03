import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./Styles";
import FileBase from "react-file-base64"; // converts filedata to string
import { useDispatch } from "react-redux";
import { createPost } from "../../Redux/Actions/index";

const From = () => {
  const [requestObj, setRequestObj] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(requestObj));
  };
  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a memory</Typography>
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
          onClick={() =>
            setRequestObj({
              creator: "",
              title: "",
              message: "",
              tags: "",
            })
          }
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default From;
