import React from "react";
import "./styles.css";

interface Props {
  text: string;
}

function NavButton({ text }: Props) {
  return <button className="connect-button">{text}</button>;
}

export default NavButton;
