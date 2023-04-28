import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt 
				style={{width: '7rem', 
								height: '7rem', 
								tiltMaxAngleX: '90deg', 
								tiltMaxAngleY: '80deg'}}
				className='Tilt br2 shadow-2'>
					<div>
						<img style= {{width: '6rem', height: '6rem'}} className='pa2' alt='logo' src={brain} />
					</div>
			</Tilt>
		</div>
	);
}

export default Logo;