import { SxProps, Theme } from "@mui/material";
import { TimeView } from "@mui/x-date-pickers";

export interface BuildxTimePickerProps {
  /**
   * Configuration for the time picker
   */
  config?: {
    /**
     * Whether hours are enabled
     */
    hoursEnabled?: boolean;

    /**
     * Whether minutes are enabled
     */
    minutesEnabled?: boolean;

    /**
     * Whether seconds are enabled
     */
    secondsEnabled?: boolean;

    /**
     * Step for hours
     */
    hoursStep?: number;

    /**
     * Step for minutes
     */
    minutesStep?: number;

    /**
     * Step for seconds
     */
    secondsStep?: number;

    /**
     * Whether to use 12-hour format (AM/PM)
     */
    ampm?: boolean;
  };

  /**
   * Internal configuration for the time picker
   */
  $config?: BuildxTimePickerProps["config"];

  /**
   * Current value
   */
  value?: Date | string | null;

  /**
   * Default value as time string (HH:MM:SS)
   */
  defaultValue?: string;

  /**
   * Callback when the value changes
   */
  onChange?: (value: string) => void;

  /**
   * Label for the time picker
   */
  label?: string;

  /**
   * Views to display in the time picker
   */
  views?: readonly TimeView[];

  /**
   * MUI SX styling prop
   */
  sx?: SxProps<Theme>;

  /**
   * Additional props to be passed to the underlying component
   */
  [key: string]: any;
}

export interface TimeSteps {
  hours?: number;
  minutes?: number;
  seconds?: number;
}
