import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import "../charts.css";

export default class App extends React.Component {
  render() {
    return (
      <div class="geochart">
        <Chart
          chartType="GeoChart"
          data={[
            ["Country", "Sales"],
            ["Germany", 500],
            ["United States", 300],
            ["Brazil", 400],
            ["Canada", 600],
            ["France", 800],
            ["China", 1000],
            ["India", 200],
            ["RU", 100],
            ["Greenland", 200],
            ["Egypt", 200],
            ["Pakistan", 250]
          ]}
          options={{
            title: "Sales per person",
            backgroundColor: "#dfdfdf",
            colorAxis: { colors: ["yellow", "red"] }
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}
