import React from 'react';

export default function Basket(props) {
  const {cartItems, onAdd} = props;
    return <aside className='block col-1'>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart Is Empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className='row'>
            <div>{item.name}</div>
            <div></div>
          </div>
        ))}
      </div>
    </aside>;
}