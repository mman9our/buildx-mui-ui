import type { Meta, StoryObj } from "@storybook/react";
import { BuildxChip } from ".";

const meta: Meta<typeof BuildxChip> = {
  title: "Components/Chip",
  component: BuildxChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
      ],
    },
    variant: {
      control: "select",
      options: ["filled", "outlined"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    disabled: { control: "boolean" },
    clickable: { control: "boolean" },
    showDeleteIcon: { control: "boolean" },
    onDelete: {
      action: "deleted",
    },
    onClick: {
      action: "clicked",
    },
    labelChip: { control: "text" },
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
    labelColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: "filled",
    labelChip: "Filled Chip",
    backgroundColor: "#1976d2",
    borderColor: "#1976d2",
    labelColor: "#ffffff",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    labelChip: "Outlined Chip",
    backgroundColor: "transparent",
    borderColor: "#1976d2",
    labelColor: "#1976d2",
  },
};

export const Deletable: Story = {
  args: {
    variant: "filled",
    labelChip: "Deletable",
    backgroundColor: "#1976d2",
    borderColor: "#1976d2",
    labelColor: "#ffffff",
    showDeleteIcon: true,
    onDelete: () => {},
  },
};

export const Clickable: Story = {
  args: {
    variant: "filled",
    labelChip: "Clickable",
    backgroundColor: "#2e7d32", // success color
    borderColor: "#2e7d32",
    labelColor: "#ffffff",
    clickable: true,
    onClick: () => {},
  },
};

export const Disabled: Story = {
  args: {
    variant: "filled",
    labelChip: "Disabled",
    backgroundColor: "#1976d2",
    borderColor: "#1976d2",
    labelColor: "#ffffff",
    disabled: true,
  },
};

export const CustomStyles: Story = {
  args: {
    variant: "filled",
    labelChip: "Custom Styled",
    backgroundColor: "#f5f5f5",
    borderColor: "#e0e0e0",
    labelColor: "#333333",
    style: { borderRadius: "4px", fontWeight: "bold" },
  },
};
