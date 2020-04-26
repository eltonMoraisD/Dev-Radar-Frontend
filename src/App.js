import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>

				<form>
					<div className="input-block">
						<label htmlFor="github_username">Usuario do Github</label>
						<input name="github_username" id="github_username" required />
					</div>

					<div className="input-block">
						<label htmlFor="techs">Tecnologias</label>
						<input name="techs" id="techs" required />
					</div>

					<div className="input-group">
						<div className="input-block">
							<label htmlFor="latitude">Latitude</label>
							<input name="latitude" id="latitude" required />
						</div>

						<div className="input-block">
							<label htmlFor="longitude">Longitude</label>
							<input name="longitude" id="longitude" required />
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
