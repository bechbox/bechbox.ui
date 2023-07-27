import React from "react";

import "./WebIcon.css";

import { Icon } from "../Icon/Icon";

interface WebIconProps {
  /**
   * Color style
   */
  color?:
    | "dark"
    | "light"
    | "grey10"
    | "grey20"
    | "grey30"
    | "grey40"
    | "grey50"
    | "grey60"
    | "grey70"
    | "grey80"
    | "grey90";
  /**
   * How large should the icon be?
   */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /**
   * Icon contents
   */
  icon: string;
}

/**
 * Primary UI component for user interaction
 */
export const WebIcon = ({
  color = "dark",
  size = "medium",
  icon,
  ...props
}: WebIconProps) => {
  return (
    <div
      className={[
        "ui-webicon",
        `ui-webicon--${size}`,
        `ui-webicon--${color}`,
      ].join(" ")}
      {...props}
    >
      {icon && <Icon name={icon} className="ui-webicon-svg" />}
    </div>
  );
};
