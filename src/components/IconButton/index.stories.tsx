import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { Meta, StoryObj } from "@storybook/react";
import { BuildxIconButton } from ".";

const meta: Meta<typeof BuildxIconButton> = {
  title: "Components/IconButton",
  component: BuildxIconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    loading: {
      control: "boolean",
      defaultValue: false,
    },
    backgroundColor: {
      control: "color",
    },
    borderWidth: {
      control: "text",
    },
    borderColor: {
      control: "color",
    },
    iconColor: {
      control: "color",
      defaultValue: "#fff",
    },
    iconSize: {
      control: "text",
      defaultValue: "24px",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    backgroundColor: "#1976d2",
    iconColor: "#ffffff",
    iconSize: "30px",
    children: <AddIcon sx={{ color: "#ffffff", fontSize: "24px" }} />,
  },
};

export const Delete: Story = {
  args: {
    size: "medium",
    backgroundColor: "#f44336",
    iconColor: "#ffffff",
    iconSize: "30px",
    children: <DeleteIcon sx={{ color: "#ffffff", fontSize: "24px" }} />,
  },
};

export const Add: Story = {
  args: {
    size: "small",
    backgroundColor: "#4caf50",
    iconColor: "#ffffff",
    iconSize: "30px",
    children: <AddIcon sx={{ color: "#ffffff", fontSize: "24px" }} />,
  },
};

export const Edit: Story = {
  args: {
    size: "large",
    backgroundColor: "#ff9800",
    iconColor: "#ffffff",
    iconSize: "30px",
    children: <EditIcon sx={{ color: "#ffffff", fontSize: "24px" }} />,
  },
};

export const Disabled: Story = {
  args: {
    size: "medium",
    backgroundColor: "#9e9e9e",
    iconColor: "#ffffff",
    disabled: true,
    iconSize: "30px",
    children: <DeleteIcon sx={{ color: "#ffffff", fontSize: "24px" }} />,
  },
};

export const WithBorder: Story = {
  args: {
    size: "medium",
    backgroundColor: "transparent",
    iconColor: "#1976d2",
    borderWidth: "2px",
    borderColor: "#1976d2",
    iconSize: "30px",
    children: <AddIcon sx={{ color: "#1976d2", fontSize: "24px" }} />,
  },
};
