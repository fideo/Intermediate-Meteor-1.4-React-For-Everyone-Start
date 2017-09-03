import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Link } from 'react-router';

const MainLayout = ({children}) =>
  <div className='main-layout'>
    <header>
      <h1><Link to='/'>Level Up Voting</Link></h1>
      <LoginButtons />
      <nav>
<<<<<<< HEAD
        <Link to='/'>Inicio</Link>
        <Link to='/about'>About</Link>
        <Link to='/admin'>Admin</Link>
=======
        <Link to='/about'>About</Link>
>>>>>>> 3a48ec5a43e0860fff4d3433d56339d54d667183
      </nav>
    </header>
    {children}
  </div>

export default MainLayout;
