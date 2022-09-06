import { FC, SVGProps } from "react";
import Icons from "../../assets/icons.svg";

interface IconProps extends SVGProps<SVGElement> {
  name: string;
}

export const Icon: FC<IconProps> = ({
  className,
  name,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  onClick,
}) => {
  return (
    <svg
      className={className}
      width={width || 20}
      height={height || 20}
      fill={fill || "#C3D1E6"}
      stroke={stroke}
      strokeWidth={strokeWidth}
      onClick={onClick}
    >
      <use href={`${Icons}#icon-${name}`} />
    </svg>
  );
};
