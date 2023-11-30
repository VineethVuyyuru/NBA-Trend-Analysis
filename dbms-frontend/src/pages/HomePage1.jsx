import NavBar from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import logo1 from '../../src/NBA-Analytics-Logo.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Background from '../nba-court-wallpaper.jpg'
import './style.css';

export default function HomePage1(){
    return (
        <div>
            <NavBar/>
            <Container fluid>
                <Row style={{backgroundColor : "#ffbd59"}}>
                    <Col style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                        <img
                        className=''
                        src={logo1} alt='iamge'
                        />
                    </Col>
                </Row>
                <Row className='text-center' style={{backgroundColor : "#ffbd59", alignItems : 'center'}}>
                    <Col className='pb-3'>
                    <a href="/" class="inline-flex items-center px-5 py-2.5 font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 btn-get-started">
                        Get Started!!
                    </a>
                    </Col>
                </Row>
                <Row style={{backgroundColor : "#000000"}} className=''>
                <Col><img src={Background}/></Col>
                <Col style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                    <div className='p-5' style={{color: 'white', textAlign: 'justify'}}>
                        <h1 className='text-center'>About us</h1>
                        <h4>Sports analysis provides valuable insights into the dynamics of a sport 
                        and can be used to acquire various types of data such as performance analysis, 
                        planning tactics, market evaluation of a player or team and much more. 
                        Basketball holds a significant position among sports having a global following. 
                        The NBA in particular is one of the most prominent professional basketball leagues in the world with the market evaluation of the average NBA team around a whopping $2.86 billion with the Golden State Warriors at the lead with $7 billion according to forbes. 
                        Each team's value is rising and the growth has increased even more compared to precovid numbers meaning a buyer can earn cash quickly and wouldn't need to spend a penny ever again. Apart from this, transactions between teams for player trades are worth millions of dollars so club managers must be actively involved in this process whether to bring in a player to improve their own dynamics or increase capital by giving up a player. All of this is dependent on a teams and its players performance statistics over the seasons showing how much of a need there is to analyze the data. This project aims to provide tools for measuring certain metrics that can help in evaluating the market value of players and teams by considering team win percentages, their player performances and individual player statistics related to types of goals made, field position and their individual contribution to the team.
                        </h4>
                    </div>
                </Col>
                
                </Row>
            </Container>
        </div>
    )
}