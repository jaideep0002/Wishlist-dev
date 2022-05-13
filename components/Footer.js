import React from "react";
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <div className='footer mt-4 mx-4'>
      <h5 className='footer-area'>
        By using our web app, you agree to our <Link to='#'>Terms of Use</Link> and{" "}
        <Link to='/'>Privacy Policy</Link>{" "}
      </h5>
    </div>
  );
}
