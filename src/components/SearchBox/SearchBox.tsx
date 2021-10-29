import React, { Component } from 'react';
import './SearchBox.scss';

class SearchBox extends Component {
  return() {
    return (
      <input
        className="search"
        type="search"
        placeholder="Put the monster's name"
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchBox;
