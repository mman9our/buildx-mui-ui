import type { Meta, StoryObj } from "@storybook/react";
import { BuildxTypography } from ".";

const meta: Meta<typeof BuildxTypography> = {
  title: "Components/Typography",
  component: BuildxTypography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "button",
        "overline",
      ],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
        "inherit",
        "text.primary",
        "text.secondary",
      ],
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
    },
    wrapTypo: {
      control: "select",
      options: ["normal", "nowrap", "ellipsis"],
    },
    format: {
      control: "select",
      options: [undefined, "Date Time", "JSON"],
    },
    formatString: {
      control: "text",
      if: { arg: "format", eq: "Date Time" },
    },
    visibleOverFlow: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a simple text",
    variant: "body1",
  },
};

export const Heading: Story = {
  args: {
    children: "This is a heading",
    variant: "h2",
    color: "primary",
  },
};

export const WithMarkdown: Story = {
  args: {
    children: "This is **bold** and *italic* text with `code`",
    variant: "body1",
  },
};

export const WithLink: Story = {
  args: {
    children: "Check out this link: https://example.com",
    variant: "body1",
    config: {
      underlineLink: true,
      linkColor: "blue",
    },
  },
};

export const DateFormatted: Story = {
  args: {
    children: "2023-08-01T12:00:00Z",
    variant: "body2",
    format: "Date Time",
    formatString: "DD/MM/YYYY HH:mm",
  },
};

export const Ellipsis: Story = {
  args: {
    children:
      "This is a very long text that will be truncated with an ellipsis when it overflows the container width",
    variant: "body2",
    wrapTypo: "ellipsis",
    sx: { maxWidth: "200px" },
  },
};
