import { useContext } from 'react';

import './checkout.styles.scss';

import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <span className='header-block'>product</span>
        <span className='header-block'>description</span>
        <span className='header-block'>quanity</span>
        <span className='header-block'>price</span>
        <span className='header-block'>remove</span>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} {...item} />
      ))}
      <div className='total'>{`Total: $${cartTotal}`}</div>
    </div>
  );
};

export default Checkout;
