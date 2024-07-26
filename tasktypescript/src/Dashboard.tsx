// // src/Dashboard.tsx

// import React from 'react';
// import './Dashboard.css';

// const Dashboard: React.FC = () => {
//   return (
//     <div className="dashboard">
//       <header className="header-black">
//         <div className="logo">EVERNORTH</div>
//         <div className="user-info">
//           <span>Messages</span>
//           <span>John B</span>
//         </div>
//       </header>
//       <header className="header-green">
//         <nav>
//           <ul>
//             <li>Home</li>
//             <li>Intent</li>
//             <li>Ticket</li>
//             <li>Case Search</li>
//           </ul>
//         </nav>
//       </header>

//       <main className="main-content">
//         <div className="left-section">
//           <div className="welcome-section">
//             <h1>Welcome, John!</h1>
//             <p><strong>Good morning.</strong> Get health support from anywhere with Crossover Health</p>
//             <div className="welcome-image">
//               {/* Replace with an actual image or SVG */}
//               <img src="path-to-image" alt="Welcome" />
//             </div>
//           </div>
//         </div>

//         <div className="right-section">
//           <div className="tasks-section">
//             <h2>Tasks</h2>
//             <div className="task-item">
//               <p>Capture Intake data</p>
//               <br/>
//               <span>In Copay Waiver (CC-153205) - Urgency 100</span>
//               <button>Go</button>
//             </div>
//             <div className="task-item">
//               <p>Create Process</p>
//               <span>In ManageProcess (M-2047) - Urgency 10</span>
//               <button>Go</button>
//             </div>
//           </div>

//           <div className="followed-items-section">
//             <h2>My followed items</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Case ID</th>
//                   <th>Request Details</th>
//                   <th>Created By</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Rows go here */}
//               </tbody>
//             </table>
//           </div>

//           <div className="pulse-section">
//             <h2>Pulse</h2>
//             <div className="pulse-input">
//               <button>JB</button>
//               <input type="text" placeholder="Start a conversation" />
//               <button>Send</button>
//               <button>Attach file</button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import NavBar from './NavBar';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Box,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Send, AttachFile, Person } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
const Dashboard: React.FC = () => {
  
  return (
    <div className="dashboard">
      <AppBar position="static" style={{ backgroundColor: "black"}}>
        <Toolbar style={{ minHeight:'20px'}}>
          <Typography variant="h6" className="logo" color={"#89E689"}>
            EVERNORTH
          </Typography>
          <Box flexGrow={1} />
          <Typography variant="body1" className="user-info" color={"#89E689"}>
            <IconButton style={{ color: "#89E689" }}>
              <NotificationsNoneOutlinedIcon />
            </IconButton>Messages
          </Typography>
          <Typography variant="body1" className="user-info" color={"#89E689"}>
            <IconButton style={{ color: "#89E689" }}>
              <PersonOutlineOutlinedIcon />
            </IconButton>
            Deepika S
          </Typography>
        </Toolbar>
      </AppBar>

     <NavBar/>
    </div>
  );
};

export default Dashboard;
