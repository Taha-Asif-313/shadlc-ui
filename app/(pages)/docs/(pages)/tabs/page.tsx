"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { FiHome, FiSettings, FiUser } from "react-icons/fi";
import { Flexbox, Table, Tabs } from "shadlc";

const TabsComponentDocs = () => {
  const tabData = [
    { label: "Home", content: <p>Welcome to Home</p>, icon: <FiHome /> },
    {
      label: "Profile",
      content: <p>Your Profile Details</p>,
      icon: <FiUser />,
    },
    {
      label: "Settings",
      content: <p>Adjust your settings here</p>,
      icon: <FiSettings />,
    },
  ];
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];

  const data = [
    {
      prop: "tabs",
      type: "TabItem[]",
      default: "[]",
      description:
        "Array of tabs, each containing a label, content, and optional icon.",
    },
    {
      prop: "defaultActive",
      type: "number",
      default: "0",
      description: "Index of the tab that is active by default.",
    },
    {
      prop: "tabPosition",
      type: '"top" | "left" | "right"',
      default: '"top"',
      description:
        "Defines the position of the tabs (horizontal or vertical layout).",
    },
    {
      prop: "activeTabClass",
      type: "string",
      default: '"bg-blue-500 text-white"',
      description: "CSS classes for the active tab styling.",
    },
    {
      prop: "inactiveTabClass",
      type: "string",
      default: '"bg-gray-200 text-gray-700"',
      description: "CSS classes for inactive tabs styling.",
    },
    {
      prop: "tabContainerClass",
      type: "string",
      default: '""',
      description: "Additional CSS classes for the tab container.",
    },
    {
      prop: "contentContainerClass",
      type: "string",
      default: '"p-4"',
      description: "CSS classes for the content container styling.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional class names for the root container.",
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
        title="Tabs Component"
        ImportComponent="import { Tabs } from 'shadlc'"
        description="The <Tabs /> component is a customizable React UI component for organizing content into multiple tabbed sections. It supports dynamic content, vertical and horizontal layouts, animation effects, and full accessibility support."
        code={`
  // Define tabsData like this label is the tab name and content is any component you want to display.
  const tabData = [
    { label: "Home", content: <p>Welcome to Home</p>, icon: <FiHome /> },
    {
      label: "Profile",
      content: <p>Your Profile Details</p>,
      icon: <FiUser />,
    },
    {
      label: "Settings",
      content: <p>Adjust your settings here</p>,
      icon: <FiSettings />,
    },
  ];

  // Usage of tabs component
  <Tabs
   tabs={tabData}
   activeTabClass="bg-green-500 text-white"
   inactiveTabClass="bg-gray-300 text-black"
   tabContainerClass="border border-gray-400 mx-auto rounded mb-2"
   contentContainerClass="p-6 bg-gray-100 text-black rounded"
  />
                  `}
      >
        <Tabs
          tabs={tabData}
          activeTabClass="bg-green-500 text-white"
          inactiveTabClass="bg-gray-300 text-black"
          tabContainerClass="border border-gray-400 mx-auto rounded mb-2"
          contentContainerClass="p-6 bg-gray-100 text-black rounded"
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

export default TabsComponentDocs;
