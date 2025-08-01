import { SxProps, Theme } from "@mui/material";

export interface BuildxMediaCardProps {
  /**
   * Configuration for the media card
   */
  config?: Record<string, any>;

  /**
   * Metadata for the media
   */
  metaData?: Record<string, any>;

  /**
   * Source URL for the media
   */
  src?: string;

  /**
   * Component type to render ('img', 'video', 'audio', or 'auto')
   */
  component?: "img" | "video" | "audio" | "auto";

  /**
   * Default value/fallback for the media source
   */
  defaultValue?: string;

  /**
   * Whether to disable caching for the media
   */
  disabledCache?: boolean;

  /**
   * Whether to disable placeholder when media fails to load
   */
  disablePlaceholder?: boolean;

  /**
   * Configuration for the icon
   */
  iconConfig?: {
    icon?: string;
    url?: string;
    visibility?: "PUBLIC" | "PRIVATE";
  };

  /**
   * Whether the image is currently loading
   */
  isLoadingImage?: boolean;

  /**
   * Whether the cursor should be a pointer on hover
   */
  cursorPointer?: boolean;

  /**
   * ID of the page containing the media card
   */
  pageId?: string;

  /**
   * Tooltip text
   */
  toolTip?: string;

  /**
   * Background color for the tooltip
   */
  toolTipBackgroundColor?: string;

  /**
   * Border radius for the tooltip
   */
  toolTipBorderRadius?: string | number;

  /**
   * Font size for the tooltip
   */
  toolTipFontSize?: string | number;

  /**
   * Text color for the tooltip
   */
  toolTipTextColor?: string;

  /**
   * Reference key for the tooltip
   */
  toolTipKeyReference?: string;

  /**
   * Object fit property for the media
   */
  "sx.objectFit"?: "contain" | "cover" | "fill" | "none" | "scale-down";

  /**
   * MUI SX styling prop
   */
  sx?: SxProps<Theme>;

  /**
   * Internal styling prop used by the component
   */
  $_sx?: SxProps<Theme>;

  /**
   * Additional props to be passed to the underlying component
   */
  [key: string]: any;
}
