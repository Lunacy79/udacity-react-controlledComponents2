import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './AddItem';
import DeleteItem from './DeleteItem';
import ListItems from './ListItems.js';

class App extends Component {
  state = {
    
    items: [],
  };

  handleAddItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, this.state.item],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };


  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem onAddItem={this.handleAddItem}/>
         

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <p className="items">Items</p>
        <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    );
  }
}

export default App;
