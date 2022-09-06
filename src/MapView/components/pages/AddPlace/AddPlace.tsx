import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../../TopBar";

export const AddPlace: FC = memo(() => {
  const navigate = useNavigate();

  return (
    <>
      <TopBar
        title="Добавить локацию"
        left={() => navigate("/")}
        right={() => navigate("/")}
      />
      <div> sdfdf </div>
    </>
  );
});
