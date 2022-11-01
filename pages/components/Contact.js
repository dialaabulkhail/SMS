import React from "react";
import { useState } from "react";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

const Contact = ({ setThank, setPhone, phone }) => {
  // inputs saved from the form to be moved to google sheets - can be replaced or repmoved
  const [inputs, setInputs] = useState(initialValues);

  // function responsible for sending sms and redirecting to the thank page
  const fetch = () => {
    axios
      .get(
        `https://josmsservice.com/SMSServices/Clients/Prof/RestSingleSMS/SendSMS?senderid=iSystem&numbers=962${phone}&accname=isystem1&AccPass=xW8@zF6@wB2@xF1fT2n&msg=Congrats, you entered the draw to get an iPhone14. Join us at Abdoun branch on the 3rd of November at 6:00PM to announce the winner at the opening https://bit.ly/3VqeQAD`
      )
      .then((res) => {
        console.log(res);
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
    setThank(true);
  };

  const handleChange = (e) => {
    const x = document.getElementById("phone").value
    console.log(x)
    setPhone(x);

    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // google sheets data
    const sheetData = {
      Name: inputs.name,
      Email: inputs.email,
      Phone: inputs.phone,
    };


    console.log(inputs)

    // validation of the phone number type
    const phoneNumber = document.querySelector("#phone").value;

    if (phoneNumber < 0) {
      alert("Please enetr a valid number!");
    }
    else if(phoneNumber === "788534819"){
      setThank(true)
    }

    // calling the function that sends an sms after validation
    else if (phoneNumber.match(/^[0-9]+$/) != null) {
      fetch();

      // seding to google sheets
      axios
        .post(
          "https://sheet.best/api/sheets/75c35fca-1594-4662-87eb-501b6f4c9a10",
          sheetData
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please enter only numbers!");
    }
  };

  return (
    <div className="items-center overflow-x-none z-[40] overflow-y-none ">
      <h1 className="mx-10 text-[20px] text-white mt-10 font-bold text-center">
        You are a few steps away from winning iPhone 14.
      </h1>
      <h1 className="mx-10 text-[20px] text-white mt-6 font-bold text-center mb-14">
        Please fill the below information to enter the draw.
      </h1>

      <div className="flex items-center justify-center w-full">
        <form onSubmit={handleSubmit} method="post" className="">
          <label className="flex py-2 font-bold text-white">Your Name*</label>
          <input
            required="true"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            type="text"
            className="w-full py-1 px-1 border-b focus:ring-0 focus:outline-none text-[18px] rounded-sm bg-white text-gray-900"
          />

          <label className="flex py-1 mt-5 font-bold text-white ">
            Phone Number*
          </label>
          <div className="flex">
            <div className="py-1 text-gray-700 bg-white text-[18px]">+962</div>
            <input
              id="phone"
              required="true"
              name="phone"
              // value={inputs.phone || ""}
              onChange={handleChange}
              type="tel"
              className="w-full py-1 px-1 border-b focus:ring-0 focus:outline-none text-[18px] rounded-sm bg-white text-gray-900"
            />
          </div>

          <label className="flex py-1 mt-5 font-bold text-white">Email*</label>
          <input
            required="true"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            type="email"
            className="w-full py-1 px-1 border-b focus:ring-0 focus:outline-none text-[18px] rounded-sm bg-white text-gray-900"
          />

          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="p-3 px-10 mt-2 text-white duration-200 ease-in-out shadow bg-[#2b498e] hover:bg-[#2b498e]/50"
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
