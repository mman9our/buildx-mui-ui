import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BuildxSwitch } from ".";

const meta: Meta<typeof BuildxSwitch> = {
  title: "Components/Switch",
  component: BuildxSwitch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    switchAppearance: {
      control: "select",
      options: ["Custom", "iOS", "Android"],
      description: "Appearance style of the switch",
    },
    label: {
      control: "text",
      description: "Label to display next to the switch",
    },
    labelPlacement: {
      control: "select",
      options: ["end", "start", "top", "bottom"],
      description: "Placement of the label relative to the switch",
    },
    thumbColor: {
      control: "color",
      description: "Color of the switch thumb",
    },
    trackColor: {
      control: "color",
      description: "Color of the switch track",
    },
    thumbSize: {
      control: "text",
      description: "Size of the thumb in px or other CSS units",
    },
    trackWidth: {
      control: "text",
      description: "Width of the track in px or other CSS units",
    },
    trackHeight: {
      control: "text",
      description: "Height of the track in px or other CSS units",
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
    loading: {
      control: "boolean",
      description: "Whether the switch is in loading state",
    },
    checked: {
      control: "boolean",
      description: "Whether the switch is checked (controlled)",
    },
    defaultValue: {
      control: "boolean",
      description: "Default value for the switch (uncontrolled)",
    },
    disableEffect: {
      control: "boolean",
      description: "Disables the opacity effect on the track when unchecked",
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof BuildxSwitch>;

// Basic switch with default (Custom) appearance
export const Default: Story = {
  args: {
    label: "Default Switch",
    defaultValue: false,
    trackColor: "#1976d2",
  },
};

// iOS style switch
export const IOSStyle: Story = {
  args: {
    label: "iOS Style Switch",
    switchAppearance: "iOS",
    defaultValue: true,
    trackColor: "#34C759",
    thumbColor: "#ffffff",
  },
};

// Android style switch
export const AndroidStyle: Story = {
  args: {
    label: "Android Style Switch",
    switchAppearance: "Android",
    defaultValue: false,
    trackColor: "#6200EE",
    thumbColor: "#ffffff",
    thumbSize: "16px",
    trackWidth: "60px",
    trackHeight: "32px",
  },
};

// Disabled switch
export const Disabled: Story = {
  args: {
    label: "Disabled Switch",
    disabled: true,
    defaultValue: true,
    trackColor: "#1976d2",
  },
};

// Loading switch
export const Loading: Story = {
  args: {
    label: "Loading Switch",
    loading: true,
    defaultValue: false,
    trackColor: "#1976d2",
  },
};

// Interactive switch with state
export const Interactive = () => {
  const [checked, setChecked] = useState<boolean>(false);
  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h4>Interactive Switch Example</h4>
      <BuildxSwitch
        label={`Switch is ${checked ? 'ON' : 'OFF'}`}
        switchAppearance="iOS"
        trackColor={checked ? "#34C759" : "#cccccc"}
        checked={checked}
        onChange={(isChecked) => setChecked(isChecked)}
      />
      <BuildxSwitch
        label="With custom sizes"
        switchAppearance="iOS"
        trackColor="#1976d2"
        thumbSize="28px"
        trackWidth="64px"
        trackHeight="36px"
        checked={checked}
        onChange={(isChecked) => setChecked(isChecked)}
      />
      <BuildxSwitch
        label="Label on the left"
        labelPlacement="start"
        switchAppearance="Android"
        trackColor="#6200EE"
        thumbColor="#ffffff"
        checked={checked}
        onChange={(isChecked) => setChecked(isChecked)}
      />
      <p>Current state: {checked ? "ON" : "OFF"}</p>
    </div>
  );
};
