import HeadingBox from "./HeadingBox";
import Category from "./Category";
const MovieProperties = () => {
  return (
    <>
      <div className="max-1200 mx-auto my-8  w-[1200px]">
        <HeadingBox
          title="Movie Properties"
          subTitle="A list of details for this movie"
          threeDots="hidden"
          search="hidden"
        ></HeadingBox>
        <div className="tableNew mx-w border border-tableBoarder rounded-t-lg mt-6 tableForSS ">
          <div className="tableHead p-4 px-7 flex justify-around rounded-t-lg bg-tableHeadBg ">
            <p className="font-medium text-sm text-black w-[20%]">Category</p>
            <p className="font-medium text-sm text-black w-[20%]">Streams</p>
            <p className="font-medium text-sm text-black w-[20%]">Watchlists</p>
            <p className="font-medium text-sm text-black w-[20%]">Owner</p>
            <p className="font-medium text-sm text-black w-[20%]">
              Release Date
            </p>
          </div>
          <div className="tableRow  flex justify-around rounded-t-lg py-6 px-4  pl-7">
            <div className="flex gap-4 w-[20%]">
              <Category text="Action" />
              <Category text="Thriller" />
            </div>

            <p className="font-medium text-sm text-black w-[20%]">24,512,232</p>
            <p className="font-medium text-sm text-black w-[20%]">389,234</p>
            <p className="font-medium text-sm text-black w-[20%]">
              Sony Entertainment
            </p>
            <p className="font-medium text-sm text-black w-[20%]">
              21th May, 2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieProperties;
