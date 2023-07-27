import React from "react";

import "./Button.css";

import { Icon } from "../Icon/Icon";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  /**
   * Button contents
   */
  label: string;
  iconLeft?: string;
  iconRight?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) => {
  const mode = primary ? "ui-button--primary" : "ui-button--secondary";
  return (
    <button
      type="button"
      className={["ui-button", `ui-button--${size}`, mode].join(" ")}
      {...props}
    >
      {iconLeft && (
        <Icon name={iconLeft} className="ui-button-icon ui-button-iconleft" />
      )}
      {label}
      {iconRight && (
        <Icon name={iconRight} className="ui-button-icon ui-button-iconright" />
      )}
    </button>
  );
};
