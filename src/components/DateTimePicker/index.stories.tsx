import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { Meta, StoryObj } from "@storybook/react";
import { BuildxDateTimePicker } from ".";

// Create a decorator to wrap stories with LocalizationProvider
const withLocalizationProvider = (Story: React.ComponentType) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Story />
  </LocalizationProvider>
);

const meta: Meta<typeof BuildxDateTimePicker> = {
  title: "Components/DateTimePicker",
  component: BuildxDateTimePicker,
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
    "config.ampm": {
      control: "boolean",
      defaultValue: true,
    },
    "config.isUserLocalTime": {
      control: "boolean",
      defaultValue: false,
    },
    "config.forceDesktopDatePickerOnMobile": {
      control: "boolean",
      defaultValue: true,
    },
    "config.startDateType": {
      control: "select",
      options: ["Default", "Now", "Static", "Reference"],
      defaultValue: "Default",
    },
    "config.endDateType": {
      control: "select",
      options: ["Default", "Now", "Static", "Reference"],
      defaultValue: "Default",
    },
    label: {
      control: "text",
    },
    error: {
      control: "boolean",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BuildxDateTimePicker>;

export const Default: Story = {
  args: {
    label: "Select Date & Time",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: false,
      ampm: true,
      isUserLocalTime: false,
      forceDesktopDatePickerOnMobile: true,
    },
  },
};

export const WithSeconds: Story = {
  args: {
    label: "Date & Time with Seconds",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: true,
      ampm: true,
      isUserLocalTime: false,
      forceDesktopDatePickerOnMobile: true,
    },
  },
};

export const TwentyFourHourFormat: Story = {
  args: {
    label: "24-Hour Format",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: false,
      ampm: false, // 24-hour format
      isUserLocalTime: false,
      forceDesktopDatePickerOnMobile: true,
    },
  },
};

export const DisablePastDates: Story = {
  args: {
    label: "Future Dates Only",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: false,
      ampm: true,
      isUserLocalTime: false,
      forceDesktopDatePickerOnMobile: true,
      startDateType: "Now", // Disable past dates
    },
  },
};

export const DisableFutureDates: Story = {
  args: {
    label: "Past Dates Only",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: false,
      ampm: true,
      isUserLocalTime: false,
      forceDesktopDatePickerOnMobile: true,
      endDateType: "Now", // Disable future dates
    },
  },
};

export const WithCustomSteps: Story = {
  args: {
    label: "Custom Time Steps",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: true,
      hoursStep: 2,
      minutesStep: 15,
      secondsStep: 20,
      ampm: true,
      isUserLocalTime: false,
      forceDesktopDatePickerOnMobile: true,
    },
  },
};

export const WithStaticDateRange: Story = {
  args: {
    label: "With Date Range Limits",
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: false,
      ampm: true,
      isUserLocalTime: false,
      forceDesktopDatePickerOnMobile: true,
      startDateType: "Static",
      endDateType: "Static",
    },
    // One month ago
    staticStart: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    // One month in the future
    staticEnd: new Date(new Date().setMonth(new Date().getMonth() + 1)),
  },
};

export const WithError: Story = {
  args: {
    label: "With Error State",
    error: true,
    config: {
      hoursEnabled: true,
      minutesEnabled: true,
      secondsEnabled: false,
      ampm: true,
      isUserLocalTime: false,
      forceDesktopDatePickerOnMobile: true,
    },
  },
};
