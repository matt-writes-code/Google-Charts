import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

export default class App extends React.Component {
  render() {
    return (
      <div class="fourcharts">
        <Chart
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            ["Retail", 6],
            ["Commercial", 3],
            ["Enterprise", 2],
            ["Institutional", 3]
          ]}
          options={{
            backgroundColor: "#dfdfdf",
            title: "Hong Kong Volume",
            // Just add this option
            pieHole: 0.5,
            colors: ["#0198E1", "#38B0DE", "#c0c0c0", "#D3D3D3"],
            legend: { position: "bottom" }
          }}
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    );
  }
}
