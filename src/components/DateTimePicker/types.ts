import { SxProps, Theme } from "@mui/material";
import { DateValue } from "../DatePicker/types";

export interface BuildxDateTimePickerProps {
  /**
   * Configuration for the date time picker
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

    /**
     * Whether to use the user's local time zone
     */
    isUserLocalTime?: boolean;

    /**
     * Whether to force desktop date picker on mobile devices
     */
    forceDesktopDatePickerOnMobile?: boolean;

    /**
     * Type of start date constraint
     */
    startDateType?: "Default" | "Now" | "Static" | "Reference";

    /**
     * Whether the date range starts from now (disabling past dates)
     */
    startsNow?: boolean;

    /**
     * Type of end date constraint
     */
    endDateType?: "Default" | "Now" | "Static" | "Reference";
  };

  /**
   * Internal configuration for the date time picker
   */
  $config?: BuildxDateTimePickerProps["config"];

  /**
   * Current value of the date time picker
   */
  value?: DateValue;

  /**
   * Default value of the date time picker
   */
  defaultValue?: DateValue | string | number;

  /**
   * Callback when the value changes
   */
  onChange?: (date: DateValue) => void;

  /**
   * Label for the date time picker
   */
  label?: string;

  /**
   * Whether the date time picker has an error
   */
  error?: boolean;

  /**
   * Static start date (ISO string or Date object) for static start date type
   */
  staticStart?: string | Date | DateValue;

  /**
   * Reference start date (ISO string or Date object) for reference start date type
   */
  referenceStart?: string | Date | DateValue;

  /**
   * Static end date (ISO string or Date object) for static end date type
   */
  staticEnd?: string | Date | DateValue;

  /**
   * Reference end date (ISO string or Date object) for reference end date type
   */
  referenceEnd?: string | Date | DateValue;

  /**
   * Input props to pass to the TextField
   */
  InputProps?: object;

  /**
   * MUI SX styling prop
   */
  sx?: SxProps<Theme>;

  /**
   * Additional props to be passed to the underlying component
   */
  [key: string]: any;
}
