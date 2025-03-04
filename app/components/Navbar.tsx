"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { Button, Flexbox, Image, Text } from "shadlc";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <Flexbox
      direction={{ sm: "column", md: "row", lg: "row" }}
      padding={{ sm: "20px 20px", md: "20px", lg: "20px" }}
      align={{ sm: "flex-start", md: "center", lg: "center" }}
      gap={{ lg: "20px", md: "10px", sm: "18px" }}
      justify={{ lg: "flex-end", md: "center", sm: "flex-start" }}
      backgroundColor="#000"
      className="absolute z-20 !h-20 max-lg:h-screen"
    >
      {isMenuOpen ? (
        <IoClose
          onClick={() => setisMenuOpen(false)}
          className="absolute top-0 right-0 text-2xl m-5 md:hidden"
        />
      ) : (
        <RiMenu4Line
          onClick={() => setisMenuOpen(true)}
          className="absolute top-0 right-0 text-2xl m-5 md:hidden"
        />
      )}

      {/* Logo icon  */}
      <Link href={"/"} className="flex items-center gap-1">
        <Image alt="logo" height="30px" width="30px" src="favicon.ico" />
        <Text
          as="span"
          color="text-white"
          fontSize="18px"
          fontWeight={800}
          className=""
        >
          Shadlc
          <Text
            as="span"
            color="#00BF3B"
            fontSize="18px"
            fontWeight={800}
            className="[text-shadow:_0_0px_10px_green]"
          >
            Ui
          </Text>
        </Text>
      </Link>

      {/*Navlist Items  */}

      {isMenuOpen && (
        <Flexbox
          backgroundColor="#000000"
          padding={{ sm: "0px 10px", md: "0px", lg: "0px" }}
          direction={{ sm: "column", md: "row", lg: "row" }}
          align={{ sm: "flex-start", md: "center", lg: "center" }}
          gap={{ lg: "20px", md: "10px", sm: "18px" }}
          justify={{ lg: "flex-end", md: "center", sm: "center" }}
          className={`z-20 max-lg:!${!isMenuOpen ? "hidden" : ""}`}
        >
          <Link href={"/"} className="text-sm ">
            Home
          </Link>
          <Link href={"/docs"} className="text-sm ">
            Docs
          </Link>
          <Link href={"/about"} className="text-sm ">
            About
          </Link>
          <Link href={"/templates"} className="text-sm ">
            Templates
          </Link>
          <Button
            className="z-20 animate-slide-in-right font-mono text-sm text-white hover:!bg-black"
            borderColor="white"
            size="md"
            iconAfter={<FaExternalLinkAlt />}
            onClick={() => router.push("/docs")}
          >
            Get started
          </Button>
        </Flexbox>
      )}
    </Flexbox>
  );
};

export default Navbar;
