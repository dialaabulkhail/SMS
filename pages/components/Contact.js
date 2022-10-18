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
        `https://josmsservice.com/SMSServices/Clients/Prof/RestSingleSMS/SendSMS?senderid=iSystem&numbers=962${phone}&accname=isystem1&AccPass=xW8@zF6@wB2@xF1fT2n&msg=Congrats,you entered the draw to get an iPhone14,join us at Abdoun branch on the 27th of Oct 6PM/ to announce the winner at the opening https://bit.ly/3VqeQAD`
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
    setPhone(e.target.value);

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

    // validation of the phone number type
    const phoneNumber = document.querySelector("#phone").value;

    if (phoneNumber < 0) {
      alert("Please enetr a valid number!");
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
    <div className="items-center overflow-x-none z-[40]">
      <h1 className="mx-10 text-[20px] text-white mt-14 font-bold">
      You are a few steps away from winning an iPhone14; please fill in the below information to enter the draw for winning iPhone 14 from iSystem!
      </h1>

      <div className="flex items-center justify-center ">
        <form onSubmit={handleSubmit} method="post" className="mt-5">
          <label className="flex py-2 text-white font-bold">Name</label>
          <input
            required="true"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            type="text"
            className="px-6 py-1 mx-3 text-white border-b bg-transparent focus:ring-0 focus:outline-none text-[18px]"
          />

          <label className="py-1 text-white flex font-bold mt-10">Email</label>
          <input
            required="true"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            type="email"
            className="px-6 py-1 mx-3 text-white border-b bg-transparent focus:ring-0 focus:outline-none text-[18px] focus:bg-transparent "
          />

          <label className=" py-1 text-white flex font-bold mt-10">
            Phone Number
          </label>
          <div className="flex">
            <div className=" py-1 text-white  ">
              +962
            </div>
            <input
              id="phone"
              required="true"
              name="phone"
              // value={inputs.phone || ""}
              onChange={handleChange}
              type="tel"
              className="px-2 py-1 mx-3 text-white border-b bg-transparent focus:ring-0 focus:outline-none text-[18px]"
            />
          </div>

          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="p-3 px-10 text-white duration-200 ease-in-out rounded-lg shadow bg-darkBlue hover:bg-darkBlue/50 mt-2"
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
