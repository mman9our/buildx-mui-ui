import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import { FC } from "react";

interface BuildxCheckboxProps {
  /**
   * Group name for the checkbox
   */
  groupName?: string;

  /**
   * Label to display next to the checkbox
   */
  label: string;

  /**
   * Value of the checkbox
   * If not provided, label will be used as value (lowercase)
   */
  checkboxValue?: string;

  /**
   * Whether the checkbox should be disabled
   */
  disabled?: boolean;

  /**
   * Current value(s) of the checkbox group
   * For multi-select: string array of selected values
   * For single-select: string of selected value
   */
  value?: string | string[];

  /**
   * Whether to use single value mode
   * If true, checkbox behaves as radio button (single select)
   * If false, checkbox allows multiple selections
   */
  singleValue?: boolean | string;

  /**
   * Callback when the checkbox value changes
   * For multi-select: returns array of selected values
   * For single-select: returns the selected value
   */
  onChange?: (value: string | string[]) => void;

  /**
   * Any additional props
   */
  [key: string]: any;
}

/**
 * BuildxCheckbox component
 * Supports both single and multiple checkbox selections
 */
export const BuildxCheckbox: FC<BuildxCheckboxProps> = (props) => {
  const { groupName, label, checkboxValue, onChange, value, singleValue } =
    props;

  let singleValueFlag = false;
  if (singleValue && singleValue !== "false") {
    singleValueFlag = true;
  }

  const handleMultipleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    let updatedValues: string[];

    if (event.target.checked) {
      updatedValues = [...(Array.isArray(value) ? value : []), newValue];
    } else {
      updatedValues = (Array.isArray(value) ? value : []).filter(
        (v: string) => v !== newValue
      );
    }

    onChange?.(updatedValues);
  };

  const handleSingleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange?.(event.target.value);
  };

  const handleChange = singleValueFlag
    ? handleSingleCheckboxChange
    : handleMultipleCheckboxChange;
  const handleChecked = singleValueFlag
    ? value === (checkboxValue?.toLowerCase() || label?.toLowerCase())
    : (value || []).includes(
        checkboxValue?.toLowerCase() || label?.toLowerCase()
      );

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            name={groupName}
            value={checkboxValue?.toLowerCase() || label?.toLowerCase()}
            checked={handleChecked}
            onChange={handleChange}
            disabled={props.disabled}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

// Export with alternative name for backward compatibility
export const MuiCheckbox = BuildxCheckbox;
