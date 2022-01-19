import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import "./css/Userlogin.css";


function Userlogin() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                let signIn = await axios.post("http://localhost:3000/user-login", values)
                window.localStorage.setItem("my_token", signIn.data.token)
                navigate("/user-dashboard")
            } catch (error) {
                console.log(error)
            }
        }
    });
    return (
        <div className='userlogin'>
        
        <div className='row text-white'>
            <div className='col-lg-10 text-center'>

                <h1>User Login</h1>
            </div>

            <div className='row'>
                <div className='col col-lg-8'>

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
                    <Link to="/createuser" >
                        <button type="submit" class="btn btn-primary"> Sign up</button>
                    </Link>
                    
                    <a className="dropdown-item text-white" href="#">Forgot password?</a>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Userlogin
