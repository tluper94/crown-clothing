import { useContext } from 'react';

import './checkout-item.styles.scss';

import { CartContext } from '../../context/cart.context';

const CheckoutItem = (product) => {
  const { imageUrl, name, price, quantity } = product;
  const { incrementCartItemQuantity, removeCartItem, clearCartItem } =
    useContext(CartContext);

  const incrementQuantityHandler = () => incrementCartItemQuantity(product);

  const removeItemHandler = () => removeCartItem(product);

  const ClearItemHandler = () => clearCartItem(product);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <div onClick={removeItemHandler} className='arrow'>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div onClick={incrementQuantityHandler} className='arrow'>
          &#10095;
        </div>
      </div>
      <span className='price'>{price * quantity}</span>
      <div onClick={ClearItemHandler} className='remove-button'>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
