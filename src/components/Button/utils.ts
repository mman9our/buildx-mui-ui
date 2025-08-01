/**
 * Maps shadcn variants to their MUI equivalents
 */
export const shadcnToMuiVariants: Record<string, string> = {
  default: "contained",
  outline: "outlined",
  ghost: "contained",
  link: "contained",
  secondary: "contained",
  destructive: "contained",
};

/**
 * Transforms shadcn-style props to MUI-style props
 */
export const mapShadcnToMui = (props: any) => {
  const { variant = "default", size = "default", ...rest } = props;

  return {
    variant: shadcnToMuiVariants[variant] || "contained",
    ...rest,
  };
};
