import React from 'react';
import myImage from '../assets/images/profile/myimage.jpg';

function Home(){
	const windowHeight = window.innerHeight;
	const mainBodyStyle = {'height': windowHeight};

	return(
		<div>
			{console.log(windowHeight)}
			<section className="main-body" style={mainBodyStyle}>
				<div className="center-body">
					<div className="content-body">
						<div className="profile-image">
							<img src={myImage} />
						</div>
						<div className="profile-about">
							<h1>Hey, I am Manish.</h1>
							<h2>A Front-End Developer and a Developer in Making</h2>
						</div>
					</div>
				</div>

			</section>
		</div>
	);
}

export default Home;