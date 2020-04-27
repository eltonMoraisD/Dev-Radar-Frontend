import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
	const [ github_username, setGithubUsername ] = useState('');
	const [ tech, setTech ] = useState('');

	const [ latitude, setLatitude ] = useState('');
	const [ longitude, setLongitude ] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;

				setLatitude(latitude);
				setLongitude(longitude);
			},
			(err) => {
				console.log(err);
			},
			{
				timeout: 30000
			}
		);
	}, []);

	async function handleAddDev(e) {
		e.preventDefault();

		const response = await api.post('/devs', {
			github_username,
			tech,
			latitude,
			longitude
		});

		setGithubUsername('');
		setTech('');
	}

	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>

				<form onSubmit={handleAddDev}>
					<div className="input-block">
						<label htmlFor="github_username">Usuario do Github</label>
						<input
							name="github_username"
							id="github_username"
							required
							value={github_username}
							onChange={(e) => setGithubUsername(e.target.value)}
						/>
					</div>

					<div className="input-block">
						<label htmlFor="tech">Tecnologias</label>
						<input name="tech" id="tech" required value={tech} onChange={(e) => setTech(e.target.value)} />
					</div>

					<div className="input-group">
						<div className="input-block">
							<label htmlFor="latitude">Latitude</label>
							<input
								type="number"
								name="latitude"
								id="latitude"
								required
								value={latitude}
								onChange={(e) => setLatitude(e.target.value)}
							/>
						</div>

						<div className="input-block">
							<label htmlFor="longitude">Longitude</label>
							<input
								type="number"
								name="longitude"
								id="longitude"
								required
								value={longitude}
								onChange={(e) => setLongitude(e.target.value)}
							/>
						</div>
					</div>
					<button type="submit">Salvar</button>
				</form>
			</aside>

			<main>
				<ul>
					<li className="dev-item">
						<header>
							<img
								src="https://avatars2.githubusercontent.com/u/39710764?s=460&u=7912ae5b1093e79f24c6f42bee54951a313d551d&v=4"
								alt="avatar"
							/>
							<div className="user-info">
								<strong>Elton Morais</strong>
								<span>ReactJS, React Native, Node.js</span>
							</div>
						</header>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin pulvinar
							sodales.
						</p>
						<a href="https://github.com/eltonMoraisD">Acessar perfil no github</a>
					</li>
					<li className="dev-item">
						<header>
							<img
								src="https://avatars2.githubusercontent.com/u/39710764?s=460&u=7912ae5b1093e79f24c6f42bee54951a313d551d&v=4"
								alt="avatar"
							/>
							<div className="user-info">
								<strong>Elton Morais</strong>
								<span>ReactJS, React Native, Node.js</span>
							</div>
						</header>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin pulvinar
							sodales.
						</p>
						<a href="https://github.com/eltonMoraisD">Acessar perfil no github</a>
					</li>
					<li className="dev-item">
						<header>
							<img
								src="https://avatars2.githubusercontent.com/u/39710764?s=460&u=7912ae5b1093e79f24c6f42bee54951a313d551d&v=4"
								alt="avatar"
							/>
							<div className="user-info">
								<strong>Elton Morais</strong>
								<span>ReactJS, React Native, Node.js</span>
							</div>
						</header>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin pulvinar
							sodales.
						</p>
						<a href="https://github.com/eltonMoraisD">Acessar perfil no github</a>
					</li>
					<li className="dev-item">
						<header>
							<img
								src="https://avatars2.githubusercontent.com/u/39710764?s=460&u=7912ae5b1093e79f24c6f42bee54951a313d551d&v=4"
								alt="avatar"
							/>
							<div className="user-info">
								<strong>Elton Morais</strong>
								<span>ReactJS, React Native, Node.js</span>
							</div>
						</header>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin pulvinar
							sodales.
						</p>
						<a href="https://github.com/eltonMoraisD">Acessar perfil no github</a>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
