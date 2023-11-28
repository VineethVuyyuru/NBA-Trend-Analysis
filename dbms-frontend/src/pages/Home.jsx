import NavBar from './NavBar'
import React, { useState, useEffect } from 'react';


function Home(){
    const [visible, setVisible]= useState(false)
    const [counter, setCounter]= useState(0)

    const handleClick = async () => {
        try {
            const playerDetailsApiUrl = `http://localhost:8080/getCount`;
            const response = await fetch(playerDetailsApiUrl);
            const countVal = await response.json();
            console.log(countVal)

            setCounter(countVal);
            
            setVisible(true);
            
        } catch (error) {
          console.error('Error fetching player details:', error);
        }
    }

    return(
        <>
            <NavBar/>
            <div className="flex  flex-col p-10 align-top">
                <div className="text-2xl font-sans font-semibold">
                    NBA Trend Analysis
                </div>
                <br/>
                <div>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => handleClick(result)}
                    >
                        Get tuple count
                    </button>
                    {visible && (
                        <p>Count is {counter}</p>
                    )}
                    <br/>
                    <div className="font-sans text-sm pt-4 text-justify">
                        Sports analysis provides valuable insights into the dynamics of a sport 
                        and can be used to acquire various types of data such as performance analysis, 
                        planning tactics, market evaluation of a player or team and much more. Basketball holds a significant position among sports having a global following. The NBA in particular is one of the most prominent professional basketball leagues in the world with the market evaluation of the average NBA team around a whopping $2.86 billion with the Golden State Warriors at the lead with $7 billion according to forbes. Each team's value is rising and the growth has increased even more compared to precovid numbers meaning a buyer can earn cash quickly and wouldn't need to spend a penny ever again. Apart from this, transactions between teams for player trades are worth millions of dollars so club managers must be actively involved in this process whether to bring in a player to improve their own dynamics or increase capital by giving up a player. All of this is dependent on a teams and its players performance statistics over the seasons showing how much of a need there is to analyze the data. This project aims to provide tools for measuring certain metrics that can help in evaluating the market value of players and teams by considering team win percentages, their player performances and individual player statistics related to types of goals made, field position and their individual contribution to the team.
                    </div>
                    <br/>
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
        </>
    )
}

export default Home