import React from 'react'
import "./Login.css";
const Login = () => {
  return (
    <div classname="d-flex justify -content-center align-items-center vh-100 id= ">
          <div>
              <form>
                  <h2 className="text-center">Login</h2>
                  <div>
                      <input
                          type="email"
                          placeholder="enter the mail"
                          name="Email"
                          className="form-control" />
                  </div>
                  <div className ="mb-3">
                    <label htmlfor="password">password</label>
                    <input
                          type="password"
                          placeholder="enter the password"
                          name="password"
                          className="form-control" />
                          </div>
                          <div className ="mb-3"> 
                         
                          <input type="checkbox"
                          
                          className="custom-control custom -checkbox me-1" />
                          <label htmlfor="checkbox">remember me</label>
                          </div>
                          <div className="mb-3.d-grid">
                            <button classname="btn-btn-danger"type="submit">
                                Login
                            </button>
                          </div>

              </form>
          </div>
      </div>
  )
}

export default Login