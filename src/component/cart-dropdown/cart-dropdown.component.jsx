import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';
import Button from '../button/button.component';

const CartDropdown = () => {
  const { displayCart } = useContext(CartDropdownContext);
  const displayCartDropdown = displayCart ? 'display-cart' : '';
  return (
    <div className={`${displayCartDropdown} cart-dropdown-container`}>
      <div className='cart-items' />
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
