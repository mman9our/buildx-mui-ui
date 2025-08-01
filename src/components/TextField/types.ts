import { TextFieldProps } from "@mui/material";

// Interface for icon configuration
export interface IconConfig {
  icon?: React.ReactNode;
  url?: string;
  visibility?: string;
}

export interface BuildxTextFieldProps extends Omit<TextFieldProps, "variant"> {
  showPasswordToggle?: boolean;
  isLeft?: boolean;
  iconColor?: string;
  iconSize?: string;
  componentIconSpacing?: string | number;
  type?: string;
  IconOpacityHidden?: string;
  iconColorHidden?: string;
  iconColorVisible?: string;
  IconOpacityVisible?: string;
  iconConfig?: IconConfig;
  iconConfigHidden?: IconConfig;
  sameHiddenIcon?: boolean;
  config?: {
    [key: string]: any;
  };
  metaData?: any;
  maxNumberOfChars?: number;
  disablePrefill?: boolean;
  variant?: "outlined" | "standard" | "filled";
  customIcon?: any;
  iconElement?: any;
}
