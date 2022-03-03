import React from "react";
import Post from "./Post/Post";
import useStyles from "./Styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = () => {
  const postReducerResponse = useSelector((state) => state.postReducer);
  const classes = useStyles();
  console.log(postReducerResponse);
  return (
    <div>
      {!postReducerResponse.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {postReducerResponse.map((post) => (
            <Grid key={post.id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default Posts;
