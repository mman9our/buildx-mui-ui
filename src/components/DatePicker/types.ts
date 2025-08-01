import { SxProps, Theme } from "@mui/material";

export interface DateValue {
  utcISO: string | null;
  userLocalISO: string | null;
  epoch: number | null;
}

export interface BuildxDatePickerProps {
  /**
   * Configuration for the date picker
   */
  config?: {
    /**
     * Display style of the date picker ('DatePicker' or 'DateCalendar')
     */
    displayStyle?: "DatePicker" | "DateCalendar";

    /**
     * Start date for the range (ISO string or Date object)
     */
    startDate?: string | Date;

    /**
     * End date for the range (ISO string or Date object)
     */
    endDate?: string | Date;

    /**
     * Whether the date range starts from now (disabling past dates)
     */
    startsNow?: boolean;

    /**
     * Whether the date range ends now (disabling future dates)
     */
    endsNow?: boolean;

    /**
     * Whether to use the user's local time zone
     */
    isUserLocalTime?: boolean;
  };

  /**
   * Internal configuration for the date picker
   */
  $config?: BuildxDatePickerProps["config"];

  /**
   * Current value of the date picker
   */
  value?: DateValue | string | Date;

  /**
   * Default value of the date picker
   */
  defaultValue?: DateValue | string | number | Date;

  /**
   * Callback when the value changes
   */
  onChange?: (date: DateValue) => void;

  /**
   * Label for the date picker
   */
  label?: string;

  /**
   * Whether the date picker has an error
   */
  error?: boolean;

  /**
   * MUI SX styling prop
   */
  sx?: SxProps<Theme>;

  /**
   * Additional props to be passed to the underlying component
   */
  [key: string]: any;
}
