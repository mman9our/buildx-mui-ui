/**
 * Maps shadcn variants to their MUI equivalents for Chip component
 */
export const shadcnToMuiVariants: Record<string, string> = {
  default: "filled",
  outline: "outlined",
  ghost: "filled",
  link: "filled",
  secondary: "filled",
  destructive: "filled",
};

/**
 * Transforms shadcn-style props to MUI-style props
 */
export const mapShadcnToMui = (props: any) => {
  const { variant = "default", size = "medium", ...rest } = props;

  return {
    variant: shadcnToMuiVariants[variant] || "filled",
    ...rest,
  };
};
