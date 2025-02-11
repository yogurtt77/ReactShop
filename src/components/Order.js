import React, { Component } from "react";
import { MdDelete } from "react-icons/md";

export class Order extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="item">
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
        {item.quantity > 1 && (
          <span className="quantity">x{item.quantity}</span>
        )}
        <MdDelete
          className="delete-icon"
          onClick={() => this.props.onDelete(this.props.item.id)}
        />
      </div>
    );
  }
}

export default Order;
