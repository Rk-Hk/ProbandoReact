import React from 'react';
import logo from './../../../logo.svg' ;

const HeaderComponent = (props) => {
    return (
      <nav className="navbar navbar-light bg-light">
				<div className='container'>
				<a className="navbar-brand" href="#">
					<img src={logo}  width="30" height="30" className="d-inline-block align-top" alt=""/>
					API SERVICE
				</a>
				</div>
			</nav>
    );
}

export default HeaderComponent;