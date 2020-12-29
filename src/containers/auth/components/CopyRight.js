import React from "react";

import { Copyright } from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  footerContent: {
    textAlign: "center",
    marginTop: "0.5em",
    color: "rgba(0, 74, 74, 1)",
    background: "white"
  }
}));

const CopyRight = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footerContent}>
        <Copyright /> Accomease{" "}
        {new Date().getFullYear()}
        {"."}
      </div>
    </>
  );
};

export default CopyRight;
