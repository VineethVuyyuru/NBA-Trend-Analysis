import React, { useState, useEffect } from 'react';
import Query5Graph from './Query5Graph';
import NavBar from './NavBar'
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './SideBar';
import './style.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Query5(){
    const [teams, setTeams] = useState([]);
    const [selectedResult1, setSelectedResult1] = useState(null);
    const [selectedResult2, setSelectedResult2] = useState(null);
    const [selectedResultFull1, setSelectedResultFull1] = useState(null);
    const [selectedResultFull2, setSelectedResultFull2] = useState(null);
    const [visible, setVisible] = useState(false);
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const apiUrl = `http://localhost:8080/teams`;

        const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data)
            setTeams(data); 
            setSelectedResult1(data[0].name)
            setSelectedResult2(data[0].name)
            setSelectedResultFull1(data[0].fullName)
            setSelectedResultFull2(data[0].fullName)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        
        fetchData();

    }, []); 

    const handleResultClick = async () => {
        try {
            // Example: Assuming there's an API endpoint for player details
            const playerDetailsApiUrl = `http://localhost:8080/query5/${selectedResult1}/${selectedResult2}`;
            const response = await fetch(playerDetailsApiUrl);
            const resData = await response.json();
            console.log(playerDetailsApiUrl)
            console.log(resData)
            setGraphData(resData);
            setVisible(true);
            
            
        } catch (error) {
          console.error('Error fetching player details:', error);
        }

        

      };

    const clickHandler1=(value)=>{
        setSelectedResultFull1(value)
        const t = teams.find(team => team.fullName === value);
        let selectedTeam = t ? t.name : null;
        setSelectedResult1(selectedTeam)
    }

    const clickHandler2=(value)=>{
        setSelectedResultFull2(value)
        const t = teams.find(team => team.fullName === value);
        let selectedTeam = t ? t.name : null;
        setSelectedResult2(selectedTeam)
    }


    return (
        <Container fluid="xs">
            <Row  className="min-vh-100  mx-0" >
                <Col xs="auto" className='px-0' ><SideBar/></Col>

                <Col className='px-0 page'>
                    <div>
                        <div>
                            <p className="title">Team eFG</p>
                            <div className='ml-6'>
                                <p className="description-title">Description:</p>
                                <p className="description">
                                This Player Points Breakdown Over Seasons trend query allows users to track and analyze the different types of points scored by an NBA player, including Free Throws, Field Goals, and Three-Point Throws, across the various seasons they've played. This query offers insights into how a player's scoring strategies and preferences have evolved over time.
                                </p>
                            </div>
                        </div>
                        <div  className="search-container">
                        <div className="d-flex justify-content-center align-items-center">
                    
                            <Listbox value={selectedResultFull1} onChange={clickHandler1}>
                            {({ open }) => (
                                <>
                                <Listbox.Label className="block text-sm font-medium text-white-700">Select Team 1   &nbsp;&nbsp;&nbsp;</Listbox.Label>
                                <div className="mt-1 relative">
                                    <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <span className="block">{selectedResultFull1}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                    </Listbox.Button>

                                    <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    >
                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {teams.map((team) => (
                                        <Listbox.Option
                                            key={team.id}
                                            className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-3 pr-9 w-'
                                            )
                                            }
                                            value={team.fullName}
                                        >
                                            {({ selected, active }) => (
                                            <>
                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                {team.fullName}
                                                </span>

                                                {selected ? (
                                                <span
                                                    className={classNames(
                                                    active ? 'text-white' : 'text-indigo-600',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                                ) : null}
                                            </>
                                            )}
                                        </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                    </Transition>
                                </div>
                                </>
                            )}
                            </Listbox>
                            &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
                            
                            <Listbox value={selectedResultFull2} onChange={clickHandler2}>
                            {({ open }) => (
                                <>
                                <Listbox.Label className="block text-sm font-medium text-white-700">Select Team 2   &nbsp;&nbsp;&nbsp;</Listbox.Label>
                                <div className="mt-1 relative">
                                    <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <span className="block">{selectedResultFull2}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                    </Listbox.Button>

                                    <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    >
                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {teams.map((team) => (
                                        <Listbox.Option
                                            key={team.id}
                                            className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                            )
                                            }
                                            value={team.fullName}
                                        >
                                            {({ selected, active }) => (
                                            <>
                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                {team.fullName}
                                                </span>

                                                {selected ? (
                                                <span
                                                    className={classNames(
                                                    active ? 'text-white' : 'text-indigo-600',
                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                                ) : null}
                                            </>
                                            )}
                                        </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                    </Transition>
                                </div>
                                </>
                            )}
                            </Listbox>
                            &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;                        
                        
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                style={{backgroundColor: '#5a0823'}}
                                onClick={() => handleResultClick()}
                            >
                                SUBMIT
                            </button>
                                            
                        </div>           
                
                        <div  className="selected-player">
                            
                            {visible &&(
                                <div>
                                <p className="player-name">Selected Teams : {selectedResultFull1}, { selectedResultFull2}</p>
                                </div>
                            )} 
                            {graphData && graphData.length>0 && (
                                <Query5Graph 
                                data = {graphData}
                                />
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

export default Query5