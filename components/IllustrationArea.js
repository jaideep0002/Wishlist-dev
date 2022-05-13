import React from "react";



export default function IllustrationArea({ title, subtitle }) {
  return (
    <div>
      <img
        className='mt-4 px-2'
        src='images/Illustration (1).png'
        alt='illustration'
      />
      <h1 className='mt-3 mx-3'> {title} </h1>
      <p className='mx-3'>{subtitle}</p>
    </div>
  );
}
