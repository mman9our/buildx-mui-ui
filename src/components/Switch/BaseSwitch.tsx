import { Switch, styled } from "@mui/material";
import { FC } from "react";
import { BaseSwitchProps } from "./types";

// Props that should not be forwarded to the DOM
const nonDOMProps = [
  "thumbColor",
  "trackColor",
  "disableEffect",
  "customIconOn",
  "customIconOff",
  "customAndroidIconOn",
  "customAndroidIconOff",
  "thumbSize",
  "trackWidth",
  "trackHeight",
  "switchAppearance",
  "disableChanging",
];

const BaseSwitchStyled = styled(Switch, {
  shouldForwardProp: (prop) => !nonDOMProps.includes(prop as string),
})<BaseSwitchProps>(({ disableChanging }) => {
  return (
    disableChanging && {
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        cursor: "not-allowed",
      },
      "&.Mui-disabled": {
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    }
  );
});

// Default Switch
const DefaultSwitchStyled = styled(BaseSwitchStyled, {
  shouldForwardProp: (prop) => !nonDOMProps.includes(prop as string),
})<BaseSwitchProps>(
  ({ thumbColor, trackColor, disableEffect, customIconOn, customIconOff }) => {
    return {
      margin: 8,
      "& .MuiSwitch-thumb": {
        backgroundSize: "contain",
        width: 22,
        height: 22,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: thumbColor || "#fff",
      },
      "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
        backgroundImage: `url(${
          customIconOn?.url || customIconOn?.icon || ""
        })`,
        backgroundColor: thumbColor || "#fff",
      },
      "& .MuiSwitch-switchBase .MuiSwitch-thumb": {
        backgroundImage: `url(${
          customIconOff?.url || customIconOff?.icon || ""
        })`,
      },
      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: `${trackColor} !important`,
        opacity: 1,
      },
      "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
        backgroundColor: `${trackColor} !important`,
        opacity: 0.3,
      },
      ...(!disableEffect && {
        "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
          backgroundColor: `${trackColor} !important`,
          opacity: `1 !important`,
        },
      }),
    };
  }
);

// iOS Switch
const IOSSwitchStyled = styled(BaseSwitchStyled, {
  shouldForwardProp: (prop) => !nonDOMProps.includes(prop as string),
})<BaseSwitchProps>(
  ({
    thumbColor,
    trackColor,
    disableEffect,
    thumbSize,
    trackHeight,
    trackWidth,
  }) => {
    const effectiveThumbSize = thumbSize || "22px";
    const effectiveTrackWidth = trackWidth || "44px";
    const effectiveTrackHeight = trackHeight || "26px";

    const computedMargin =
      (parseInt(effectiveTrackHeight, 10) - parseInt(effectiveThumbSize, 10)) /
      2;

    const checkedTransform = `translateX(calc(${effectiveTrackWidth} - ${effectiveThumbSize} - ${
      computedMargin * 2
    }px))`;
    const labelMarginLeft = parseInt(effectiveTrackWidth, 10) / 16 + 8 + "px";

    return {
      width: effectiveTrackWidth,
      height: effectiveTrackHeight,
      padding: 0,
      margin: labelMarginLeft,
      "& .MuiSwitch-track": {
        width: effectiveTrackWidth,
        height: effectiveTrackHeight,
        borderRadius: parseInt(effectiveTrackHeight, 10) / 2,
        backgroundColor: `${trackColor} !important` || "#E9E9EA",
        opacity: 1,
      },
      "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: computedMargin,
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: checkedTransform,
          color: "#fff",
        },
      },
      "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: `${effectiveThumbSize}`,
        height: `${effectiveThumbSize}`,
        backgroundColor: `${thumbColor} !important` || "#fff",
      },
      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: `${trackColor} !important`,
        opacity: 1,
      },
      "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
        backgroundColor: `${trackColor} !important`,
        opacity: 0.3,
      },
      ...(!disableEffect && {
        "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
          backgroundColor: `${trackColor} !important`,
          opacity: `1 !important`,
        },
      }),
    };
  }
);

// Android Switch
const AndroidSwitchStyled = styled(BaseSwitchStyled, {
  shouldForwardProp: (prop) => !nonDOMProps.includes(prop as string),
})<BaseSwitchProps>(
  ({
    thumbColor,
    trackColor,
    customAndroidIconOn,
    customAndroidIconOff,
    disableEffect,
    trackHeight,
    trackWidth,
    thumbSize,
  }) => {
    const effectiveThumbSize = thumbSize ? `${thumbSize}` : "16px";
    const effectiveTrackWidth = trackWidth ? `${trackWidth}` : "60px";
    const effectiveTrackHeight = trackHeight ? `${trackHeight}` : "32px";

    const computedPadding =
      (parseInt(effectiveTrackHeight, 10) - parseInt(effectiveThumbSize, 10)) /
      2;
    const checkedTransform = `translateX(calc(${effectiveTrackWidth} - ${effectiveThumbSize} - ${
      computedPadding * 2
    }px))`;

    const validAndroidIconOn = customAndroidIconOn
      ? `url(${customAndroidIconOn?.url || customAndroidIconOn?.icon})`
      : "none";
    const validAndroidIconOff = customAndroidIconOff
      ? `url(${customAndroidIconOff?.url || customAndroidIconOff?.icon})`
      : "none";
    const labelMarginLeft = parseInt(effectiveTrackWidth, 10) / 16 + 8 + "px";

    return {
      width: effectiveTrackWidth,
      height: effectiveTrackHeight,
      padding: 0,
      margin: labelMarginLeft,
      "& .MuiSwitch-track": {
        backgroundColor: `${trackColor} !important`,
        borderRadius: parseInt(effectiveTrackHeight, 10) / 2,
        width: "100%",
        height: "100%",
        opacity: 1,
        position: "relative",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: 16,
          height: 16,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        },
        "&::before": {
          backgroundImage: validAndroidIconOn,
          left: 12,
        },
        "&::after": {
          backgroundImage: validAndroidIconOff,
          right: 12,
        },
      },
      "& .MuiSwitch-switchBase": {
        padding: computedPadding,
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: checkedTransform,
          ...(disableEffect
            ? {
                "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track":
                  {
                    backgroundColor: `${trackColor} !important`,
                    opacity: 1,
                  },
              }
            : {
                "& + .MuiSwitch-track": {
                  backgroundColor: `${trackColor} !important`,
                  opacity: 1,
                  border: 0,
                },
              }),
        },
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: thumbColor || "white",
        boxShadow: "none",
        width: effectiveThumbSize,
        height: effectiveThumbSize,
      },
      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: `${trackColor} !important`,
        opacity: 1,
      },
      "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
        backgroundColor: `${trackColor} !important`,
        opacity: 0.3,
      },
      ...(!disableEffect && {
        "& .MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track": {
          backgroundColor: `${trackColor} !important`,
          opacity: `1 !important`,
        },
      }),
    };
  }
);

export const BaseSwitch: FC<BaseSwitchProps> = (props) => {
  const {
    switchAppearance,
    disableEffect,
    trackWidth,
    trackHeight,
    ...otherProps
  } = props;

  switch (switchAppearance) {
    case "iOS":
      return (
        <IOSSwitchStyled
          disableEffect={disableEffect}
          trackWidth={trackWidth}
          trackHeight={trackHeight}
          {...otherProps}
        />
      );
    case "Android":
      return (
        <AndroidSwitchStyled
          disableEffect={disableEffect}
          trackWidth={trackWidth}
          trackHeight={trackHeight}
          {...otherProps}
        />
      );
    default:
      return (
        <DefaultSwitchStyled disableEffect={disableEffect} {...otherProps} />
      );
  }
};
