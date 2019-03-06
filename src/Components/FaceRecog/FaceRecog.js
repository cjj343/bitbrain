import React from 'react';
import './FaceRecog.css';

const FaceRecog = ({ box, imageUrl }) => {
	return(
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='input' alt='' src={imageUrl} width='500px' height='auto'/>
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
			</div>		
		</div>
	);
}

export default FaceRecog;
