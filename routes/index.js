import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AlmostThere from "../components/AlmostThere";
import CreatePassword from "../components/CreatePassword";
import HomeAddress from "../components/HomeAddress";
import OtpConfirm from "../components/OtpConfirm";
import Personalinfo from "../components/Personalinfo";
import Select from "../components/Select";
import SignIn from "../components/SignIn";



const Forms = () => {
  // const [data, setData] = useState([]);
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<SignIn />} exact />
          <Route path='createAccount' element={<Select />} />
          <Route path='confirmOtp' element={<OtpConfirm />} />
          <Route path='createPassword' element={<CreatePassword />} />
          <Route path='personalInfo' element={<Personalinfo />} />
          <Route path='homeAddress' element={<HomeAddress />} />
          <Route path='almostThere' element={<AlmostThere />} />
          <Route path='signIn' element={<SignIn />} />
          
        </Routes>
      
    </div>
  );
};

export default Forms;
