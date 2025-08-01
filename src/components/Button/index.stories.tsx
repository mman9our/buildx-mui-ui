import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import type { Meta, StoryObj } from "@storybook/react";
import { MUIButton } from ".";

const meta: Meta<typeof MUIButton> = {
  title: "Components/Button",
  component: MUIButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    variant: {
      control: "select",
      options: ["contained", "outlined"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    isLeft: { control: "boolean" },
    icon: {
      control: "select",
      options: ["none", "send", "delete"],
      mapping: {
        none: null,
        send: <SendIcon />,
        delete: <DeleteIcon />,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Button",
    color: "primary",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Button",
    color: "primary",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Button",
    color: "primary",
  },
};

export const WithIconRight: Story = {
  args: {
    variant: "contained",
    children: "Send",
    color: "primary",
    icon: "send",
    isLeft: false,
  },
};

export const WithIconLeft: Story = {
  args: {
    variant: "contained",
    children: "Delete",
    color: "error",
    icon: "delete",
    isLeft: true,
  },
};

export const Loading: Story = {
  args: {
    variant: "contained",
    children: "Loading",
    color: "primary",
    loading: true,
  },
};
