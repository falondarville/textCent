import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <a className="navbar-brand" href="/">TextCent</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item dropdown">
				      	<span><img src="/images/profile-default.png" className="profile-image"></img></span>
				        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          Profile
				        </a>
				        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
				          <a className="dropdown-item" href="#">My Projects</a>
				          <a className="dropdown-item" href="#">My Progress</a>
				          <div className="dropdown-divider"></div>
				          <a className="dropdown-item" href="#">Account Settings</a>
				          <a className="dropdown-item" href="#">Login/Logout</a>
				        </div>
				      </li>
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Tools<span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="/explore">Explore</a>
				      </li>
				    </ul>
				  </div>
				</nav>
			</div>
			)
	}
}

export default Navbar;
