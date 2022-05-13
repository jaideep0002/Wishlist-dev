import React, { useState } from "react";
import IllustrationArea from "./IllustrationArea";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import axios from "axios";

export default function OtpConfirm() {
  

  const history = useNavigate();
  const phnumber = localStorage.getItem("phoneNo");
  const token = localStorage.getItem("token");
  const otplocal = localStorage.getItem("otp");
  const [otp, setOtp] = useState("");
  const [buttondisble, seButtondisable] = useState(true);
  const baseURL = "https://app-wishlistapi-dev.azurewebsites.net";
  console.log(otp);
  const otphandler = (e) => {
    const { value } = e.target;
    value.length === 4 ? seButtondisable(false) : seButtondisable(true);
    setOtp(value);
  };
  function confirmOtp(e) {
    e.preventDefault();

    axios
      .post(`${baseURL}/api/Boarding/verify/otp/${phnumber}`, otp, {
        headers: {
          Accept: "Application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${token}`, //the token is a variable which holds the token
        },
      })
      .then((res) => {
        console.log(res.data.otpVerified);

        otp === otplocal
          ? toast.success("OTP Verified")
          : toast.error("OTP not correct please try again");
      })
      .catch((err) => {
        console.log(`Error is ${err}`);
      });
    otp === otplocal
      ? history("/createPassword") && seButtondisable(false)
      : history("/confirmOtp") && seButtondisable(true);
  }
  return (
    <div>
      <IllustrationArea
        title='Confirm'
        subtitle='Please enter the 4-digit code just sent to'
      />
      <div className='d-flex ms-4'>
        <input id='common-input' type='tel' name='otp' onChange={otphandler} />
        {/* <input id='otp' type='tel' name='otp' />
        <input id='otp' type='tel' name='otp' />
        <input id='otp' type='tel' name='otp' /> */}
      </div>

      <div className='btn-con'>
        <button
          onClick={confirmOtp}
          type='submit'
          className='btn btn-primary continue ms-3'
          disabled={buttondisble}

          //  disabled={Object.keys(isError).length}
        >
          Continue
        </button>
        <p className='mt-2 ms-4' style={{ color: "#0093B9" }}>
          Resend OTp in {}
        </p>
      </div>
    </div>
  );
}
