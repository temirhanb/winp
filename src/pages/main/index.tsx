import React from "react";
import {Header, ItemsList, PendingComponent, Search} from "../../widget";
import {Pagination} from "../../widget/pagination";
import {ErrorComponent} from "../../widget/errorComponent";
import {useMainPageHook} from "./hook/useMainPageHook";

export const MainPage: React.FC = () => {

  const {
    error,
    isError,
    isPending,
    data,
    setFilter,
    setCurrentPage,
    setPages,
    setSkipItems,
    pages,
    currentPage,
    allPage
  } = useMainPageHook();

  return (
    <main>

      <Header/>
      {isError && (
        <ErrorComponent error={error?.message}/>
      )}

      <Search
        setFilter={setFilter}
        maxItems={data?.totalItems}
        setPages={setPages}
      />
      {isPending && (
        <PendingComponent/>
      )}
      {!isPending && (
        <Pagination
          pages={pages}
          setCurrentPage={setCurrentPage}
          setSkipItems={setSkipItems}
          allPage={allPage}
          currentPage={currentPage}
        />)}
      {!isPending && (
        <ItemsList data={data.items}/>
      )}
    </main>
  );
};