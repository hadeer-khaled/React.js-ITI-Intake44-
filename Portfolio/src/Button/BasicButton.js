import * as React from "react";
import "./BasicButton.css";
import Button from "@mui/material/Button";

export default function BasicButton(props) {
  return <Button variant="contained">{props.buttonContent}</Button>;
}
