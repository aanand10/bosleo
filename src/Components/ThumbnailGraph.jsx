import React from "react";
import movieThabnail from "../../public/Images/movieThabnail.png";
import HeadingBox from "./HeadingBox";

const ThumbnailGraph = () => {
  return (
    <>
      <div className=" mx-w h-[22.75rem]   mx-auto my-8 flex gap-4 ">
        <img
          src={movieThabnail}
          alt=""
          className="border  w-[22.55rem] h-full"
        />
        <div className="graphContainer flex justify-between p-4  w-full  rounded-xl flex-col bg-bgColor">
          <HeadingBox
            title="Movie Properties"
            subTitle="A list of details for this movie"
            threeDots="hidden"
            search="hidden"
          ></HeadingBox>
          <div className="graph">
            <img src="../../public/Images/Graph.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbnailGraph;
