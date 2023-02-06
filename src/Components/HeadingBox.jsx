const HeadingBox = (props) => {
  return (
    <>
      <div className="headingContainer flex justify-between w-full h-14  ">
        <div>
          <p className="font-base font-medium">{props.title}</p>
          <p className=" text-secTextCol text-sm">{props.subTitle}</p>
        </div>
        <div className={`my-auto threeDots  ${props.threeDots}`}>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9687 9.5C10.9687 9.88938 10.8533 10.27 10.637 10.5938C10.4206 10.9175 10.1131 11.1699 9.75341 11.3189C9.39366 11.4679 8.99782 11.5069 8.61592 11.4309C8.23402 11.355 7.88322 11.1675 7.60788 10.8921C7.33255 10.6168 7.14504 10.266 7.06908 9.88409C6.99312 9.50219 7.0321 9.10634 7.18111 8.74659C7.33012 8.38685 7.58246 8.07938 7.90622 7.86305C8.22998 7.64672 8.61062 7.53125 9 7.53125C9.52157 7.5331 10.0213 7.74112 10.3901 8.10993C10.7589 8.47874 10.9669 8.97843 10.9687 9.5ZM9 5.84375C9.38938 5.84375 9.77002 5.72829 10.0938 5.51196C10.4175 5.29563 10.6699 4.98815 10.8189 4.62841C10.9679 4.26867 11.0069 3.87282 10.9309 3.49092C10.855 3.10902 10.6674 2.75822 10.3921 2.48288C10.1168 2.20755 9.76598 2.02004 9.38408 1.94408C9.00218 1.86812 8.60633 1.9071 8.24659 2.05611C7.88685 2.20512 7.57937 2.45746 7.36304 2.78122C7.14672 3.10498 7.03125 3.48562 7.03125 3.875C7.0331 4.39658 7.24112 4.89626 7.60993 5.26507C7.97874 5.63388 8.47843 5.8419 9 5.84375ZM9 13.1563C8.61062 13.1563 8.22998 13.2717 7.90622 13.488C7.58246 13.7044 7.33012 14.0119 7.18111 14.3716C7.0321 14.7313 6.99312 15.1272 7.06908 15.5091C7.14504 15.891 7.33255 16.2418 7.60788 16.5171C7.88322 16.7925 8.23402 16.98 8.61592 17.0559C8.99782 17.1319 9.39366 17.0929 9.75341 16.9439C10.1131 16.7949 10.4206 16.5425 10.637 16.2188C10.8533 15.895 10.9687 15.5144 10.9687 15.125C10.9669 14.6034 10.7589 14.1037 10.3901 13.7349C10.0213 13.3661 9.52157 13.1581 9 13.1563Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          className={`trending flex gap-2 justify-center items-center ${props.trending}`}
        >
          <img
            className="w-[1.1rem]"
            src="../../public/Images/arrowTranding.svg"
            alt="tranding arraow"
          />
          <p className="text-xs text-trending">Trending</p>
        </div>
        <div
          className={`p-4 border  border-tableBoarder rounded-lg flex gap-5 ${props.search} `}
        >
          <img src="../../public/Images/searchIco.svg" alt="" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </>
  );
};

export default HeadingBox;
