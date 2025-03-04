"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React, { useState } from "react";
import { Flexbox, Modal, Table } from "shadlc";

const ModalComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];
  const data = [
    {
      prop: "isOpen",
      type: "boolean",
      default: "undefined",
      description: "Controls the visibility of the modal.",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "undefined",
      description: "Function to call when the modal is closed.",
    },
    {
      prop: "title",
      type: "string",
      default: "undefined",
      description: "Optional title displayed at the top of the modal.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "undefined",
      description: "Content inside the modal.",
    },
    {
      prop: "size",
      type: `"sm" | "md" | "lg" | "full"`,
      default: '"md"',
      description: "Size of the modal.",
    },
    {
      prop: "bgColor",
      type: "string",
      default: '"bg-white"',
      description: "Background color of the modal.",
    },
    {
      prop: "textColor",
      type: "string",
      default: '"text-black"',
      description: "Text color inside the modal.",
    },
    {
      prop: "overlayColor",
      type: "string",
      default: '"bg-black bg-opacity-50"',
      description: "Background color of the overlay.",
    },
    {
      prop: "closeOnOverlayClick",
      type: "boolean",
      default: "true",
      description: "Determines if clicking the overlay should close the modal.",
    },
    {
      prop: "closeOnEsc",
      type: "boolean",
      default: "true",
      description: "Determines if pressing 'Escape' should close the modal.",
    },
    {
      prop: "footerButtons",
      type: "{ label: string; onClick: () => void; color?: string }[]",
      default: "[]",
      description: "Array of buttons displayed in the modal footer.",
    },
  ];

  const [open, setOpen] = useState(false);
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
        title="Modal Component"
        ImportComponent="import { Modal } from 'shadlc'"
        description="The <Modal /> component is a versatile React UI component for displaying dynamic content in an overlay. It supports animations, customizable sizes, close actions, and accessibility features, making it ideal for popups, dialogs, and notifications."
        code={`
  // Define states you want.
  const [open, setOpen] = useState(false);

  // Component usage
  <button
    onClick={() => setOpen(true)}
    className="px-4 py-2 bg-blue-600 text-white rounded"
  >
    Open Modal
  </button>

  <Modal
    isOpen={open}
    onClose={() => setOpen(false)}
    title="Custom Modal"
    size="md"
    bgColor="bg-gray-800"
    textColor="text-white"
    overlayColor="bg-black bg-opacity-70"
    footerButtons={[
      {
        label: "Close",
        onClick: () => setOpen(false),
        color: "bg-red-500 text-white",
      },
      {
        label: "Confirm",
        onClick: () => alert("Confirmed!"),
        color: "bg-green-500 text-white",
      },
    ]}
  >
    <p>
      This is a fully customizable modal with different sizes and themes!
    </p>
  </Modal>

                  `}
      >
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Open Modal
        </button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Custom Modal"
          size="md"
          bgColor="bg-gray-800"
          textColor="text-white"
          overlayColor="bg-black bg-opacity-70"
          footerButtons={[
            {
              label: "Close",
              onClick: () => setOpen(false),
              color: "bg-red-500 text-white",
            },
            {
              label: "Confirm",
              onClick: () => alert("Confirmed!"),
              color: "bg-green-500 text-white",
            },
          ]}
        >
          <p>
            This is a fully customizable modal with different sizes and themes!
          </p>
        </Modal>
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

export default ModalComponentDocs;
