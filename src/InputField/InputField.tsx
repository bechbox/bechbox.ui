import React from "react";

import "./InputField.css";

import { Icon } from "../Icon/Icon";

interface InputFieldProps {
  state?: "normal" | "error";
  /**
   * Field contents
   */
  label?: string;
  iconLeft?: string;
  iconRight?: string;
  placeHolder?: string;
  value?: string;
  message?: string;
}

/**
 * Primary UI component for user interaction
 */
export const InputField = ({
  state = "normal",
  label,
  iconLeft,
  iconRight,
  placeHolder,
  value,
  message,
  ...props
}: InputFieldProps) => {
  return (
    <div className="ui-input">
      <div className="ui-input-label">{label}</div>
      <div className="ui-input-group">
        {iconLeft && (
          <Icon name={iconLeft} className="ui-input-icon ui-input-iconleft" />
        )}
        <input
          type="input"
          className={`ui-input-field ui-input-field--${state} ${
            iconLeft ? "ui-input-field-iconleft" : ""
          } ${iconRight ? "ui-input-field-iconright" : ""}`}
          {...props}
          value={value}
        />
        {iconRight && (
          <Icon
            name={iconRight}
            className={`ui-input-icon ui-input-iconright ui-input-iconright--${state}`}
          />
        )}
      </div>
      <div className={`ui-input-message ui-input-message--${state}`}>
        {message}
      </div>
    </div>
  );
};
