"use client";
import React from "react";
import { CodeClipboard, Flexbox, Text } from "shadlc";

const GetStarted = () => {
  return (
    <Flexbox
      height={{ sm: "auto", md: "auto", lg: "auto" }}
      maxWidth={{ sm: "100%", md: "100%", lg: "80%" }}
      padding={{ sm: "0 30px", md: "20px", lg: "40px" }}
      backgroundColor="black"
      direction={{ sm: "column", md: "column", lg: "column" }}
      align={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      gap={{ sm: "5px", md: "10px", lg: "10px" }}
      justify={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      className="custom-scroll"
    >
      {/* Title */}
      <Text fontSize="30px" fontWeight={600} color="white" as="h1">
        Get Started with Shadlc - The Best React UI Component Library
      </Text>

      {/* Introduction */}
      <Text fontSize="16px" lineHeight="22px" color="white" as="p">
        Shadlc is an <strong>open-source</strong> UI components library built
        with <strong>React</strong> and <strong>Tailwind CSS</strong>. It
        simplifies modern web development by providing reusable, customizable,
        and lightweight components for Material Design, mobile{" "}
        <strong>UI components</strong>, and responsive design.
      </Text>

      {/* Installation Guide */}
      <Text
        className="mt-2"
        fontSize="30px"
        fontWeight={600}
        color="white"
        as="h2"
      >
        Installation Guide
      </Text>

      {/* Step 1: Install shadlc */}
      <Text
        className="mt-2"
        fontSize="20px"
        fontWeight={600}
        color="white"
        as="h3"
      >
        1. Install shadlc NPM Package
      </Text>
      <CodeClipboard
        code="npm i shadlc"
        language="javascript"
        className="w-full my-4 animate-fade-in py-4 !bg-[#010e03d0] border border-green-500 text-green-400 "
      />

      {/* Step 2: Configure Tailwind */}
      <Text
        className="mt-2"
        fontSize="20px"
        
        fontWeight={600}
        color="white"
        as="h3"
      >
        2. Configure Tailwind CSS for shadlc
      </Text>
      <CodeClipboard
        code={`npm install tailwindcss postcss autoprefixer\nnpx tailwindcss init`}
        language="javascript"
        className="w-full animate-fade-in py-4 my-4 !bg-[#010e03d0] border border-green-500 text-green-400 "
      />

      {/* Tailwind Config Instructions */}
      <Text
        className="mt-2"
        fontSize="15px"
        lineHeight="18px"
        color="white"
        as="p"
      >
        Next, configure your <code>tailwind.config.js</code> to include the
        shadlc library styles for full compatibility:
      </Text>
      <CodeClipboard
        code={`module.exports = {
  content: [
    "./node_modules/shadlc/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
        language="javascript"
        className="w-full my-4 animate-fade-in py-4 !bg-[#010e03d0] border border-green-500 text-green-400 "
      />

      {/* Step 3: Import shadlc Styles */}
      <Text
        className="mt-2"
        fontSize="20px"
        fontWeight={600}
        color="white"
        as="h3"
      >
        3. Import shadlc Styles in React
      </Text>
      <Text fontSize="15px" color="white" as="p">
        After installing the package, import the styles in your main entry file
        to ensure proper <strong>UI styling</strong>:
      </Text>
      <CodeClipboard
        code={`import "shadlc/style.css";`}
        language="javascript"
        className="w-full my-4 animate-fade-in py-4 !bg-[#010e03d0] border border-green-500 text-green-400 "
      />

      {/* Using in Next.js */}
      <Text
        className="mt-2"
        fontSize="20px"
        fontWeight={600}
        color="white"
        as="h3"
      >
        Using shadlc with Next.js
      </Text>
      <CodeClipboard
        code={`"use client";`}
        language="javascript"
        className="w-full my-4 animate-fade-in py-4 !bg-[#010e03d0] border border-green-500 text-green-400 "
      />

      {/* Why Choose Shadlc */}
      <Text className="mt-4" fontSize="20px" fontWeight={600} color="white">
        Why Choose Shadlc for React and Tailwind Integration?
      </Text>
      <Text fontSize="15px" lineHeight="20ox" color="white">
        Shadlc is one of the best frontend development tools available today.
        Its powerful React and Tailwind integration enables seamless UI
        development with Material Design principles. As a JavaScript UI
        framework, it provides responsive design and mobile UI components,
        making it ideal for modern web development.
      </Text>
    </Flexbox>
  );
};

export default GetStarted;
