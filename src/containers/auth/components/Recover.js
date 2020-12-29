import React from "react";

import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";

import Grid from "@material-ui/core/Grid";

import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

import { Dots } from "react-preloaders";

import "../styles/register.css";

import Copyright from "./CopyRight";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: "rgb(180, 0, 0)",
    color: "white"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
    background: "rgba(6, 74, 119, 1)"
  }
}));

const Recover = () => {
  const classes = useStyles();
  return (
    <>
      <Container component="main" className="authBody" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography
            component="h1"
            variant="h6"
            style={{ color: "rgba(6, 74, 119, 1)" }}
          >
            Let's Get Your Password Back!
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  href="/auth/register/"
                  variant="body2"
                  tyle={{ color: "rgba(6, 74, 119, 0.9)" }}
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

      <Dots
        color={"rgb(6,74,119)"}
        background="white"
        time={1000}
        customLoading={false}
      />
    </>
  );
};

export default Recover;
