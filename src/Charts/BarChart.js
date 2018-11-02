import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import "../charts.css";

export default class App extends React.Component {
  render() {
    return (
      <div class="barchart">
        <Chart
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          diffdata={{
            old: [
              ["Name", "Sales"],
              ["Cesar", 1200],
              ["Rachel", 4200],
              ["Patrick", 2900],
              ["Eric", 5200]
            ],
            new: [
              ["Name", "Sales"],
              ["Cesar", 800],
              ["Rachel", 1600],
              ["Patrick", 1800],
              ["Eric", 2000]
            ]
          }}
          options={{
            title: "Sales per person",
            backgroundColor: "#dfdfdf",
            legend: { position: "bottom" },
            colors: ["#ffbe42"]
          }}
          rootProps={{ "data-testid": "4" }}
        />
      </div>
    );
  }
}
