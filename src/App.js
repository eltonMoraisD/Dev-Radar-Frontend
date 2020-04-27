import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
	const [ devs, setDevs ] = useState([]);
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

	useEffect(() => {
		async function loadDevs() {
			const response = await api.get('/devs');

			setDevs(response.data);
		}

		loadDevs();
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

		setDevs([ ...devs, response.data ]);
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
					{devs.map((dev) => (
						<li key={dev._id} className="dev-item">
							<header>
								<img src={dev.avatar_url} alt={dev.name} />
								<div className="user-info">
									<strong>{dev.name}</strong>
									<span>{dev.tech.join(', ')}</span>
								</div>
							</header>
							<p>{dev.bio}</p>
							<a href={`https://github.com/${dev.github_username}`}>Acessar perfil no github</a>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}

export default App;
