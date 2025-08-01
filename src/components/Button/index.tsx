import { LoadingButton } from "@mui/lab";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { mapShadcnToMui } from "./utils";

type ButtonProps = ComponentProps<typeof LoadingButton> &
  VariantProps<typeof LoadingButton> & {
    icon?: React.ReactNode;
    isLeft?: boolean;
    hoverStyles?: React.CSSProperties;
    hover?: React.CSSProperties;
    pageId?: string;
    config?: any;
    metaData?: any;
    "data-bx-key"?: string;
    enableLoading?: boolean;
  };

export const BuildxButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant,
    size,
    color,
    className,
    icon,
    children,
    hover,
    pageId,
    config,
    metaData,
    "data-bx-key": dataBxKey,
    enableLoading,
    hoverStyles = hover,
    isLeft,
    ...props
  }: ButtonProps) => {
    const muiProps = mapShadcnToMui(props);

    return (
      <LoadingButton
        {...muiProps}
        variant={variant}
        color={color}
        size={size}
        sx={{
          ...(hoverStyles && {
            "&:hover": {
              ...hoverStyles,
            },
          }),
        }}
      >
        {isLeft && icon}
        {children}
        {!isLeft && icon}
      </LoadingButton>
    );
  }
);
