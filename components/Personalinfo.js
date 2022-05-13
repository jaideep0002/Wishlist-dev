import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IllustrationArea from "./IllustrationArea";
import { toast } from "react-toastify";
import axios from "axios";
import { UserConsumer, UserProvider } from "../Context";

export default function Personalinfo(props) {
  const [postData, setPostData] = useState([]);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [date, setDate] = useState("");
  const baseURL = "https://app-wishlistapi-dev.azurewebsites.net";
  const phnumber = localStorage.getItem("phoneNo");
  const token = localStorage.getItem("token");

  // const firstName = localStorage.setItem("firstName", first);
  // const getName = localStorage.setItem("firstName");
  // const lastName = localStorage.setItem("LastName", last);
  const [disable, setDisable] = useState(true);
  // const Dob = localStorage.setItem("Dob", date);
  const personalFlag = localStorage.getItem("editMode");
  const history = useNavigate();

  const getPersonalInfo = () => {
    axios
      .get(`${baseURL}/api/Boarding/personal/get/${phnumber}`,{
        headers: {
          Accept: "Application/json",
          "content-type": "text/plain",
          Authorization: `Bearer ${token}`, //the token is a variable which holds the token
        },

      })
      .then((res) => {
        console.log(res);
        setFirst(first, res.data);
        setLast(last, res.data);
        setDate(date, res.data);

        //  setPostData(res.data);
      })
      .catch((err) => {
        console.log(`Error is ${err}`);
      });
  };
  useEffect(() => {
    if(personalFlag=== 'true'){
      getPersonalInfo();

    }
   
  }, []);

  const postPersonalInfo = () => {
    const params = {
      phoneNumber: `${phnumber}`,
      firstName: `${first}`,
      lastName: `${last}`,
      image: "",
      dateOfBirth: `${date}`,
      createdDateTime: "2020-05-09",
      modifiedDateTime: "2022-05-09",
    };
    const headers = {
      Accept: "Application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`, //the token is a variable which holds the token
    };
    axios
      .post(`${baseURL}/api/Boarding/personal/add/${phnumber}`, params, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
        //  setPostData(res.data);

        toast.success("Details Created Successfully");
        history({
          pathname: "/homeAddress",
          state: { perasonalData: postData },
        });
      })
      .catch((err) => {
        console.log(`Error is ${err}`);
        toast.error("try again");
        history("/personalInfo");
      });
  };
  return (
    <>
      <div>
        <IllustrationArea
          title='Personal info'
          subtitle='We ask for your personal information to verify your application details.'
        />
        {/* <Personalinfo.Provider>
        
      </Personalinfo.Provider> */}
        <div className='input ms-3'>
          <input
            id='phone'
            type='text'
            placeholder='First Name'
            name='text'
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />

          <input
            onChange={(e) => setLast(e.target.value)}
            className='mt-3'
            placeholder='Last Name'
            id='phone'
            type='text'
            name='text'
            value={last}
          />
          <input
            className='mt-3 px-3'
            id='phone'
            type='date'
            name='text'
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div className='mt-4'>
          <button
            type='submit'
            className='btn btn-primary continue ms-3'
            onClick={postPersonalInfo}
            // disabled={disable}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
