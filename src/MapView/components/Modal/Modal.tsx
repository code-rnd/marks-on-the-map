import { FC, memo, ReactNode } from "react";
import s from "./Modal.module.scss";
import { Icon } from "../Icon";
import { useAnimate } from "../../utils/use-animate";

type ModalProps = {
  title: string;
  onClose: () => void;
  children?: ReactNode;
};

const config = {
  mount: {
    style: { bottom: 0 },
    delay: 200,
  },
  unMount: {
    style: { bottom: -400 },
    delay: 200,
  },
};

export const Modal: FC<ModalProps> = memo(({ title, onClose, children }) => {
  const { handleClose, style } = useAnimate(config);

  return (
    <div className={s.container} style={style}>
      <div className={s.header}>
        <div className={s.title}>{title}</div>
        <div className={s.close} onClick={() => handleClose(onClose)}>
          <Icon name="plus" />
        </div>
      </div>
      {children}
    </div>
  );
});
