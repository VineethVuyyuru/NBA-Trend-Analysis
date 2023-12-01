import React, { useState, useEffect } from 'react';
import Query6Graph from './Query6Graph';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import SideBar from './SideBar';
import Zoom from 'react-reveal/Zoom';


function Query6(){
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);
    const [playerDetails, setPlayerDetails] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = async(event) => {
        setSelectedOption(event.target.value);

        const playerDetailsApiUrl = `http://localhost:8080/query6`;
        const response = await fetch(playerDetailsApiUrl);
        const playerData = await response.json();
        
        console.log(playerData)
        setPlayerDetails(playerData);
        console.log(playerDetails)
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
            const playerDetailsApiUrl = `http://localhost:8080/query6`;
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
                            <p className="title">Height based performances</p>
                            <div className='ml-6'>
                                <p className="description-title">Description:</p>
                                <p className="description">
                                See how players in different height ranges perform based on selected metric. The average of the total score is displayed. This is particularly useful in devising player positions and strategies based on a teams roster.
                                </p>
                            </div>
                        </div>

                        <div className="search-container">

                            <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <label htmlFor="selectOption">Choose metric &nbsp;</label>
                                    <select id="selectOption" value={selectedOption} onChange={handleDropdownChange}
                                    style={{borderRadius: '5px', textAlign: 'center', borderColor: 'black'}}>
                                        <option value="">Metrics</option>
                                        <option value="avg_rebounds">Rebounds</option>
                                        <option value="avg_steals">Steals</option>
                                        <option value="avg_blocked_shots">Blocked Shots</option>
                                        <option value="avg_field_goals_made">Field Goals Made</option>
                                        <option value="avg_total_points">Total Points</option>
                                    </select>

                                    {/* Display the selected option */}
                                    {/* {selectedOption && <p>Selected Option: {selectedOption}</p>} */}
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                
                            </div>
                           
                            <div  className="selected-player">
                               <br></br>
                                {playerDetails && playerDetails.length>0 && (
                                    <Zoom>
                                    <Query6Graph 
                                    data = {playerDetails} col = {selectedOption}
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

export default Query6