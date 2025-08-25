import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {formData:{
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      dob: "",
      password: "",
      confirmpassword:"",
      terms: false,
    }, errMsg:""};
  }
  
  handleSubmit(){
    alert("Testing...");
  }

  render() {
    const{formData, errMsg} = this.state;
    return (
      <>
        <header>
          <div className='logo'>Validation</div>
        </header>
        <section>
          <div className='content'>
            <h1>Create Account</h1>
            <div className='grid'>
              <div>
                <label>First Name *</label>
                <input type='text' />
                <p></p>
              </div>
              <div>
                <label>Last Name *</label>
                <input type='text' />
                <p></p>
              </div>
            </div>

            <div className='grid'>
              <div>
                <label>Email ID *</label>
                <input type='text' />
                <p></p>
              </div>
              <div>
                <label>Phone Number *</label>
                <input type='text' />
                <p></p>
              </div>
            </div>

            <div className='grid'>
              <div>
                <label>Select Country *</label>
                <select>
                  <option>Select..</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>Europe</option>
                </select>
                <p></p>
              </div>
              <div>
                <label>Date of Birth *</label>
                <input type='date' />
                <p></p>
              </div>
            </div>

            <div className='grid'>
              <div>
                <label>Password *</label>
                <input type='password' />
                <p></p>
              </div>
              <div>
                <label>Confirm Password *</label>
                <input type='password' />
                <p></p>
              </div>
            </div>

            <div className='terms'>
              <input type='checkbox' />
              <label>I agree the Terms and Conditions</label>
              <p></p>
            </div>

            <div className='submission'>
              <button onClick={()=>this.handleSubmit()}>Register</button>
            </div>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;