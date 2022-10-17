import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.webp";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-16 bg-darkBlue ">
      <div className="text-center">
        <Link href="/Main">
          <Image src={Logo} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
