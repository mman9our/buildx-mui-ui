import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";
import React, { forwardRef, useState } from "react";
import { BuildxTextFieldProps } from "./types";

export const BuildxTextField = forwardRef<HTMLDivElement, BuildxTextFieldProps>(
  (props, ref) => {
    const {
      InputProps,
      showPasswordToggle = true,
      isLeft,
      iconColor,
      iconSize = "24px",
      componentIconSpacing,
      type,
      IconOpacityHidden,
      iconColorHidden,
      iconColorVisible,
      IconOpacityVisible,
      iconConfig,
      iconConfigHidden,
      sameHiddenIcon,
      config,
      metaData,
      maxNumberOfChars,
      disablePrefill,
      defaultValue,
      customIcon,
      iconElement,
      ...restProps
    } = props;

    const [showPassword, setShowPassword] = useState(false);
    const theme = useTheme();

    // Determine if we're in a builder environment (simplified)
    const isBuilder =
      typeof window !== "undefined" &&
      window.location.pathname &&
      (window.location.pathname.startsWith("/buildx/form-builder") ||
        window.location.pathname.startsWith("/buildx/page-builder"));

    const handleClickShowPassword = () => setShowPassword((prev) => !prev);
    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => event.preventDefault();

    if (type === "Password" && showPasswordToggle) {
      return (
        <TextField
          ref={ref}
          type={showPassword ? "text" : "password"}
          sx={{
            "& .MuiInputLabel-root": {
              top: "50%", // Center vertically
              left: 14,
              transform: "translateY(-50%)", // Adjust for perfect centering
              transition: theme.transitions.create(["top", "transform"], {
                duration: theme.transitions.duration.shorter,
              }),
            },
            // Style the Input Label when it's shrunk (focused or has value)
            "& .MuiInputLabel-shrink": {
              top: "-8px", // Default floating position
              transform: "translateY(0)", // Reset translation
              fontSize: "0.75rem", // Optional: Adjust font size when shrunk
              transition: theme.transitions.create(["top", "transform"], {
                duration: theme.transitions.duration.shorter,
              }),
            },
            ...restProps.sx,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  style={{ backgroundColor: "transparent", marginRight: 14 }}
                >
                  {iconElement}
                </IconButton>
              </InputAdornment>
            ),
            ...InputProps,
          }}
          {...restProps}
          inputProps={{
            maxLength: maxNumberOfChars,
            autoComplete: disablePrefill ? "new-password" : "on",
            ...restProps.inputProps,
          }}
        />
      );
    }

    return (
      <TextField
        ref={ref}
        {...(isBuilder && { value: defaultValue })}
        {...restProps}
        sx={{
          "& .MuiInputLabel-root": {
            top: "50%", // Center vertically
            left: 14,
            transform: "translateY(-50%)", // Adjust for perfect centering
            transition: theme.transitions.create(["top", "transform"], {
              duration: theme.transitions.duration.shorter,
            }),
          },
          // Style the Input Label when it's shrunk (focused or has value)
          "& .MuiInputLabel-shrink": {
            top: "-8px", // Default floating position
            transform: "translateY(0)", // Reset translation
            fontSize: "0.70rem", // Optional: Adjust font size when shrunk
            transition: theme.transitions.create(["top", "transform"], {
              duration: theme.transitions.duration.shorter,
            }),
          },
          ...restProps.sx,
        }}
        InputProps={{
          startAdornment:
            isLeft && customIcon ? (
              <InputAdornment
                sx={{
                  width: "auto",
                  height: "auto",
                }}
                position="start"
              >
                {customIcon}
              </InputAdornment>
            ) : null,
          endAdornment:
            !isLeft && customIcon ? (
              <InputAdornment
                sx={{
                  width: "auto",
                  height: "auto",
                }}
                position="end"
              >
                {customIcon}
              </InputAdornment>
            ) : null,
          ...InputProps,
        }}
        inputProps={{
          maxLength: maxNumberOfChars,
          ...restProps.inputProps,
        }}
      />
    );
  }
);

BuildxTextField.displayName = "BuildxTextField";
