import React from "react";

import "./Badge.css";

import { Icon } from "../Icon/Icon";

interface BadgeProps {
  /**
   * Color style
   */
  color?: "primary" | "grey" | "alert" | "info" | "attention" | "confirm";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  iconLeft: string;
  iconRight: string;
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Badge = ({
  color = "primary",
  size = "medium",
  iconLeft,
  iconRight,
  label,
  ...props
}: BadgeProps) => {
  return (
    <div
      className={["ui-badge", `ui-badge--${size}`, `ui-badge--${color}`].join(
        " "
      )}
      {...props}
    >
      {iconLeft && <Icon name={iconLeft} className="ui-badge-svg" />}
      {label}
      {iconRight && <Icon name={iconRight} className="ui-badge-svg" />}
    </div>
  );
};
