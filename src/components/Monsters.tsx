import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
import CardList from './CardList/CardList';
import './Monster.scss';

interface IState {
  monsters: any[];
  userInput: string;
  handleChange: boolean;
}

class Monster extends Component {
  state: IState = {
    monsters: [],
    userInput: '',
    handleChange: false,
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          monsters: data,
        }),
      );
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <div className="Monsters">
        <h1>Monster Agency</h1>
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default Monster;
