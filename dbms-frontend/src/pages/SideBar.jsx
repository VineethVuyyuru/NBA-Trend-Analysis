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
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Menu</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large"><a href='/'>Dashboard</a></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line"><a href='/query1'>Salary vs PPG</a></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="users">
            <a href='/query2'>Player vs Top 5</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line"><a href='/'>Query 3</a></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="user-shield"><a href='/'>Query 4</a></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-bar"><a href='/query5'>Teams eFG</a></CDBSidebarMenuItem>
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