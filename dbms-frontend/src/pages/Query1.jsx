import React, { useState, useEffect } from 'react';
import Query1Graph from './Query1Graph';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar'
import Header from './Header';
import './style.css';
import SideBar from './SideBar';


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
        <Container fluid="xs">
            <Row className="min-vh-100" >
                <Col xs={"auto"}><SideBar/></Col>

                <Col>
                    <div className="">
                        <NavBar/> 
                        <br></br>
                        <div className="search-container">
                        
                            <div>

                                <label>Search Player &nbsp;</label>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type here"
                                />

                                <div className="search-results">
                                {results && results.length > 0 && 
                                    results.map((result) => (
                                        
                                    <div key={result.id} onClick={() => handleResultClick(result)} 
                                    className="select-result">
                                    <p className="result">{result.name}</p>
                                    </div>
                                    
                                    ))
                                }
                                </div>

                            </div>
                            
                            <div className="flex-none">
                                <div className="text-sm font-sans font-semibold p-3 break-normal">
                                    This query tells about the interplay between an NBA player's average points per game (PPG) and their salary across multiple seasons
                                </div>
                            </div>
                        
                            <div  className="selected-player">
                            {selectedResult && (
                                    <div className="player-name">
                                    <p>Selected Player: {selectedResult.name}</p>
                                    </div>
                                )}
                                
                                {playerDetails && playerDetails.length>0 && (
                                    <Query1Graph 
                                    data = {playerDetails}
                                    />
                                )}
                                
                            </div>

                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Query1