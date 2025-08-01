import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import type { Meta, StoryObj } from "@storybook/react";
import { BuildxTextField } from ".";

const meta: Meta<typeof BuildxTextField> = {
  title: "Components/TextField",
  component: BuildxTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "standard", "filled"],
    },
    type: {
      control: "select",
      options: [
        "text",
        "password",
        "email",
        "number",
        "tel",
        "url",
        "search",
        "Password",
      ],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    fullWidth: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    isLeft: {
      control: "boolean",
    },
    iconSize: {
      control: "text",
    },
    showPasswordToggle: {
      control: "boolean",
      if: { arg: "type", eq: "Password" },
    },
    maxNumberOfChars: {
      control: "number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    variant: "outlined",
    type: "text",
    size: "medium",
  },
};

export const OutlinedTextField: Story = {
  args: {
    label: "Outlined Input",
    variant: "outlined",
    placeholder: "Enter text here",
  },
};

export const FilledTextField: Story = {
  args: {
    label: "Filled Input",
    variant: "filled",
    placeholder: "Enter text here",
  },
};

export const StandardTextField: Story = {
  args: {
    label: "Standard Input",
    variant: "standard",
    placeholder: "Enter text here",
  },
};

export const DisabledTextField: Story = {
  args: {
    label: "Disabled Input",
    variant: "outlined",
    placeholder: "This field is disabled",
    disabled: true,
  },
};

export const PasswordField: Story = {
  args: {
    label: "Password",
    type: "Password",
    variant: "outlined",
    placeholder: "Enter password",
    showPasswordToggle: true,
    iconConfig: {
      icon: <VisibilityIcon />,
    },
    iconConfigHidden: {
      icon: <VisibilityOffIcon />,
    },
    iconColorVisible: "primary",
    iconColorHidden: "action",
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Email",
    variant: "outlined",
    placeholder: "Enter your email",
    isLeft: true,
    iconConfig: {
      icon: <EmailIcon />,
    },
    iconColor: "primary",
    componentIconSpacing: "8px",
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Search",
    variant: "outlined",
    placeholder: "Search...",
    isLeft: false,
    iconConfig: {
      icon: <SearchIcon />,
    },
    iconColor: "action",
    componentIconSpacing: "8px",
  },
};

export const WithCharacterLimit: Story = {
  args: {
    label: "Tweet",
    variant: "outlined",
    placeholder: "What's happening?",
    maxNumberOfChars: 280,
    multiline: true,
    rows: 4,
  },
};
