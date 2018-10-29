import React, {Component} from 'react';

class ListItems extends Component {
  render() {
    return (
      <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    )
  }
}

export default ListItems;