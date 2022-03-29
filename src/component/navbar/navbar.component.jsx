import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './nvabar.styles.scss';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '..//../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils';


const Navbar = () => {

  const { currentUser } = useContext(UserContext)

  return (
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          Shop
        </Link>
        {
          currentUser ? (
            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
          ) : (<Link className='nav-link' to='/auth'>
            Sign In
          </Link>)
        }
      </div>
    </div>
  );
};

export default Navbar;
