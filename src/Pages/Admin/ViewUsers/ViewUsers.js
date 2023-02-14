import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../../Constants/constants";

const styleLink = {
  textDecoration: "none",
  margin: 0,
};

export default function ViewUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/view-user`).then((response) => {
      setUserList(response.data);
    });
  }, [userList]);

  const confirmDelete = (userId) => {
    let id = userId;
    if (window.confirm("Delete this User?")) {
      deleteUser(id);
    } else {
      let txt2 = "You pressed Cancel!";
      console.log(txt2);
    }
  };

  const deleteUser = (id) => {
    axios.get(`${baseUrl}/delete-user/${id}`).then((value) => {
      console.log("User Deleted!");
      // window.location.reload();
    });
  };

  return (
    <div>
      <Box xs={6} lg={12} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0}></Grid>
          <Grid item lg={12} m={0} xs={11}>
            <div className="m-2" align="left">
              <h1>Users</h1>
              <Link style={styleLink} to="/add-users">
                <Button variant="contained">
                  <AddIcon />
                  &nbsp; Add New User
                </Button>
              </Link>
            </div>

            <TableContainer className="mt-5" component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>EMAIL</TableCell>
                    <TableCell>PHONE</TableCell>
                    <TableCell>Branch ID</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Timing</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userList.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>{row.user_name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell>{row.branch_id}</TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{row.timing}</TableCell>
                      {/* <TableCell >{row.branch}</TableCell> */}

                      <TableCell>
                        <Link style={styleLink} to={`/update-user/${row.id}`}>
                          <Button variant="outlined" color="primary">
                            <EditIcon />
                          </Button>
                        </Link>
                        &nbsp;&nbsp;
                        <Button
                          onClick={() => {
                            confirmDelete(row.id);
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
