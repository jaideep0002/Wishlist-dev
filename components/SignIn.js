import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import IllustrationArea from "./IllustrationArea";

export default function SignIn() {
  const history = useNavigate();
  const createAccount = () => {
    history("/createAccount");
  };
  const [countryCode, setCountryCode] = useState("");
  const countryCodes = [
    {
      countryCode: "AF",
      dialCode: "93",
    },
    {
      countryCode: "AL",
      dialCode: "355",
    },
    {
      countryCode: "IN",
      dialCode: "91",
    },
  ];
  return (
    <div>
      <IllustrationArea
        title='Sign in'
        subtitle='Simply enter your phone number to login or create an account.'
      />
      <div className='select-box'>
        <p className='ms-3 fw-bold' style={{ fontSize: "20px" }}>
          Phone
        </p>
        <select
          className='custom-select ms-3 py-4 px-2'
          onChange={(e) => setCountryCode(e.target.value)}
        >
          {countryCodes.map((item) => (
            <option key={item.dialCode} value={item.dialCode}>
              {item.dialCode}
            </option>
          ))}
        </select>
        <input id='phone' type='tel' className='tel' />
        <p className='ms-3 mt-4 fw-bold' style={{ fontSize: "20px" }}>
          Pin
        </p>
        <input id='common-input' className='ms-3' type='tel' name='pin' />
      </div>
      <div className='mt-4'>
        <button type='submit' className='btn btn-primary continue ms-3 mt-4'>
          Continue
        </button>
      </div>
      <div className='mt-4'>
        <button
          style={{ backgroundColor: "#CBCBCB" }}
          type='submit'
          className='btn btn-primary text-black continue ms-3 mt-5 mb-5 w-75 '
          onClick={createAccount}
        >
          Create Account
        </button>
      </div>
      <Footer/>
    </div>
  );
}
