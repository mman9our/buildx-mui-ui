/**
 * Checks if a given value is a valid date
 * @param date Date to check
 * @returns boolean indicating if the date is valid
 */
export const isValidDate = (date: any): boolean => {
  if (!date) return false;
  
  // If it's a Date object
  if (date instanceof Date) {
    return !isNaN(date.getTime());
  }
  
  // If it's a string, try to create a Date from it
  if (typeof date === 'string') {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime());
  }
  
  return false;
};

/**
 * Checks if a number is a valid Unix timestamp
 * @param timestamp Number to check
 * @returns boolean indicating if the number is a valid timestamp
 */
export const isUnixTimestamp = (timestamp: number): boolean => {
  if (typeof timestamp !== 'number' || isNaN(timestamp)) return false;
  
  // Reasonable timestamp range check (1970-01-01 to 2100-01-01)
  const minTimestamp = 0;
  const maxTimestamp = 4102444800000; // 2100-01-01
  
  return timestamp >= minTimestamp && timestamp <= maxTimestamp;
};
