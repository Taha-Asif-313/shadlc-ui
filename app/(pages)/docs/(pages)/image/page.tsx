"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { Flexbox, Image, Table } from "shadlc";

const ImageComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];
  const data = [
    {
      prop: "src",
      type: "string",
      default: "undefined",
      description: "The image source URL.",
    },
    {
      prop: "alt",
      type: "string",
      default: '"Image"',
      description: "Alternative text for the image.",
    },
    {
      prop: "width",
      type: "string",
      default: '"100%"',
      description: "Defines the width of the image.",
    },
    {
      prop: "height",
      type: "string",
      default: '"100%"',
      description: "Defines the height of the image.",
    },
    {
      prop: "borderRadius",
      type: "string",
      default: '"8px"',
      description: "Defines the border radius of the image.",
    },
    {
      prop: "borderColor",
      type: "string",
      default: '"transparent"',
      description: "Border color of the image.",
    },
    {
      prop: "borderStyle",
      type: '"solid" | "dashed" | "dotted" | "double" | "none"',
      default: '"solid"',
      description: "Defines the border style.",
    },
    {
      prop: "borderWidth",
      type: "string",
      default: '"0px"',
      description: "Defines the width of the border.",
    },
    {
      prop: "shadow",
      type: "boolean",
      default: "false",
      description: "Applies a default shadow to the image.",
    },
    {
      prop: "boxShadow",
      type: "string",
      default: "undefined",
      description: "Custom shadow style for the image.",
    },
    {
      prop: "opacity",
      type: "number",
      default: "1",
      description: "Opacity level of the image.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional class names for styling.",
    },
    {
      prop: "objectFit",
      type: '"cover" | "contain" | "fill" | "none" | "scale-down"',
      default: '"cover"',
      description: "Specifies how the image should fit inside its container.",
    },
    {
      prop: "overlayText",
      type: "string",
      default: "undefined",
      description: "Text displayed over the image.",
    },
    {
      prop: "overlayColor",
      type: "string",
      default: '"rgba(0, 0, 0, 0.5)"',
      description: "Background color for the overlay text.",
    },
    {
      prop: "svgIcon",
      type: "ReactNode",
      default: "undefined",
      description: "Renders an SVG instead of an image.",
    },
    {
      prop: "responsive",
      type: "boolean",
      default: "true",
      description: "Enables responsive image scaling.",
    },
    {
      prop: "padding",
      type: "string",
      default: "undefined",
      description: "Padding around the image.",
    },
    {
      prop: "margin",
      type: "string",
      default: "undefined",
      description: "Margin around the image.",
    },
    {
      prop: "lazyLoad",
      type: "boolean",
      default: "false",
      description: "Enables lazy loading for the image.",
    },
    {
      prop: "hoverOpacity",
      type: "number",
      default: "undefined",
      description: "Opacity when hovered.",
    },
    {
      prop: "hoverShadow",
      type: "boolean",
      default: "false",
      description: "Applies a shadow on hover.",
    },
    {
      prop: "hoverScale",
      type: "number",
      default: "undefined",
      description: "Scales the image on hover.",
    },
    {
      prop: "hoverRotate",
      type: "number",
      default: "undefined",
      description: "Rotates the image on hover (degrees).",
    },
    {
      prop: "transitionDuration",
      type: "string",
      default: '"0.3s"',
      description: "Defines the transition duration for hover effects.",
    },
    {
      prop: "onClick",
      type: "() => void",
      default: "undefined",
      description: "Click event handler for the image.",
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
        title="Image Component"
        ImportComponent="import { Image } from 'shadlc'"
        description="The <Image /> component is a responsive and optimized React UI component for displaying images. It supports lazy loading, custom styling, aspect ratios, and various formats, ensuring fast and efficient rendering for web applications."
        code={`
  // Usage of component.
  <Image
    src="https://plus.unsplash.com/premium_photo-1667311649552-2cfab63bdcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
    alt="Placeholder"
    objectFit="cover"
    boxShadow="0px 0px 10px white"
    width="300px"
    height="200px"
  />
        `}
      >
        {/* Basic Image */}
        <Image
          src="https://plus.unsplash.com/premium_photo-1667311649552-2cfab63bdcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
          alt="Placeholder"
          objectFit="cover"
          boxShadow="0px 0px 10px white"
          width="300px"
          height="200px"
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

export default ImageComponentDocs;
