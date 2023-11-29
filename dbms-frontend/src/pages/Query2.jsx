import React, { useState, useEffect } from 'react';
import Query1Graph from './Query1Graph';
import { Container } from 'react-bootstrap';
import Header from './Header'
import PlayerSelect from './PlayerSelect';
import NavBar from './NavBar'
import Query2Graph from './Query2Graph';

function Query1(){
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);
    const [playerDetails, setPlayerDetails] = useState([]);

    const handleResultClick = async (result) => {
        try {
            setSelectedResult(result.name);
            setResults([]);
            setInputValue('');
            console.log('Invoked')
            // Example: Assuming there's an API endpoint for player details
            const playerDetailsApiUrl = `http://localhost:8080/query2/${result.name}`;
            const response = await fetch(playerDetailsApiUrl);
            
            const playerData = await response.json();
            console.log(playerData)
            setPlayerDetails(playerData);
            
            
        } catch (error) {
          console.error('Error fetching player details:', error);
        } 
      };


    return (
        <div className="">
            {/* <Header/>  */}
            <NavBar/>
            <br/>
            <div className="flex">
                <div className="w-1/4 ml-10 mr-5">
                <PlayerSelect inputVal={inputValue} 
                            results={results} 
                            setInputValue={setInputValue} 
                            setResults={setResults}
                            onSelect={handleResultClick}/>
                </div>
                
                <div className="w-3/4">
                    <div className="text-sm font-sans font-semibold p-3 break-normal">
                            Query 2
                            <br/>
                            <br/>
                        This query tells about the interplay between an NBA player's average points per game (PPG) and 
                    
                        their salary across multiple seasons
                        </div>
                        {selectedResult &&(
                            <div>
                            <p className="block mb-2 text-sm font-medium text-black-900 text-center">Selected Player : {selectedResult}</p>
                            </div>
                        )} 
                        <br/>
                        {playerDetails && playerDetails.length>0 && (
                            <Query2Graph 
                            data = {playerDetails}
                            />
                        )}                    
                </div>    
            </div>
        </div>
    );
}

export default Query1