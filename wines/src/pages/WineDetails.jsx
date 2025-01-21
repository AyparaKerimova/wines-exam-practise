import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../constants/api";
import { Helmet } from "react-helmet-async";

const WineDetails = () => {
  const { id } = useParams();
  const [wine, setWine] = useState();
  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(`${BASE_URL}/${id}`);
      setWine(resp.data.data);
    }
    fetchData();
  }, [id]);
  return (
    <>
    <Helmet>
            <title>Wine Details</title>
          </Helmet>
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-3xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
              {wine?.name}
              <span className="text-sm sm:text-7xl">${wine?.newPrice}</span>
            </h1>
            <p className="text-sm sm:text-base text-black-700 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi porro dolor numquam asperiores veritatis?
            </p>
            <div className="flex mt-8">
              <Link
                to="/"
                className="uppercase py-2 px-4 rounded-lg bg-pink-900 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Go Home
              </Link>
            </div>
          </div>
          <div className=" hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img width="400px" height="500px" src={wine?.imageUrl} className="max-w-xs md:max-w-sm m-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WineDetails;
