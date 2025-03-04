"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { FaArrowRight, FaCheck, FaUser } from "react-icons/fa";
import { Button, CodeClipboard, Flexbox, Table, Text } from "shadlc";

const ButtonComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];

  const data = [
    {
      prop: "variant",
      type: "string",
      default: '"primary"',
      description:
        "Defines button style: primary, secondary, outline, or link.",
    },
    {
      prop: "size",
      type: "string",
      default: '"md"',
      description: "Defines size: sm, md, lg.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: "undefined",
      description: "Custom background color.",
    },
    {
      prop: "textColor",
      type: "string",
      default: "undefined",
      description: "Custom text color.",
    },
    {
      prop: "borderColor",
      type: "string",
      default: "undefined",
      description: "Custom border color.",
    },
    {
      prop: "fullWidth",
      type: "boolean",
      default: "false",
      description: "Expands button to full width.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables button interactions.",
    },
    {
      prop: "loading",
      type: "boolean",
      default: "false",
      description: "Displays loading spinner.",
    },
    {
      prop: "iconBefore",
      type: "ReactNode",
      default: "undefined",
      description: "Adds an icon before the text.",
    },
    {
      prop: "iconAfter",
      type: "ReactNode",
      default: "undefined",
      description: "Adds an icon after the text.",
    },
  ];
  return (
    <Flexbox
      height={{ sm: "auto", md: "auto", lg: "auto" }}
      maxWidth={{ sm: "100%", md: "100%", lg: "80%" }}
      padding={{ sm: "100px 30px", md: "100px 20px", lg: "40px" }}
      backgroundColor="black"
      direction={{ sm: "column", md: "column", lg: "column" }}
      align={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      gap={{ sm: "5px", md: "10px", lg: "10px" }}
      justify={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      className="overflow-y-auto"
    >
      <UIComponentDisplay
        title="Button Component"
        description="The <Button /> component is a versatile and customizable React UI element for user interactions. It supports various styles, sizes, icons, and states like loading and disabled, making it perfect for modern web applications."
        code={`
  // Usage of component.
  <Button
    backgroundColor="black"
    borderColor="white"
    onClick={() => alert("Clicked!")}
    size="sm"
    className="!px-10"
    >
    Click Me
  </Button>
                  `}
      >
        {/* Primary Button */}
        <Button
          backgroundColor="black"
          borderColor="white"
          onClick={() => alert("Clicked!")}
          size="sm"
          className="!px-10"
        >
          Click Me
        </Button>
      </UIComponentDisplay>
      <h2 className="text-xl font-bold my-4">Customization Options</h2>
      <Table
        colors={{
          headerBg: "bg-green-900",
          rowBg: "bg-zinc-950",
          borderColor: "border-transparent",
        }}
        columns={columns}
        data={data}
        rowsPerPage={12}
        pagination={false}
      />
    </Flexbox>
  );
};

export default ButtonComponentDocs;
