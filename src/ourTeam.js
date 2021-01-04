import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import pic1 from "./TeamMemberImgs/businessmen1.jpg";
import pic2 from "./TeamMemberImgs/businessmen2.jpg";
import pic3 from "./TeamMemberImgs/businessmen3.jpeg";
import FacebookIcon from "@material-ui/icons/Facebook";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),

    marginLeft: "140px",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  fb: {
    width: "50px",
    height: "50px",
    color: "silver",
  },
}));

export default function OurTeam() {
  const classes = useStyles();
  return (
    <div id="team">
      <hr />
      <br />
      <h1>OUR TEAM</h1>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs sm={12} md={12}>
            <Avatar alt="Remy Sharp" src={pic1} className={classes.large} />
            <h2>Saad</h2>
            <p>Blockchain Developer </p>
            <Button>
              <FacebookIcon className={classes.fb} />
            </Button>
          </Grid>
          <Grid item xs sm={12} md={12}>
            <Avatar alt="Remy Sharp" src={pic2} className={classes.large} />
            <h2>Haseeb</h2>
            <p>Cyber Security Engineer</p>
            <Button>
              <FacebookIcon className={classes.fb} />
            </Button>
          </Grid>
          <Grid item xs sm={12} md={12}>
            <Avatar alt="Remy Sharp" src={pic3} className={classes.large} />
            <h2>Trump</h2>
            <p>Director </p>
            <Button>
              <FacebookIcon className={classes.fb} />
            </Button>
          </Grid>
        </Grid>
      </div>
      <br />
      <hr />
    </div>
  );
}
