import type { Meta, StoryObj } from "@storybook/react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { BuildxDatePicker } from ".";

// Create a decorator to wrap stories with LocalizationProvider
const withLocalizationProvider = (Story: React.ComponentType) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Story />
  </LocalizationProvider>
);

const meta: Meta<typeof BuildxDatePicker> = {
  title: "Components/DatePicker",
  component: BuildxDatePicker,
  decorators: [withLocalizationProvider],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    "config.displayStyle": {
      control: "select",
      options: ["DatePicker", "DateCalendar"],
      defaultValue: "DatePicker",
    },
    "config.startsNow": {
      control: "boolean",
      defaultValue: false,
    },
    "config.endsNow": {
      control: "boolean",
      defaultValue: false,
    },
    "config.isUserLocalTime": {
      control: "boolean",
      defaultValue: false,
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
type Story = StoryObj<typeof BuildxDatePicker>;

export const Default: Story = {
  args: {
    label: "Select Date",
    config: {
      displayStyle: "DatePicker",
      isUserLocalTime: false,
    },
  },
};

export const Calendar: Story = {
  args: {
    config: {
      displayStyle: "DateCalendar",
      isUserLocalTime: false,
    },
  },
};

export const WithDateRange: Story = {
  args: {
    label: "Date with Range",
    config: {
      displayStyle: "DatePicker",
      startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      isUserLocalTime: false,
    },
  },
};

export const DisablePastDates: Story = {
  args: {
    label: "Future Dates Only",
    config: {
      displayStyle: "DatePicker",
      startsNow: true,
      isUserLocalTime: false,
    },
  },
};

export const DisableFutureDates: Story = {
  args: {
    label: "Past Dates Only",
    config: {
      displayStyle: "DatePicker",
      endsNow: true,
      isUserLocalTime: false,
    },
  },
};

export const WithUserLocalTime: Story = {
  args: {
    label: "Local Time Zone",
    config: {
      displayStyle: "DatePicker",
      isUserLocalTime: true,
    },
  },
};

export const WithError: Story = {
  args: {
    label: "Date with Error",
    error: true,
    config: {
      displayStyle: "DatePicker",
      isUserLocalTime: false,
    },
  },
};
