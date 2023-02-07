import HeadingBox from "./HeadingBox";
import Category from "./Category";
const Insights = () => {
  return (
    <>
      <div className="mx-w mx-auto my-8  w-[1200px]">
        <HeadingBox
          title="Interest Tracking Insights"
          subTitle="Keep track of the insights on this movie"
          threeDots="hidden"
          search="hidden"
          trending="hidden"
        ></HeadingBox>
        <div className="tableNew mx-w border border-tableBoarder rounded-t-lg mt-8 tableForSS">
          <div className="tableHead p-4 px-7 flex justify-around rounded-t-lg bg-tableHeadBg ">
            <p className="font-medium text-sm text-black w-[20%]">
              People Reached
            </p>
            <p className="font-medium text-sm text-black w-[20%]">
              Content Interactions
            </p>
            <p className="font-medium text-sm text-black w-[20%]">
              Impressions
            </p>
            <p className="font-medium text-sm text-black w-[20%]">Shares</p>
            <p className="font-medium text-sm text-black w-[20%]">Likes</p>
          </div>
          <div className="tableRow  flex justify-around rounded-t-lg py-6 px-4  pl-7">
            <p className="font-medium text-sm text-black w-[20%]">39,823,154</p>
            <p className="font-medium text-sm text-black w-[20%]">76,923,304</p>
            <p className="font-medium text-sm text-black w-[20%]">
              101,783,945
            </p>
            <p className="font-medium text-sm text-black w-[20%]">14,895</p>
            <p className="font-medium text-sm text-black w-[20%]">34,056,147</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
