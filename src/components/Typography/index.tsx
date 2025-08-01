import { Typography as MUITypographyBase, useTheme } from "@mui/material";
import { FC } from "react";
import { convertText, decodeMarkdown, formatDate, formatJSON } from "./utils";

export interface MUITypographyProps {
  children: React.ReactNode;
  textTypo?: string;
  format?: string;
  formatString?: string;
  config?: {
    isUserLocalTime?: boolean;
    underlineLink?: boolean;
    linkColor?: string;
    [key: string]: any;
  };
  metaData?: any;
  mapValuesObject?: any;
  pageId?: string;
  wordwrap?: string;
  visibleOverFlow?: boolean;
  wrapTypo?: "normal" | "nowrap" | "ellipsis";
  toolTip?: string;
  toolTipBackgroundColor?: string;
  toolTipBorderRadius?: string | number;
  toolTipFontSize?: string | number;
  toolTipTextColor?: string;
  toolTipKeyReference?: string;
  linkColor?: string;
  isMapValues?: boolean;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  color?: any;
  [key: string]: any;
}

export const BuildxTypography: FC<MUITypographyProps> = ({
  children,
  textTypo,
  format,
  formatString,
  config,
  metaData,
  mapValuesObject,
  pageId,
  wordwrap,
  visibleOverFlow,
  wrapTypo,
  toolTip,
  toolTipBackgroundColor,
  toolTipBorderRadius,
  toolTipFontSize,
  toolTipTextColor,
  toolTipKeyReference,
  linkColor: linkColorProp,
  isMapValues,
  ...restProps
}) => {
  const theme = useTheme();
  const isInBuilder = false; // Simplified from the router check
  const { isUserLocalTime, underlineLink, linkColor } = config || {};
  const isObject = typeof children === "object";

  const prettifyJSON = (jsonString: any) => {
    try {
      const formattedJSON = formatJSON(jsonString);
      return formattedJSON !== null ? <pre>{formattedJSON}</pre> : jsonString;
    } catch (error) {
      console.error("Error prettifying JSON:", error);
      return jsonString;
    }
  };

  let content = isObject ? prettifyJSON(JSON.stringify(children)) : children;

  if (typeof content === "string") {
    content = decodeMarkdown(content);
    content = convertText(content, linkColor, underlineLink);
  }

  const style = isObject ? { overflow: "auto", maxHeight: "300px" } : {};

  if (format === "Date Time") {
    content = formatDate(
      content,
      formatString,
      isInBuilder ? content : "",
      isUserLocalTime
    );
  }

  return (
    <MUITypographyBase
      {...restProps}
      style={style}
      sx={{
        overflow:
          wrapTypo === "ellipsis"
            ? "hidden"
            : visibleOverFlow
            ? "visible"
            : "hidden",
        ...(wrapTypo !== "ellipsis" && {
          whiteSpace: wrapTypo,
        }),
        ...(wrapTypo === "ellipsis" && {
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }),
        minWidth: "10px",
        color:
          restProps.color &&
          typeof restProps.color === "string" &&
          (restProps.color === "primary" ||
            restProps.color === "secondary" ||
            restProps.color === "error" ||
            restProps.color === "warning" ||
            restProps.color === "info" ||
            restProps.color === "success")
            ? theme.palette[
                restProps.color as
                  | "primary"
                  | "secondary"
                  | "error"
                  | "warning"
                  | "info"
                  | "success"
              ].main
            : restProps.color || theme.palette.text.primary,
        ...restProps.sx,
      }}
    >
      {content}
    </MUITypographyBase>
  );
};
