import NavBar from './NavBar';
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import logo1 from '../../src/NBA-Analytics-1.png';

export default function HomePage(){
    return (
        <div>
            <NavBar/>
            <div class="homeimage container-fluid">
                <div>
                    <p class="quote">
                    <TypeAnimation
                        sequence={[
                            "I've failed over and over and over again in my life. \n And that is why I succeed.\n - Michael Jordan",
                            1000,
                            "",
                        ]}
                        speed={50}
                        style={{ whiteSpace: 'pre-line'}}
                        cursor={false}
                        repeat={Infinity}
                    />
                    </p>
                </div>
                <div style={{color: 'white',position: 'absolute',
                        padding: "16px",
                        backgroundColor: '#5a0823',
                        borderRadius: '16px',
                        bottom: '18%',
                        left: '43%',
                        width: '200px', textAlign: 'center',
                        boxshadow: '0 4px 8px rgba(0, 0, 0, 1)'}}>
                    <a className='nav-link text-white btn-get-started' href='/'>Get Started</a>
                </div>
            </div>
            <div>
                <Container fluid className='text-white text-center' style={{backgroundColor: "#000620"}}>
                    <Row className='py-10'>
                        <Col className='col-lg-5  d-flex justify-content-center align-items-center '>
                        <img
                        className=''
                        src={logo1} alt='iamge'
                        style={{borderRadius: "50%"}}
                        />
                        </Col>
                        <Col>
                            <br></br>
                            <div><h1 >About us</h1></div>
                            <br></br>
                            <div className='d-flex justify-content-center align-items-center '>
                                <div className="about">
                                Sports analysis provides valuable insights into the dynamics of a sport 
                                and can be used to acquire various types of data such as performance analysis, 
                                planning tactics, market evaluation of a player or team and much more. 
                                Basketball holds a significant position among sports having a global following. 
                                The NBA in particular is one of the most prominent professional basketball leagues in the world with the market evaluation of the average NBA team around a whopping $2.86 billion with the Golden State Warriors at the lead with $7 billion according to forbes. 
                                Each team's value is rising and the growth has increased even more compared to precovid numbers meaning a buyer can earn cash quickly and wouldn't need to spend a penny ever again. Apart from this, transactions between teams for player trades are worth millions of dollars so club managers must be actively involved in this process whether to bring in a player to improve their own dynamics or increase capital by giving up a player. All of this is dependent on a teams and its players performance statistics over the seasons showing how much of a need there is to analyze the data. This project aims to provide tools for measuring certain metrics that can help in evaluating the market value of players and teams by considering team win percentages, their player performances and individual player statistics related to types of goals made, field position and their individual contribution to the team.
                                </div>  
                            </div>
                            <br></br>
                            <br></br>  
                        </Col>
                    </Row>
                </Container>       
            </div>
        </div>
    )
}