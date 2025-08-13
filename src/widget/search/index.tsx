import React, {useState} from "react";
import "./style/index.scss";

type TProps = {
  maxItems?: number,
  setPages: (item: number) => void
  setFilter: (item: string) => void
}

export const Search: React.FC<TProps> = (
  {setFilter, setPages, maxItems = 10}
) => {

  const [valueSearch, setValueSearch] = useState<string>("");
  const [valuePages, setValuePages] = useState<number>(10);
  const handlerChangePages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = Number(e.currentTarget.value);

    if (value > maxItems) return;

    setValuePages(value);
  };
  const handlerChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);
  };

  const handlerSearchClick = () => {
    setFilter(valueSearch);
    setPages(valuePages);
  };

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