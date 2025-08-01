import ImageIcon from "@mui/icons-material/Image";
import PersonIcon from "@mui/icons-material/Person";
import type { Meta, StoryObj } from "@storybook/react";
import { MUIAvatar } from ".";

const meta: Meta<typeof MUIAvatar> = {
  title: "Components/Avatar",
  component: MUIAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: { control: "text" },
    src: { control: "text" },
    style: { control: "object" },
    children: {
      control: "select",
      options: ["none", "person", "image"],
      mapping: {
        none: null,
        person: <PersonIcon />,
        image: <ImageIcon />,
      },
    },
    variant: {
      control: "select",
      options: ["circular", "rounded", "square"],
    },
    sx: { control: "object" },
    className: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100px", height: "100px", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "Avatar",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://mui.com/static/images/avatar/1.jpg",
    alt: "Avatar with image",
  },
};

export const WithIcon: Story = {
  args: {
    alt: "Avatar with icon",
    children: "person",
  },
};

export const Square: Story = {
  args: {
    variant: "square",
    alt: "Square avatar",
    src: "https://mui.com/static/images/avatar/2.jpg",
  },
};

export const Rounded: Story = {
  args: {
    variant: "rounded",
    alt: "Rounded avatar",
    src: "https://mui.com/static/images/avatar/3.jpg",
  },
};

export const WithInitials: Story = {
  args: {
    alt: "Avatar with initials",
    children: "JD",
    style: { backgroundColor: "#1976d2", color: "white" },
  },
};
