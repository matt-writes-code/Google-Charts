import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BarChart from "./Charts/BarChart";
import BubbleChart_yellow from "./Charts/BubbleChart_yellow";
import BubbleChart_blue from "./Charts/BubbleChart_blue";
import DonutChart_yellow from "./Charts/DonutChart_yellow";
import DonutChart_blue from "./Charts/DonutChart_blue";
import GeoChart from "./Charts/GeoChart";
import News from "./News";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    margin: "auto"
  },
  paper: {
    height: "40vh",
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#dfdfdf",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <BarChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <GeoChart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <DonutChart_yellow />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <DonutChart_blue />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <BubbleChart_yellow />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <BubbleChart_blue />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
