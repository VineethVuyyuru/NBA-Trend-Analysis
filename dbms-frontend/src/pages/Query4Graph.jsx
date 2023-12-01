import React, { useEffect, useState } from "react";
import  "chart.js/auto";
import { Chart } from "react-chartjs-2";


const Query4Graph = ({data}) => {
  const [higher, setHigher] = useState([])
  var arrlabels = [];
  var points_high = [];
  var team_high = [];
  var points_low = [];
  var team_low = [];
  console.log(data)

  useEffect(() => {
    const higherRank = data.filter(entry => entry.high_rank === 1);
    const lowerRank = data.filter(entry => entry.low_rank === 1);

    higherRank.forEach(function (data) {
      arrlabels.push(data.season);
      points_high.push(data.points);
      team_high.push(data.team);
  });

  lowerRank.forEach(function (data) {
   
    points_low.push(data.points);
    team_low.push(data.team);
});

  console.log(lowerRank)

}, []); 

  // data.forEach(function (data) {
  //     arrlabels.push(data.season);
  //     points.push(data.points);
  //     team.push(data.avgOfTop);
  // });


  
  const data1 = {
      labels: arrlabels,
      datasets: [
        {
          label: "Selected Player Avg Points per Game",
          backgroundColor: "#FFCA48",
          borderColor: "#FFCA48",
          data: points_high,
        },
        {
          label: "Avg points per game of Top 5 players of the season",
          backgroundColor: "rgb(231, 76, 60)",
          borderColor: "rgb(231, 76, 60)",
          data: points_low,
        }
      ],
  };

    const options = {
      plugins: {
        tooltips: {
            callbacks: {
                label: function() {
                    return 'Hello, World!';
                }
            }
        }
    },
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