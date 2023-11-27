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
        <div className="">
            <Header/> 
            <br/>
            <div className="flex mt-20 align-top">
                <div className="flex-none ml-10 mr-5 pr-5 border-r">
                    <label className="block mb-2 text-sm font-medium text-black-900">Search Player</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder=""
                    />
                    

                    <div className="border border-gray-300">
                    {results && results.length > 0 && 
                        results.map((result) => (
                            
                            <div 
                            key={result.id}
                            className="p-2 text-center hover:bg-indigo-500 hover:text-white"
                           // className={`result-container ${selectedResult === result ? 'selected' : ''}`}
                            onClick={() => handleResultClick(result)}
                            >
                            <p className="block mb-2 text-sm font-medium text-black-900">{result.name}</p>
                            </div>
                           
                        ))
                    }
                    </div>

                </div>
                
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