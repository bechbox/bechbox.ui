import React from "react";

import "./AvatarGroup.css";

import { Avatar } from "../Avatar/Avatar";

interface AvatarGroupProps {
  /**
   * How large should the avatar be?
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * AvatarGroup contents
   */
  label: string;
  subLabel?: string;
  initials?: string;
  img?: { src: string; alt: string };
}

/**
 * Primary UI component for user interaction
 */
export const AvatarGroup = ({
  size = "medium",
  label,
  subLabel,
  initials,
  img,
  ...props
}: AvatarGroupProps) => {
  return (
    <div
      className={["ui-avatargroup", `ui-avatargroup--${size}`].join(" ")}
      {...props}
    >
      <Avatar img={img} label={initials} size={size} />
      <div className="ui-avatargroup-text">
        <div className="ui-avatargroup-label">{label}</div>
        {subLabel && <div className="ui-avatargroup-sublabel">{subLabel}</div>}
      </div>
    </div>
  );
};
