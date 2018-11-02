import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

export default class App extends React.Component {
  render() {
    return (
      <div class="fourcharts">
        <Chart
          chartType="BubbleChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["ID", "X", "Y", "Temperature"],
            ["", 80, 167, 120],
            ["", 79, 136, 130],
            ["", 78, 184, 50],
            ["", 72, 278, 230],
            ["", 81, 200, 210],
            ["", 72, 170, 100],
            ["", 68, 477, 80]
          ]}
          options={{
            backgroundColor: "#dfdfdf",
            colorAxis: { colors: ["lightgrey", "blue"] }
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    );
  }
}
