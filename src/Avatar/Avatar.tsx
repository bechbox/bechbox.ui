import React from "react";

import "./Avatar.css";

interface AvatarProps {
  /**
   * How large should the avatar be?
   */
  size?:
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "profile"
    | "profilexl";
  /**
   * Avatar contents
   */
  label?: string;
  img?: { src: string; alt: string };
}

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({
  size = "medium",
  label,
  img,
  ...props
}: AvatarProps) => {
  return (
    <div className={["ui-avatar", `ui-avatar--${size}`].join(" ")} {...props}>
      {img ? <img src={img.src} alt={img.alt} /> : label}
    </div>
  );
};
