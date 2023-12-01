import NavBar from './NavBar'
import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import { Container, Row, Col } from 'react-bootstrap';


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
            <Col className='px-0' >
            
                <div>
                    <p style={{boxShadow: '0px 2px 8px 0px rgba(224, 75, 82, 0.5), 0px 4px 16px 0px rgba(224, 75, 82, 0.5)', backgroundColor: '#111827',
                    padding: '15px', fontSize: '30px', color: 'white', textAlign: 'center',
                    fontFamily: 'Verdana, sans-serif', fontWeight: 'bold'}}> Dashboard </p>
                    <div className='pl-5' >
                        <div className="font-sans text-lg pt-4 text-justify pr-16">
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
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={() => handleClick()}
                                >
                                    Get tuple count
                                </button>
                            </div>

                            {visible && (
                                <div className="font-sans text-sm mb-0 pl-3 pt-2.5">Count is {counter}</div>
                            )}

                        </div>
                        <br/>
                        <div class=" grid grid-cols-2 gap-4 bg-white dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-3  border border-gray-20 rounded-lg shadow-md ">
                                <div className="font-sans text-xl text-semibold">Query 1</div>
                                <p class="mb-3 font-sans text-sm p-2 text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="/query1" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                                    Visualize
                                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>

                            <div class="p-3 border border-gray-200 rounded-lg shadow-md ">
                                <div className="font-sans text-xl text-semibold">Query 2</div>
                                <p class="mb-3 font-sans text-sm p-2 text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="/query2" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                                    Visualize
                                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>

                            <div class="p-3 border border-gray-200 rounded-lg shadow-md ">
                                <div className="font-sans text-xl text-semibold">Query 3</div>
                                <p class="mb-3 font-sans text-sm p-2 text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="/query3" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                                    Visualize
                                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>

                            <div class="p-3 border border-gray-200 rounded-lg shadow-md ">
                                <div className="font-sans text-xl text-semibold">Query 4</div>
                                <p class="mb-3 font-sans text-sm p-2 text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="/query4" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                                    Visualize
                                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>

                            <div class="p-3 border border-gray-200 rounded-lg shadow-md ">
                                <div className="font-sans text-xl text-semibold">Query 5</div>
                                <p class="mb-3 font-sans text-sm p-2 text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="/query5" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                                    Visualize
                                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        

                        
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard