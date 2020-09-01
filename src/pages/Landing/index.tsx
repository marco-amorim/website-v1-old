import React, { useEffect, useState } from 'react';

import './styles.css';
import AnimatedLogo from '../../components/AnimatedLogo';
import IntroImg from '../../components/IntroImg';
import IntroText from '../../components/IntroText';
import Title from '../../components/Title';

import arrowDownIcon from '../../assets/images/icons/util/arrow-down.svg';

import gitIcon from '../../assets/images/icons/technologies/git.svg';
import gitIconHover from '../../assets/images/icons/technologies/git-hover.svg';

import javaIcon from '../../assets/images/icons/technologies/java.svg';
import javaIconHover from '../../assets/images/icons/technologies/java-hover.svg';

import nodeIcon from '../../assets/images/icons/technologies/nodejs.svg';
import nodeIconHover from '../../assets/images/icons/technologies/nodejs-hover.svg';

import reactIcon from '../../assets/images/icons/technologies/react.svg';
import reactIconHover from '../../assets/images/icons/technologies/react-hover.svg';

import reduxIcon from '../../assets/images/icons/technologies/redux.svg';
import reduxIconHover from '../../assets/images/icons/technologies/redux-hover.svg';

const Landing = () => {
	const [scrollPosition, setScrollPosition] = useState(window.scrollY);

	useEffect(() => {
		window.addEventListener('scroll', () => handleShowArrowButton());

		function handleShowArrowButton() {
			setScrollPosition(window.scrollY);
		}
	}, [scrollPosition]);

	useEffect(() => {
		setTimeout(() => {
			document.getElementById('arrow-container')?.classList.remove('d-none');
			document.getElementById('arrow-down')?.classList.add('fade-in');
		}, 9000);
	}, []);

	function hoverImg(e: any) {
		const src = e.target.src;

		if (src.includes('git')) {
			e.target.src = gitIconHover;
		}

		if (src.includes('java')) {
			e.target.src = javaIconHover;
		}

		if (src.includes('nodejs')) {
			e.target.src = nodeIconHover;
		}

		if (src.includes('react')) {
			e.target.src = reactIconHover;
		}

		if (src.includes('redux')) {
			e.target.src = reduxIconHover;
		}
	}

	function unHoverImg(e: any) {
		const src = e.target.src;

		if (src.includes('git')) {
			e.target.src = gitIcon;
		}

		if (src.includes('java')) {
			e.target.src = javaIcon;
		}

		if (src.includes('nodejs')) {
			e.target.src = nodeIcon;
		}

		if (src.includes('react')) {
			e.target.src = reactIcon;
		}

		if (src.includes('redux')) {
			e.target.src = reduxIcon;
		}
	}

	return (
		<React.Fragment>
			<section id="intro" className="container">
				<AnimatedLogo />
				<IntroImg />
				<IntroText />

				<div id="arrow-container" className="arrow bounce d-none">
					<a
						id="arrow-down"
						className={scrollPosition === 0 ? 'fade-in' : 'd-none'}
						href="#info"
					>
						<img
							src={arrowDownIcon}
							alt="Next Section"
							className="arrow-down"
						/>
					</a>
				</div>
			</section>

			<section id="info" className="container">
				<Title text="Some technologies I work with" />

				<ul
					id="technologies"
					className="d-flex list-unstyled flex-row justify-content-center align-items-center mt-5"
				>
					<li>
						<a
							href="https://git-scm.com/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								onMouseOver={(e) => hoverImg(e)}
								onMouseOut={(e) => unHoverImg(e)}
								src={gitIcon}
								alt="Git"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://www.java.com/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								onMouseOver={(e) => hoverImg(e)}
								onMouseOut={(e) => unHoverImg(e)}
								src={javaIcon}
								alt="Java"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://nodejs.org/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								onMouseOver={(e) => hoverImg(e)}
								onMouseOut={(e) => unHoverImg(e)}
								src={nodeIcon}
								alt="Node.js"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://reactjs.org/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								onMouseOver={(e) => hoverImg(e)}
								onMouseOut={(e) => unHoverImg(e)}
								src={reactIcon}
								alt="React.js"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://redux.js.org/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								onMouseOver={(e) => hoverImg(e)}
								onMouseOut={(e) => unHoverImg(e)}
								src={reduxIcon}
								alt="Redux.js"
							/>
						</a>
					</li>
				</ul>
			</section>
		</React.Fragment>
	);
};

export default Landing;
