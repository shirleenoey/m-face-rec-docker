import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function ProfileIcon({ direction }) {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<div className="pa4 tc">
			<Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
				<DropdownToggle
					data-toggle="dropdown"
					tag="span">
					<img src="http://tachyons.io/img/logo.jpg" className="br-100 ba h3 w3 dib" alt="avatar" />					
				</DropdownToggle>
				<DropdownMenu 
					className='b--transparent shadow-5' 
					style= {{marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.5)'}}>
					<DropdownItem>View profile</DropdownItem>
					<DropdownItem>Signout</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}

ProfileIcon.propTypes = {
  direction: PropTypes.string,
};

export default ProfileIcon;