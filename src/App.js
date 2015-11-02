import React, { Component } from 'react';
import request from 'superagent';
import Image from './Image';
import StyledContainer from './StyledContainer';

const API_URL = 'http://api.giphy.com';
const RANDOM_ENDPOINT = '/v1/gifs/random';
const GIPHY_PUBLIC_KEY = 'dc6zaTOxFJmzC';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      query: 'goat'
    };

    this.fetchImage = this.fetchImage.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  componentDidMount() {
    this.fetchImage();
  }

  fetchImage() {
    request.get(`${API_URL}${RANDOM_ENDPOINT}`)
    .set('Content-Type', 'application/json')
    .query({
      tag: this.state.query,
      api_key: GIPHY_PUBLIC_KEY })
    .end((err, res) => {
      if (err) {
        return err;
      }

      const {
        image_height,
        image_url,
        image_width } = res.body.data;

      this.setState({
        image: {
          height: image_height,
          src: image_url,
          width: image_width
        }
      });
    });
  }

  onInput(e) {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    return (
      <div>
        <StyledContainer>
          <h1>Random GIF Generator</h1>
          <p>Get a random GIF related to your search query!</p>
          <Image
            { ...this.state.image } />
          <input
            type="text"
            value={ this.state.query }
            onChange={ this.onInput }
            style={{ marginBottom: '16px' }}
            placeholder='Enter a search query'/>
          <button onClick={ this.fetchImage }>GIF me!</button>
        </StyledContainer>
      </div>
    );
  }
}