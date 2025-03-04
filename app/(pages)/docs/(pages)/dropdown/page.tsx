"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React, { useState } from "react";
import { FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Dropdown, Flexbox, Table } from "shadlc";

const DropdownComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];
  const data = [
    {
      prop: "options",
      type: "Option[]",
      default: "[]",
      description: "Array of options available in the dropdown.",
    },
    {
      prop: "value",
      type: "string",
      default: "undefined",
      description: "Controlled value of the selected option.",
    },
    {
      prop: "defaultValue",
      type: "string",
      default: "undefined",
      description:
        "Default selected value when the dropdown is first rendered.",
    },
    {
      prop: "onChange",
      type: "(value: string) => void",
      default: "undefined",
      description: "Callback function triggered when a new option is selected.",
    },
    {
      prop: "placeholder",
      type: "string",
      default: '"Select an option"',
      description: "Text displayed when no option is selected.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the dropdown when set to true.",
    },
    {
      prop: "borderColor",
      type: "string",
      default: '"border border-gray-300"',
      description: "Defines the border style of the dropdown.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"bg-white"',
      description: "Sets the background color of the dropdown.",
    },
    {
      prop: "textColor",
      type: "string",
      default: '"text-gray-800"',
      description: "Defines the text color inside the dropdown.",
    },
    {
      prop: "hoverColor",
      type: "string",
      default: '"hover:bg-gray-100"',
      description: "Defines the background color when hovering over an option.",
    },
    {
      prop: "padding",
      type: "string",
      default: '"p-3"',
      description: "Sets the padding inside the dropdown button.",
    },
    {
      prop: "margin",
      type: "string",
      default: '"mb-4"',
      description: "Sets the margin of the dropdown component.",
    },
    {
      prop: "dropdownWidth",
      type: "string",
      default: '"w-full"',
      description: "Specifies the width of the dropdown.",
    },
    {
      prop: "dropdownHeight",
      type: "string",
      default: '"max-h-60"',
      description: "Defines the max height of the dropdown list.",
    },
    {
      prop: "borderRadius",
      type: "string",
      default: '"rounded-lg"',
      description: "Sets the border radius for rounded corners.",
    },
    {
      prop: "shadow",
      type: "string",
      default: '"shadow-md"',
      description: "Applies a shadow effect to the dropdown.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Allows additional custom CSS classes.",
    },
    {
      prop: "iconPrefix",
      type: "React.ReactNode",
      default: "undefined",
      description: "Displays an optional icon before the selected option.",
    },
    {
      prop: "iconSuffix",
      type: "React.ReactNode",
      default: "undefined",
      description: "Displays an optional icon after the selected option.",
    },
    {
      prop: "optionPadding",
      type: "string",
      default: '"px-4 py-2"',
      description: "Sets padding inside each dropdown option.",
    },
    {
      prop: "optionGap",
      type: "string",
      default: '"gap-2"',
      description:
        "Defines spacing between elements inside the dropdown button.",
    },
    {
      prop: "openAnimation",
      type: "string",
      default: '"animate-fadeIn"',
      description: "Defines the animation when the dropdown opens.",
    },
    {
      prop: "closeAnimation",
      type: "string",
      default: '"animate-fadeOut"',
      description: "Defines the animation when the dropdown closes.",
    },
  ];

  const [selectedValue, setSelectedValue] = useState<string | undefined>();

  const options = [
    { label: "Profile", value: "profile", icon: <FaUser /> },
    { label: "Settings", value: "settings", icon: <FaCog /> },
    { label: "Logout", value: "logout", icon: <FaSignOutAlt /> },
  ];

  const handleDropdownChange = (value: string) => {
    console.log("Selected:", value);
    setSelectedValue(value);
  };

  return (
    <Flexbox
      height={{ sm: "auto", md: "auto", lg: "auto" }}
      maxWidth={{ sm: "100%", md: "100%", lg: "80%" }}
      padding={{ sm: "100px 30px", md: "100px 20px ", lg: "40px" }}
      backgroundColor="black"
      direction={{ sm: "column", md: "column", lg: "column" }}
      align={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      gap={{ sm: "5px", md: "10px", lg: "10px" }}
      justify={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      className="overflow-y-auto"
    >
      <UIComponentDisplay
        title="Dropdown Component"
        ImportComponent="import { Dropdown } from 'shadlc'"
        description="The <Dropdown /> component is a customizable and interactive React UI element for selecting options from a list. It supports various styles, animations, icons, and user-friendly features like search, multi-select, and keyboard navigation for an enhanced user experience."
        code={`
  // Define state to select value from dropdown.
  const [selectedValue, setSelectedValue] = useState(); // Add types for typescript


  // Define the options of the dropdown you want to add like this.
  const options = [
    { label: "Profile", value: "profile", icon: <FaUser /> },
    { label: "Settings", value: "settings", icon: <FaCog /> },
    { label: "Logout", value: "logout", icon: <FaSignOutAlt /> },
  ];

  // Function to handle the value of dropdown.
  const handleDropdownChange = (value) => { 
    console.log("Selected:", value);
    setSelectedValue(value);
  };

  // Usage of component.
  <Dropdown
    options={options}
    value={selectedValue}
    onChange={handleDropdownChange}
    placeholder="Select an option"
    borderColor="border-0"
    backgroundColor="bg-white "
    textColor="text-black"
    hoverColor="hover:bg-gray-200 text-black"
    padding="p-3"
    dropdownWidth="w-64"
    borderRadius="rounded-md"
    shadow="shadow-lg"
    iconPrefix=""
    optionPadding="px-4 py-2"
    className="!w-[20%] mx-auto"
  />
        `}
      >
        <Dropdown
          options={options}
          value={selectedValue}
          onChange={handleDropdownChange}
          placeholder="Select an option"
          borderColor="border-0"
          backgroundColor="bg-white "
          textColor="text-black"
          hoverColor="hover:bg-gray-200 text-black"
          padding="p-3"
          dropdownWidth="w-64"
          borderRadius="rounded-md"
          shadow="shadow-lg"
          iconPrefix=""
          optionPadding="px-4 py-2"
          className="!w-[20%] mx-auto"
        />
      </UIComponentDisplay>
      <h2 className="text-xl font-bold !my-4">Customization Options</h2>
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

export default DropdownComponentDocs;
