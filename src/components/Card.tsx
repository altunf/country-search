import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { SelectedItem } from "@/redux/selectSlice";

interface Props {
  country: any;
  color: boolean;
}
export const Card: React.FC<Props> = ({ country, color }) => {
  const selectedItem = useSelector(SelectedItem);

  return (
    <main>
      <div
        style={
          selectedItem === country?.code
            ? { backgroundColor: color == true ? "#20cb13" : "#c31818" }
            : {}
        }
        className={`grid grid-col-1 card w-60 h-96 glass opacity-80 m-4 shadow-md rounded-xl duration-500 hover:opacity-100 hover:scale-105 hover:shadow-2xl bg-[#4daba5]`}
      >
        <div className="flex m-2 h-36">
          <Image
            src={`https://flagpedia.net/data/flags/h120/${country?.code.toLowerCase()}.png`}
            width={224}
            height={100}
            alt={country?.name}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{country?.name}</h2>
          <p>
            <b>Code:</b> {country?.code}
          </p>
          <p>
            <b>Currency:</b>{" "}
            <span className="break-all		"> {country?.currency}</span>
          </p>
          <p>
            <b>Continent:</b> {country?.continent.name}
          </p>
        </div>
      </div>
    </main>
  );
};
