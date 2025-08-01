import { CircularProgress } from "@mui/material";
import React from "react";
import { MUISpinnerProps } from "./types";

export const BuildxSpinner: React.FC<MUISpinnerProps> = (props) => {
  const {
    spinnerSize = null,
    color = "primary",
    thickness,
    variant,
    value,
    sx,
    ...restProps
  } = props;
  const { heightPx, widthPx } = props?.$config || props?.config || {};

  // Calculate size based on provided dimensions or spinnerSize
  const derivedSize = heightPx && widthPx ? (heightPx + widthPx) / 2 : 40;
  const _size = spinnerSize !== null ? spinnerSize : derivedSize;

  return (
    <div>
      <CircularProgress
        disableShrink
        size={Number(_size)}
        color={color}
        thickness={thickness}
        variant={variant}
        value={value}
        sx={sx}
        {...restProps}
      />
    </div>
  );
};
