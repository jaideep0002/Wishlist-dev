import React, { useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import IllustrationArea from "./IllustrationArea";
import axios from "axios";
import { toast } from "react-toastify";

export default function HomeAddress() {
  const [address, setAddress] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const phnumber = localStorage.getItem("phoneNo");
  const token = localStorage.getItem("token");
  // const Address = localStorage.setItem(
  //   "Address",
  //   `${address} ${appartment} ${city} ${state} ${zip}`
  // );
  const baseURL = "https://app-wishlistapi-dev.azurewebsites.net";
 
  const history = useNavigate();
  const location = useLocation();
  
  
  // console.log(history.navigator.location.state, "personaldata")

  const getAddress = (e) => {
    e.preventDefault();
    const Today = new Date().toISOString();
    const params = {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      addressLine1: `${address}`,
      addressLine2: `${appartment}`,
      country: "",
      city: `${city}`,
      createdDateTime: `${Today}`,
      modifiedDateTime: "2022-05-09T09:55:11.944Z",
      phoneNumber: `${phnumber}`,
      postcode: `${zip}`,
      state: `${state}`,
    };
    const headers = {
      Accept: "Application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`, //the token is a variable which holds the token
    };
    axios
      .post(`${baseURL}/api/Boarding/address/add/${phnumber}`, params, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
        toast.success("Address details Submitted Successfully");
      })
      .catch((err) => {
        console.log(`Error is ${err}`);
        toast.error("try again");
      });
    address && appartment && state && zip && city
      ? history("/almostThere")
      : history("/homeAddress");
  };
  // console.log(location.state)
  return (
    <div>
      <IllustrationArea
        title='Home address'
        subtitle='Let us know where we should send your Juta Mastercard® Debit Card.'
      />
      <div className='input ms-3'>
        <input
          id='phone'
          type='text'
          placeholder='Street Address'
          name='text'
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className='mt-3'
          placeholder='Apt / Suite number'
          id='phone'
          type='text'
          name='text'
          onChange={(e) => setAppartment(e.target.value)}  
        />
        <input
          className='mt-3 px-3'
          id='phone'
          placeholder='City'
          type='text'
          name='text'
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className='mt-3 px-3'
          id='phone'
          placeholder='State'
          type='text'
          name='text'
          onChange={(e) => setState(e.target.value)}
        />
        <input
          className='mt-3 px-3'
          id='phone'
          placeholder='Zip code'
          type='text'
          name='text'
          onChange={(e) => setZip(e.target.value)}
        />
      </div>
      <div className='mt-4'>
        <button
          type='submit'
          className='btn btn-primary continue ms-3 mb-4'
          onClick={getAddress}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
