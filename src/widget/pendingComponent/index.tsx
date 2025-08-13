import React from "react";
import "./style/index.scss";

export const PendingComponent: React.FC = () => {
  return (
    <div className={"pending__container"}>
      <h1>
        Загрузка...
      </h1>
    </div>
  );
};