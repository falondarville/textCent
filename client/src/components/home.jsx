import React, { Component } from 'react';
import './home.css'

class Home extends Component{
	render(){
		return (
				<div className="container">
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-6 mt-5">
							<h1>Masterfully Track Your Writing Progress</h1>
							<hr></hr>
							<form>
							  <div className="form-group mt-3">
							    <label for="exampleInputEmail1">Email address</label>
							    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
							    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							  </div>
							  <div className="form-group">
							    <label for="exampleInputPassword1">Password</label>
							    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
							  </div>
							  <div className="form-check">
							    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
							    <label className="form-check-label" for="exampleCheck1"><small>I agree to the Terms and Conditions</small></label>
							  </div>
							  <button type="submit" className="btn primary-color mt-3">Sign-up</button>
							</form>
						</div>
						<div className="col-md-3"></div>
					</div>
				</div>
			)
	}
}

export default Home;