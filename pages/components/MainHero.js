import React from "react";
import Contact from "./Contact";
import { useState } from "react";

const Hero = () => {
  const [thank, setThank] = useState(false);
  const [phone, setPhone] = useState("")

  console.log(phone)
  
  return (
    <>
      {thank ? (
        <div className="text-center">
          <h1 className="mx-10 mt-20 font-bold ">
            We are glad to invite you to the opening for isystem new branch in
            Abdoun on the 27th of October at 6:00 pm
          </h1>
          <div className="h-screen w-full bg-cover bg-[url(https://i.imgur.com/bUOTuQW.jpeg)] lg:-ml-10 -mt-10"></div>
        </div>
      ) : (
        <div className=" h-[70vh] w-full bg-cover bg-[url(https://i.imgur.com/exgCd94.png)] flex justify-center">
          <Contact setThank={setThank} setPhone={setPhone} phone={phone}/>
        </div>
      )}
    </>
  );
};

export default Hero;
