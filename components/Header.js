import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='logo '>
      <nav className='navbar navbar-expand-lg'>
        <Link className='navbar-brand' to={'#'}>
          <img className='pt-lg-4 px-3' src='images/logo.png' alt='' />
        </Link>
      </nav>
    </div>
  );
}
