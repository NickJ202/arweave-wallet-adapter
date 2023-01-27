import React from "react";

export interface IProps {
  type: "primary";
  label: string | number | React.ReactNode;
  handlePress: (e: React.MouseEvent) => void;
  disabled?: boolean;
  active?: boolean;
  loading?: boolean;
  icon?: string;
  iconLeftAlign?: boolean;
  formSubmit?: boolean;
  noFocus?: boolean;
  useMaxWidth?: boolean;
  noMinWidth?: boolean;
  testingCtx?: string;
}
