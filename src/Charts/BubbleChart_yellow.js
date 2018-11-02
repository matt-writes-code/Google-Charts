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
            ["", 79, 136, 60],
            ["", 78, 120, 50],
            ["", 72, 278, 80],
            ["", 81, 200, 150],
            ["", 72, 100, 210],
            ["", 68, 477, 80]
          ]}
          options={{
            backgroundColor: "#dfdfdf",
            colorAxis: { colors: ["yellow", "red"] }
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    );
  }
}
