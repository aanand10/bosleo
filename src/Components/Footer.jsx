import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-black py-2.5">
        <p className="footerText flex justify-center">
          &#169; 2022{" "}
          <span className="footerSpan mt-[-0.1rem] mx-3">moviebox</span> All
          Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
