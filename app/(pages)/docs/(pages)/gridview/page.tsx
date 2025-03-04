"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { Flexbox, GridView, Table } from "shadlc";

const GridViewComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];
  const data = [
    {
      prop: "width",
      type: "ResponsiveProps<string>",
      default: "{ sm: '100%', md: '90%', lg: '80%' }",
      description: "Defines the width of the container per screen size.",
    },
    {
      prop: "maxWidth",
      type: "ResponsiveProps<string>",
      default: "{ sm: '100%', md: '800px', lg: '1200px' }",
      description: "Sets the max-width for different screen sizes.",
    },
    {
      prop: "height",
      type: "ResponsiveProps<string>",
      default: "{ sm: 'auto', md: 'auto', lg: 'auto' }",
      description: "Determines the height of the container.",
    },
    {
      prop: "padding",
      type: "ResponsiveProps<string>",
      default: "{ sm: '10px', md: '20px', lg: '40px' }",
      description: "Sets padding based on screen size.",
    },
    {
      prop: "margin",
      type: "ResponsiveProps<string>",
      default: "{ sm: '0 auto', md: '0 auto', lg: '0 auto' }",
      description: "Controls margin settings for the container.",
    },
    {
      prop: "textAlign",
      type: "ResponsiveProps<'left' | 'center' | 'right'>",
      default: "{ sm: 'left', md: 'center', lg: 'center' }",
      description: "Aligns text within the container.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"#ffffff"',
      description: "Background color of the container.",
    },
    {
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional custom CSS class for styling.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Content inside the container.",
    },
  ];

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
        title="GridView Component"
        ImportComponent="import { GridView } from 'shadlc'"
        description="The <GridView /> component is a versatile and responsive React UI component for creating structured layouts using CSS Grid. It allows precise control over columns, rows, spacing, and responsiveness, making it perfect for building modern grid-based designs."
        code={`
  // Usage of component.
  <GridView
    columns={{ sm: 1, md: 2, lg: 3 }}
    gap={{ sm: "10px", md: "20px", lg: "30px" }}
    padding={{ sm: "10px", md: "20px", lg: "40px" }}
    alignItems={{ sm: "stretch", md: "center", lg: "center" }}
    justifyItems={{ sm: "stretch", md: "center", lg: "center" }}
    backgroundColor="lightgray"
    width={{ sm: "100%", md: "100%", lg: "100%" }}
    height={{ sm: "auto", md: "auto", lg: "auto" }}
    className="rounded-md shadow-md p-4"
  >
    <div className="p-4 bg-blue-300">Item 1</div>
    <div className="p-4 bg-red-300">Item 2</div>
    <div className="p-4 bg-green-300">Item 3</div>
    <div className="p-4 bg-yellow-300">Item 4</div>
  </GridView>
        `}
      >
        <GridView
          columns={{ lg: 3, md: 2, sm: 1 }}
          gap={{ sm: "10px", md: "20px", lg: "30px" }}
          padding={{ sm: "10px", md: "20px", lg: "40px" }}
          alignItems={{ sm: "stretch", md: "center", lg: "center" }}
          justifyItems={{ sm: "stretch", md: "center", lg: "center" }}
          backgroundColor="lightgray"
          width={{ sm: "100%", md: "100%", lg: "100%" }}
          height={{ sm: "auto", md: "auto", lg: "auto" }}
          className="rounded-md shadow-md p-4"
        >
          <div className="p-4 bg-blue-300">Item 1</div>
          <div className="p-4 bg-red-300">Item 2</div>
          <div className="p-4 bg-green-300">Item 3</div>
          <div className="p-4 bg-yellow-300">Item 4</div>
        </GridView>
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

export default GridViewComponentDocs;
