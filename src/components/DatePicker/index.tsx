import { Backdrop } from "@mui/material";
import { DateCalendar, DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { forwardRef, useCallback, useMemo, useState } from "react";
import { BuildxDatePickerProps } from "./types";
import { isUnixTimestamp, isValidDate } from "./utils";

const DATECOMPONENTS_MAP = {
  DatePicker: DatePicker,
  DateCalendar: DateCalendar,
};

export const BuildxDatePicker = forwardRef<
  HTMLDivElement,
  BuildxDatePickerProps
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
    displayStyle = "DatePicker",
    startDate,
    endDate,
    endsNow = false,
    startsNow = false,
    isUserLocalTime = false,
  } = componentConfig;

  const DatePickerComponent =
    DATECOMPONENTS_MAP[displayStyle || "DatePicker"] || DatePicker;

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

  const minDate =
    startDate && !startsNow ? new Date(startDate as string | Date) : undefined;
  const maxDate =
    endDate && !endsNow ? new Date(endDate as string | Date) : undefined;

  return (
    <>
      <Backdrop
        open={isOpen}
        sx={{ opacity: 0, backgroundColor: "transparent" }}
        onClick={closeDateTimePicker}
      />
      <DatePickerComponent
        {...restProps}
        ref={ref}
        onOpen={openDateTimePicker}
        onClose={closeDateTimePicker}
        slotProps={{
          textField: {
            error: props?.error ?? false,
            ...(restProps.slotProps?.textField || {}),
          },
          ...restProps.slotProps,
        }}
        open={isOpen}
        value={computedValue ? formatDate(computedValue) : null}
        defaultValue={formatDate(defaultValue)}
        disablePast={startsNow}
        disableFuture={endsNow}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleChange}
        views={["year", "month", "day"]}
      />
    </>
  );
});

BuildxDatePicker.displayName = "BuildxDatePicker";
