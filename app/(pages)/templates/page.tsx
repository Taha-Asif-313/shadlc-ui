"use client";
import React from "react";
import { Flexbox, Text } from "shadlc";

const ExploreTemplates = () => {
  return (
    <Flexbox
      height={{ sm: "100vh", md: "100vh", lg: "100vh" }}
      maxWidth={{ sm: "100%", md: "100%", lg: "80%" }}
      padding={{ sm: "0 30px", md: "20px", lg: "40px" }}
      backgroundColor="black"
      direction={{ sm: "column", md: "column", lg: "column" }}
      align={{ sm: "center", md: "center", lg: "center" }}
      gap={{ sm: "5px", md: "10px", lg: "10px" }}
      justify={{ sm: "center", md: "center", lg: "center" }}
      className="custom-scroll"
    >
      {/* Title */}
      <Text fontSize="30px" fontWeight={600} color="white" as="h1">
        Comming soon!
      </Text>
    </Flexbox>
  );
};

export default ExploreTemplates;
