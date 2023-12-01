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
          label: "AVG Successful throws made by selected player",
          backgroundColor: "#FFCA48",
          borderColor: "#FFCA48",
          data: points,
        },
        {
          label: "AVG Successful throws made by Top 5 players of the season",
          backgroundColor: "rgb(231, 76, 60)",
          borderColor: "rgb(231, 76, 60)",
          data: avgOfTop,
        }
      ],
  };

    const options = {
        maintainAspectRatio: false,
        scales: {
          y: {
              title: {
                  display: true,
                  text : 'Average Successful Throws',
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

export default Query2Graph