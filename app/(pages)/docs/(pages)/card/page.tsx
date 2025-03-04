"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { Card, Flexbox, Table } from "shadlc";

const CardComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];
  const data = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Content inside the card.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Custom CSS classes for the card container.",
    },
    {
      prop: "contentClassName",
      type: "string",
      default: '""',
      description: "Custom CSS classes for the content wrapper.",
    },
    {
      prop: "background",
      type: "string",
      default: '"#f0f0f0"',
      description: "Background color of the card.",
    },
    {
      prop: "textColor",
      type: "string",
      default: '"#333"',
      description: "Text color for the card.",
    },
    {
      prop: "borderRadius",
      type: "string",
      default: '"8px"',
      description: "Border radius for the card.",
    },
    {
      prop: "padding",
      type: "string",
      default: '"16px"',
      description: "Padding inside the card.",
    },
    {
      prop: "shadow",
      type: "string",
      default: '"0px 4px 6px rgba(0, 0, 0, 0.1)"',
      description: "Box shadow styling for the card.",
    },
    {
      prop: "imageSrc",
      type: "string",
      default: "undefined",
      description: "Image URL for the card.",
    },
    {
      prop: "imageAlt",
      type: "string",
      default: '"Card Image"',
      description: "Alt text for the image.",
    },
    {
      prop: "imageWidth",
      type: "string",
      default: '"100%"',
      description: "Width of the image.",
    },
    {
      prop: "imageHeight",
      type: "string",
      default: '"200px"',
      description: "Height of the image.",
    },
    {
      prop: "svgIcon",
      type: "React.ReactNode",
      default: "undefined",
      description: "SVG icon to display instead of an image.",
    },
    {
      prop: "useSvgInsteadOfImage",
      type: "boolean",
      default: "false",
      description: "If true, displays an SVG instead of an image.",
    },
    {
      prop: "title",
      type: "string",
      default: "undefined",
      description: "Title text for the card.",
    },
    {
      prop: "subtitle",
      type: "string",
      default: "undefined",
      description: "Subtitle text for the card.",
    },
    {
      prop: "buttonText",
      type: "string",
      default: "undefined",
      description: "Text for the button inside the card.",
    },
    {
      prop: "buttonOnClick",
      type: "() => void",
      default: "undefined",
      description: "Click event handler for the button.",
    },
    {
      prop: "buttonClassName",
      type: "string",
      default: '""',
      description: "Custom CSS classes for the button.",
    },
    {
      prop: "buttonIcon",
      type: "React.ReactNode",
      default: "undefined",
      description: "Icon to display inside the button.",
    },
    {
      prop: "margin",
      type: "string",
      default: "undefined",
      description: "Margin styling for the card.",
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
        title="Card Component"
        ImportComponent="import { Card } from 'shadlc'"
        description="The <Card /> component is a flexible and stylish React UI element for displaying content in a structured format. It supports images, text, buttons, and customizable styles, making it ideal for showcasing information in a visually appealing way."
        code={`
  // Usage of component.
  <Card
    title="Card Title"
    subtitle="This is a sample card subtitle."
    imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&s"
    imageAlt="Placeholder Image"
    buttonText="Click Me"
    buttonOnClick={() => alert("Button Clicked!")}
    background="white"
    textColor="black"
    borderRadius="12px"
    shadow="0px 5px 10px rgba(0,0,0,0.15)"
    padding="20px"
    className="w-80 mx-auto"
    buttonClassName="mt-2"
  />
                  `}
      >
        <Card
          title="Card Title"
          subtitle="This is a sample card subtitle."
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&s"
          imageAlt="Placeholder Image"
          buttonText="Click Me"
          buttonOnClick={() => alert("Button Clicked!")}
          background="white"
          textColor="black"
          borderRadius="12px"
          shadow="0px 5px 10px rgba(0,0,0,0.15)"
          padding="20px"
          className="w-80 mx-auto"
          buttonClassName="mt-2"
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

export default CardComponentDocs;
