import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { forwardRef, useMemo } from "react";
import { BuildxTimePickerProps, TimeSteps } from "./types";
import { constructTimeView } from "./utils";

export const BuildxTimePicker = forwardRef<
  HTMLDivElement,
  BuildxTimePickerProps
>((props, ref) => {
  const { config = {}, $config = undefined, value, ...restProps } = props;

  const componentConfig = $config || config;
  const {
    hoursEnabled = true,
    minutesEnabled = true,
    secondsEnabled = false,
    hoursStep = 1,
    minutesStep = 5,
    secondsStep = 5,
    ampm = true,
  } = componentConfig;

  const defaultValue = useMemo(() => {
    if (!restProps?.defaultValue) {
      return null;
    }

    const [hours = 0, minutes = 0, seconds = 0] = restProps.defaultValue
      .split(":")
      .map(Number);

    const defaultDate = new Date();
    defaultDate.setHours(hours);
    defaultDate.setMinutes(minutes);
    defaultDate.setSeconds(seconds);
    defaultDate.setMilliseconds(0);
    return defaultDate;
  }, [restProps?.defaultValue]);

  const timeSteps: TimeSteps = {
    hours: hoursStep,
    minutes: minutesStep,
    seconds: secondsStep,
  };

  return (
    <TimePicker
      {...restProps}
      ref={ref}
      defaultValue={defaultValue}
      onChange={(newValue: any) => {
        if (!newValue || !restProps.onChange) return;

        const formattedTime = new Date(newValue).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: ampm,
        });

        restProps.onChange(formattedTime);
      }}
      views={constructTimeView([hoursEnabled, minutesEnabled, secondsEnabled])}
      timeSteps={timeSteps}
      ampm={ampm}
    />
  );
});

BuildxTimePicker.displayName = "BuildxTimePicker";
