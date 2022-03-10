import { AppBar, Toolbar, Typography, Avatar, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import { memories } from "../../Images/Images";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  let user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={"h2"}
          // to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" className="" color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => {
              navigate("/auth");
            }}
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
