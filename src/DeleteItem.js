import React, {Component} from 'react';

class DeleteItem extends Component {
  
  deleteLastItem = event => {
    this.props.onDeleteItem();
  };

  
  render() {
    return (
      <button onClick={this.deleteLastItem} disabled={this.props.noItemsFound()}>
          Delete Last Item
        </button>
    )
  }
}

export default DeleteItem;