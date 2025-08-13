import React, {useDeferredValue, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {Header, ItemsList, PendingComponent, Search} from "../../widget";
import {fetchFakeItem} from "../../shared";
import {Pagination} from "../../widget/pagination";
import {ErrorComponent} from "../../widget/errorComponent";

export const MainPage: React.FC = () => {

  const [pages, setPages] = useState<number>(10);
  const [filter, setFilter] = useState<string>("");
  const [skipItems, setSkipItems] = useState(0);
  const deferredFilter = useDeferredValue(filter);
  const [allPage, setAllPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {isPending, isError, error, data,} = useQuery({
    queryKey: ["items", pages, deferredFilter, skipItems],
    queryFn: () => fetchFakeItem(pages, deferredFilter, skipItems),
  });

  useEffect(() => {
    setAllPage(data?.totalItems / pages);
  }, [data]);

  return (
    <main>

      <Header/>
      {isError && (
        <ErrorComponent error={error.message}/>
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