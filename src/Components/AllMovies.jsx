import React from "react";
import HeadingBox from "./HeadingBox";
import AllMoviesTable from "./AllMoviesTable";

const AllMovies = () => {
  return (
    <>
      <div className="allMovies mx-w mx-auto my-8  w-[1200px]">
        <div
          className="allMoviesNav text-base flex gap-14 border-b my-8
        "
        >
          <div>
            <p className="text-normal ">All Movies </p>
            <div className="gradientBorder p-[0.11rem]"></div>
          </div>
          <p className=" text-secTextCol">Trending</p>
          <p className=" text-secTextCol">Upcoming Premier</p>
        </div>
        <HeadingBox
          title="Collection of all movies"
          subTitle="Keep track of all the movies on moviebox"
          threeDots="hidden"
          trending="hidden"
        ></HeadingBox>
        <AllMoviesTable></AllMoviesTable>
      </div>
    </>
  );
};

export default AllMovies;
