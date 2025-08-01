import { TimeView } from "@mui/x-date-pickers";

/**
 * Constructs the time picker view based on which time units are enabled
 * @param enabledList Array of booleans indicating if hours, minutes, and seconds are enabled
 * @returns Array of enabled views
 */
export const constructTimeView = (enabledList: boolean[]): TimeView[] => {
  const views: TimeView[] = ["hours", "minutes", "seconds"];
  const result: TimeView[] = [];

  enabledList.forEach((item, index) => {
    if (item) {
      result.push(views[index]);
    }
  });

  return result;
};
