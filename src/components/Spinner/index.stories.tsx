import type { Meta, StoryObj } from "@storybook/react";
import { BuildxSpinner } from ".";

const meta: Meta<typeof BuildxSpinner> = {
  title: "Components/Spinner",
  component: BuildxSpinner,
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
      options: ["determinate", "indeterminate"],
    },
    spinnerSize: {
      control: { type: "number", min: 10, max: 100, step: 5 },
    },
    thickness: {
      control: { type: "number", min: 1, max: 10, step: 1 },
    },
    value: {
      control: { type: "number", min: 0, max: 100, step: 5 },
      if: { arg: "variant", eq: "determinate" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "primary",
    variant: "indeterminate",
  },
};

export const CustomSize: Story = {
  args: {
    color: "primary",
    variant: "indeterminate",
    spinnerSize: 60,
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    variant: "indeterminate",
  },
};

export const Determinate: Story = {
  args: {
    color: "primary",
    variant: "determinate",
    value: 75,
  },
};

export const ThickerSpinner: Story = {
  args: {
    color: "info",
    variant: "indeterminate",
    thickness: 6,
  },
};
