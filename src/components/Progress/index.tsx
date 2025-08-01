import { CircularProgress, LinearProgress } from "@mui/material";
import { forwardRef } from "react";
import { BuildxProgressProps } from "./types";

export const BuildxProgress = forwardRef<HTMLDivElement, BuildxProgressProps>(
  (props, ref) => {
    const {
      progressType = "linear",
      variant,
      color,
      size = 40,
      isDeterminate,
      trackColor,
      $config,
      valueProgress,
      ...restProps
    } = props;

    const ProgressComponent =
      progressType === "circular" ? CircularProgress : LinearProgress;

    return (
      <ProgressComponent
        ref={ref}
        {...restProps}
        variant={isDeterminate ? "determinate" : "indeterminate"}
        value={valueProgress}
        size={$config?.heightPx || size}
        thickness={3.6}
        sx={{
          ...(progressType === "circular" && {
            ...(color && { color: color }),
          }),
          ...(progressType === "linear" && {
            ...(trackColor && { backgroundColor: trackColor }),
            "& .MuiLinearProgress-bar": {
              ...(color && { backgroundColor: color }),
            },
          }),
          ...restProps.sx,
        }}
      />
    );
  }
);

BuildxProgress.displayName = "BuildxProgress";
