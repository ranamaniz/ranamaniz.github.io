import React from 'react';
import myImage from '../assets/images/profile/myimage.jpg';

function Home(){
	const windowHeight = window.innerHeight;
	const mainBodyStyle = {'height': windowHeight};
	return(
		<div>
			<section className="music-player">
				<audio></audio>
			</section>
		</div>
	);
}

export default Home;