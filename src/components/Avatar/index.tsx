import Avatar from "@mui/material/Avatar";
import { FC } from "react";

interface MUIAvatarProps {
  src?: string;
  style?: React.CSSProperties;
  alt?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export const BuildxAvatar: FC<MUIAvatarProps> = ({
  src,
  style,
  children,
  ...props
}) => {
  return (
    <Avatar
      src={src}
      style={{ width: "100%", height: "100%", position: "absolute", ...style }}
      {...props}
    >
      {children}
    </Avatar>
  );
};
