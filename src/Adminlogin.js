import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import "./css/Adminlogin.css";


function Adminlogin() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                let signIn = await axios.post("https://pizzabasedelivery.herokuapp.com/admin-login", values)
                window.localStorage.setItem("my_token", signIn.data.token)
                navigate("/admin-dashboard")
            } catch (error) {
                console.log(error)
            }
        },
    });
    return (
        <div className='admin'>

        <div className='row'>
            <div className='col-lg-12 text-center'>

                <h1>Admin Login</h1>
            </div>

            <div className='row'>
                <div className='col-lg-10 justify-content-center'>

                    <form onSubmit={formik.handleSubmit}>

                        <div className="mb-3">
                            <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                            <input name='email' type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"
                                onChange={formik.handleChange}
                                value={formik.values.email} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                            <input name='password' type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"
                                onChange={formik.handleChange}
                                value={formik.values.password} />
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button><br />



                    </form>
                    <div className="dropdown-divider"></div>
                    <Link to="/admincreate" >
                        <button type="submit" class="btn btn-primary"> Sign up</button>
                    </Link>
                    
                    
                </div>
            </div>
        </div>
    </div>

    )
}

export default Adminlogin
