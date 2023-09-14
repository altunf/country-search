"use client";
import React, { useState } from "react";
import { Loading } from "./Loading";
import { useDispatch } from "react-redux";
import { searchDataFilter } from "@/redux/filterSlice";

import { GET_COUNTRIES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

export const SearchBar = () => {
  const [filterText, setFilterText] = useState("");
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterText(e.target.value);
  };

  const handleClick = () => {
    const search = filterText
      .split(" ")
      .find((filter: string) => filter.startsWith("search:"));

    const searchCondition = filterText !== " " && search;
    searchCondition && dispatch(searchDataFilter({ filterText, data }));
    setFilterText("");
  };

  if (loading) return <Loading />;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <div className="flex justify-center">
        <div className="join ">
          <input
            className="input input-accent join-item focus:outline-none rounded-full"
            type="text"
            placeholder="search:turkey group:europe"
            onChange={handleFilterChange}
            value={filterText}
          />
          <button
            className="btn text-white  btn-accent  rounded-r-full"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
