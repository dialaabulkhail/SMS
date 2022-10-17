import React from "react";
import Contact from "./Contact";
import { useState } from "react";
import products from '../../public/products.webp'
import Image from "next/image";


const Hero = () => {
  const [thank, setThank] = useState(false);
  const [phone, setPhone] = useState("")

  
  return (
    <>
      {thank ? (
        <div className="text-center">
          <h1 className="mx-10 mt-20 text-[20px] font-bold">
          Good luck, see you at the opening event of iSystem Abdoun new branch on the 27th of October at 6 PM
          </h1>
          <Image src={products} width="1200px" height="500px"/>
        </div>
      ) : (
        <div className=" h-[100vh] w-full bg-cover bg-[url(https://i.imgur.com/exgCd94.png)] flex justify-center ">
          <Contact setThank={setThank} setPhone={setPhone} phone={phone}/>
        </div>
      )}
    </>
  );
};

export default Hero;
