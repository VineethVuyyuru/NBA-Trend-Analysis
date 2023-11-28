import React, { useState, useEffect } from 'react';

function TeamSelect({inputVal, results, onSelect, setInputValue, setResults}){

    useEffect(() => {
        const apiUrl = `http://localhost:8080/getTeam/${inputVal}`;

        const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setResults(data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        }; 
       
        if (inputVal.trim() !== '') {
        fetchData();
        } else {
        setResults([]); 
        }

    }, [inputVal]); 

    return (
        <div className="flex-none ml-10 mr-5 pr-5 border-r">
            <label className="block mb-2 text-sm font-medium text-black-900">Search Team 1</label>
            <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
            />

            <label className="block mb-2 text-sm font-medium text-black-900">Search Team 2</label>
            <input
                type="text"
                value={inputVal}
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
                    onClick={() => onSelect(result)}
                    >
                    <p className="block mb-2 text-sm font-medium text-black-900">{result.name}</p>
                    </div>
                    
                ))
            }
            </div>
        </div>         
    );
}

export default TeamSelect