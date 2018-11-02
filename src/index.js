import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
