"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { Button, Flexbox, Image, Text } from "shadlc";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(
    "Basic Components"
  );

  useEffect(() => {
    setIsMounted(true);
    if (window.innerWidth > 1024) {
      setIsMenuOpen(true);
    }
  }, []);

  const toggleDropdown = (dropdownName: string | null) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  if (!isMounted) return null; // Prevent hydration mismatch

  return (
    <Flexbox
      direction={{ sm: "column", md: "column", lg: "column" }}
      align={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      justify={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      padding={{ sm: "20px 20px", md: "20px", lg: "40px 20px" }}
      gap={{ lg: "18px" }}
      backgroundColor="#000"
      height={{ sm: "auto", lg: "100vh" }}
      className="fixed custom-scroll top-0 left-0 z-20 rounded-e-xl shadow !border-r !border-gray-600"
      maxWidth={{ lg: "280px" }}
    >
      {/* Toggle Button for Mobile */}
      <div className="absolute top-0 right-0 m-5 md:hidden">
        {isMenuOpen ? (
          <IoClose className="text-2xl" onClick={() => setIsMenuOpen(false)} />
        ) : (
          <RiMenu4Line
            className="text-2xl"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      {/* Sidebar Header */}
      <Link href="/" className="flex items-center gap-1">
        <Image alt="logo" height="30px" width="30px" src="/favicon.png" />
        <Text as="span" color="text-white" fontSize="18px" fontWeight={800}>
          Shadlc{" "}
          <Text
            as="span"
            color="#00BF3B"
            fontSize="18px"
            fontWeight={800}
            className="[text-shadow:_0_0px_10px_green]"
          >
            UI
          </Text>
        </Text>
      </Link>

      {isMenuOpen && (
        <Flexbox
          backgroundColor="#000"
          direction={{ sm: "column", md: "column", lg: "column" }}
          align={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
          justify={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
          padding={{ lg: "0px 5px" }}
          gap={{ lg: "5px" }}
        >
          <Link
            href="/template"
            className="text-[14px] px-[12px] py-[8px] rounded-lg"
          >
            Templates
          </Link>

          {/* Dropdown Menu */}
          <div className="relative">
            <Button
              className="bg-transparent py-2 hover:bg-green-950"
              size="sm"
              iconAfter={
                <FaAngleDown
                  className={`text-green-600 transition-all ${
                    openDropdown === "Basic Components"
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              }
              onClick={() => toggleDropdown("Basic Components")}
            >
            Hero Section
            </Button>
            {openDropdown === "Basic Components" && (
              <div className="flex flex-col items-start px-3">
                {[
                  "Comming soon!",
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/docs/${item.toLowerCase()}`}
                    className="text-[14px] hover:bg-[#010e03d0] py-2 w-full !border-l !border-green-600 px-3"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Dropdown Menu */}
          {/* <div className="relative">
            <Button
              className="bg-transparent py-2 hover:bg-green-950"
              size="sm"
              iconAfter={
                <FaAngleDown
                  className={`text-green-600 transition-all ${
                    openDropdown === "Layout Components"
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              }
              onClick={() => toggleDropdown("Layout Components")}
            >
              Layout Components
            </Button>
            {openDropdown === "Layout Components" && (
              <div className="flex flex-col items-start px-3">
                {["Container", "Flexbox", "GridView"].map((item) => (
                  <Link
                    key={item}
                    href={`/docs/${item.toLowerCase()}`}
                    className="text-[14px] hover:bg-[#010e03d0] py-2 w-full !border-l !border-green-600 px-3"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div> */}
          {/* Dropdown Menu */}
          {/* <div className="relative">
            <Button
              className="bg-transparent py-2 hover:bg-green-950"
              size="sm"
              iconAfter={
                <FaAngleDown
                  className={`text-green-600 transition-all ${
                    openDropdown === "Gallery Components"
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              }
              onClick={() => toggleDropdown("Gallery Components")}
            >
              Gallery Components
            </Button>
            {openDropdown === "Gallery Components" && (
              <div className="flex flex-col items-start px-3">
                {["ImageGallery", "VideoGallery", "AudioGallery"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`/docs/${item.toLowerCase()}`}
                      className="text-[14px] hover:bg-[#010e03d0] py-2 w-full !border-l !border-green-600 px-3"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            )}
          </div> */}
        </Flexbox>
      )}
    </Flexbox>
  );
};

export default Sidebar;
