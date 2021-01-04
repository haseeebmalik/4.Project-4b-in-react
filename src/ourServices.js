import React from "react";

import "./App.css";
import animationData1 from "./lottie/3738-blockchain-2.json";
import animationData4 from "./lottie/4180-blockchain-animation.json";
import animationData2 from "./lottie/IOT-eco-living.json";
import animationData3 from "./lottie/fullstack-web-developer-programming.json";
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
    marginBottom: "10px",
  },
}));

export default function OurServices() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>OUR SERVICES</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3}>
            <br />
            <h3 className={classes.marginOnPaperTop}>Blockchain Lab</h3>
            <p>
              Our focus is building core blockchain solutions to provide low
              latency and immutability to businesses by focusing on application
              specific blockchain architecture development.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button className={classes.button2} variant="outlined">
              Learn more
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <br />

            <h3>Cyber Security Lab</h3>
            <p>
              We are providing security audit consultancy and complete audits to
              evaluate cyber-related risk in the network and putting mitigating
              controls in place to prevent systems from attacks.
            </p>

            <br />
            <br />
            <br />
            <br />
            <Button className={classes.button2} variant="outlined">
              Learn more
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper elevation={3}>
            <br />

            <h3>Artificial Intelligence Lab</h3>
            <p>
              RNS is building Natural Language Processing applications using
              machine learning algorithms and NLP for forecasting & prediction,
              data management and business automation.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button className={classes.button2} variant="outlined">
              Learn more
            </Button>

            <br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
