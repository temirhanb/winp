import React from "react";
import "./style/index.scss";
import {usePaginationHook} from "./hook/usePaginationHook";

type TProps = {
  setSkipItems: React.Dispatch<React.SetStateAction<number>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  pages: number,
  allPage: number,
  currentPage: number,
}
export const Pagination: React.FC<TProps> = (
  {
    setSkipItems,
    setCurrentPage,
    pages,
    allPage,
    currentPage
  }
) => {
  const {handlerPrevPage, handlerNextPage} = usePaginationHook(pages, setSkipItems, setCurrentPage);
  return (
    <div className={"pagination__container"}>
      <button
        onClick={handlerPrevPage}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <span>{currentPage} / {!allPage ? 0 : Math.ceil(allPage)}</span>
      <button
        onClick={handlerNextPage}
        disabled={currentPage === allPage}
      >
        Next Page
      </button>
    </div>

  );
};