import React from "react";
import Contact from "./Contact";
import { useState } from "react";
import products from "../../public/products.webp";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [thank, setThank] = useState(false);
  const [phone, setPhone] = useState("");


  return (
    <>
      {thank ? (
        <div className="text-center">
          <h1 className="mx-10 mt-20 text-[20px] font-bold text-center">
            Congrats! You entered the draw to win iPhone 14 from iSystem; join
            us at our new Abdoun branch on the 27th of October 6:00PM to
            announce the winner at the opening.
          </h1>

          <Image src={products} width="1200px" height="500px" />
          <div>
            <Link href="https://www.google.com/maps/dir//iSystem+Abdoun+-+Coming+Soon%E2%80%A6+Saed+Abdo+Shammout+St.+Amman+11183/@31.9418879,35.8814099,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x151ca1a56d16d7ff:0xa56961f35125d387!2m2!1d35.8814099!2d31.9418879">
              <p className="text-[#1e40af] text-[20px] font-bold cursor-pointer hover:text-blue-300 text-center lg:-mt-20 lg:relative">
                https://bit.ly/3VqeQAD
              </p>
            </Link>
          </div>
          <div>

          </div>
        </div>
      ) : (
        <div className=" h-screen w-full bg-cover bg-[url(https://i.ibb.co/Nr09Nv0/iphone-14-banner-1.webp)] flex bg-fixed bg-center flex items-center justify-center ">
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-black/50 h-screen" />
          <Contact setThank={setThank} setPhone={setPhone} phone={phone} />
        </div>
      )}
    </>
  );
};

export default Hero;

