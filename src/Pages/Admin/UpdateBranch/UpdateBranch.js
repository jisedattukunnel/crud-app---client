import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { baseUrl } from '../../../Constants/constants'

export default function updateBranch(props) {

    const [id, setId] = useState('')
    const [displayUser, setDisplayUser] = useState({})
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [timingFrom, setTimingFrom] = useState('')
    const [timingTo, setTimingTo] = useState('')
    const params = useParams();

    useEffect(() => {
        getBranchDetails();
    }, [])

    const getBranchDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:4000/get-branch/${params.id}}`)
        // let result = axios.get(`${baseUrl}/get-user/${params.id}`)
        result = await result.json();
        setId(result[0].branch_id) 
        setName(result[0].name)
        setLocation(result[0].location)
        setDescription(result[0].other_details)
        setTimingFrom(result[0].timing_from)
        setTimingTo(result[0].timing_to)
    }

    const updateBranch = (id) => {
        console.log('id 1:'+ id);
        // axios.post(`http://localhost:4000/update-branch/${id}`, {
        axios.post(`${baseUrl}/update-branch/${id}`, {
            name: name,
            location: location,
            description: description,
            timingFrom: timingFrom,
            timingTo: timingTo
        }).then(() => {
            console.log('User Data Updated!');
        })
    }

    return (
        <div className='form mt-3' >
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Box sx={{ width: 500, maxWidth: '50%' }}>

                    <h1>Edit Branch</h1>
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField required={true} fullWidth label="Name" type='text' value={name} name='name' id="fullWidth" variant="outlined" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Location" name='location' value={location} id="fullWidth" required onChange={(e) => {
                        setLocation(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Description" name='description' value={description} required id="fullWidth" onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Available From" name='timingFrom' value={timingFrom} required id="fullWidth" onChange={(e) => {
                        setTimingFrom(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Available To" name='timingTo' value={timingTo} id="fullWidth" required onChange={(e) => {
                        setTimingTo(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <Button variant="contained" onClick={() => updateBranch(id)}  disableElevation sx={{ width: 300, height: 50 }}>
                        Update
                    </Button>
                </Box>
            </Grid>

        </div >
    );
}

