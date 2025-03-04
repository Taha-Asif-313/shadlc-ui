import React, { useState } from "react";
import {
  AiOutlineDesktop,
  AiOutlineTablet,
  AiOutlineMobile,
  AiOutlineCode,
} from "react-icons/ai";
import { CodeClipboard } from "shadlc";

interface UIComponentProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
}

const UIComponentDisplay: React.FC<UIComponentProps> = ({
  title,
  description,
  children,
  code,
}) => {
  const [activeTab, setActiveTab] = useState("desktop");

  // Define styles for different screen sizes
  const getPreviewWidth = () => {
    switch (activeTab) {
      case "desktop":
        return "w-full"; // Full width
      case "tablet":
        return "w-[768px] max-w-full"; // Tablet size
      case "mobile":
        return "w-[375px] max-w-full"; // Mobile size
      default:
        return "w-full";
    }
  };

  return (
    <div className="w-full rounded-lg shadow-md bg-black">
      <div className="flex max-lg:flex-col w-full items-start gap-6 justify-between">
        <div>
          {/* Title & Description */}
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-sm !mt-5 text-gray-300">{description}</p>
        </div>
        {/* Tabs */}
        <div className="flex gap-3 mt-3 pb-2">
          <button
            className={`p-2 rounded-md ${
              activeTab === "desktop" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("desktop")}
          >
            <AiOutlineDesktop size={20} />
          </button>
          <button
            className={`p-2 rounded-md ${
              activeTab === "tablet" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("tablet")}
          >
            <AiOutlineTablet size={20} />
          </button>
          <button
            className={`p-2 rounded-md ${
              activeTab === "mobile" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("mobile")}
          >
            <AiOutlineMobile size={20} />
          </button>
          <button
            className={`p-2 rounded-md ${
              activeTab === "code" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("code")}
          >
            <AiOutlineCode size={20} />
          </button>
        </div>
      </div>

      {/* Display Content Based on Tab Selection */}
      <div className="mt-3 py-4 px-2 rounded-md bg-gray-800 flex justify-center">
        {activeTab !== "code" ? (
          <div
            className={`p-4 bg-black rounded shadow-md mx-auto ${getPreviewWidth()}`}
          >
            {children}
          </div>
        ) : (
          <CodeClipboard code={code} />
        )}
      </div>
    </div>
  );
};

export default UIComponentDisplay;
