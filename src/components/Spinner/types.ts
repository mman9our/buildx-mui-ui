import { CircularProgressProps } from "@mui/material";

interface ConfigProps {
  heightPx?: number;
  widthPx?: number;
}

export interface MUISpinnerProps extends Omit<CircularProgressProps, "size"> {
  spinnerSize?: number | null;
  $config?: ConfigProps;
  config?: ConfigProps;
}
