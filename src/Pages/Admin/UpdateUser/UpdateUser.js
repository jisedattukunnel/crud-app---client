import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { baseUrl } from '../../../Constants/constants'
import { useParams } from 'react-router-dom';

export default function FullWidthTextField() {

    const [displayUser, setDisplayUser] = useState({})

    const [id, setId] = useState('')
    const [username, setUsername] = useState('')
    const [branch, setBranch] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const params = useParams();


    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        console.warn(params)
        console.log('params:' + params.id);
        let result = await fetch(`http://localhost:4000/get-user/${params.id}`)
        result = await result.json();
        setId(result[0].id)
        setUsername(result[0].user_name)
        setBranch(result[0].branch_id)
        setEmail(result[0].email)
        setPhone(result[0].phone)
        setPassword(result[0].password)
    }

    const updateUser = (id) => {
        console.log('id 1:' + id);
        // axios.post(`http://localhost:4000/update-branch/${id}`, {
        axios.post(`${baseUrl}/update-user/${id}`, {
            username: username,
            branch: branch,
            email: email,
            phone: phone,
            password: password
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
                    <h1>Edit User</h1>
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Name" id="fullWidth" value={username} required onChange={(e) => {
                        setUsername(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Branch" id="fullWidth" value={branch} onChange={(e) => {
                        setBranch(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Email" id="fullWidth" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Phone" id="fullWidth" value={phone} onChange={(e) => {
                        setPhone(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Password" id="fullWidth" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </Box>


                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <Button variant="contained" onClick={() => updateUser(id)} disableElevation sx={{ width: 300, height: 50 }}>
                        Update Changes
                    </Button>
                </Box>
            </Grid>

        </div >
    );
}




