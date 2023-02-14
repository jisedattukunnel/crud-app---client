import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";

import { baseUrl } from "../../../Constants/constants";
import axios from "axios";

const styleLink = {
  textDecoration: "none",
  margin: 0,
};

export default function ViewService() {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/view-service`).then((response) => {
      setServiceList(response.data);
    });
  }, [serviceList]);

  const confirmDelete = (userId) => {
    let id = userId;
    if (window.confirm("Delete this Service?")) {
      deleteService(id);
    } else {
      let txt2 = "You pressed Cancel!";
      console.log(txt2);
    }
  };

  const deleteService = (id) => {
    axios.get(`${baseUrl}/delete-service/${id}`).then((value) => {
      console.log("Service Deleted!");
    });
  };

  return (
    <div>
      <Box xs={6} lg={12} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0}></Grid>
          <Grid item lg={12} m={0} xs={11}>
            <div className="m-2" align="left">
              <h1>Services</h1>
              <Link style={styleLink} to="/add-service">
                <Button variant="contained">
                  {" "}
                  <AddIcon />
                  &nbsp;Add New Service
                </Button>
              </Link>
            </div>
            <TableContainer className="mt-5" component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>BRANCH ID</TableCell>
                    <TableCell>CATEGORY</TableCell>
                    <TableCell>SERVICE TYPE</TableCell>
                    <TableCell>SERVICE NAME</TableCell>
                    <TableCell>PRICE</TableCell>
                    <TableCell>STATUS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {serviceList.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>{row.branch_id}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.service_type}</TableCell>
                      <TableCell>{row.service_name}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>
                        <Link
                          style={styleLink}
                          to={`/update-service/${row.id}`}
                        >
                          <Button variant="outlined" color="primary">
                            <EditIcon />
                          </Button>
                        </Link>
                        &nbsp;&nbsp;
                        <Button
                          onClick={() => {
                            confirmDelete(row.branch_id);
                          }}
                          variant="outlined"
                          color="error"
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard() {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

// import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function ResponsiveGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {Array.from(Array(6)).map((_, index) => (
//           <Grid item xs={2} sm={4} md={4} key={index}>
//             <Item>xs=2</Item>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
