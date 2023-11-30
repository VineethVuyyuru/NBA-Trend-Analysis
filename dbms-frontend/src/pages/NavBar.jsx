import logo1 from '../../src/NBA-Analytics-Logo.png'
import { Nav } from 'react-bootstrap'


export default function Example() {
  
  return (
      <Nav className='navbar navbar-dark fixed-top'>
      <a className='navbar-brand ml-10' href='/'>
      <img src={logo1} alt='' width={40} height={40} style={{borderRadius: "50%"}} className='d-inline-block align-top'/> &nbsp; NBA Analytics</a>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
            <a className='nav-link mr-10 text-white' href='/dashboard' style={{fontSize : '20px'}}>Get Started</a>
        </li>
      </ul>
      </Nav>
  )
}
