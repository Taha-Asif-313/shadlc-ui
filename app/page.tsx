"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button, CodeClipboard, Flexbox, Image, Text } from "shadlc";

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <Flexbox
        height={{ sm: "100vh", md: "100vh", lg: "100vh" }}
        padding={{ sm: "0 30px", md: "20px", lg: "40px" }}
        backgroundColor="transparent"
        direction={{ sm: "column", md: "column", lg: "column" }}
        align={{ sm: "center", md: "center", lg: "center" }}
        gap={{ sm: "5px", md: "10px", lg: "10px" }}
        justify={{ sm: "center", md: "center", lg: "center" }}
      >
        {/* Prevent Hydration Error on Image */}
        {isMounted && (
          <Image
            height="100%"
            width="100%"
            className="!absolute animate-pulse -z-5 left-0 bottom-0"
            src="https://img.freepik.com/premium-photo/green-smoke-abstract-black-background-design-darkness-concept_55716-3401.jpg?ga=GA1.1.549927575.1739795997&semt=ais_hybrid"
          />
        )}

        <Text
          as="h1"
          fontSize="70px"
          color="text-white"
          fontWeight={800}
          className="animate-bounce-in max-lg:!text-5xl !text-center text-white font-extrabold z-10"
        >
          Welcome to{" "}
          <span className="text-green-500 [text-shadow:_0_0px_10px_green]">
            Shadlc
          </span>{" "}
          UI
        </Text>

        <p className="z-20 text-white lg:w-[60%] font-mono text-center tracking-wider text-sm">
          <span className="text-green-500 font-bold [text-shadow:_0_0px_10px_green] text-sm">
            Shadlc
          </span>{" "}
          is a lightweight and customizable{" "}
          <span className="text-green-500 font-bold [text-shadow:_0_0px_10px_green] animate-fade-in text-sm">
            UI component library{" "}
          </span>{" "}
          built for React with{" "}
          <span className="text-green-500 font-bold [text-shadow:_0_0px_10px_green] animate-fade-in ">
            tailwind css.
          </span>{" "}
          It provides reusable and stylish components to speed up your
          development process while keeping your UI{" "}
          <span className="text-green-500 font-bold [text-shadow:_0_0px_10px_green] animate-fade-in text-sm">
            clean
          </span>{" "}
          and{" "}
          <span className="text-green-500 font-bold [text-shadow:_0_0px_10px_green] animate-fade-in text-sm">
            modern.
          </span>
        </p>

        {/* Prevent Hydration Error on CodeClipboard */}
        {isMounted && (
          <CodeClipboard
            language="bash"
            code="npm i shadlc"
            className="!w-[45%] max-lg:w-full animate-fade-in mt-2 !bg-[#010e03d0] border border-green-500 text-green-400"
          />
        )}

        <Button
          className="z-20 mt-2 animate-slide-in-right font-mono text-sm text-white hover:!bg-black"
          backgroundColor="black"
          borderColor="white"
          size="md"
          iconAfter={<FaExternalLinkAlt />}
        >
          Explore UI Templates
        </Button>
      </Flexbox>
    </>
  );
};

export default Page;
