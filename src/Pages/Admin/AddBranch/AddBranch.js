import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Constants/constants";

export default function FullWidthTextField() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [timingFrom, setTimingFrom] = useState("");
  const [timingTo, setTimingTo] = useState("");
  const [description, setDescription] = useState("");

  const addBranch = () => {
    axios
      .post(`${baseUrl}/add-branch`, {
        name: name,
        location: location,
        timingFrom: timingFrom,
        timingTo: timingTo,
        description: description,
      })
      .then(() => {
        console.log("Inserted from Client");
      });
  };

  return (
    <div className="form mt-3">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Box sx={{ width: 500, maxWidth: "50%" }}>
          <h1>Add New Branch</h1>
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: 3,
            marginBottom: 0,
            marginLeft: 0,
          }}
        >
          <TextField
            required={true}
            fullWidth
            label="Name"
            type="text"
            name="name"
            id="fullWidth"
            variant="outlined"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: 3,
            marginBottom: 0,
            marginLeft: 0,
          }}
        >
          <TextField
            fullWidth
            label="Location"
            name="location"
            id="fullWidth"
            required
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: 3,
            marginBottom: 0,
            marginLeft: 0,
          }}
        >
          <TextField
            fullWidth
            label="Description"
            name="description"
            required
            id="fullWidth"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: 3,
            marginBottom: 0,
            marginLeft: 0,
          }}
        >
          <TextField
            fullWidth
            label="Available From"
            name="timingFrom"
            required
            id="fullWidth"
            onChange={(e) => {
              setTimingFrom(e.target.value);
            }}
          />
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: 3,
            marginBottom: 0,
            marginLeft: 0,
          }}
        >
          <TextField
            fullWidth
            label="Available To"
            name="timingTo"
            id="fullWidth"
            required
            onChange={(e) => {
              setTimingTo(e.target.value);
            }}
          />
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: 3,
            marginBottom: 0,
            marginLeft: 0,
          }}
        >
          <Button
            variant="contained"
            onClick={addBranch}
            disableElevation
            sx={{ width: 300, height: 50 }}
          >
            Create Branch
          </Button>
        </Box>
      </Grid>
    </div>
  );
}
