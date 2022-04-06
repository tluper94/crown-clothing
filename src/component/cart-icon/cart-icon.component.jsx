import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '.././../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';

const CartIcon = () => {
  const { displayCart, setDisplayCart } = useContext(CartDropdownContext);

  const onClickHandler = () => {
    if (displayCart) {
      setDisplayCart(false);
    } else {
      setDisplayCart(true);
    }
  };

  console.log(displayCart);
  return (
    <div onClick={onClickHandler} className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
