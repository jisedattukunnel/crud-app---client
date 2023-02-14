import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Constants/constants";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  // const [userCount, setUserCount] = useState(0)

  // const setUserCount = () => {
  //     axios.post("http://localhost:4000/get-user-count").then((num) => {
  //         setUserCount(num.data)
  //         console.log(num.data);
  //     })
  // }

  return (
    <div className="mt-3">
      <h1 className="m-2" align="left">
        Home
      </h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Branches
                </Typography>
                <Typography variant="h5" component="div">
                  Total Branches: 26
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Active Branches: 21
                </Typography>
              </CardContent>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Users
                </Typography>
                <Typography variant="h5" component="div">
                  Total Users: 26
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Active Users: 21
                </Typography>
              </CardContent>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Services
                </Typography>
                <Typography variant="h5" component="div">
                  Total Services: 26
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Active Services: 21
                </Typography>
              </CardContent>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Demo
                </Typography>
                <Typography variant="h5" component="div">
                  Total Demo: 26
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Active Demo: 00
                </Typography>
              </CardContent>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
