import React, { useState } from "react";

import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { Dots } from "react-preloaders";

import { useForm, Controller } from "react-hook-form";

import { CustomDialog } from "react-st-modal";

import CustomDialogContent from "../hooks/useResultPopUp";

import "../styles/register.css";

import Copyright from "./CopyRight";

import useStyles from "../styles/LoginStyle";

import { fetchApi } from "../../utility/fetchApi";

// import { useDispatch } from 'react-redux'

const Login = () => {
  // const dispatch = useDispatch()

  let history = useHistory();

  const classes = useStyles();

  const { handleSubmit, control, errors: fieldsErrors, formState } = useForm({
    mode: "onChange"
  });

  const [signInText, setSignInText] = useState("SIGN IN");

  const [hideProgressIcon, setHideProgressIcon] = useState(false);

  let remem = false;

  const rememberME = e => {
    remem = e.target.checked;
  };

  const APISubmitUrl = "";

  const onSubmit = data => {
    setSignInText("Checking...");

    setHideProgressIcon(true);

    const dataObject = {
      EMAIL: data.EMAIL,

      PASSWORD: data.PASSWORD
    };

    (async () => {
      const { isError, data, errorMessage } = await fetchApi(
        dataObject,
        "POST",
        APISubmitUrl
      );

      if (isError) {
        setSignInText("SIGN IN");

        setHideProgressIcon(false);
        CustomDialog(
          <CustomDialogContent
            content={{
              title: "OPS!",
              desc1: errorMessage
            }}
            color="red"
          />,
          {
            title: "RESULT",
            showCloseIcon: true
          }
        );
      } else {
        setHideProgressIcon(true);

        setSignInText("REDIRECTING...");

        sessionStorage.setItem("IFAMLMLTOKEN", data.token);

        sessionStorage.setItem("IFAMLMREMEBER", remem);

        history.push("/user/");
        // dispatch({ type: 'test', payload: data })
      }
    })();
  };

  return (
    <>
      <Container component="main" className="authBody" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{ color: "rgba(0, 74, 74, 1)" }}
          >
            Sign Into Your Account.
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="EMAIL"
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  name="EMAIL"
                  autoComplete="email"
                  helperText={
                    fieldsErrors.EMAIL ? fieldsErrors.EMAIL.message : null
                  }
                />
              }
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "This Email field cannot be empty"
                },
                minLength: {
                  value: 5,
                  message: "The entered Email is too short."
                }
              }}
            />
            <Controller
              name="PASSWORD"
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  name="PASSWORD"
                  autoComplete="password"
                  type="password"
                  helperText={
                    fieldsErrors.PASSWORD ? fieldsErrors.PASSWORD.message : null
                  }
                />
              }
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "This Password field cannot be empty"
                },
                minLength: {
                  value: 8,
                  message: "The Password cannot be less than 8 characters"
                }
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  name="rememberMe"
                  style={{ color: "rgba(0, 74, 74, 1)" }}
                  onChange={rememberME}
                  defaultChecked={false}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={formState.isSubmitting}
            >
              {signInText}
              {hideProgressIcon && (
                <CircularProgress style={{ color: "white" }} />
              )}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  style={{ color: "rgba(0, 74, 74, 1)" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/auth/register/"
                  variant="body2"
                  style={{ color: "rgba(0, 74, 74, 1)" }}
                >
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>

      {/* <Dots
        color={"rgb(6,74,119)"}
        background="white"
        time={1000}
        customLoading={false}
      /> */}
    </>
  );
};

export default Login;
