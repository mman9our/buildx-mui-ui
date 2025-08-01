import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BuildxCheckbox } from ".";

const meta: Meta<typeof BuildxCheckbox> = {
  title: "Components/Checkbox",
  component: BuildxCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the checkbox",
    },
    checkboxValue: {
      control: "text",
      description:
        "Value for the checkbox (defaults to lowercase label if not provided)",
    },
    groupName: {
      control: "text",
      description: "Group name for related checkboxes",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    singleValue: {
      control: "boolean",
      description: "Whether to use single value mode (like radio button)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BuildxCheckbox>;

// Single checkbox example (stateless)
export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
    groupName: "terms",
  },
};

export const WithValue: Story = {
  args: {
    label: "Subscribe to newsletter",
    checkboxValue: "newsletter",
    groupName: "preferences",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled option",
    disabled: true,
    groupName: "options",
  },
};

// Interactive checkbox with state management
export const SingleSelectInteractive = () => {
  const [selected, setSelected] = useState<string>("option1");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h4>Single Select Mode (behaves like radio buttons)</h4>
      <BuildxCheckbox
        label="Option 1"
        checkboxValue="option1"
        groupName="singleGroup"
        singleValue={true}
        value={selected}
        onChange={(value: string | string[]) => setSelected(value as string)}
      />
      <BuildxCheckbox
        label="Option 2"
        checkboxValue="option2"
        groupName="singleGroup"
        singleValue={true}
        value={selected}
        onChange={(value: string | string[]) => setSelected(value as string)}
      />
      <BuildxCheckbox
        label="Option 3"
        checkboxValue="option3"
        groupName="singleGroup"
        singleValue={true}
        value={selected}
        onChange={(value: string | string[]) => setSelected(value as string)}
      />
      <p>Selected value: {selected}</p>
    </div>
  );
};

// Interactive multi-checkbox with state management
export const MultiSelectInteractive = () => {
  const [selected, setSelected] = useState<string[]>(["option1", "option3"]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h4>Multi-Select Mode (standard checkboxes)</h4>
      <BuildxCheckbox
        label="Option 1"
        checkboxValue="option1"
        groupName="multiGroup"
        value={selected}
        onChange={(value: string | string[]) => setSelected(value as string[])}
      />
      <BuildxCheckbox
        label="Option 2"
        checkboxValue="option2"
        groupName="multiGroup"
        value={selected}
        onChange={(value: string | string[]) => setSelected(value as string[])}
      />
      <BuildxCheckbox
        label="Option 3"
        checkboxValue="option3"
        groupName="multiGroup"
        value={selected}
        onChange={(value: string | string[]) => setSelected(value as string[])}
      />
      <p>Selected values: {selected.join(", ")}</p>
    </div>
  );
};
