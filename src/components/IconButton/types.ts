import { IconButtonProps } from "@mui/material";
import { CSSProperties, MouseEvent } from "react";

// Interface for icon configuration
export interface IconConfig {
  icon?: React.ReactNode;
  url?: string;
  visibility?: string;
}

export interface MUIIconButtonProps extends Omit<IconButtonProps, "onClick"> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  sx?: object;
  loading?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  borderWidth?: string;
  borderColor?: string;
  style?: CSSProperties;
  iconSize?: string;
  iconConfig?: IconConfig;
  iconName?: string;
  iconColor?: string;
  dataBxId?: string;
}
