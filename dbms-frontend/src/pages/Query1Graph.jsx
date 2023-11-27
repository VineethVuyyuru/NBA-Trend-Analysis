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
        <div style={{position: 'relative', height: '80vh', width: '80vw'}}>
          <Chart type = "line" data = {data1} options={options}/>
        </div>
    )
    
};

export default Query1Graph