import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Home.css";


function Home() {
    return (
        <section className='login'>
            <div className='container'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-auto'>
                        
                        <div className='choose mt-5'>
                        <h2>Welcome to Pizza World</h2>
                            <p>Are you a User or an Admin?</p>
                            <Link to="/user-login">
                                <button className='btn btn-primary'>User Login</button>
                            </Link>
                            &nbsp;
                            <Link to="/admin-login">
                                <button className='btn btn-primary '>Admin Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
