import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Companies from './components/Companies.jsx';
import Company from './components/Company.jsx';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/companies' element={<Companies />} />
        <Route exact path='/companies/:id' element={<Company />} />
        {/* 
        
        
        <Route exact path='/capitalone' element={} />
        <Route exact path='/meta' element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// import {Outlet, useRoutes} from "react-router-dom"

//     const App = () => {

//       let routeElement = useRoutes([
//         {
//           path: "/",
//           element: <GlobalPageTemplate />,
//           children: [
//             {
//               path: "users",
//               element: <Outlet />,
//               children: [
//                 { path: "/", element:<h1>LIST USERS <h1/> },
//                 {
//                   path: "/:id",
//                   children: [
//                     { path: "/", element: <h1>USER ID</h1> },
//                     { path: "/settings", element: <h1>USER SETTINGS</h1> },
//                   ],
//                 },
//               ],
//             },
//             {
//               path: "posts",
//               element: <Outlet />,
//               children: [
//                 { path: "/", element: <h1>LIST POSTS</h1> },
//                 {
//                   path: "/:id",
//                   children: [
//                     { path: "/", element: <h1>POST ID</h1> },
//                     { path: "/settings", element: <h1>POST SETTINGS</h1> },
//                   ],
//                 },
//               ],
//             },
//             {
//               path: "teams",
//               element: <Outlet />,
//               children: [
//                 { path: "/", element: <h1>LIST TEAMS</h1> },
//                 {
//                   path: "/:id",
//                   children: [
//                     { path: "/", element: <h1>TEAMS ID</h1> },
//                     { path: "/settings", element: <h1>TEAM SETTINGS</h1> },
//                   ],
//                 },
//               ],
//             },
//           ]
//         }
//       ]);

//       return routeElement
//     }
