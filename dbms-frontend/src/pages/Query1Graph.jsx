import React, { useState } from "react";
import  "chart.js/auto";
import { Chart } from "react-chartjs-2";


const Query1Graph = ({data}) => {
    var arrLabels = [];
    var arrPoints = [];
    var arrSalary = [];
    
    data.forEach(function (data) {
        arrLabels.push(data.year);
        arrPoints.push(data.points);
        arrSalary.push(data.salary);
        
    });
    
    const data1 = {
        labels: arrLabels,
        datasets: [
          {
            label: "Ponts Scored",
            backgroundColor: "#FFCA48",
            borderColor: "#FFCA48",
            data: arrPoints,
            yAxisID: 'y',
          },
          {
            label: "Salary",
            backgroundColor: "rgb(231, 76, 60)",
            borderColor: "rgb(231, 76, 60)",
            data: arrSalary,
            yAxisID: 'y1'
          },
        ],
    };

    const options = {
       
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            position: 'left',
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
          y1: {
            type: 'linear',
            position: 'right',
            title: {
                display: true,
                text : 'Salary in $',
                color: 'black',
                font: {
                  family: "sans-serif",
                  size: 20,
                  weight: 'bold'
                },
            },
            grid: {
              drawOnChartArea: false, 
            },
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

export default Query1Graph