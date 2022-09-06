import { FC, memo } from "react";
import s from "./Button.module.scss";
import { cn } from "../../utils";

interface ButtonModel {
  text: string;
  handleClick: () => void;
  type?: "primary" | "default" | "warning" | "error" | "success";
}
export const Button: FC<ButtonModel> = memo(
  ({ text, handleClick, type = "default" }) => {
    return (
      <div
        onClick={handleClick}
        className={cn([
          s.containier,
          type === "default" && s.default,
          type === "primary" && s.primary,
          type === "warning" && s.warning,
          type === "error" && s.error,
          type === "success" && s.success,
        ])}
      >
        {text}
      </div>
    );
  }
);
