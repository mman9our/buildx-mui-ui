import { CheckboxProps } from "@mui/material";

export interface BuildxCheckboxProps
  extends Omit<CheckboxProps, "onChange" | "value"> {
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
}
