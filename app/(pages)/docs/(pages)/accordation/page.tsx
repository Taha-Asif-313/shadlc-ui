"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { Accordion, Flexbox, Table } from "shadlc";

const AccordationComponentDocs = () => {
  const accordionItems = [
    {
      title: "What is React?",
      content: (
        <p style={{ color: "#000" }}>
          React is a JavaScript library for building user interfaces.
        </p>
      ),
    },
    {
      title: "What is Tailwind CSS?",
      content: (
        <p style={{ color: "#000" }}>
          Tailwind CSS is a utility-first CSS framework.
        </p>
      ),
    },
    {
      title: "What is TypeScript?",
      content: (
        <p style={{ color: "#000" }}>
          TypeScript is a typed superset of JavaScript that compiles to plain
          JavaScript.
        </p>
      ),
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
      prop: "items",
      type: "AccordionItem[]",
      default: "[]",
      description: "Array of accordion items with title and content.",
    },
    {
      prop: "allowMultiple",
      type: "boolean",
      default: "false",
      description: "Allow multiple items to be open at the same time.",
    },
    {
      prop: "defaultOpenIndex",
      type: "number[]",
      default: "[]",
      description: "Indexes of items that should be open by default.",
    },
    {
      prop: "borderColor",
      type: "string",
      default: '"border-gray-300"',
      description: "Border color of the accordion items.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"bg-white"',
      description: "Background color of the accordion items.",
    },
    {
      prop: "textColor",
      type: "string",
      default: '"text-gray-900"',
      description: "Text color of the accordion items.",
    },
    {
      prop: "hoverColor",
      type: "string",
      default: '"hover:bg-gray-100"',
      description: "Background color on hover.",
    },
    {
      prop: "padding",
      type: "string",
      default: '"p-4"',
      description: "Padding for the accordion header.",
    },
    {
      prop: "margin",
      type: "string",
      default: '"mb-3"',
      description: "Margin between accordion items.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional class names for custom styling.",
    },
    {
      prop: "iconOpen",
      type: "React.ReactNode",
      default: '"−"',
      description: "Icon displayed when the item is open.",
    },
    {
      prop: "iconClose",
      type: "React.ReactNode",
      default: '"+"',
      description: "Icon displayed when the item is closed.",
    },
    {
      prop: "transitionDuration",
      type: "string",
      default: '"duration-300"',
      description: "Duration of the open/close transition.",
    },
    {
      prop: "borderRadius",
      type: "string",
      default: '"rounded-md"',
      description: "Border radius of the accordion items.",
    },
    {
      prop: "shadow",
      type: "string",
      default: '"shadow-md"',
      description: "Box shadow for accordion items.",
    },
    {
      prop: "contentPadding",
      type: "string",
      default: '"p-4"',
      description: "Padding for the accordion content.",
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
        title="Accordion Component"
        ImportComponent="import { Accordion } from 'shadlc'"
        description=" The <Accordion /> component is a dynamic and customizable React UI element for organizing content in collapsible sections. It supports multiple panels, animations, and various styling options for an enhanced user experience."
        code={`
  // Define accordation items you want to add in accordation like this.
  const accordionItems = [
    {
      title: "What is React?",
      content: (
        <p style={{ color: "#000" }}>
          React is a JavaScript library for building user interfaces.
        </p>
      ),
    },
    {
      title: "What is Tailwind CSS?",
      content: (
        <p style={{ color: "#000" }}>
          Tailwind CSS is a utility-first CSS framework.
        </p>
      ),
    },
    {
      title: "What is TypeScript?",
      content: (
        <p style={{ color: "#000" }}>
          TypeScript is a typed superset of JavaScript that compiles to plain
          JavaScript.
        </p>
      ),
    },
  ];

  // Usage of component.
  <Accordion items={accordionItems} allowMultiple={true} />
                  `}
      >
        <h1 className="text-2xl font-bold text-center !my-4">FAQ</h1>
        <Accordion items={accordionItems} allowMultiple={true} />
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

export default AccordationComponentDocs;
