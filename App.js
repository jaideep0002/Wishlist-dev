import "./App.css";
import "./style.css";
import Forms from "./routes";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
// import IllustrationArea from "./components/IllustrationArea";
import React,{useState } from "react";
// import UserProvider from "./components/Personalinfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { UserProvider } from "./Context";

function App() {
  // const[Data,setData]=useState()
  return (
    <>
       
      <ToastContainer />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-7 bg-white'>
            <Header />
            <LeftSide />
          </div>
          <div className='col-lg-5 bg-right'>
            <Forms />
          </div>
        </div>
      </div>
       
    </>
  );
}

export default App;

// </Layout>
