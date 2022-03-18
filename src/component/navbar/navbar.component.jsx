import { Link } from 'react-router-dom';

import './nvabar.styles.scss';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navbar = () => {
  return (
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          Shop
        </Link>
        <Link className='nav-link' to='/sign-in'>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
