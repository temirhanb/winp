import React from "react";
import "./style/index.scss";

type TProps = {
  error: string
}
export const ErrorComponent: React.FC<TProps> = ({error}) => {
  return <div className={"error__container"}>
    <h1>Ой чтото пошло не так: {error}</h1>
  </div>;
};