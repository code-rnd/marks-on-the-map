import { FC, memo } from "react";
import s from "./TopBar.module.scss";

interface TopBarModel {
  left?: () => void;
  right?: () => void;
  title: string;
}

export const TopBar: FC<TopBarModel> = memo(({ left, right, title }) => {
  return (
    <>
      {left ? (
        <div className={s.left} onClick={left}>
          Назад
        </div>
      ) : (
        <div />
      )}
      <div className={s.title}>{title}</div>
      {right ? (
        <div className={s.right} onClick={right}>
          Готово
        </div>
      ) : (
        <div />
      )}
    </>
  );
});
