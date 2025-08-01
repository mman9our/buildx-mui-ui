import { CardMedia } from "@mui/material";
import axios from "axios";
import { forwardRef, useMemo } from "react";
import { useQuery } from "react-query";
import { BuildxMediaCardProps } from "./types";

// Import a placeholder image - this will need to be added to your assets
const VideoPlaceholder =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

export const BuildxMediaCard = forwardRef<HTMLDivElement, BuildxMediaCardProps>(
  (props, ref) => {
    const {
      config,
      metaData,
      src,
      component,
      defaultValue: _defaultValue,
      disabledCache,
      disablePlaceholder,
      iconConfig,
      isLoadingImage,
      cursorPointer,
      pageId,
      toolTip,
      toolTipBackgroundColor,
      toolTipBorderRadius,
      toolTipFontSize,
      toolTipTextColor,
      toolTipKeyReference,
      ["sx.objectFit"]: objectFit,
      ...restProps
    } = props;

    // Check if we're in a builder environment - defaulting to false since react-router-dom might not be available
    const isInBuilder = false;
    const isHttpUrl = iconConfig?.icon?.toLowerCase().match(/http[s]*:\/\//);
    const match =
      typeof iconConfig?.icon === "string"
        ? iconConfig?.icon?.match(/^([^:]+):\/\/(.+)$/)
        : null;
    const mediaType = match?.[1];
    const mediaName = match?.[2];

    // Get tokens from localStorage if available
    let accessToken = null;
    let deviceToken = null;

    try {
      accessToken =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : null;
      deviceToken =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken-device")
          : null;
    } catch (e) {
      console.error("Error accessing localStorage:", e);
    }

    const token = accessToken || deviceToken;

    const { data } = useQuery(
      ["media", mediaType, mediaName],
      async () => {
        if (!mediaType || !mediaName) {
          return {
            items: [],
          };
        }

        try {
          const apiUrl = import.meta.env.VITE_HOST_API_KEY
            ? `${import.meta.env.VITE_HOST_API_KEY}/api/media`
            : "/api/media";

          const response = await axios.get(apiUrl, {
            params: {
              keyword: mediaName || undefined,
              type: mediaType || undefined,
              strategy: "summary",
            },
            headers: token ? { Authorization: `Bearer ${token}` } : {},
          });

          return response.data;
        } catch (error) {
          console.error("Error fetching media:", error);
          return { items: [] };
        }
      },
      {
        enabled:
          !!mediaType &&
          !!mediaName &&
          iconConfig?.visibility === "PRIVATE" &&
          !isHttpUrl,
        refetchOnMount: false,
      }
    );

    const items = data?.items || [];
    const imageUrlFetchedValue =
      items?.length > 0 && items[0]?.name === mediaName ? items[0]?.url : null;
    let imageUrl =
      match && !isHttpUrl
        ? iconConfig?.url
        : iconConfig?.icon || imageUrlFetchedValue;
    let defaultValue = _defaultValue;

    const disableCache = (url: string | undefined) => {
      if (!url || typeof url !== "string") return null;

      const uniqueParam = new Date().getTime();
      const separator = url?.includes("?") ? "&" : "?";
      if (url?.startsWith("blob:")) return url;
      return `${url}${separator}_bx_t=${uniqueParam}`;
    };

    let _src = src;
    const memoizedCachedImageUrl = useMemo(
      () => disableCache(imageUrl),
      [imageUrl]
    );
    const memoizedCachedDefaultValue = useMemo(
      () => disableCache(defaultValue),
      [defaultValue]
    );
    const memoizedCachedSrc = useMemo(() => disableCache(src), [src]);

    if (disabledCache) {
      imageUrl = memoizedCachedImageUrl || undefined;
      defaultValue = memoizedCachedDefaultValue || undefined;
      _src = memoizedCachedSrc || undefined;
    }

    const onErrorHandleHideImage = (e: React.SyntheticEvent<HTMLElement>) => {
      if (disablePlaceholder) {
        (e.currentTarget as HTMLElement).style.display = "none";
      }
    };

    const getAutoComponentType = () => {
      const fileExtension =
        typeof src === "string" ? src?.split(".").pop()?.toLowerCase() : "";
      if (fileExtension) {
        if (["mp4", "webm", "ogg"].includes(fileExtension)) return "video";
        if (["mp3", "wav", "ogg"].includes(fileExtension)) return "audio";
        if (
          ["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(fileExtension)
        )
          return "img";
      }
      return "img";
    };

    const componentProps = { ...restProps, sx: restProps.$_sx };
    const resolvedComponent: "img" | "video" | "audio" = (
      component === "auto" ? getAutoComponentType() : component || "img"
    ) as "img" | "video" | "audio";
    const imageSrc = _src || defaultValue;

    const renderMedia = () => {
      if (resolvedComponent === "img" || !resolvedComponent) {
        return (
          <>
            {imageUrl ? (
              <img
                src={imageUrl || undefined}
                style={{
                  width: "100%",
                  height: "100%",
                  position: isLoadingImage ? "unset" : "absolute",
                  cursor: cursorPointer ? "pointer" : "default",
                  objectFit: objectFit as any,
                  ...(componentProps.sx as any),
                }}
                alt={mediaName || "Media"}
                onError={onErrorHandleHideImage}
                onLoad={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "unset";
                }}
              />
            ) : (
              <CardMedia
                component="img"
                image={imageSrc || (isInBuilder ? VideoPlaceholder : undefined)}
                onError={onErrorHandleHideImage}
                sx={{
                  objectFit: objectFit as any,
                  ...(restProps.sx || {}),
                }}
              />
            )}
          </>
        );
      } else {
        return (
          <CardMedia
            component={resolvedComponent}
            src={imageUrl || _src || undefined}
            onError={onErrorHandleHideImage}
            sx={{
              objectFit: objectFit as any,
              ...(restProps.sx || {}),
            }}
          />
        );
      }
    };

    return (
      <div
        ref={ref}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        {renderMedia()}
      </div>
    );
  }
);

BuildxMediaCard.displayName = "BuildxMediaCard";
