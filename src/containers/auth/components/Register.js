import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";

import { useForm, Controller } from "react-hook-form";

// import { Dots } from "react-preloaders";

import { CustomDialog } from "react-st-modal";

import CustomDialogContent from "../hooks/useResultPopUp";

import useStyles from "../styles/RegisterStyle";

import "../styles/register.css";

import Copyright from "./CopyRight";

import { fetchApi } from "../../utility/fetchApi";

const Register = (props) => {
  let refCode = props.location.hash;

  if (refCode.length > 1) {
    refCode = refCode.substring(1, refCode.length);
  }

  const classes = useStyles();

  let history = useHistory();

  const { handleSubmit, control, errors: fieldsErrors, formState } = useForm({
    mode: "onChange",
  });

  const [registerText, setRegisterText] = useState("REGISTER");

  const [hideProgressIcon, setHideProgressIcon] = useState(false);

  const APISubmitUrl = "";

  const onSubmit = (data) => {
    const dataObject = {
      EMAIL: data.EMAIL,

      FIRSTNAME: data.FIRSTNAME,

      LASTNAME: data.LASTNAME,

      PASSWORD: data.PASSWORD
    };
    
    setRegisterText("Processing...");

    setHideProgressIcon(true);

// 
(async () => {
  const { isError, data, errorMessage } = await fetchApi(
    dataObject,
    "POST",
    APISubmitUrl
  );

  if (isError) {
    CustomDialog(
      <CustomDialogContent
        content={{
          title: "OPS!",
          desc1: errorMessage,
        }}
        color="red"
      />,
      {
        title: "RESULT",
        showCloseIcon: true,
      }
    );
    setRegisterText("REGISTER");
    setHideProgressIcon(false);

  } else {
    setHideProgressIcon(true);

    CustomDialog(
      <CustomDialogContent
        content={{
          title: "CONGRATS!",
          desc1:
            "Your account has successfully been created and a confirmation link has been sent to your email.",
          desc2: "Kindly wait while we redirect you to the login page.",
        }}
        color="rgba(0, 74, 74, 1)"
      />,
      {
        title: "RESULT",
        showCloseIcon: true,
      }
    );
    setRegisterText("REDIRECTING...");
    setTimeout(() => {
      history.push("/auth/login/");
    }, 3000);
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
            Create Your Account.
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="FIRSTNAME"
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Firstname"
                  name="FIRSTNAME"
                  autoComplete="Firstname"
                  helperText={
                    fieldsErrors.FIRSTNAME
                      ? fieldsErrors.FIRSTNAME.message
                      : null
                  }
                />
              }
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "This Firstname field cannot be empty"
                },
                minLength: {
                  value: 3,
                  message: "The entered Firstname is too short."
                }
              }}
            />

            <Controller
              name="LASTNAME"
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Lastname"
                  name="LASTNAME"
                  autoComplete="Firstname"
                  helperText={
                    fieldsErrors.LASTNAME ? fieldsErrors.LASTNAME.message : null
                  }
                />
              }
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "This Lastname field cannot be empty"
                },
                minLength: {
                  value: 3,
                  message: "The entered Lastname is too short."
                }
              }}
            />

            <Controller
              name="EMAIL"
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Email"
                  name="EMAIL"
                  autoComplete="Email"
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
                  message: "This Email field cannot be empty",
                },
                minLength: {
                  value: 3,
                  message: "The entered Email is too short.",
                },
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
                  autoComplete="Password"
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
                  message: "This Password field cannot be empty",
                },
                minLength: {
                  value: 8,
                  message:
                    "The entered Password must be at least eight characters",
                },
              }}
            />
         
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={formState.isSubmitting}
            >
              {registerText}
              {hideProgressIcon && (
                <CircularProgress style={{ color: "white" }} />
              )}
            </Button>

            <Grid container>
              <Grid item>
                <Link
                  href="/auth/login/"
                  variant="body2"
                  className="already__auth"
                  style={{ color: "rgba(0, 74, 74, 1)", textAlign:"center" }}
                >
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={3}>
          <Copyright />
        </Box>
      </Container>
      {/* <ToastContainer /> */}
      {/* <Dots
        color={"rgb(6,74,119)"}
        background="white"
        time={1000}
        customLoading={false}
      /> */}
    </>
  );
};

export default Register;
