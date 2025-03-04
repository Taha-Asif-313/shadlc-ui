"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { Flexbox, Table } from "shadlc";

const FlexboxComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];
  const data = [
    {
      prop: "direction",
      type: "ResponsiveProps<'row' | 'column'>",
      default: "{ sm: 'column', md: 'row', lg: 'row' }",
      description: "Flex direction for different screen sizes.",
    },
    {
      prop: "align",
      type: "ResponsiveProps<'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'>",
      default: "{ sm: 'center', md: 'center', lg: 'center' }",
      description: "Alignment of flex items.",
    },
    {
      prop: "justify",
      type: "ResponsiveProps<'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>",
      default: "{ sm: 'center', md: 'space-between', lg: 'space-around' }",
      description: "Justification of flex items.",
    },
    {
      prop: "gap",
      type: "ResponsiveProps<string>",
      default: "{ sm: '10px', md: '20px', lg: '30px' }",
      description: "Spacing between flex items.",
    },
    {
      prop: "padding",
      type: "ResponsiveProps<string>",
      default: "{ sm: '10px', md: '20px', lg: '40px' }",
      description: "Padding around the flex container.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"#f4f4f4"',
      description: "Background color of the flex container.",
    },
    {
      prop: "width",
      type: "ResponsiveProps<string>",
      default: "{ sm: '100%', md: '100%', lg: '100%' }",
      description: "Width of the flex container.",
    },
    {
      prop: "maxWidth",
      type: "ResponsiveProps<string>",
      default: "{ sm: '100%', md: '100%', lg: '100%' }",
      description: "Maximum width of the flex container.",
    },
    {
      prop: "height",
      type: "ResponsiveProps<string>",
      default: "{ sm: 'auto', md: 'auto', lg: 'auto' }",
      description: "Height of the flex container.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Custom CSS class for styling.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Content inside the flex container.",
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
        title="Flexbox Component"
        ImportComponent="import { Flexbox } from 'shadlc'"
        description="The <Flexbox /> component is a powerful and responsive React UI component for creating flexible and adaptive layouts. It simplifies alignment, spacing, and positioning using CSS Flexbox properties, making it ideal for building modern, responsive designs."
        code={`
    // Usage of component.
    <Flexbox
      direction={{ sm:"column", md: "column", lg: "column" }}
      align={{ sm: "flex-start", md: "flex-start", lg: "center" }}
      justify={{
        sm: "flex-start",
        md: "space-between",
        lg: "space-around",
      }}
      gap={{ sm: "10px", md: "20px", lg: "30px" }}
      padding={{ sm: "100px 20px", md: "100px 20px", lg: "40px" }}
      backgroundColor="lightgray"
      width={{ sm: "100%", md: "100%", lg: "100%" }}
      height={{ sm: "auto", md: "auto", lg: "auto" }}
      className="rounded-md shadow-md p-4"
    >
      <div className="p-4 bg-blue-300">Item 1</div>
      <div className="p-4 bg-red-300">Item 2</div>
      <div className="p-4 bg-green-300">Item 3</div>
    </Flexbox>
        `}
      >
        <Flexbox
          direction={{ md: "column", lg: "column" }}
          align={{ sm: "flex-start", md: "flex-start", lg: "center" }}
          justify={{
            sm: "flex-start",
            md: "space-between",
            lg: "space-around",
          }}
          gap={{ sm: "10px", md: "20px", lg: "30px" }}
          padding={{ sm: "100px 20px", md: "100px 20px", lg: "40px" }}
          backgroundColor="lightgray"
          width={{ sm: "100%", md: "100%", lg: "100%" }}
          height={{ sm: "auto", md: "auto", lg: "auto" }}
          className="rounded-md shadow-md p-4"
        >
          <div className="p-4 bg-blue-300">Item 1</div>
          <div className="p-4 bg-red-300">Item 2</div>
          <div className="p-4 bg-green-300">Item 3</div>
        </Flexbox>
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

export default FlexboxComponentDocs;
