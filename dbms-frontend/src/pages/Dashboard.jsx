import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


function Dashboard(){
    const [visible, setVisible]= useState(false)
    const [counter, setCounter]= useState(0)

    const handleClick = async () => {
        try {
            const playerDetailsApiUrl = `http://localhost:8080/getCount`;
            const response = await fetch(playerDetailsApiUrl);
            const countVal = await response.json();
            console.log(countVal[0].total_count)

            setCounter(countVal[0].total_count);
            
            setVisible(true);
            
        } catch (error) {
          console.error('Error fetching player details:', error);
        }
    }

    return(            
        <Container fluid="xs">
           <Row className="min-vh-100 mx-0" >

            <Col xs="auto" className='px-0' >
                <SideBar/>
            </Col>
            <Col className='px-0 page' >
            
                <div>
                    <p style={{boxShadow: '0px 2px 8px 0px rgba(224, 75, 82, 0.5), 0px 4px 16px 0px rgba(224, 75, 82, 0.5)', backgroundColor: '#111827',
                    padding: '15px', fontSize: '30px', color: 'white', textAlign: 'center',
                    fontFamily: 'Verdana, sans-serif', fontWeight: 'bold'}}> Dashboard </p>
                    <div className='pl-5' >
                        <div className="font-sans text-lg pt-4 text-justify pr-16 text-white">
                        Our application offers versatile tools for analyzing statistics in diverse ways, 
                        catering to both team-oriented and player-focused evaluations within the context of the NBA. 
                        Our suite of tools facilitates comparisons between teams or players, 
                        employing a wide array of metrics that serve multiple purposes. 
                        From assessing a player's financial value to formulating strategic plans for teams, 
                        our platform delivers invaluable insights derived from years of NBA league data.
                        In essence, our application serves as a multifaceted toolset leveraging extensive NBA data. 
                        </div>
                        <br/>
                        <div className="flex">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    style={{backgroundColor: '#5a0823'}}
                                    onClick={() => handleClick()}
                                    
                                >
                                    Get tuple count
                                </button>
                            </div>

                            {visible && (
                                <div className="font-sans text-sm mb-0 pl-3 pt-2.5 text-white">Count is {counter}</div>
                            )}

                        </div>
                        <br/>
                        <div class=" grid grid-cols-2 gap-3 mr-5">
                            
                            <Fade left>
                                <div>
                                    <div class="p-3 rounded-lg shadow-md" 
                                        style={{backgroundColor: '#111827', boxShadow: '0px 2px 8px 0px rgba(224, 75, 82, 0.5), 0px 4px 16px 0px rgba(224, 75, 82, 0.5)'}}>
                                        <div className="font-sans text-xl text-semibold text-white">Query 1</div>
                                        <p class="mb-3 font-sans text-sm p-2 text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <a href="/query1" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-indigo-300"
                                        style={{backgroundColor: '#5a0823', textDecoration:'none'}}>
                                            Visualize
                                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </Fade>

                            <Fade right>
                                <div>
                                    <div class="p-3 rounded-lg shadow-md"
                                        style={{backgroundColor: '#111827', boxShadow: '0px 2px 8px 0px rgba(224, 75, 82, 0.5), 0px 4px 16px 0px rgba(224, 75, 82, 0.5)'}}>
                                        <div className="font-sans text-xl text-semibold text-white">Query 2</div>
                                        <p class="mb-3 font-sans text-sm p-2 text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <a href="/query2" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-indigo-300"
                                        style={{backgroundColor: '#5a0823', textDecoration:'none'}}>
                                            Visualize
                                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </Fade>

                            <Fade left>
                                <div>
                                    <div class="p-3 rounded-lg shadow-md "
                                        style={{backgroundColor: '#111827', boxShadow: '0px 2px 8px 0px rgba(224, 75, 82, 0.5), 0px 4px 16px 0px rgba(224, 75, 82, 0.5)'}}>
                                        <div className="font-sans text-xl text-semibold text-white">Query 3</div>
                                        <p class="mb-3 font-sans text-sm p-2 text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <a href="/query6" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-indigo-300"
                                        style={{backgroundColor: '#5a0823', textDecoration:'none'}}>
                                            Visualize
                                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </Fade>

                            <Fade right>
                            <div>
                                <div class="p-3 rounded-lg shadow-md "
                                style={{backgroundColor: '#111827', boxShadow: '0px 2px 8px 0px rgba(224, 75, 82, 0.5), 0px 4px 16px 0px rgba(224, 75, 82, 0.5)'}}>
                                    <div className="font-sans text-xl text-semibold text-white">Query 4</div>
                                    <p class="mb-3 font-sans text-sm p-2 text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="/query4" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-indigo-300"
                                    style={{backgroundColor: '#5a0823', textDecoration:'none'}}>
                                        Visualize
                                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            </Fade>
                            
                            <Fade left>
                                <div>
                                    <div class="p-3 rounded-lg shadow-md "
                                    style={{backgroundColor: '#111827', boxShadow: '0px 2px 8px 0px rgba(224, 75, 82, 0.5), 0px 4px 16px 0px rgba(224, 75, 82, 0.5)'}}>
                                        <div className="font-sans text-xl text-semibold text-white">Query 5</div>
                                        <p class="mb-3 font-sans text-sm p-2 text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <a href="/query5" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-indigo-300"
                                        style={{backgroundColor: '#5a0823', textDecoration:'none'}}>
                                            Visualize
                                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </Fade>

                        </div>
                    </div>
                    <br></br><br></br>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard