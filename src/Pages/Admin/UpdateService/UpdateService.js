import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { baseUrl } from '../../../Constants/constants'



export default function FullWidthTextField() {

    const [displayUser, setDisplayUser] = useState({})
    const [id, setId] = useState('')
    const [branch_id, setBranch] = useState('')
    const [category, setCategory] = useState('')
    const [serviceType, setServiceType] = useState('')
    const [serviceName, setServiceName] = useState('')
    const [price, setPrice] = useState('')
    const [status, setStatus] = useState('')

    const params = useParams();

    useEffect(() => {
        getServiceDetails()
    }, [])


    const getServiceDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:4000/get-service/${params.id}`)
        // let result = axios.get(`${baseUrl}/get-service/${params.id}`)
        result = await result.json();
        setId(result[0].id)
        setBranch(result[0].branch_id)
        setCategory(result[0].category)
        setServiceType(result[0].service_type)
        setServiceName(result[0].service_name)
        setPrice(result[0].price)
        setStatus(result[0].status)
    }

    const updateService = (id) => {
        console.log('id 1:' + id);
        // axios.post(`http://localhost:4000/update-branch/${id}`, {
        axios.post(`${baseUrl}/update-service/${id}`, {
            branch_id: branch_id,
            category: category,
            serviceType: serviceType,
            serviceName: serviceName,
            price: price,
            status: status
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
                    <h1>Edit Service</h1>
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Branch" value={branch_id} id="fullWidth" onChange={(e) => {
                        setBranch(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Category" id="fullWidth" value={category} onChange={(e) => {
                        setCategory(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Service Type" value={serviceType} id="fullWidth" onChange={(e) => {
                        setServiceType(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Service Name" value={serviceName} id="fullWidth" onChange={(e) => {
                        setServiceName(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Price" id="fullWidth" price={price} onChange={(e) => {
                        setPrice(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <TextField fullWidth label="Status" id="fullWidth" value={status} onChange={(e) => {
                        setStatus(e.target.value)
                    }} />
                </Box>

                <Box sx={{ width: 500, maxWidth: '100%', margin: 3, marginBottom: 0, marginLeft: 0 }}>
                    <Button variant="contained" onClick={() => updateService(id)} disableElevation sx={{ width: 300, height: 50 }}>
                        Update Changes
                    </Button>
                </Box>
            </Grid>

        </div >
    );
}




