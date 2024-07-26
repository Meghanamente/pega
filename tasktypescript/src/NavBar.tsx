import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Toolbar,
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
  Typography,
  AppBar,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Send, AttachFile, Person } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const columns: GridColDef[] = [
    { field: "Case ID", headerName: "Case ID", width: 70 },
    { field: "Request Details", headerName: "Request Details", width: 130 },
    { field: "Created By", headerName: "Created By", width: 130 },
  ];

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const tabs = ["Home", "Intent", "Ticket", "CaseSearch"];

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{ backgroundColor: "#89E689",color:'black' }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab}
              {...a11yProps(index)}
              sx={{
                backgroundColor: value === index ? "white" : "inherit",
                "&.Mui-selected": {
                  backgroundColor: "white",
                },
              }}
            />
          ))}
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid container spacing={3} className="main-content">
          <Grid item xs={12} md={6}>
            <Paper className="welcome-section" style={{ padding: "16px" }}>
              <Typography variant="h4">Welcome, Deepika!</Typography>
              <Typography variant="body1">
                <strong>Good morning.</strong> Get health support from anywhere
                with Crossover Health
              </Typography>
              <div className="welcome-image">
                <img src="path-to-image" alt="Welcome" />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              className="tasks-section"
              style={{ padding: "16px", marginBottom: "10px" }}
            >
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    backgroundColor: "black",
                    marginRight: "1rem",
                    borderRadius: "22px",
                    color: "white",
                    padding: "4px 6px",
                  }}
                >
                  DS
                </span>
                <Typography variant="h6">Tasks</Typography>
              </div>
              <div className="task-item">
                <Typography variant="body1">
                  <b>Capture Intake data</b>
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="body2">
                    In{" "}
                    <span style={{ color: "blue" }}>
                      Copay Waiver (CC-153205){" "}
                    </span>{" "}
                    &bull; Urgency 100{" "}
                  </Typography>
                  <Button variant="contained" color="primary">
                    Go
                  </Button>
                </div>
              </div>
              <hr />
              <div className="task-item">
                <Typography variant="body1">
                  <b>Create Process</b>
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="body2">
                    In{" "}
                    <span style={{ color: "blue" }}>
                      ManageProcess (M-2047)
                    </span>{" "}
                    &bull; Urgency 10
                  </Typography>
                  <Button variant="contained" color="primary">
                    Go
                  </Button>
                </div>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Button color="primary">View More</Button>
              </div>
            </Paper>

            <Paper
              className="followed-items-section"
              style={{ padding: "16px", marginBottom: "10px" }}
            >
              <Typography variant="h6">My followed items</Typography>
              <br />
              <div style={{ height: 100, width: "100%" }}>
                <DataGrid
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                />
              </div>
            </Paper>

            <Paper className="pulse-section" style={{ padding: "16px" }}>
              <Typography variant="h6">Pulse</Typography>
              <div className="pulse-input">
                {/* <Button variant="contained">JB</Button> */}
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      backgroundColor: "black",
                      borderRadius: "22px",
                      color: "white",
                      padding: "7px 9px",
                    }}
                  >
                    DS
                  </span>
                  <TextField
                    variant="outlined"
                    placeholder="Start a conversation"
                    size="small"
                    fullWidth
                  />
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <Button variant="contained" style={{ marginRight: "1rem" ,width:'130px',height:'30px'}}>
                    Send
                  </Button>
                  <Button variant="contained" style={{width:'130px',height:'30px'}}>
                    <AttachFile style={{height:'15px'}}/>
                    Attach file
                  </Button>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Intent
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Ticket
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        Case Search
      </TabPanel>
    </Box>
  );
}
