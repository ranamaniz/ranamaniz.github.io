import React from 'react';
import myImage from '../assets/images/profile/myimage.jpg';

function Home(){
	const windowHeight = window.innerHeight;
	const mainBodyStyle = {'height': windowHeight};
	return(
		<main>
			{console.log(windowHeight)}
			<section className="main-body" style={mainBodyStyle}>
				<div className="center-body">
					<div className="content-body">
						<article className="profile-image">
							<img src={myImage} />
						</article>
						<article className="profile-about">
							<h1 >Hey, I am Manish.</h1>
							<h2>I design in HTML & CSS, code in Javascript & PHP.</h2>
							<div className="breathe">
								<small>Wow some fresh air to breathe.</small>
								<small>Thanks to you we have got some space now. </small>
							</div>
						</article>
					</div>
					
				</div>
			</section>
			<section className="music-player"></section>
		</main>
	);
}

export default Home;