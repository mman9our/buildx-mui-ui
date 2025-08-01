import { IconButton } from "@mui/material";
import { joinObjects } from "hd-utils";
import { forwardRef } from "react";
import { MUIIconButtonProps } from "./types";

export const BuildxIconButton = forwardRef<
  HTMLButtonElement,
  MUIIconButtonProps
>(
  (
    {
      onClick,
      size,
      sx,
      loading,
      disabled,
      backgroundColor,
      borderWidth = "0px",
      borderColor,
      style,
      iconSize,
      iconConfig,
      iconName,
      iconColor,
      dataBxId,
      children,
      ...restProps
    },
    ref
  ) => {
    return (
      <IconButton
        ref={ref}
        onClick={onClick}
        data-bx-id={dataBxId}
        size={size}
        sx={sx}
        disabled={loading || disabled}
        style={joinObjects(
          {
            background: backgroundColor,
            width: "100%",
            height: "100%",
            border: `${borderWidth} solid transparent`,
            borderColor: borderColor,
            padding: 0,
          },
          style
        )}
        {...restProps}
      >
        {children}
      </IconButton>
    );
  }
);

BuildxIconButton.displayName = "BuildxIconButton";
