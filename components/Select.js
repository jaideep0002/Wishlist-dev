import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router";
import IllustrationArea from "./IllustrationArea";
import Footer from "./Footer";

export default function Select() {
  const history = useNavigate();

  const baseURL = "https://app-wishlistapi-dev.azurewebsites.net/api";

  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [disable, setDisable] = useState(true);

  //Axios Api Data integration

  function getData(e) {
    e.preventDefault();
    axios
      .post(`${baseURL}/Boarding/new/${phoneNumber}`)
      .then((res) => {
        console.log(res);
        // debugger;
        console.log("no is" + phoneNumber);
        localStorage.setItem("phoneNo", phoneNumber);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("otp", res.data.otp);
        console.log(res.data.otp);
        console.log(res.data.token);
        toast.success(`OTP  ${res.data.otp}`);
      })
      .catch((err) => {
        console.log(`Error is ${err}`);
      });
    history("/confirmOtp");
  }

  // Validation
  const phoneHandler = (e) => {
    const NumRegx = /[0-9]/;
    const { value } = e.target;
    if (value.length >= 10 && NumRegx.test(value)) {
      setDisable(false);
    } else {
      setDisable(true);
      setPhoneNumber(e.target.value);
    }
  };

  // Country Code Select Box object data
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
        title='Sign Up'
        subtitle={`Simply enter your phone number to login ${"\n"} or create an account.`}
      />

      <div className='select-box'>
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
        <input id='phone' type='tel' className='tel' onChange={phoneHandler} />

        <div className='btn-con'>
          <button
            // onSubmit={(e) => {
            //   setPhoneNumber(e.target.value);
            // }}
            onClick={getData}
            type='submit'
            className='btn btn-primary continue ms-3'
            disabled={disable}
          >
            Continue
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
