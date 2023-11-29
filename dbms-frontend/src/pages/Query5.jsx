import React, { useState, useEffect } from 'react';
import Query5Graph from './Query5Graph';
import NavBar from './NavBar'
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './SideBar';


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
            <Row className="min-vh-100" >
                <Col xs={"auto"}><SideBar/></Col>

                <Col>
        <div className="">
            <NavBar/> 
            <br/>
            <div className="flex">
                <div className="w-1/4 ml-10 mr-5 pr-5 border-r">
                    <Listbox value={selectedResultFull1} onChange={clickHandler1}>
                    {({ open }) => (
                        <>
                        <Listbox.Label className="block text-sm font-medium text-gray-700">Select Team 1</Listbox.Label>
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
                    
                    <br/>
                    <br/>

                    <Listbox value={selectedResultFull2} onChange={clickHandler2}>
                    {({ open }) => (
                        <>
                        <Listbox.Label className="block text-sm font-medium text-gray-700">Select Team 2</Listbox.Label>
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
                    <br/>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => handleResultClick()}
                    >
                        SUBMIT
                    </button>

                </div>           
                
                <div className="w-3/4">
                    <div className="text-sm font-sans font-semibold p-3 break-normal">
                        Query 5
                        <br/>
                        <br/>
                    This query tells about the interplay between an NBA player's average points per game (PPG) and 
                  
                    their salary across multiple seasons
                    </div>
                    {visible &&(
                        <div>
                        <p className="block mb-2 text-sm font-medium text-black-900 text-center">Selected Teams are : {selectedResultFull1}, { selectedResultFull2}</p>
                        </div>
                    )} 
                    <br/>
                    {graphData && graphData.length>0 && (
                        <Query5Graph 
                        data = {graphData}
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

export default Query5