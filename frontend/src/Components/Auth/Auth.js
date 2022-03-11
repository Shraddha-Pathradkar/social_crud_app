import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./Styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import IconSvg from "./IconSvg";
import { useDispatch } from "react-redux";
import { actionName } from "../../Redux/Constants/action-names";
import { useNavigate } from "react-router";
const Auth = () => {
  let classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };
  const googleLoginSuccess = async (response) => {
    let res = response?.profileObj;
    let token = response?.tokenId;
    try {
      dispatch({ type: actionName.login, payload: { res, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleLoginFailure = async (response) => {
    console.log(response);
  };
  return (
    <Container component={"main"} maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <>
              {isSignUp && (
                <>
                  <Input
                    half={true}
                    name="firstName"
                    label={"First Name"}
                    handleChange={handleChange}
                    handleShowPass={handleShowPass}
                    autoFocus={true}
                    type="text"
                  />
                  <Input
                    half={true}
                    name="lastName"
                    label={"Last Name"}
                    handleChange={handleChange}
                    handleShowPass={handleShowPass}
                    autoFocus={false}
                    type="text"
                  />
                </>
              )}
              <Input
                half={false}
                name="email"
                label={"Email Address"}
                handleChange={handleChange}
                handleShowPass={handleShowPass}
                autoFocus={false}
                type="text"
              />
              <Input
                half={false}
                name="password"
                label={"Password"}
                handleChange={handleChange}
                handleShowPass={handleShowPass}
                autoFocus={false}
                type={showPassword ? "text" : "password"}
              />
              {isSignUp && (
                <Input
                  half={false}
                  name="password"
                  label={"Confirm Password"}
                  handleChange={handleChange}
                  handleShowPass={handleShowPass}
                  autoFocus={false}
                  type={"password"}
                />
              )}
            </>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="575860884995-5dsh0qt76n82hep4k1enn45bbiulr8ct.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                fullWidth
                color="primary"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<IconSvg />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={(r) => googleLoginSuccess(r)}
            onFailure={(e) => googleLoginFailure(e)}
            cookiePolicy={"single_host_origin"}
          />
          <Grid container justifyContent="flex-end">
            <Button onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export default Auth;
