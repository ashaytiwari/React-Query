import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((data) => data.value);
  const totalMaximum = Math.max(...dataPointValues);
  console.log(props);
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
