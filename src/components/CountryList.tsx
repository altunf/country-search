"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredData } from "@/redux/filterSlice";
import { selectPagination } from "@/redux/paginationSlice";
import { Countries } from "@/types/types";
import { SelectedItem, setSelectedItem } from "@/redux/selectSlice";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "@/graphql/queries";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CountryList = () => {
  const { data } = useQuery(GET_COUNTRIES);
  const filterData: any = useSelector(selectFilteredData);
  const paginationFilter = useSelector(selectPagination);
  const selectedItem = useSelector(SelectedItem);
  const dispatch = useDispatch();

  const [color, setColor] = useState(true);

  let results = data?.countries;

  const filterSelector = filterData.length > 10 ? paginationFilter : filterData;

  if (filterData.length > 0) {
    results = filterSelector;
  }

  useEffect(() => {
    if (filterData.length < 10) {
      dispatch(setSelectedItem(filterData[filterData.length - 1]?.code));
    }
  }, [filterSelector, filterData]);

  const handleChange = (code: string) => {
    if (code == selectedItem) {
      dispatch(setSelectedItem(""));
    } else {
      setColor(!color);
      dispatch(setSelectedItem(code));
    }
  };
  return (
    <main>
      <motion.div className="flex flex-wrap justify-center ">
        {results?.map((country: Countries, index: number) => (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            key={index}
            onClick={() => handleChange(country.code)}
          >
            <Card country={country} color={color} />
          </motion.div>
        ))}
      </motion.div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
};
