// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    people: [],
  };

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then((res) => res.json())
      .then(({ people }) => this.setState({ people }));
  }

  render() {
    return (
      <div>
        <h1>People In Space</h1>
        <ul></ul>
      </div>
    );
  }
}
