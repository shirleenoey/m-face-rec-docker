import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

class ProfileIcon extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			dropdownOpen: false
		}
	}
	toggle = () => {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	render() {
		return (
			<div className="pa4 tc">
				<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle
						data-toggle="dropdown"
						tag="span">
						<img src="http://placekitten.com/g/600/300" className="br-100 ba h3 w3 dib" alt="avatar" />					
					</DropdownToggle>
					<DropdownMenu 
						end
						className="b--transparent shadow-5" 
						style= {{marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.5)'}}>
						<DropdownItem onClick={this.props.toggleModal}>View profile</DropdownItem>
						<DropdownItem onClick = {() => this.props.onRouteChange('signout')}>Signout</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		);
	}
}

ProfileIcon.propTypes = {
  direction: PropTypes.string,
};

export default ProfileIcon;