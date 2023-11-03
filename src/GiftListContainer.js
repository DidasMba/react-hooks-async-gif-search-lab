import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    // Fetch initial data (you can fetch data on form submit as well)
    this.performSearch('dolphin');
  }

  performSearch = (query) => {
    const apiKey = 'YOUR API KEY'; // Replace with your actual API key
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data.slice(0, 3) }); // Store the first 3 gifs in state
      })
      .catch((error) => console.error('Error fetching data: ', error));
  };

  render() {
    return (
      <div>
        <GifSearch onSearch={this.performSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
