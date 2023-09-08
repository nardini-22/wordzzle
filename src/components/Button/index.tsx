import { MouseEventHandler } from "react";

interface IButton {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ value, onClick }: IButton) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Button;
