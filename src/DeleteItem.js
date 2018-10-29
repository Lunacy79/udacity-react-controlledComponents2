import React, {Component} from 'react';

class DeleteItem extends Component {
  
  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };


  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  
  render() {
    return (
      <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>
    )
  }
}

export default DeleteItem;