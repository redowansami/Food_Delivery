import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    const handleSubmit = async (e) => {
        // read about preventDefault
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //should be same as backend
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        })
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert('Enter valid credentials');
        } else {
            alert('User created successfully!');
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="user" className="form-label">Username</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} autoComplete='username'/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} autoComplete='email'/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} autoComplete='current-password'/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputLocation1" className="form-label">Location</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} autoComplete='address-level1' />
                    </div>

                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>

                    <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
                </form>
            </div>
        </>
    )
}
