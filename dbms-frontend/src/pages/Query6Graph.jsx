import React, { useState } from "react";
import  "chart.js/auto";
import { Chart } from "react-chartjs-2";


const Query6Graph = ({data, col}) => {
  var arrlabels = [];
  var points = [];
  var avgOfTop = [];
  var ranges=[];
  

 console.log(col)


 const insertInto2DArray = (rowIndex, columnIndex, value) => {
    // If the row doesn't exist, create it
    if (!ranges[rowIndex]) {
      ranges[rowIndex] = [];
    }
  
    // Insert the value into the specified position
    ranges[rowIndex][columnIndex] = value;
  };

//   data.forEach(function (data) {
//       arrlabels.push(data.season);
//       points.push(data.points);
//       avgOfTop.push(data.avgOfTop);
//   });

  var indexJ=-1;
  var indexI=0;
  for(var i=0;i<data.length;i++)
  {
    indexI=indexI%5;
    if(i%5==0)
    {
        arrlabels.push(data[i].season)
        indexJ++;
    }    
    insertInto2DArray(indexI,indexJ,data[i][col])
    indexI++;
  }

  console.log(ranges,arrlabels);

  
  const data1 = {
      labels: arrlabels,
      datasets: [
        {
          label: "165-193cm",
          backgroundColor: "#FFCA48",
          borderColor: "#FFCA48",
          data: ranges[0],
        },
        {
          label: "193-198cm",
          backgroundColor: "rgb(231, 76, 60)",
          borderColor: "rgb(231, 76, 60)",
          data: ranges[1],
        },
        {
          label: "198-203cm",
          backgroundColor: "Green",
          borderColor: "Green",
          data: ranges[2],
        },
        {
          label: "203-208cm",
          backgroundColor: "Orange",
          borderColor: "Orange",
          data: ranges[3],
        },
        {
          label: "208-226cm",
          backgroundColor: "blue",
          borderColor: "blue",
          data: ranges[4],
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

export default Query6Graph