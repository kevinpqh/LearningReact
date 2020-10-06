import React from 'react';
import Link from 'next/link';
import Header from './Header';

const Layout = props => {

  return (
    <>
      <h1>header</h1>

      <Header></Header>

      <main>
        {props.children}
      </main>
    </>
  )

}

export default Layout;