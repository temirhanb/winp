import {useDeferredValue, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchFakeItem} from "../../../shared";

export const useMainPageHook = () => {
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

  return {
    pages,
    setPages,
    filter,
    setFilter,
    skipItems,
    setSkipItems,
    deferredFilter,
    allPage,
    setAllPage,
    currentPage,
    setCurrentPage,
    isError,
    isPending,
    data,
    error
  };
};