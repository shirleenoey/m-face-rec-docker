import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({onRouteChange, isSignedIn}) => {
		if (isSignedIn) {
			return (
				<nav style = {{display: 'flex', justifyContent:'flex-end'}}>
					<ProfileIcon />
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