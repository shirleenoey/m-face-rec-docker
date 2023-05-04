import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal}) => {
		if (isSignedIn) {
			return (
				<nav style = {{display: 'flex', justifyContent:'flex-end'}}>
					<ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
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