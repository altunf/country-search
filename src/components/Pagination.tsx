"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPagination } from "@/redux/paginationSlice";
import { selectFilteredData } from "@/redux/filterSlice";
import { setSelectedItem } from "@/redux/selectSlice";

export const Pagination = () => {
  const filteredData = useSelector(selectFilteredData);
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const mod = filteredData.length % 10;
  const equal = mod === 0;
  const division = Math.trunc(filteredData.length / 10);

  let numberOfPages: any;
  const pageNumber = [];

  useEffect(() => {
    if (filteredData.length > 10) {
      handlePaginationClick(1);
    }
  }, [filteredData]);

  if (filteredData.length > 10) {
    equal ? (numberOfPages = division) : (numberOfPages = division + 1);
  }

  for (let i = 1; i < numberOfPages + 1; i++) {
    pageNumber.push(i);
  }

  const handlePaginationClick = (item: number) => {
    const perPage: any = [];
    const start = (item - 1) * 10;
    const stop = item === numberOfPages ? start + mod : start + 10;

    for (let j = start; j < stop; j++) {
      perPage.push(filteredData[j]);
    }

    dispatch(setPagination(perPage));

    dispatch(setSelectedItem(perPage[perPage.length - 1]?.code));
    setSelectedIndex(item);
  };

  return (
    <>
      <div className="space-x-2">
        {pageNumber.map((item, index) => (
          <button
            key={index}
            className={`btn btn-outline btn-accent ${
              selectedIndex == index + 1 ? " btn-active " : ""
            }`}
            aria-hidden="true"
            onClick={() => {
              handlePaginationClick(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
