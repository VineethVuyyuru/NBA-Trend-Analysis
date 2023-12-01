import React from 'react';
import Logo from '../NBA-Analytics-Logo.png'

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter
} from 'cdbreact';

const SideBar = () => {
  return (
      <CDBSidebar minWidth='90px' maxWidth='265px'>
        <CDBSidebarHeader icon="th-large" prefix={<i className="fa fa-bars" />}>
        <div className="container px-0" style={{ display: 'flex', alignItems: 'center' }}>
          <img
              src={Logo}
              alt="Brand"
              style={{ width: '30px', borderRadius: '50%' }}
            />
            <a className="ms-2" style={{textDecoration: 'none', color: 'white'}} href='/'>NBA Analytics</a>
        </div>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
           <a href='/dashboard'><CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem></a>
           <a href='/query1'><CDBSidebarMenuItem icon="chart-line">Salary vs Total Points</CDBSidebarMenuItem></a>
           <a href='/query2'><CDBSidebarMenuItem icon="users">Player vs Top 5</CDBSidebarMenuItem></a>
           <a href='/query6'><CDBSidebarMenuItem icon="chart-line">Height based perf</CDBSidebarMenuItem></a>
           <a href='/query4'><CDBSidebarMenuItem icon="user-shield">Players best vs worst</CDBSidebarMenuItem></a>
           <a href='/query5'><CDBSidebarMenuItem icon="chart-bar">Team vs Team eFG</CDBSidebarMenuItem></a>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            © DBMS Group 04
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  );
};

// const SideBar = () => {
//   return (
//       <div className='container-fluid'>
//         <div className='row'>
//           <div className='bg-dark col-auto col-md-3 min-vh-100'>
//             <a className='text-decoration-none text-white d-flex align-itemcenter'>
//               <i className='fs-4 bi bi-speedometer'></i>
//               <span className='ms-1 fs-4'>Brand</span>
//             </a>
//             <ul class="nav nav-pills flex-column">
//               <li class="nav-item text-white fs-4">
//                 <a href='/' class="nav-link text-white fs-5" aria-current="page">
//                   <i className='bi bi-speedometer'></i>
//                   <span className='ms-2'>Dashboard</span>
//                 </a>
//               </li>
//               <li class="nav-item text-white fs-4">
//                 <a href='/query1' class="nav-link text-white fs-5" aria-current="page">
//                   <i className='bi bi-speedometer'></i>
//                   <span className='ms-2'>Dashboard</span>
//                 </a>
//               </li>
//               <li class="nav-item text-white fs-4">
//                 <a href='#' class="nav-link text-white fs-5" aria-current="page">
//                   <i className='bi bi-speedometer'></i>
//                   <span className='ms-2'>Dashboard</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//   );
// };

export default SideBar;