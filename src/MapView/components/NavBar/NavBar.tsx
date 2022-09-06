import { FC, memo, ReactElement } from "react";
import { Link } from "react-router-dom";
import s from "./NavBar.module.scss";
import { Icon } from "../Icon";
import { cn } from "../../utils";

type TabNames = "Search" | "Labels" | "Route" | "AddPlace";
const tabs: { name: TabNames; title: ReactElement; url: string }[] = [
  {
    name: "Search",
    title: <Icon name="search" />,
    url: "/serach",
  },
  {
    name: "Labels",
    title: <Icon name="label" />,
    url: "/labels",
  },
  {
    name: "Route",
    title: <Icon name="route" />,
    url: "/route",
  },
];

export const NavBar: FC<{ handleAdd: () => void; isEditMode?: boolean }> = memo(
  ({ handleAdd, isEditMode }) => {
    return (
      <div className={s.container}>
        {tabs.map(({ name, title, url }, index) => (
          <div className={cn([s.tab, isEditMode && s.disabled])} key={index}>
            <Link to={url}>{title}</Link>
          </div>
        ))}
        <div className={s.tab} onClick={handleAdd}>
          <Icon name="plus" />
        </div>
      </div>
    );
  }
);
