import React from "react";
import TableRow from "./TableRow";
import data from "./data.json";

const AllMoviesTable = () => {
  return (
    <>
      <div className="tableNew mx-w tableForSS border border-tableBoarder rounded-t-lg mt-8 ">
        <div className="tableHead p-4 px-7 flex justify-around rounded-t-lg bg-tableHeadBg ">
          <p className="font-medium text-sm text-black w-[23%] flex gap-4">
            Name{" "}
            <span>
              <img src="/public/Images/downArr.svg" alt="" />
            </span>
          </p>
          <p className="font-medium text-sm text-black w-[20%]">Category</p>
          <p className="font-medium text-sm text-black w-[13%]">
            Popularity/Interest
          </p>
          <p className="font-medium text-sm text-black w-[11%]">Watchlists</p>
          <p className="font-medium text-sm text-black w-[11%]">Streams</p>
          <p className="font-medium text-sm text-black w-[11%]">Release Date</p>
          <p className="font-medium text-sm text-black w-[11%]"></p>
        </div>

        {data.map((x) => {
          return <TableRow {...x}></TableRow>;
        })}
      </div>
    </>
  );
};

export default AllMoviesTable;
