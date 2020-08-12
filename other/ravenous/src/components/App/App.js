import React from 'react';
import './App.css';
// import { render } from '@testing-library/react';
// import logo from '../../logo.svg';

import BusinessList from '../BusinessList/BusinessList.js'
import SearchBar from '../SearchBar/SearchBar.js'
import Yelp from '../../util/yelp.js'

class App extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = 
    {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
    .then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render() 
  {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} /> 
      </div>
    );
  }
  
}



export default App;


// make it work

/**going to leave the old return statement here
 * 
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hello Codecademy!
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
 * 
 */