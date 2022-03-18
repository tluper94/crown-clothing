import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../component/navbar/navbar.component';

const Navigation = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
