import React, { useState, useEffect } from 'react';
import Query1Graph from './Query1Graph';
import { Container } from 'react-bootstrap';
import Header from './Header'


function Query1(){
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);
    const [playerDetails, setPlayerDetails] = useState([]);

    useEffect(() => {
        const apiUrl = `http://localhost:8080/getPlayers/${inputValue}`;

        const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setResults(data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        }; 
       
        if (inputValue.trim() !== '') {
        fetchData();
        } else {
        setResults([]); 
        }

    }, [inputValue]); 

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
        <div>
        <Header/>
        <Container>
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter names..."
            />
            {results && results.length > 0 && 
                results.map((result) => (
                    <div
                      key={result.id}
                      className={`result-container ${selectedResult === result ? 'selected' : ''}`}
                      onClick={() => handleResultClick(result)}
                    >
                      <p>{result.name}</p>
                    </div>
                  ))
            }
        </div>
       
            {selectedResult && (
                <div>
                <p>Selected Name: {selectedResult.name}</p>
                </div>
            )}
      
        
            {playerDetails && playerDetails.length>0 && (
                <Query1Graph 
                data = {playerDetails}
                />
            )}
            
        </Container>
        </div>
    );
}

export default Query1