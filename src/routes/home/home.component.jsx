import Directory from '../../component/directory/directory.component';

import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className='app'>
      <Directory />
      <Outlet />
    </div>
  );
}

export default Home;
