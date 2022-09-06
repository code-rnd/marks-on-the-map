import { FC, memo, useEffect } from "react";
import { Modal } from "../Modal";
import { usePlaces } from "../../contexts/places";
import { useCoordinates } from "../../contexts";

export const ModalFormPlace: FC<{ onClose: () => void }> = memo(
  ({ onClose }) => {
    const { centerCoordinates } = useCoordinates();
    const { setPlaces, places } = usePlaces();

    useEffect(() => {
      console.log({ centerCoordinates, places });
    }, [centerCoordinates, places]);

    return (
      <Modal title="Добавить объект" onClose={onClose}>
        <div>x: {centerCoordinates.lat}</div>
        <div>x: {centerCoordinates.lng}</div>

        <button
          onClick={() =>
            setPlaces([
              {
                position: { ...centerCoordinates } as any,
                title: "dfdfd",
                id: 2,
              },
            ])
          }
        >
          Добавить
        </button>

        {/*<div>Передвиньте карту, чтобы метка указала на объект</div>*/}

        {/*<div>Описание*</div>*/}
        {/*<input*/}
        {/*  type="text"*/}
        {/*  placeholder="Расскажите, что это за объект. Например, озеро, лес ..."*/}
        {/*/>*/}
        {/*<button>Отправить</button>*/}
        {/*<button>Добавить фото</button>*/}
      </Modal>
    );
  }
);
