import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

const SideBar = () => {
  return (
      <CDBSidebar minWidth='90px' maxWidth='235px'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}><a style={{textDecoration: 'none', color: 'white'}} href='/'>NBA Analytics</a></CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
           <a href='/dashboard'><CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem></a>
           <a href='/query1'><CDBSidebarMenuItem icon="chart-line">Salary vs PPG</CDBSidebarMenuItem></a>
           <a href='/query2'><CDBSidebarMenuItem icon="users">Player vs Top 5</CDBSidebarMenuItem></a>
           <a href='/'><CDBSidebarMenuItem icon="chart-line">Query 3</CDBSidebarMenuItem></a>
           <a href='/query4'><CDBSidebarMenuItem icon="user-shield">Query 4</CDBSidebarMenuItem></a>
           <a href='/query5'><CDBSidebarMenuItem icon="chart-bar">Teams eFG</CDBSidebarMenuItem></a>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            © University of Florida
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