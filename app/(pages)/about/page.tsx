"use client";

import Navbar from "@/app/components/Navbar";
import { Flexbox } from "shadlc";

const AboutShadlc = () => {
  return (
    <>
      <Navbar />
      <Flexbox
        height={{ sm: "auto", md: "auto", lg: "auto" }}
        padding={{ sm: "80px 25px", md: "100px 20px", lg: "100px 40px" }}
        backgroundColor="#000"
        direction={{ sm: "column", md: "column", lg: "column" }}
        align={{ sm: "flex-start", md: "center", lg: "flex-start" }}
        gap={{ sm: "5px", md: "10px", lg: "10px" }}
        justify={{ sm: "center", md: "center", lg: "center" }}
      >
        {/* Prevent Hydration Error on Image */}

        <>
          <h2 className="text-2xl font-semibold">
            Shadlc a Modern UI Library for Developers
          </h2>
          <p>
            Shadlc is a cutting-edge UI component library designed to help
            developers build beautiful, accessible, and highly customizable
            interfaces with ease. Built with performance and scalability in
            mind, Shadlc provides a seamless development experience for both
            beginners and advanced developers.
          </p>

          <h2 className="text-2xl font-semibold">Why Choose Shadlc?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Elegant Components</strong> – Pre-designed, reusable UI
              components that follow modern design principles.
            </li>
            <li>
              <strong>Fully Customizable</strong> – Easily tailor components to
              match your brand and project needs.
            </li>
            <li>
              <strong>Developer-Friendly</strong> – Built with clean and modular
              code, ensuring flexibility and ease of use.
            </li>
            <li>
              <strong>Optimized for Performance</strong> – Lightweight and
              fast-loading components that enhance user experience.
            </li>
            <li>
              <strong>Seamless Integration</strong> – Works effortlessly with
              popular frontend frameworks and tools.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            At Shadlc, we aim to empower developers by providing a powerful UI
            library that speeds up development time without compromising on
            design or functionality. Our goal is to simplify UI development
            while maintaining high-quality standards in accessibility and
            responsiveness.
          </p>

          <h2 className="text-2xl font-semibold">Get Started</h2>
          <p>
            Explore our documentation and start building stunning UIs today!
            Visit our
            <a
              href="https://shadlc.vercel.app/docs"
              className="text-blue-500 underline"
            >
              {" "}
              Documentation
            </a>{" "}
            to learn more about how to integrate Shadlc into your projects.
          </p>

          <hr className="my-6" />
          <p>
            Have questions or feedback? Contact us or contribute to our
            open-source community on GitHub!
          </p>
        </>
      </Flexbox>
      <div className="max-w-3xl mx-auto p-6 space-y-6"></div>
    </>
  );
};

export default AboutShadlc;
