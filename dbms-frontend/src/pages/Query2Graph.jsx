import React, { useState } from "react";
import  "chart.js/auto";
import { Chart } from "react-chartjs-2";


const Query2Graph = ({data}) => {
    var arrlabels = [];
    var points = [];
    var avgOfTop = [];
 

    data.forEach(function (data) {
        arrlabels.push(data.season);
        points.push(data.points);
        avgOfTop.push(data.avgOfTop);
    });


    
    const data1 = {
        labels: arrlabels,
        datasets: [
          {
            label: "Selected Player Avg Points per Game",
            backgroundColor: "#FFCA48",
            borderColor: "#FFCA48",
            data: points,
          },
          {
            label: "Avg points per game of Top 5 players of the season",
            backgroundColor: "rgb(231, 76, 60)",
            borderColor: "rgb(231, 76, 60)",
            data: avgOfTop,
          }
        ],
    };

    const options = {
        maintainAspectRatio: false
    };

    return (
        <div style={{ height: '75vh', width: '75vw', border : '1px solid', 
        padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}}>
          <Chart type = "line" data = {data1} options={options}/>
          <br></br>
          <br></br>
        </div>
      
    )
    
};

export default Query2Graph