import React from 'react';
import './ImageLinkForm.css';

	const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return ( 
		<>
			<div>
				<p className='f4 washed-blue'>
					{'This Magic Brain will detect faces in your pictures. Give it a try.'}
				</p>
			</div>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input onChange= {onInputChange} className='f6 pa2 w-70 center' type='text' placeholder='enter your image URL'/>
					<button onClick= {onButtonSubmit} className='w-30 grow f6 link ph3 pv dib bg-light-blue pa2'>Detect</button>
				</div>
			</div>
		</>
	);
}

export default ImageLinkForm;