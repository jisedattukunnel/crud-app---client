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

export default function ViewBranch() {
  const [branchList, setBranchList] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/view-branch`).then((response) => {
      console.log(response.data);
      setBranchList(response.data);
    });
  }, [branchList]);

  const confirmDelete = (userId) => {
    let id = userId;
    if (window.confirm("Delete this Branch?")) {
      deleteBranch(id);
    } else {
      let txt2 = "You pressed Cancel!";
      console.log(txt2);
    }
  };

  const deleteBranch = (id) => {
    axios.get(`${baseUrl}/delete-branch/${id}`).then((value) => {
      console.log("Branch Deleted!");
    });
  };

  // useEffect(() => {
  //     const deleteBranch = () => {
  //         axios.get(`${baseUrl}/delete-branch/${id}`)
  //             // axios.get(`http://localhost:4000/delete-branch/${id}`)
  //             .then((val) => {
  //                 setBranchList(val)
  //             })
  //     }
  // }, [])

  return (
    <div>
      <Box xs={6} lg={12} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0}></Grid>
          <Grid item lg={12} m={0} xs={11}>
            <div className="m-2" align="left">
              <h1>Branches</h1>
              <Link style={styleLink} to="/add-branch">
                <Button variant="contained">
                  <AddIcon />
                  &nbsp; Add New Branch
                </Button>
              </Link>
            </div>

            <TableContainer className="mt-5" component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>LOCATION</TableCell>
                    <TableCell>TIMING FROM</TableCell>
                    <TableCell>TIMING TO</TableCell>
                    <TableCell>DESCRIPTION</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {branchList.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.branch_id}
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{row.timing_from}</TableCell>
                      <TableCell>{row.timing_to}</TableCell>
                      <TableCell>{row.other_details}</TableCell>
                      <TableCell>
                        <Link
                          style={styleLink}
                          to={`/update-branch/${row.branch_id}`}
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
