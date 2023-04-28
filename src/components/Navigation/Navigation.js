import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
		if (isSignedIn) {
			return (
				<nav style = {{display: 'flex', justifyContent:'flex-end'}}>
					<p onClick = {() => onRouteChange('signout')} className= 'f4 link dim underline pa3 pointer light-gray'>Sign Out</p>
				</nav>
			);
		} else {
			return (
				<nav style = {{display: 'flex', justifyContent:'flex-end'}}>
					<p onClick = {() => onRouteChange('signin')} className= 'f4 link dim underline pa3 pointer light-gray'>Sign In</p>
					<p onClick = {() => onRouteChange('register')} className= 'f4 link dim underline pa3 pointer light-gray'>Register</p>
				</nav>
			);
		}
}

export default Navigation;