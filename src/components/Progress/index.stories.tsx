import type { Meta, StoryObj } from "@storybook/react";
import { BuildxProgress } from ".";

const meta: Meta<typeof BuildxProgress> = {
  title: "Components/Progress",
  component: BuildxProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    progressType: {
      control: "radio",
      options: ["linear", "circular"],
    },
    isDeterminate: {
      control: "boolean",
    },
    valueProgress: {
      control: { type: "number", min: 0, max: 100, step: 5 },
      if: { arg: "isDeterminate", eq: true },
    },
    color: {
      control: "color",
    },
    trackColor: {
      control: "color",
      if: { arg: "progressType", eq: "linear" },
    },
    size: {
      control: { type: "number", min: 20, max: 100, step: 5 },
      if: { arg: "progressType", eq: "circular" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LinearIndeterminate: Story = {
  args: {
    progressType: "linear",
    isDeterminate: false,
    color: "#1976d2",
  },
};

export const LinearDeterminate: Story = {
  args: {
    progressType: "linear",
    isDeterminate: true,
    valueProgress: 65,
    color: "#1976d2",
    trackColor: "#e0e0e0",
  },
};

export const CircularIndeterminate: Story = {
  args: {
    progressType: "circular",
    isDeterminate: false,
    size: 40,
    color: "#1976d2",
  },
};

export const CircularDeterminate: Story = {
  args: {
    progressType: "circular",
    isDeterminate: true,
    valueProgress: 75,
    size: 60,
    color: "#1976d2",
  },
};

export const CustomColoredLinear: Story = {
  args: {
    progressType: "linear",
    isDeterminate: true,
    valueProgress: 50,
    color: "#ff4081",
    trackColor: "#ffcdd2",
  },
};
