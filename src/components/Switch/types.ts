import { SwitchProps } from "@mui/material";

export interface BaseSwitchProps extends SwitchProps {
  /**
   * The color of the switch thumb
   */
  thumbColor?: string;

  /**
   * The color of the switch track
   */
  trackColor?: string;

  /**
   * Disables the opacity effect for the track when unchecked
   */
  disableEffect?: boolean;

  /**
   * Custom icon to show when switch is on/checked
   */
  customIconOn?: any;

  /**
   * Custom icon to show when switch is off/unchecked
   */
  customIconOff?: any;

  /**
   * Custom icon for Android style when switch is on/checked
   */
  customAndroidIconOn?: any;

  /**
   * Custom icon for Android style when switch is off/unchecked
   */
  customAndroidIconOff?: any;

  /**
   * Size of the switch thumb in pixels or CSS units
   */
  thumbSize?: string;

  /**
   * Width of the switch track in pixels or CSS units
   */
  trackWidth?: string;

  /**
   * Height of the switch track in pixels or CSS units
   */
  trackHeight?: string;

  /**
   * Disables the ability to change the switch state
   * but without visually disabling it
   */
  disableChanging?: boolean;

  /**
   * Appearance style of the switch
   * @default 'Custom'
   */
  switchAppearance?: "iOS" | "Android" | "Custom";
}

export interface BuildxSwitchProps extends Omit<BaseSwitchProps, "onChange" | "defaultValue"> {
  /**
   * The label to display next to the switch
   */
  label?: string;

  /**
   * The placement of the label relative to the switch
   * @default 'end'
   */
  labelPlacement?: "end" | "start" | "top" | "bottom";

  /**
   * Whether the switch is currently loading
   * @default false
   */
  loading?: boolean;

  /**
   * Whether the switch is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the switch is checked
   * If undefined, defaultValue will be used
   */
  checked?: boolean;

  /**
   * The default value for the switch
   * Only used if checked is undefined
   */
  defaultValue?: boolean;

  /**
   * Callback when the switch is toggled
   * @param checked - The new state of the switch
   * @param event - The original event
   */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;

  // The following props are included for backward compatibility
  // but are not used in this component
  textTypo?: any;
  format?: any;
  formatString?: any;
  config?: any;
  __config?: any;
  metaData?: any;
  mapValuesObject?: any;
  pageId?: any;
  wordwrap?: any;

  /**
   * Any additional props
   */
  [key: string]: any;
}
