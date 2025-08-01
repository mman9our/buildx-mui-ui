/**
 * Format JSON for display
 */
export const formatJSON = (jsonString: any): string | null => {
  try {
    // If already an object, stringify it
    const jsonObj = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
    return JSON.stringify(jsonObj, null, 2);
  } catch (error) {
    console.error("Error formatting JSON:", error);
    return null;
  }
};

/**
 * Decode markdown-like syntax in text
 */
export const decodeMarkdown = (text: string): string => {
  if (!text || typeof text !== 'string') return text;

  // Basic markdown processing
  // Bold
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Italic
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Inline Code
  text = text.replace(/`(.*?)`/g, '<code>$1</code>');
  
  return text;
};

/**
 * Format a date string
 */
export const formatDate = (
  dateStr: string, 
  formatString?: string,
  fallback: string = '', 
  isUserLocalTime: boolean = false
): string => {
  if (!dateStr) return fallback;

  try {
    const date = new Date(dateStr);
    
    if (isNaN(date.getTime())) {
      return fallback;
    }

    if (formatString) {
      // Custom format implementation
      return formatDateWithPattern(date, formatString);
    }

    // Default format: ISO string or localized
    return isUserLocalTime 
      ? date.toLocaleString() 
      : date.toISOString();
      
  } catch (error) {
    console.error("Error formatting date:", error);
    return fallback;
  }
};

/**
 * Format date with a custom pattern
 */
const formatDateWithPattern = (date: Date, pattern: string): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return pattern
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year.toString())
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

/**
 * Convert text with links to React-compatible format
 */
export const convertText = (
  text: string, 
  linkColor?: string,
  underlineLink?: boolean
): string => {
  if (!text || typeof text !== 'string') return text;

  // Replace URLs with HTML links
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, (url) => {
    const style = `color: ${linkColor || 'inherit'}; text-decoration: ${underlineLink ? 'underline' : 'none'};`;
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="${style}">${url}</a>`;
  });
};
