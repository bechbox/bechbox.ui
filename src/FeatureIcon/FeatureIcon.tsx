import React from "react";

import "./FeatureIcon.css";

import { Icon } from "../Icon/Icon";

interface FeatureIconProps {
  /**
   * Color style
   */
  color?: "primary" | "grey" | "alert" | "info" | "attention" | "confirm";
  /**
   * How large should the button be?
   */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /**
   * Button contents
   */
  icon: string;
}

/**
 * Primary UI component for user interaction
 */
export const FeatureIcon = ({
  color = "primary",
  size = "medium",
  icon,
  ...props
}: FeatureIconProps) => {
  return (
    <div
      className={[
        "ui-featureicon",
        `ui-featureicon--${size}`,
        `ui-featureicon--${color}`,
      ].join(" ")}
      {...props}
    >
      {icon && <Icon name={icon} className="ui-featureicon-svg" />}
    </div>
  );
};
