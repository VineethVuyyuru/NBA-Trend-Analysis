import React, { useState } from "react";
import  "chart.js/auto";
import { Chart } from "react-chartjs-2";


const Query5Graph = ({data}) => {
    var arrlabels = [];
    var team1efg = [];
    var team2efg = [];
    var teamA = data[0].team1;
    var teamB = data[0].team2;

    data.forEach(function (data) {
        arrlabels.push(data.season);
        team1efg.push(data.team1_efg);
        team2efg.push(data.team2_score);
    });

    console.log(teamA)
    
    const data1 = {
        labels: arrlabels,
        datasets: [
          {
            label: teamA,
            backgroundColor: "#FFCA48",
            borderColor: "#FFCA48",
            data: team1efg,
          },
          {
            label: teamB,
            backgroundColor: "rgb(231, 76, 60)",
            borderColor: "rgb(231, 76, 60)",
            data: team2efg,
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

export default Query5Graph