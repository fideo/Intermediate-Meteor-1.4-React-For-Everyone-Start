import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Link } from 'react-router';

const MainLayout = ({children}) =>
  <div className='main-layout'>
    <header>
      <h1><Link to='/'>Level Up Voting</Link></h1>
      <LoginButtons />
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/about'>About</Link>
        <Link to='/admin'>Admin</Link>
      </nav>
    </header>
    {children}
  </div>

export default MainLayout;
