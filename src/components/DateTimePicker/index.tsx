import { Backdrop, useTheme } from "@mui/material";
import { DateTimePicker, DesktopDateTimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { forwardRef, useCallback, useMemo, useState } from "react";
import { isUnixTimestamp, isValidDate } from "../DatePicker/utils";
import { constructTimeView } from "../TimePicker/utils";
import { BuildxDateTimePickerProps } from "./types";

/**
 * BuildxDateTimePicker component for selecting both date and time
 * Supports flexible configuration and various date constraints
 */
export const BuildxDateTimePicker = forwardRef<
  HTMLDivElement,
  BuildxDateTimePickerProps
>((props, ref) => {
  const {
    config = {},
    $config = undefined,
    value,
    onChange: onSideChange,
    ...restProps
  } = props;

  const componentConfig = $config || config;

  const {
    isUserLocalTime = false,
    hoursEnabled = true,
    minutesEnabled = true,
    secondsEnabled = false,
    hoursStep = 1,
    minutesStep = 5,
    secondsStep = 5,
    ampm = true,
    forceDesktopDatePickerOnMobile = true,
    startDateType = "Default",
    startsNow,
    endDateType = "Default",
  } = componentConfig;

  const {
    referenceStart: referenceStartDate,
    referenceEnd: referenceEndDate,
    staticEnd: staticEndDate,
    staticStart: staticStartDate,
  } = restProps;

  const [isOpen, setIsOpen] = useState(false);

  const openDateTimePicker = () => {
    setIsOpen(true);
  };

  const closeDateTimePicker = () => {
    setIsOpen(false);
  };

  const computedValue = useMemo(() => {
    // If value is a Date object, return it directly
    if (value instanceof Date) {
      return value;
    }

    // If value is a string, try to parse it as a date
    if (typeof value === "string") {
      return isValidDate(value) ? new Date(value) : null;
    }

    // If value is an object with utcISO property
    if (value && typeof value === "object" && "utcISO" in value) {
      const dateValue = value.utcISO;
      return dateValue && isValidDate(dateValue) ? new Date(dateValue) : null;
    }

    return null;
  }, [value]);

  const defaultValue = useMemo(() => {
    const defValue = restProps?.defaultValue;

    // Handle number (timestamp) values
    if (
      typeof defValue === "number" ||
      (typeof defValue === "string" && !isNaN(Number(defValue)))
    ) {
      const numValue = Number(defValue);
      if (isUnixTimestamp(numValue)) {
        return new Date(numValue);
      }
    }

    // Handle Date objects
    if (defValue instanceof Date) {
      return defValue;
    }

    // Handle string values
    if (typeof defValue === "string" && isValidDate(defValue)) {
      return new Date(defValue);
    }

    // Handle objects with utcISO property
    if (defValue && typeof defValue === "object" && "utcISO" in defValue) {
      const dateValue = defValue.utcISO;
      return dateValue && isValidDate(dateValue) ? new Date(dateValue) : null;
    }

    return null;
  }, [restProps?.defaultValue]);

  const handleChange = useCallback(
    (date: Date | null) => {
      if (!onSideChange) return;

      if (date && date instanceof Date && !isNaN(date.getTime())) {
        const formattedUtcIso =
          moment(date).format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z";
        const formattedDate = isUserLocalTime
          ? {
              utcISO: date.toISOString(),
              userLocalISO: moment(date).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
              epoch: date.valueOf(),
            }
          : {
              utcISO: formattedUtcIso,
              userLocalISO: moment(formattedUtcIso).format(
                "YYYY-MM-DDTHH:mm:ss.SSSZ"
              ),
              epoch: moment(formattedUtcIso).valueOf(),
            };
        onSideChange(formattedDate);
      } else {
        onSideChange({
          utcISO: null,
          userLocalISO: null,
          epoch: null,
        });
      }
    },
    [onSideChange, isUserLocalTime]
  );

  const formatDate = (date: Date | null | string): Date | null => {
    if (!date) return null;
    if (isUserLocalTime) return date instanceof Date ? date : new Date(date);
    return new Date(moment.utc(date).format("YYYY-MM-DDTHH:mm:ss.SSS"));
  };

  const theme = useTheme();

  const disablePast = useMemo(
    () => startDateType === "Now" || !!startsNow,
    [startDateType, startsNow]
  );

  const disableFuture = useMemo(() => endDateType === "Now", [endDateType]);

  const minDate = useMemo(() => {
    // If type is "Default" or "Now" no specific minDate needed
    if (startDateType === "Default" || startDateType === "Now") {
      return undefined;
    }

    let dateSource;
    if (startDateType === "Static") {
      dateSource = staticStartDate;
    } else if (startDateType === "Reference") {
      dateSource = referenceStartDate;
    } else {
      return undefined;
    }

    // Extract the date value (prefer utcISO if available)
    const dateValue =
      typeof dateSource === "object" &&
      dateSource !== null &&
      "utcISO" in dateSource
        ? dateSource.utcISO
        : dateSource;

    if (dateValue && isValidDate(dateValue)) {
      // Convert to Date object for the picker
      return new Date(dateValue as string | Date);
    }

    return undefined;
  }, [startDateType, staticStartDate, referenceStartDate]);

  const maxDate = useMemo(() => {
    // If type is "Default" or "Now", no specific maxDate needed
    if (endDateType === "Default" || endDateType === "Now") {
      return undefined;
    }

    let dateSource;
    if (endDateType === "Static") {
      dateSource = staticEndDate;
    } else if (endDateType === "Reference") {
      dateSource = referenceEndDate;
    } else {
      // Invalid/unspecified type (shouldn't happen with default)
      return undefined;
    }

    // Extract the date value (prefer utcISO if available)
    const dateValue =
      typeof dateSource === "object" &&
      dateSource !== null &&
      "utcISO" in dateSource
        ? dateSource.utcISO
        : dateSource;

    if (dateValue && isValidDate(dateValue)) {
      // Convert to Date object for the picker
      return new Date(dateValue as string | Date);
    }
    // If no valid date found for Static/Reference
    return undefined;
  }, [endDateType, staticEndDate, referenceEndDate]);

  const SelectedDateTimeComponent = forceDesktopDatePickerOnMobile
    ? DesktopDateTimePicker
    : DateTimePicker;

  // Combine date and time views
  const views = useMemo(() => {
    const dateViews = ["year", "month", "day"] as const;
    const timeViews = constructTimeView([
      hoursEnabled,
      minutesEnabled,
      secondsEnabled,
    ]);
    return [...dateViews, ...timeViews] as const;
  }, [hoursEnabled, minutesEnabled, secondsEnabled]);

  return (
    <>
      <Backdrop
        open={isOpen}
        sx={{ opacity: 0, backgroundColor: "transparent" }}
        onClick={closeDateTimePicker}
      />
      <SelectedDateTimeComponent
        {...restProps}
        ref={ref}
        onOpen={openDateTimePicker}
        onClose={closeDateTimePicker}
        defaultValue={formatDate(defaultValue)}
        value={computedValue ? formatDate(computedValue) : null}
        open={isOpen}
        onChange={handleChange}
        slotProps={{
          textField: {
            error: props?.error ?? false,
            ...(restProps.slotProps?.textField || {}),
          },
          ...restProps.slotProps,
        }}
        disablePast={disablePast}
        disableFuture={disableFuture}
        minDate={minDate}
        maxDate={maxDate}
        views={views}
        timeSteps={{
          hours: hoursStep,
          minutes: minutesStep,
          seconds: secondsStep,
        }}
        ampm={ampm}
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
          ...props.sx,
        }}
      />
    </>
  );
});

BuildxDateTimePicker.displayName = "BuildxDateTimePicker";
