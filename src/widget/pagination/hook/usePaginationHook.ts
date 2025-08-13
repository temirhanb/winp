import React from "react";

export const usePaginationHook = (
  pages: number,
  setSkipItems: React.Dispatch<React.SetStateAction<number>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const handlerNextPage = () => {
    setSkipItems((prevState) => prevState + pages);
    setCurrentPage((prevState) => prevState + 1);
  };
  const handlerPrevPage = () => {
    setSkipItems((prevState) => prevState - pages);
    setCurrentPage((prevState) => prevState - 1);
  };
  return {handlerNextPage, handlerPrevPage};
};