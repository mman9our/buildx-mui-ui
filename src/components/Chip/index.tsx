import { Chip } from "@mui/material";
import { VariantProps } from "class-variance-authority";
import { joinObjects } from "hd-utils";
import { ComponentProps, forwardRef } from "react";
import { mapShadcnToMui } from "../Button/utils";

type ChipProps = ComponentProps<typeof Chip> &
  VariantProps<typeof Chip> & {
    label: string;
    avatarSrc?: string;
    hoverStyles?: React.CSSProperties;
    hover?: React.CSSProperties;
    pageId?: string;
    config?: any;
    metaData?: any;
    "data-bx-key"?: string;
    onDelete?: () => void;
    showDeleteIcon?: boolean;
    clickable?: boolean;
    style?: React.CSSProperties;
    backgroundColor?: string;
    borderColor?: string;
    labelColor?: string;
    labelChip?: string | any;
  };

export const BuildxChip = forwardRef<HTMLDivElement, ChipProps>(
  ({
    variant,
    size,
    color,
    className,
    label,
    avatarSrc,
    hover,
    pageId,
    config,
    metaData,
    "data-bx-key": dataBxKey,
    hoverStyles = hover,
    onDelete,
    showDeleteIcon = false,
    clickable,
    style,
    backgroundColor,
    borderColor,
    labelColor,
    labelChip,
    ...props
  }: ChipProps) => {
    const muiProps = mapShadcnToMui(props);

    return (
      <Chip
        size={size}
        sx={muiProps.sx}
        data-bx-id={muiProps.dataBxId}
        style={joinObjects(
          {
            backgroundColor: backgroundColor,
            width: "100%",
            height: "100%",
            borderColor: borderColor,
            borderWidth: "1px",
            borderStyle: "solid",
            color: labelColor,
          },
          style
        )}
        label={
          typeof labelChip === "object" && labelChip !== null
            ? labelChip?.value
            : labelChip
        }
        variant={variant}
        onDelete={showDeleteIcon ? onDelete : undefined}
        clickable={clickable}
        {...muiProps}
      />
    );
  }
);
