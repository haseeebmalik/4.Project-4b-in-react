import React from "react";
import Lottie from "react-lottie";
import "./App.css";
import animationData from "./lottie/38577-plan-for-business-gowth.json";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button2: {
    marginLeft: "10px",
  },
}));
export default function Lottie1() {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    animationData: animationData,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h1>
            We Develop Reliable, Secure & Scalable Software for Your Business
            Needs
          </h1>
          <h3> We code your dreams</h3>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Lottie options={defaultOptions} height={250} width={350} />
        </Grid>
      </Grid>
    </div>
  );
}
