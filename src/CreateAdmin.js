import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./css/CreateAdmin.css";

function CreateAdmin() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''


        },
        onSubmit: async (values) => {
            try {
                await axios.post("http://localhost:3000/admincreate", values);
                navigate("/admin-login")
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <div className='admin'>
        <div className='row text-white'>
            <div className='col-lg-12'>
                <h1>Create New Admin</h1>
            </div>
            <div className='row'>
                <div className='col col-lg-10'>
                    <form onSubmit={formik.handleSubmit}>

                        <div className='col-lg-8 align-content-center mt-2 ms-5'>

                            <label>First Name</label><br />
                            <input type="text" name='firstname' className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.firstname} /><br />
                            <label>Last Name</label><br />
                            <input type="text" name='lastname' className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.lastname} /><br />


                            <label>E-Mail</label><br />
                            <input name='email' type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"
                                onChange={formik.handleChange}
                                value={formik.values.email} /><br />
                            <label>Password</label><br />
                            <input type="password" name='password' className='form-control'
                                onChange={formik.handleChange}
                                value={formik.values.password} /><br />

                            <div className='mt-2'>
                                <input className="btn btn-primary" type="submit" />
                            </div>

                        </div >
                    </form>
                </div>

            </div>
        </div >
        </div>


    )
}

export default CreateAdmin
