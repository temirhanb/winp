import * as React from "react";
import {type TData} from "../../shared";
import "./style/index.scss";

type TProps = {
  data: TData[]
}
export const ItemsList: React.FC<TProps> = ({data}) => {

  return (
    <div className={"item__list_container"}>
      {data.length === 0 && (
        <h1 className={"non__items"}>Нет данных...</h1>
      )}
      {data.map(item => {
        return (
          <div className={"item__list"} key={item.code}>
            <div className={"item__list-info"}>
              <h1 className={"item__list-title"}>Описание:</h1>
              <p className={"item__list-description"}>{item.description}</p>
            </div>
            <div>
              <h1 className={"item__list-title"}>Производитель:</h1>
              <p className={"item__list-description"}>{item.manufacturer}</p>
            </div>
            <div>
              <h1 className={"item__list-title"}>цена:</h1>
              <p className={"item__list-description"}>{item.price}</p>
            </div>
            <div>
              <h1 className={"item__list-title"}>Остаток:</h1>
              <p className={"item__list-description"}>{item.stock}</p>
            </div>
            <div>
              <h1 className={"item__list-title"}>Подпись:</h1>
              <p className={"item__list-description"}>{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};