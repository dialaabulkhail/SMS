import React from "react";
import Contact from "./Contact";
import { useState } from "react";
import products from '../../public/products.webp'
import Image from "next/image";
import iphone14 from '../../public/iphone14.webp'
import Iframe from 'react-iframe'


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

          <div>
          <Iframe 
  url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13542.801978615758!2d35.8814099!3d31.9418879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa56961f35125d387!2siSystem%20Abdoun%20-%20Coming%20Soon%E2%80%A6!5e0!3m2!1sen!2sjo!4v1666093309353!5m2!1sen!2sjo"
        width="600px"
        height="450px"
        id=""
        className="lg:w-[600px] lg:h-[450px] w-[300px] h-[250px] mb-10"
        display=""
        position=""
        />
          </div>
        </div>
      ) : (
        <div className=" h-screen w-full bg-cover bg-[url(https://storage.cloudconvert.com/tasks/ac23d26c-3900-4749-9775-0b939eeaa46c/iphone_14_banner.webp?AWSAccessKeyId=cloudconvert-production&Expires=1666168187&Signature=289yESPDy7wXXDIfWurrykbh39M%3D&response-content-disposition=inline%3B%20filename%3D%22iphone_14_banner.webp%22&response-content-type=image%2Fwebp)] flex bg-fixed bg-center flex items-center justify-center ">
          <div className='absolute top-16 left-0 right-0 bottom-0 bg-black/50 h-screen' />
          <Contact setThank={setThank} setPhone={setPhone} phone={phone}/>
        </div>
      )}
    </>
  );
};

export default Hero;


//  h-[100vh] w-full bg-cover bg-[url(https://i.imgur.com/exgCd94.png)] flex justify-center