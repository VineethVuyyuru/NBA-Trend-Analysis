import React, { useState, useEffect } from 'react';
import Query2Graph from './Query2Graph';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import SideBar from './SideBar';
import Zoom from 'react-reveal/Zoom';


function Query2(){
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);
    const [playerDetails, setPlayerDetails] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
      };

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
            const playerDetailsApiUrl = `http://localhost:8080/query2/${result.name}/${selectedOption}`;
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
            <Row  className="min-vh-100  mx-0" >
                
                <Col xs="auto" className='px-0' ><SideBar/></Col>

                <Col className='px-0 page'>
               
                    <div>
                        
                        <div>
                            <p className="title">Player vs Top 5</p>
                            <div className='ml-6'>
                                <p className="description-title">Description:</p>
                                <p className="description">
                                See where a player stands compared to the top 5 players in each season based on a metric of your liking. This data provides insight into a players performance with the top 5 and can also show the growth of his performance over the seasons.
                                </p>
                            </div>
                        </div>

                        <div className="search-container">

                            <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <label htmlFor="selectOption" >Choose metric &nbsp;</label>
                                    <select id="selectOption" value={selectedOption} onChange={handleDropdownChange} 
                                    style={{borderRadius: '5px', textAlign: 'center', borderColor: 'black'}}>
                                        <option value="">Metric</option>
                                        <option value="fieldgoalsmade">Field Goals Made</option>
                                        <option value="freethrowsmade">Free Throws Made</option>
                                        <option value="threepointsthrowsmade">Three-Point Throws Made</option>
                                    </select>

                                    {/* Display the selected option */}
                                    {/* {selectedOption && <p>Selected Option: {selectedOption}</p>} */}
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;
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
                            </div>
                           
                            <div  className="selected-player">
                               
                                 {selectedResult && (
                                    <div className="player-name">
                                    <p>Player Name: {selectedResult.name}</p>
                                    </div>
                                )} 
                                {playerDetails && playerDetails.length>0 && (
                                    <Zoom>
                                        <Query2Graph 
                                        data = {playerDetails}
                                        />
                                    </Zoom>
                                )}
                                <br></br>
                                <br></br>
                            </div>

                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Query2