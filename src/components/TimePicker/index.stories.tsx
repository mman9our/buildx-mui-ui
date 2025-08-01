import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { Meta, StoryObj } from "@storybook/react";
import { BuildxTimePicker } from ".";

// Create a decorator to wrap stories with LocalizationProvider
const withLocalizationProvider = (Story: React.ComponentType) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Story />
  </LocalizationProvider>
);

const meta: Meta<typeof BuildxTimePicker> = {
  title: "Components/TimePicker",
  component: BuildxTimePicker,
  decorators: [withLocalizationProvider],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    "config.hoursEnabled": {
      control: "boolean",
      defaultValue: true,
    },
    "config.minutesEnabled": {
      control: "boolean",
      defaultValue: true,
    },
    "config.secondsEnabled": {
      control: "boolean",
      defaultValue: false,
    },
    "config.hoursStep": {
      control: { type: "number", min: 1, max: 12, step: 1 },
      defaultValue: 1,
    },
    "config.minutesStep": {
      control: { type: "number", min: 1, max: 30, step: 1 },
      defaultValue: 5,
    },
    "config.secondsStep": {
      control: { type: "number", min: 1, max: 30, step: 1 },
      defaultValue: 5,
    },
    "config.ampm": {
      control: "boolean",
      defaultValue: true,
    },
    defaultValue: {
      control: "text",
    },
    label: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BuildxTimePicker>;

export const Default: Story = {
  args: {
    label: "Select Time",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: false,
      hoursStep: 1,
      minutesStep: 5,
      secondsStep: 5,
      ampm: true,
    },
  },
};

export const WithSeconds: Story = {
  args: {
    label: "Select Time with Seconds",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: true,
      hoursStep: 1,
      minutesStep: 5,
      secondsStep: 5,
      ampm: true,
    },
  },
};

export const With24HourFormat: Story = {
  args: {
    label: "24-Hour Format",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: false,
      hoursStep: 1,
      minutesStep: 5,
      secondsStep: 5,
      ampm: false,
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "With Default Time",
    defaultValue: "14:30:00",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: true,
      hoursStep: 1,
      minutesStep: 5,
      secondsStep: 5,
      ampm: true,
    },
  },
};

export const CustomSteps: Story = {
  args: {
    label: "Custom Time Steps",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: true,
      hoursStep: 2,
      minutesStep: 10,
      secondsStep: 15,
      ampm: true,
    },
  },
};
