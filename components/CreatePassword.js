import React, { useState } from "react";
import IllustrationArea from "./IllustrationArea";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

export default function CreatePassword() {
  const history = useNavigate();
  const element = <FontAwesomeIcon icon={faCheck} />;
  const baseURL = "https://app-wishlistapi-dev.azurewebsites.net";
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const phnumber = localStorage.getItem("phoneNo");
  const token = localStorage.getItem("token");
  const [lengthvalid, setLengthvalid] = useState(true);
  const [regvalid, setRegvalid] = useState(true);
  const [regupper, setRegupper] = useState(true);

  const createPassword = (e) => {
    e.preventDefault();
    axios
      .put(`${baseURL}/api/Boarding/update/password/${phnumber}`, password, {
        headers: {
          Accept: "Application/json",
          "content-type": "application/json",
          "Authorization": `Bearer ${token}`, //the token is a variable which holds the token
        },
      })
      .then((res) => {
        toast.success("Password Created Successfully");
        console.log(res);
        history("/personalInfo");
      })
      .catch((err) => {
        toast.error("Try Again");
        console.log(`Error is ${err}`);
        history("/createPassword");
      });
    
  };

  // password validation
  const passwordHandler = (e) => {
    // debugger;
    
    const { value } = e.target;
    setPassword(value);
    const isContainSymbol = /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/;
    const isUpperCase = /^(?=.*[A-Z]).*$/;
    const isContainNumber = /[0-9]/;

    console.log(value.length);
    // setValues({
    //   password: value,
    // });
    setPassword(value);
    value.length >= 8
      ? setLengthvalid(!true) || setDisable(false)
      : (setLengthvalid(true) && setPassword(value)) || setDisable(true);
    isContainSymbol.test(value) && isUpperCase.test(value)
      ? setRegupper(!true) && setDisable(false)
      : (setRegupper(true) && setPassword(value)) || setDisable(true);
    isContainNumber.test(value)
      ? setRegvalid(!true) && setDisable(false)
      : (setRegvalid(true) && setPassword(value)) || setDisable(true);
  };
  return (
    <div>
      <IllustrationArea
        title='Create Password'
        subtitle='Choose a secure password that will be easy for you to remember.'
      />
      <div className='input ms-3'>
        <input
          id='phone'
          type='text'
          value={password}
          name='password'
          onChange={passwordHandler}
        />
        <div className='mt-2'>
          <p style={lengthvalid ? { color: "#525252" } : { color: "#00B167" }}>
            {/* disabled={Object.keys(isError).length} */}
            {element} Has at least 8 Characters
          </p>
          <p style={regupper ? { color: "#525252" } : { color: "#00B167" }}>
            {element} Has an uppercase letter and symbol
          </p>
          <p style={regvalid ? { color: "#525252" } : { color: "#00B167" }}>
            {element} Has a number
          </p>
        </div>
      </div>
      <div className='btn-con'>
        <form onSubmit={createPassword}>
          <button
            type='submit'
            className='btn btn-primary continue ms-3'
            disabled={disable}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
