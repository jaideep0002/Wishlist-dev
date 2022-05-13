import React,{useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import IllustrationArea from "./IllustrationArea";
import LeftSide from "./LeftSide";


import Select from "./Select";

export default function Layout(props) {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-7 bg-white'>
          <Header />
          <LeftSide />
        </div>
        <div className='col-lg-5 bg-right'>
          <div className='ms-5'>
            <IllustrationArea />
            <Select />
           <Footer /> 
          </div>
        </div>
      </div>
    </div>
  );
}
