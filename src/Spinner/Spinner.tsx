import React from "react";

import "./Spinner.css";

interface SpinnerProps {
  color?: "light" | "dark";
}

/**
 * Primary UI component for user interaction
 */
export const Spinner = ({ color = "dark", ...props }: SpinnerProps) => {
  return (
    <div
      className={["ui-spinner", `ui-spinner--${color}`].join(" ")}
      {...props}
    ></div>
  );
};
