import React, { Component } from 'react';
import Card from "./Card"
import "./cardContainer.css"

class CardContainer extends Component {
	state = {
		searchCriteria: "",
		pokemonList: [],
		pokemonBerries: [],
		pokemonName: "",
		hp: "",
		frontUrl: "",
		backUrl: "",
	};

	componentDidMount() {
		this.setState({
			pokemonList: this.props.pokemonData[0].pokemon,
		});
	}

	searchCriteria = (event) => {
		const search = event.target.value.toLowerCase();
		this.setState({
			searchCriteria: search,
		});
	};

	sendPokemonToData = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
		e.preventDefault();
	};

	onSubmit = (event, filteredData) => {
		event.preventDefault();
		const newPokemon = {
			name: this.state.pokemonName,
			hp: this.state.hp,
			sprites: {
				front: this.state.frontUrl,
				back: this.state.backUrl,
			},
		};

		const newPokemonData = [newPokemon, this.state.pokemonList];
		this.setState({
			pokemonList: newPokemonData,
		});
	};

	render() {
		const { pokemonData } = this.props;
        const filteredData = pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria))

		return (
			<div className="main-card-container">
				<div>
					<input
						name="pokemonName"
						className="search-field"
						onChange={this.searchCriteria}
						type="text"
						placeholder="Search for a pokemon"
					/>
				</div>
				<div>
					<form>
						<input
							name="pokemonName"
							className="create-field"
							type="text"
							placeholder="Enter a Name"
							value={this.state.pokemonName}
							onChange={this.sendPokemonToData}
						/>
						<input
							name="hp"
							className="create-field"
							type="text"
							placeholder="Enter a HP"
							value={this.state.hp}
							onChange={this.sendPokemonToData}
						/>
						<input
							name="frontUrl"
							className="create-field"
							type="text"
							placeholder="Enter front URL"
							value={this.state.frontUrl}
							onChange={this.sendPokemonToData}
						/>
						<input
							name="backUrl"
							className="create-field"
							type="text"
							placeholder="Enter back URL"
							value={this.state.backUrl}
							onChange={this.sendPokemonToData}
						/>
						<input className="create-field" type="submit" value={this.state.loading ? "Sending Data" : "Submit"} />
					</form>
				</div>
				<div className="card-container">
					{filteredData.map((singlePokemon, index) => (
						<Card key={singlePokemon.name} pokemon={singlePokemon} />
					))}
				</div>
			</div>
		);
	}
}

export default CardContainer;