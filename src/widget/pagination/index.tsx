import React from "react";
import "./style/index.scss";

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
  const handlerNextPage = () => {
    setSkipItems((prevState) => prevState + pages);
    setCurrentPage((prevState: number) => prevState + 1);
  };
  const handlerPrevPage = () => {
    setSkipItems((prevState: number) => prevState - pages);
    setCurrentPage((prevState: number) => prevState - 1);
  };
  return (
    <div className={"pagination__container"}>
      <button
        onClick={handlerPrevPage}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <span>{currentPage} / {!allPage ? 0 : allPage}</span>
      <button
        onClick={handlerNextPage}
        disabled={currentPage === allPage}
      >
        Next Page
      </button>
    </div>

  );
};