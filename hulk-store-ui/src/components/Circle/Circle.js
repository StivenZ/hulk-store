import React from "react";

const style = {
  borderRadius: "50%",
};
export const Circle = ({ size, color }) => (
  <div
    style={{
      ...style,
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: color,
    }}
  ></div>
);
