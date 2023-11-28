import React, { useState } from "react";
import  "chart.js/auto";
import { Chart } from "react-chartjs-2";


const Query1Graph = ({data}) => {
    var arrlabels = [];
    var arrfieldGoalsMade = [];
    var arrfreeThrowsMade = [];
    var arrthreePointsThrowsMade = [];

    data.forEach(function (data) {
        arrlabels.push(data.season);
        arrfieldGoalsMade.push(data.fieldGoalsMade);
        arrfreeThrowsMade.push(data.freeThrowsMade);
        arrthreePointsThrowsMade.push(data.threePointsThrowsMade);
    });
    
    const data1 = {
        labels: arrlabels,
        datasets: [
          {
            label: "Field Goals Made",
            backgroundColor: "#FFCA48",
            borderColor: "#FFCA48",
            data: arrfieldGoalsMade,
          },
          {
            label: "Field Throws Made",
            backgroundColor: "rgb(231, 76, 60)",
            borderColor: "rgb(231, 76, 60)",
            data: arrfreeThrowsMade,
          },
          {
            label: "Three Points Throws Made",
            backgroundColor: "Green",
            borderColor: "Green",
            data: arrthreePointsThrowsMade,
          },
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

export default Query1Graph