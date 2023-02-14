import React from 'react'
import { Routes, Route } from "react-router-dom";
import './Body.css'

import AdminHome from '../../Pages/Admin/AdminHome/AdminHome'

import ViewUsers from '../../Pages/Admin/ViewUsers/ViewUsers'
import AddUsers from '../../Pages/Admin/AddUsers/AddUsers'
import UpdateUser from '../../Pages/Admin/UpdateUser/UpdateUser'

import ViewService from '../../Pages/Admin/ViewService/ViewService'
import AddService from '../../Pages/Admin/AddService/AddService'
import UpdateService from '../../Pages/Admin/UpdateService/UpdateService'

import ViewBranch from '../../Pages/Admin/ViewBranch/ViewBranch'
import AddBranch from '../../Pages/Admin/AddBranch/AddBranch'
import UpdateBranch from '../../Pages/Admin/UpdateBranch/UpdateBranch'




function Body() {
    return (
        <div className='body mt-5' >
            <Routes>
                <Route path="/" element={<AdminHome title='Dashboard' />} />

                <Route path="view-users" element={<ViewUsers />} />
                <Route path="add-users" element={<AddUsers />} />
                <Route path="update-user/:id" element={<UpdateUser />} />

                <Route path="view-service" element={<ViewService />} />
                <Route path="add-service" element={<AddService />} />
                <Route path="update-service/:id" element={<UpdateService />} />

                <Route path="view-branch" element={<ViewBranch />} />
                <Route path="add-branch" element={<AddBranch title='Add Services' />} />

                {/* <Route path="update-branch" element={<UpdateBranch />} /> */}

                <Route path="update-branch/:id" element={<UpdateBranch />} />

            </Routes>
        </div>
    )
}

export default Body
