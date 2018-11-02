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
            ["Retail", 8],
            ["Commercial", 3],
            ["Enterprise", 2],
            ["Institutional", 2]
          ]}
          options={{
            backgroundColor: "#dfdfdf",
            title: "Singapore Volume",
            // Just add this option
            pieHole: 0.5,
            colors: ["#f58c00", "#ff9e42", "#ffbe42", "#ffdd42"],
            legend: { position: "bottom" }
          }}
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    );
  }
}
