import React, { useEffect, useState } from "react";
import   "chart.js/auto";
import { Chart } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';


const Query4Graph = ({data}) => {
  const [higher, setHigher] = useState([])
  var arrlabels = [];
  var points_high = [];
  var team_high = [];
  var points_low = [];
  var team_low = [];

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


const data1 = {
      labels: arrlabels,
      datasets: [
        {
          label: "Best Scored Against",
          backgroundColor: "#FFCA48",
          borderColor: "#FFCA48",
          data: points_high,
        },
        {
          label: "Worst Scored Against",
          backgroundColor: "rgb(231, 76, 60)",
          borderColor: "rgb(231, 76, 60)",
          data: points_low,
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
      },
      plugins: {
        datalabels: {
          display:true,
          color:'black',
          offset:-20,
          anchor: 'end',
         
          align: 'start',
          formatter:  function(value, context) {
            const datasetIndex = context.datasetIndex;
            const dataIndex = context.dataIndex;
  
            // Use datasetIndex and dataIndex to get corresponding team values
            if (datasetIndex === 0) {
              return team_high[dataIndex];
            } else {
              return team_low[dataIndex];
            }
          },
        },
      },
       
    };

    return (
        <div style={{ height: '73vh', width: '73vw', border : '1px solid', 
        padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', backgroundColor: 'white'}}>
          <Chart type = "bar" data = {data1} plugins={[ChartDataLabels]} options={options}/>
        </div>
      
    )
    
};

export default Query4Graph





