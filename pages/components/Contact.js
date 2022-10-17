import React from "react";
import { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";
import { data } from "autoprefixer";

const Contact = ({ setThank, setPhone, phone }) => {
  // const [inputs, setInputs] = useState([])

  // const handleChange = (e) =>{
  //   const name = e.target.name
  //   const email = e.target.email
  //   const phone = e.target.phone
  //   setInputs(values => ({...values, [name]: phone}))
  // }

  const handleSubmit = () => {
    // e.preventDefault()
    setThank(true);
  };

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    axios.post(
        `https://josmsservice.com/SMSServices/Clients/Prof/RestSingleSMS/SendSMS?senderid=iSystem&numbers=962777363354&accname=isystem1&AccPass=xW8@zF6@wB2@xF1fT2n&msg=SMSBODY`,

        ).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
      }, []);

  // async function postData(url = 'https://josmsservice.com/SMSServices/Clients/Prof/RestSingleSMS/SendSMS?senderid=iSystem&numbers=962777363354&accname=isystem1&AccPass=xW8@zF6@wB2@xF1fT2n&msg=SMSBODY') {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json'
        
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
   
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }
  
  // postData('https://josmsservice.com/SMSServices/Clients/Prof/RestSingleSMS/SendSMS?senderid=iSystem&numbers=962777363354&accname=isystem1&AccPass=xW8@zF6@wB2@xF1fT2n&msg=SMSBODY')
  //    // JSON data parsed by `data.json()` call

  return (
    <div className="m-20 rounded-lg bg-white/20">
      <h1 className="mx-10 font-bold text-white mt-14">
        Kindly, fill below information in order to be able to enter the draw for
        winning an iPhone 14
      </h1>

      <div className="flex items-center justify-center ">
        <form onSubmit={handleSubmit}>
          <label className="flex py-2 text-white">
            Name:
            <input
              name="name"
              // value={inputs.name || ""}
              // onChange={handleChange}
              type="text"
              className="px-3 mx-3 text-black underline border-b rounded-md focus:border-none focus:ring-0 focus:outline-none"
            />
          </label>

          <label className="py-2 text-white">
            Email:
            <input
              name="email"
              // value={inputs.email || ""}
              type="email"
              // onChange={handleChange}
              className="px-3 mx-3 text-black underline border-b rounded-md focus:border-none focus:ring-0 focus:outline-none"
            />
          </label>

          <label className="flex py-2 text-white">
            Phone Number:
            <div className="px-1 ml-3 text-gray-700 bg-gray-200 rounded-sm">
              +9627
            </div>
            <input
              name="phone"
              // value={inputs.phone || ""}
              onChange={handleChange}
              type="number"
              // onChange={(e)=>setPhone(e.target.value)}
              className="px-3 mx-1 text-black underline border-b rounded-md focus:border-none focus:ring-0 focus:outline-none"
            />
          </label>

          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="p-3 px-10 text-white duration-200 ease-in-out rounded-lg shadow bg-darkBlue hover:bg-darkBlue/50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
