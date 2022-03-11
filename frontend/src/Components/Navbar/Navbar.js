import { AppBar, Toolbar, Typography, Avatar, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "./Styles";
import { memories } from "../../Images/Images";
import { useNavigate, useLocation } from "react-router-dom";
import { actionName } from "../../Redux/Constants/action-names";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(null);

  let userDetails = JSON.parse(localStorage.getItem("userDetails"));
  useEffect(() => {
    setUser(userDetails);
  }, [location]);
  const logoutHandle = () => {
    dispatch({ type: actionName.logout, payload: null });
    setUser(null);
  };
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
              alt={user?.res.name}
              src={user?.res.imageUrl}
            >
              {user?.res.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.res.name}
            </Typography>
            <Button
              variant="contained"
              className=""
              color="secondary"
              onClick={logoutHandle}
            >
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
