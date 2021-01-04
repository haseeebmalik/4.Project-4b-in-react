import React from "react";
import Lottie from "react-lottie";
import "./App.css";
import animationData from "./lottie/38898-mobile-technology (1).json";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
export default function Joinus() {
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
    <div className={classes.root} id="joinus">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Lottie options={defaultOptions} height={300} width={400} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1>Join us</h1>

          <form>
            <TextField
              id="outlined-secondary"
              label="Enter your email address"
              variant="outlined"
              color="secondary"
            />
          </form>
          <p>
            <Button variant="contained" color="secondary">
              join
            </Button>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
