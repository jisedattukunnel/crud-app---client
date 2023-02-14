import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './AddUsers'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import axios from 'axios'
import { baseUrl } from '../../../Constants/constants'


export default function FullWidthTextField() {

    const [username, setUsername] = useState('')
    const [branch_id, setBranch] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const addUser = () => {
        axios.post("http://localhost:4000/add-user", {
            user_name: username,
            branch_id: branch_id,
            email: email,
            phone: phone,
            password: password
        }).then(() => {

            console.log('Inserted from Client');
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
                    <h1>Add User</h1>
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Name" id="fullWidth" onChange={(e) => {
                        setUsername(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Branch" id="fullWidth" onChange={(e) => {
                        setBranch(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Email" id="fullWidth" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Phone" id="fullWidth" onChange={(e) => {
                        setPhone(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Password" id="fullWidth" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </Box>

                {/* <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="ConfirmPassword" id="fullWidth" />
                </Box> */}

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <Button variant="contained" onClick={addUser} disableElevation sx={{ width: 300, height: 50 }}>
                        Create
                    </Button>
                </Box>
            </Grid>

        </div >
    );
}


