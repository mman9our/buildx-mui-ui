import { CircularProgressProps, LinearProgressProps } from "@mui/material";

interface ConfigProps {
  heightPx?: number;
  widthPx?: number;
}

type MUIProgressBaseProps = Omit<
  CircularProgressProps & LinearProgressProps,
  "variant" | "color"
>;

export interface BuildxProgressProps extends MUIProgressBaseProps {
  progressType?: "circular" | "linear";
  variant?: "determinate" | "indeterminate" | "buffer" | "query";
  color?: string; // custom string color (hex, css var, etc.)
  size?: number;
  isDeterminate?: boolean;
  trackColor?: string;
  $config?: ConfigProps;
  valueProgress?: number;
}
