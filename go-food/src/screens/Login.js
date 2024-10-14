import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [credentials, setCredentials] = useState({email: "", password: ""})
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
        // read about preventDefault
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //should be same as backend
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        })
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert('Enter valid credentials');
        } else {
            navigate('/')
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    
  return (
    <div>
      <>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} autoComplete='email'/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} autoComplete='current-password'/>
                    </div>
                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>

                    <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new User</Link>
                </form>
            </div>
        </>
    </div>
  )
}
