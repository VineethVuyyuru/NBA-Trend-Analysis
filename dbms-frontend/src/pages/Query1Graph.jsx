import React, { useState } from "react";


const Query1Graph = ({ data }) => {
    console.log('new file', data)
    return (
        <div>
            {data && (
                 <h1>{data.length}</h1>
            )}
           
        </div>
    )
    
};

export default Query1Graph