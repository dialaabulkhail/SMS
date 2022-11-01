import React from "react";
import Contact from "./Contact";
import { useState } from "react";
import products from "../../public/products.webp";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

const Hero = () => {
  const [thank, setThank] = useState(false);
  const [phone, setPhone] = useState("");


  return (
    <>
      {thank ? (
        <div className="-mt-20 text-center bg-white">
          <div className="top-0 h-screen bg-white">
          <h1 className=" mx-10 mt-60  text-[20px] font-bold text-center text-black dark:bg-white">
            We are glad to invite you to the opening of iSystem new branch in Abdoun on the 3rd of November at 6:00PM
          </h1>

          <Image src={products} width="1200px" height="400px" />
          <div>
            <Link href="https://goo.gl/maps/JyXWJ9eXMMz2yJh77">
              <p className="text-[#2b498e] text-[20px] font-bold cursor-pointer hover:text-blue-300 text-center lg:-mt-20 lg:relative">
                https://bit.ly/3VqeQAD
              </p>
            </Link>
          </div>
          
          </div>
          
          <Footer />
        </div>
      ) : (
        <div className=" h-screen w-full bg-cover bg-[url(https://assets-prd.ignimgs.com/2022/09/07/14pro-1662575961382.jpg)]  bg-fixed bg-center flex items-center justify-center ">
          <div className="absolute bottom-0 left-0 right-0 h-screen top-16 bg-black/50" />
          <Contact setThank={setThank} setPhone={setPhone} phone={phone} />
        </div>
      )}
    </>
  );
};

export default Hero;
// https://i.ibb.co/Nr09Nv0/iphone-14-banner-1.webp
// https://assets-prd.ignimgs.com/2022/09/07/14pro-1662575961382.jpg