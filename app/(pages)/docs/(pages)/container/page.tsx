"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { Container, Flexbox, Table } from "shadlc";

const ContainerComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];
  const data = [
    {
      prop: "columns",
      type: "ResponsiveProps<number>",
      default: "{ sm: 1, md: 2, lg: 3 }",
      description: "Number of columns for different screen sizes.",
    },
    {
      prop: "gap",
      type: "ResponsiveProps<string>",
      default: "{ sm: '10px', md: '20px', lg: '30px' }",
      description: "Gap between grid items.",
    },
    {
      prop: "padding",
      type: "ResponsiveProps<string>",
      default: "{ sm: '10px', md: '20px', lg: '40px' }",
      description: "Padding around the grid container.",
    },
    {
      prop: "alignItems",
      type: "ResponsiveProps<'start' | 'center' | 'end' | 'stretch'>",
      default: "{ sm: 'stretch', md: 'center', lg: 'center' }",
      description: "Align items vertically inside grid.",
    },
    {
      prop: "justifyItems",
      type: "ResponsiveProps<'start' | 'center' | 'end' | 'stretch'>",
      default: "{ sm: 'stretch', md: 'center', lg: 'center' }",
      description: "Justify items horizontally inside grid.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"#f4f4f4"',
      description: "Background color of the grid container.",
    },
    {
      prop: "width",
      type: "ResponsiveProps<string>",
      default: "{ sm: '100%', md: '100%', lg: '100%' }",
      description: "Width of the grid container.",
    },
    {
      prop: "maxWidth",
      type: "ResponsiveProps<string>",
      default: "{ sm: '100%', md: '100%', lg: '100%' }",
      description: "Maximum width of the grid container.",
    },
    {
      prop: "height",
      type: "ResponsiveProps<string>",
      default: "{ sm: 'auto', md: 'auto', lg: 'auto' }",
      description: "Height of the grid container.",
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
      description: "Content inside the grid container.",
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
        title="Container Component"
        ImportComponent="import { Container } from 'shadlc'"
        description="The <Container /> component is a versatile and responsive layout wrapper in React that helps structure content within defined width constraints. It supports customizable width, padding, margin, and background styles, ensuring a consistent and adaptive UI across different screen sizes."
        code={`
  // Usage of component.
  <Container
    width={{ sm: "100%", md: "90%", lg: "80%" }}
    maxWidth={{ sm: "100%", md: "800px", lg: "1200px" }}
    height={{ sm: "auto", md: "500px", lg: "600px" }}
    padding={{ sm: "10px", md: "20px", lg: "40px" }}
    margin={{ sm: "0 auto", md: "0 auto", lg: "0 auto" }}
    textAlign={{ sm: "left", md: "center", lg: "center" }}
    backgroundColor="#f8f9fa"
    className="rounded-lg text-black shadow-md"
  >
    <h2 className="text-xl font-bold">Responsive Container</h2>
    <p>
      This container adjusts its width, height, padding, and text
      alignment based on screen size.
    </p>
  </Container>
        `}
      >
        <Container
          width={{ sm: "100%", md: "90%", lg: "80%" }}
          maxWidth={{ sm: "100%", md: "800px", lg: "1200px" }}
          height={{ sm: "auto", md: "500px", lg: "600px" }}
          padding={{ sm: "10px", md: "20px", lg: "40px" }}
          margin={{ sm: "0 auto", md: "0 auto", lg: "0 auto" }}
          textAlign={{ sm: "left", md: "center", lg: "center" }}
          backgroundColor="#f8f9fa"
          className="rounded-lg text-black shadow-md"
        >
          <h2 className="text-xl font-bold">Responsive Container</h2>
          <p>
            This container adjusts its width, height, padding, and text
            alignment based on screen size.
          </p>
        </Container>
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

export default ContainerComponentDocs;
