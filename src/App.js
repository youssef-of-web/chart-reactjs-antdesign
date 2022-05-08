import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
import users from './users.json'

function App() {
  const homme = users.filter(u=>u.genre === "M")
  const femme = users.filter(u=>u.genre === "F")
  const data = [
    {
      type: "Homme",
      value: homme.length,
    },
    {
      type: "Femme",
      value: femme.length,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    label: {
      type: "spider",
      labelHeight: 28,
      content: "{name}\n{percentage}",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  return (
    <div className="App">
      <h2>chart ant design</h2>
      <div>
        <Pie {...config} />;
      </div>
    </div>
  );
}

export default App;
