import { LoadingButton } from "@mui/lab";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { mapShadcnToMui } from "./utils";

type ButtonProps = ComponentProps<typeof LoadingButton> &
  VariantProps<typeof LoadingButton> & {
    icon?: React.ReactNode;
    isLeft?: boolean;
    hoverStyles?: React.CSSProperties;
  };

export const MUIButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant,
    size,
    color,
    className,
    icon,
    isLeft,
    children,
    hoverStyles,
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
