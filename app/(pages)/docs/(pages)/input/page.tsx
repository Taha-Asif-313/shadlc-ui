"use client";

import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { FaCheck, FaLock, FaUser } from "react-icons/fa";
import { Flexbox, Input, Table } from "shadlc";

const InputComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];
  const data = [
    {
      prop: "type",
      type: '"text" | "password" | "email" | "number" | "search" | "tel" | "url"',
      default: '"text"',
      description: "Defines the input type.",
    },
    {
      prop: "placeholder",
      type: "string",
      default: '""',
      description: "Input placeholder text.",
    },
    {
      prop: "label",
      type: "string",
      default: "undefined",
      description: "Label text for the input field.",
    },
    {
      prop: "value",
      type: "string",
      default: "undefined",
      description: "Controlled input value.",
    },
    {
      prop: "defaultValue",
      type: "string",
      default: "undefined",
      description: "Initial default value of the input.",
    },
    {
      prop: "onChange",
      type: "(value: string) => void",
      default: "undefined",
      description: "Callback when input value changes.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the input field.",
    },
    {
      prop: "readOnly",
      type: "boolean",
      default: "false",
      description: "Makes the input read-only.",
    },
    {
      prop: "required",
      type: "boolean",
      default: "false",
      description: "Marks the input as required.",
    },
    {
      prop: "error",
      type: "string",
      default: "undefined",
      description: "Displays an error message.",
    },
    {
      prop: "success",
      type: "boolean",
      default: "false",
      description: "Indicates successful input validation.",
    },
    {
      prop: "autoFocus",
      type: "boolean",
      default: "false",
      description: "Automatically focuses the input.",
    },
    {
      prop: "clearable",
      type: "boolean",
      default: "false",
      description: "Allows clearing the input value.",
    },
    {
      prop: "iconLeft",
      type: "ReactNode",
      default: "undefined",
      description: "Adds an icon to the left side of the input.",
    },
    {
      prop: "iconRight",
      type: "ReactNode",
      default: "undefined",
      description: "Adds an icon to the right side of the input.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional class names for styling.",
    },
    {
      prop: "borderColor",
      type: "string",
      default: '"#ccc"',
      description: "Border color of the input.",
    },
    {
      prop: "focusBorderColor",
      type: "string",
      default: '"#007bff"',
      description: "Border color on focus.",
    },
    {
      prop: "hoverBorderColor",
      type: "string",
      default: '"#666"',
      description: "Border color on hover.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"#fff"',
      description: "Background color of the input.",
    },
    {
      prop: "textColor",
      type: "string",
      default: '"#000"',
      description: "Text color of the input.",
    },
    {
      prop: "errorColor",
      type: "string",
      default: '"#e53e3e"',
      description: "Color of the error message.",
    },
    {
      prop: "successColor",
      type: "string",
      default: '"#38a169"',
      description: "Color indicating success.",
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
        title="Input Component"
        description="The <Input /> component is a highly customizable React UI component for capturing user input. It supports various types, sizes, validation states, icons, and custom styles to enhance form usability and accessibility."
        code={`
  // Usage of component.
  <Input
    iconLeft={<Icon you want />}
    textColor="white"
    backgroundColor="transparent"
    placeholder="Enter usernmae"
  />
        `}
      >
        {/* Default Input */}
        <Input
          iconLeft={<FaUser />}
          textColor="white"
          backgroundColor="transparent"
          placeholder="Enter usernmae"
        />
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

export default InputComponentDocs;
