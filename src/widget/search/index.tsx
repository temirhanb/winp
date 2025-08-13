import React from "react";
import "./style/index.scss";
import {useSearchHook} from "./hook/useSearchHook";

type TProps = {
  maxItems?: number,
  setPages: (item: number) => void
  setFilter: (item: string) => void
}

export const Search: React.FC<TProps> = (
  {setFilter, setPages, maxItems = 10}
) => {
  const {
    handlerSearchClick,
    handlerChangeSearch,
    handlerChangePages,
    valueSearch,
    valuePages
  } = useSearchHook(maxItems, setFilter, setPages);
  return (
    <div className={"search__container"}>
      <div className={"search__input_container"}>
        <span>Поиск</span>
        <input
          onChange={handlerChangeSearch}
          value={valueSearch}
          name={"text"}
          className={"input input__search"}
          type="text"
          placeholder={"apple"}
        />
      </div>
      <div className={"search__page_container"}>
        <span>Количество элементов</span>
        <input
          onChange={handlerChangePages}
          name={"text2"}
          className={"input input__page"}
          type="number"
          value={valuePages}
          placeholder={"10"}
          max={maxItems}
          maxLength={maxItems}
        />
      </div>

      <button onClick={handlerSearchClick} className={"search__button"}>
      <span>
        Найти
      </span>
      </button>
    </div>
  );
};