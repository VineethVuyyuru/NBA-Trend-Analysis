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
                    <a className='nav-link text-white btn-get-started' href='/dashboard'>Get Started</a>
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
                            <div><h1 >Our Aim</h1></div>
                            <br></br>
                            <div className='d-flex justify-content-center align-items-center '>
                                <div className="about">
                                Sports analysis provides valuable insights into the dynamics of a sport 
                                and can be used to acquire various types of data such as performance analysis, 
                                planning tactics, market evaluation of a player or team and much more. 
                                Basketball holds a significant position among sports having a global following. 
                                <br/><br/>
                                Our web app provides deep insights from the NBA's extensive dataset of 28,000 matches and 1,800 players, 
                                catering to diverse user needs. It allows comparisons based on metrics like points scored, 
                                team contributions, and effective field goal percentage for talent assessment or casual exploration.
                                <br/><br/>
                                Utilizing data analytics, our platform aids decision-making, 
                                strategy formation, and a comprehensive understanding of NBA stats across various timeframes. 
                                It's designed for both rigorous statistical analysis and casual data exploration, 
                                offering an engaging experience for all users. Whether you're a team manager, 
                                analyst, or a casual fan, our app aims to deliver enjoyable and insightful interactions 
                                with NBA data.
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