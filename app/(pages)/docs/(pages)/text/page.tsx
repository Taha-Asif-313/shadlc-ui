"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { Flexbox, Table, Text } from "shadlc";

const TextComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];

  const data = [
    {
      prop: "as",
      type: "keyof JSX.IntrinsicElements",
      default: '"p"',
      description: "The HTML tag to render (e.g., h1, span, div)",
    },
    {
      prop: "color",
      type: "string",
      default: '"#333"',
      description: "Text color",
    },
    {
      prop: "fontSize",
      type: "string",
      default: '"16px"',
      description: "Font size of the text",
    },
    {
      prop: "fontWeight",
      type: "string | number",
      default: '"normal"',
      description: "Font weight (bold, lighter, etc.)",
    },
    {
      prop: "textAlign",
      type: '"left" | "center" | "right" | "justify"',
      default: '"left"',
      description: "Text alignment",
    },
    {
      prop: "textTransform",
      type: '"uppercase" | "lowercase" | "capitalize" | "none"',
      default: '"none"',
      description: "Transform text case",
    },
    {
      prop: "letterSpacing",
      type: "string",
      default: '"normal"',
      description: "Spacing between letters",
    },
    {
      prop: "lineHeight",
      type: "string",
      default: '"normal"',
      description: "Line height of text",
    },
    {
      prop: "underline",
      type: "boolean",
      default: "false",
      description: "Underline the text",
    },
    {
      prop: "italic",
      type: "boolean",
      default: "false",
      description: "Italicize the text",
    },
    {
      prop: "bold",
      type: "boolean",
      default: "false",
      description: "Make the text bold",
    },
    {
      prop: "strikethrough",
      type: "boolean",
      default: "false",
      description: "Apply strikethrough to text",
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
        title="Text Component"
        ImportComponent="import { Text } from 'shadlc'"
        description="The <Text /> component is a versatile React UI component for displaying styled text. It supports typography customization, font sizes, colors, alignment, and responsive adjustments for seamless integration into any design."
        code={`
  // Usage of component.
  <Text
    as="p"
    fontSize="18px"
    color="white"
    textAlign="center"
    lineHeight="1.6"
  >
    This is a fully customizable text component. You can modify font size,
    color, alignment, and more.
  </Text>
        `}
      >
        {/* Paragraph */}
        <Text
          as="p"
          fontSize="18px"
          color="white"
          textAlign="center"
          lineHeight="1.6"
        >
          This is a fully customizable text component. You can modify font size,
          color, alignment, and more.
        </Text>
      </UIComponentDisplay>
      <h2 className="text-xl font-bold mb-4 mt-6">Customization Options</h2>
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

export default TextComponentDocs;
