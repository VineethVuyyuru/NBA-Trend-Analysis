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
        maintainAspectRatio: false
    };

    return (
        <div style={{ height: '75vh', width: '75vw', border : '1px solid', 
        padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}}>
          <Chart type = "bar" data = {data1} options={options}/>
          <br></br>
          <br></br>
        </div>
      
    )
    
};

export default Query5Graph