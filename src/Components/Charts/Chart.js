import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPiontsValue = props.dataPionts.map(dataPiont => dataPiont.value);
    const totalMaximum = Math.max(...dataPiontsValue);
  return (
    <div className="chart">
      {props.dataPionts.map((dataPiont) => {
         return <ChartBar
          key={dataPiont.label}
          value={dataPiont.value}
          maxValue={totalMaximum} 
          label={dataPiont.label}
        />;
      })}
    </div>
  );
};
export default Chart;
