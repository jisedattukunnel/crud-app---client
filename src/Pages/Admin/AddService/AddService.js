import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Constants/constants";

export default function FullWidthTextField() {
  const [branch, setBranch] = useState("");
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const addService = () => {
    axios
      .post(`${baseUrl}/add-service`, {
        branch: branch,
        category: category,
        service: service,
        name: name,
        price: price,
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
          <h1>Add New Service</h1>
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
            label="Branch ID"
            name="branchId"
            id="fullWidth"
            onChange={(e) => {
              setBranch(e.target.value);
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
            label="Category"
            name="category"
            id="fullWidth"
            onChange={(e) => {
              setCategory(e.target.value);
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
            label="Service Type"
            name="type"
            id="fullWidth"
            onChange={(e) => {
              setService(e.target.value);
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
            label="Service Name"
            name="name"
            id="fullWidth"
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
            label="Price"
            name="price"
            id="fullWidth"
            onChange={(e) => {
              setPrice(e.target.value);
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
            onClick={addService}
            disableElevation
            sx={{ width: 300, height: 50 }}
          >
            Create
          </Button>
        </Box>
      </Grid>
    </div>
  );
}
