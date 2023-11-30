import React, { useState } from "react";
import  "chart.js/auto";
import { Chart } from "react-chartjs-2";


const Query4Graph = ({data}) => {
  var arrlabels = [];
  var points = [];
  var team = [];


  data.forEach(function (data) {
      arrlabels.push(data.season);
      points.push(data.points);
      team.push(data.avgOfTop);
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
          data: team,
        }
      ],
  };

    const options = {
        maintainAspectRatio: false,
        scales: {
          y: {
              title: {
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

export default Query4Graph