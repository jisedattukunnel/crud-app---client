import Menubar from './Components/Menubar/Menubar'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import ViewUsers from './Pages/Admin/ViewUsers/ViewUsers'
import AddUsers from './Pages/Admin/AddUsers/AddUsers'
import Body from './Components/Body/Body'


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid(props) {
  return (




    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} l={12}>
          {/* <Item><Navbar /></Item> */}
        </Grid>

        <Grid item xs={6} md={2}>
          <Item>
            <Menubar />
          </Item>
        </Grid>

        <Grid item xs={12} md={10}>
          <Body />
        </Grid>

      </Grid>
    </Box>

  );
}

