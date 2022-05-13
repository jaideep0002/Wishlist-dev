import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditButtons from "./EditButtons";
import IllustrationArea from "./IllustrationArea";
import axios from "axios";
import { toast } from "react-toastify";

//  const {UserContext} from "./"

function AlmostThere(props) {
  // const { data } = props;
  // console.log(data, "previous data");
  const baseURL = "https://app-wishlistapi-dev.azurewebsites.net";
  const phnumber = localStorage.getItem("phoneNo");
  const token = localStorage.getItem("token");
  const [para, setPara] = useState([]);
  const [address, setAddress] = useState([]);
  const history = useNavigate();

  const personalDetail = () => {
    // personal details api call
    axios
      .get(`${baseURL}/api/Boarding/personal/get/${phnumber}`, {
        headers: {
          Accept: "Application/json",
          "content-type": "text/plain",
          Authorization: `Bearer ${token}`, //the token is a variable which holds the token
        },
      })
      .then((res) => {
        console.log(res);
        setPara(res.data);
       
        
        // history("/");
      })
      .catch((err) => {
        console.log(`Error is ${err}`);
        //  history("/almostThere");
      });
     
  };
  // console.log("deta", para)
  
  const addressGet = () => {
    axios
      .get(`${baseURL}/api/Boarding/address/get/${phnumber}`, {
        headers: {
          Accept: "Application/json",
          "content-type": "text/plain",
          Authorization: `Bearer ${token}`, //the token is a variable which holds the token
        },
      })
      .then((res) => {
        console.log(res);
        // toast.success("Successfully");
        setAddress(res.data);

        // history("/");
      })
      .catch((err) => {
        console.log(`Error is ${err}`);
        // toast.error("try again");
        history("/almostThere");
      });
  };

  useEffect(() => {
    personalDetail();
    addressGet();
  }, []);

  // console.log(["haha" + address.data?.city]);

  return (
    <div>
      <IllustrationArea
        title='Almost there!'
        subtitle='Please take a moment to ensure all of the information you provide is correct.'
      />
      <EditButtons
        firstname={para?.firstName}
        lastname={para?.lastName}
        dob={para?.dateOfBirth}
        address1={address?.addressLine1}
        address2={address?.addressLine2}
        city={address?.city}
        state={address?.state}
        postcode={address?.postcode}
      />
      <div className='mt-4'>
        <button type='submit' className='btn btn-primary continue ms-3'>
          Continue
        </button>
      </div>
    </div>
  );
}

export default AlmostThere;
