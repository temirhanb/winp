import React, {useState} from "react";

export const useSearchHook = (maxItems: number, setFilter: (item: string) => void, setPages: (item: number) => void) => {

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

  return {
    valuePages, valueSearch,
    handlerChangePages, handlerChangeSearch, handlerSearchClick
  };
};