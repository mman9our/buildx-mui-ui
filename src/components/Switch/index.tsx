import { FormControlLabel } from "@mui/material";
import { FC } from "react";
import { BaseSwitch } from "./BaseSwitch";
import { BuildxSwitchProps } from "./types";

/**
 * BuildxSwitch component
 * 
 * A customizable switch component that supports various styles and appearances.
 * Can be styled as iOS, Android, or custom switch with various configurations.
 */
export const BuildxSwitch: FC<BuildxSwitchProps> = ({
  switchAppearance,
  customIconOn,
  customIconOff,
  customAndroidIconOff,
  customAndroidIconOn,
  children,
  textTypo,
  format,
  formatString,
  config,
  __config,
  metaData,
  mapValuesObject,
  pageId,
  wordwrap,
  defaultValue,
  onChange,
  label,
  trackColor,
  labelPlacement = "end",
  thumbColor,
  disableEffect,
  thumbSize,
  trackWidth,
  trackHeight,
  loading,
  disabled,
  checked,
  ...restProps
}) => {
  const isLoading = loading;
  const isDisabled = disabled || isLoading;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isLoading) return;
    if (onChange) {
      onChange(event.target.checked, event);
    }
  };

  // If no label provided, render just the BaseSwitch
  if (!label) {
    return (
      <BaseSwitch
        switchAppearance={switchAppearance}
        trackColor={trackColor}
        thumbSize={thumbSize}
        trackWidth={trackWidth}
        trackHeight={trackHeight}
        customIconOn={customIconOn}
        customIconOff={customIconOff}
        customAndroidIconOn={customAndroidIconOn}
        customAndroidIconOff={customAndroidIconOff}
        thumbColor={thumbColor}
        disableEffect={disableEffect}
        {...restProps}
        disabled={isDisabled}
        checked={checked !== undefined ? checked : !!defaultValue}
        onChange={handleChange}
      />
    );
  }

  return (
    <FormControlLabel
      control={
        <BaseSwitch
          switchAppearance={switchAppearance}
          trackColor={trackColor}
          thumbSize={thumbSize}
          trackWidth={trackWidth}
          trackHeight={trackHeight}
          customIconOn={customIconOn}
          customIconOff={customIconOff}
          customAndroidIconOn={customAndroidIconOn}
          customAndroidIconOff={customAndroidIconOff}
          thumbColor={thumbColor}
          disableEffect={disableEffect}
          {...restProps}
          disabled={isDisabled}
          checked={checked !== undefined ? checked : !!defaultValue}
          edge="end"
          onChange={handleChange}
        />
      }
      label={label}
      required={false}
      labelPlacement={labelPlacement}
      sx={{
        "& .MuiFormControlLabel-label": {
          marginLeft: "8px",
        },
      }}
    />
  );
};
