import React from 'react';

const AdminLayout = ({children}) => {
  return(
    <div className='admin-layout'>
      <header>
        <h1>Administación</h1>
      </header>
      {children}
    </div>
  )
}
export default AdminLayout;
