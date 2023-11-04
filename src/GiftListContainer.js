import React, { Component } from 'react';
import GifList from './GifList';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    // Define your Giphy API key
    const apiKey = 'rd8I9LurhRmrCCXzwM4A9Y3Qcx1CIQaf';
    
    // Make the API request to retrieve trending GIFs
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&rating=g`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched trending GIFs
        this.setState({ gifs: data.data.slice(0, 3) }); // Display the first 3 trending GIFs
      })
      .catch((error) => {
        console.error('Error fetching trending GIFs: ', error);
      });
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
