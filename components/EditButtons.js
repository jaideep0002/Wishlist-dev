import React from "react";
import { useNavigate } from "react-router-dom";


export default function EditButtons(props) {
  const {firstname, lastname, dob, address1, address2,city, state,postcode} = props;
  const history = useNavigate();

  const editNameAndDob = (e) => {
    localStorage.setItem('editMode', true);

      history("/personalInfo")
    
   
  };
  const editaddress = (e) => {
    history("/homeAddress");
  };

  return (
    <div>
      <div className='d-flex  justify-content-between ms-4 w-75'>
        <div>
          <p className='mb-0'>Full Legal Name</p>
          <p className='fs-6 fw-bold'>{`${firstname} ${lastname} `}</p>
        </div>
        <button
          className='btn btn-info rounded-pill text-black'
          type='submit'
          style={{
            width: "5rem",
            height: "3rem",
            backgroundColor: "#FFFF",
            borderColor: "#FFFF",
            fontWeight: "bold",
          }}
          onClick={editNameAndDob}
        >
          Edit
        </button>
      </div>
      <hr
        style={{
          width: "93%",
          margin: "1rem auto",
          color: "gray",
        }}
      />
      <div className='d-flex  justify-content-between ms-4 w-75'>
        <div>
          <p className='mb-0'>Date of Birth</p>
          <p className='fs-6 fw-bold'>{dob}</p>
        </div>
        <button
          className='btn btn-info rounded-pill text-black'
          type='submit'
          style={{
            width: "5rem",
            height: "3rem",
            backgroundColor: "#FFFF",
            borderColor: "#FFFF",
            fontWeight: "bold",
          }}
          onClick={editNameAndDob}
        >
          Edit
        </button>
      </div>
      <hr
        style={{
          width: "93%",
          margin: "1rem auto",
          color: "gray",
        }}
      />
      <div className='d-flex  justify-content-between ms-4 w-75'>
        <div>
          <p className='mb-0'>Residential Address</p>
          <p className='fs-6 fw-bold'>{`${address1} , ${address2} 
          ${city}, ${state},  ${postcode}`} </p>
        </div>
        <button
          className='btn btn-info rounded-pill text-black'
          type='submit'
          style={{
            width: "5rem",
            height: "3rem",
            backgroundColor: "#FFFF",
            borderColor: "#FFFF",
            fontWeight: "bold",
          }}
          onClick={editaddress}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
