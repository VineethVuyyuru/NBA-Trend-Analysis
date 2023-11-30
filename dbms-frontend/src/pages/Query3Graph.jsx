import React, { useState } from "react";
import  "chart.js/auto";
import { Chart } from "react-chartjs-2";


const Query3Graph = ({data}) => {
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
        maintainAspectRatio: false,
        scales: {
          y: {
              title: {
                  // Include a dollar sign in the ticks
                  display: true,
                  text : 'Points Scored',
                  color: 'black',
                  font: {
                    family: "sans-serif",
                    size: 20,
                    weight: 'bold'
                  }
              }
          },
          x: {
            title: {
                // Include a dollar sign in the ticks
                display: true,
                text : 'Year',
                color: 'black',
                font: {
                  family: "sans-serif",
                  size: 20,
                  weight: 'bold'
                }
            }
        }
      }
       
    };

    return (
        <div style={{ height: '73vh', width: '73vw', border : '1px solid', 
        padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', backgroundColor: 'white'}}>
          <Chart type = "line" data = {data1} options={options}/>
        </div>
      
    )
    
};

export default Query3Graph