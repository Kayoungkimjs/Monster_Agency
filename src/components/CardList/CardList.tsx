import React, { Component } from 'react';
import Card from '../Card/Card'
import './CardList.scss';

export interface IMonster {
  id : number;
  name: string;
  email: string;
}

class CardList extends Component {
  render() {
    return (
    <div className="card-list">
      {this.props.monsters.map( monster => { 
        <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email}/>
     })}  
    </div>
  }
}

export default CardList;