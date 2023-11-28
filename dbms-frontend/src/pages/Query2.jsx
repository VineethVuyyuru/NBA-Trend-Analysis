import React, { useState, useEffect } from 'react';
import Query1Graph from './Query1Graph';
import { Container } from 'react-bootstrap';
import Header from './Header'
import PlayerSelect from './PlayerSelect';
import NavBar from './NavBar'

function Query1(){
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);
    const [playerDetails, setPlayerDetails] = useState([]);

    const handleResultClick = async (result) => {
        try {
            setSelectedResult(result);
            setResults([]);
            setInputValue('');
            // Example: Assuming there's an API endpoint for player details
            const playerDetailsApiUrl = `http://localhost:8080/query3/${result.name}`;
            const response = await fetch(playerDetailsApiUrl);
            const playerData = await response.json();
           
            setPlayerDetails(playerData);
            console.log(playerDetails)
            
        } catch (error) {
          console.error('Error fetching player details:', error);
        } 
      };


    return (
        <div className="">
            {/* <Header/>  */}
            <NavBar/>
            <br/>
            <div className="flex align-top">
                <PlayerSelect inputVal={inputValue} 
                            results={results} 
                            setInputValue={setInputValue} 
                            setResults={setResults}
                            onSelect={handleResultClick}/>
                
                <div className="flex-none">
                    {selectedResult && (
                        <div>
                        <p className="block mb-2 text-sm font-medium text-black-900 text-center">Selected Player: {selectedResult.name}</p>
                        </div>
                    )}
                    <br/>
                    {playerDetails && playerDetails.length>0 && (
                        <Query1Graph 
                        data = {playerDetails}
                        />
                    )}
                </div>
                
            </div>
        </div>
    );
}

export default Query1