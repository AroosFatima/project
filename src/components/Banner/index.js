import React from "react";
import mobile from "../../assets/images/mobile.png";
import apple from "../../assets/images/apple.png";
import EastIcon from "@mui/icons-material/East";
const Banner = () => {
  return (
    <section className="p-[30px]">
      <div className="max-w-[1140px] mx-auto px-[20px]">
        <div className="bg-cover bg-center  min-h-[250px] text-white pt-10 px-20 object-fill bg-black  flex">
          <div className="md:w-1/2 px-10">
            <div className="flex space-bwteen py-7">
              <img src={apple} className="h-10 w-10" />
              <span className=" text-base font-400   px-[20px] pt-3">
                iPhone 14 Series{" "}
              </span>
            </div>
            <p className="text-4xl font-bold  ">
              Up to 10% <br /> off Voucher
            </p>
            <div className="flex">
              <a href="#" className=" py-8 text-white   text-base  ">
                Shop Now
                <span>
                  <hr className="white " />
                </span>
              </a>

              <span className="pl-4 pt-8">
                <EastIcon />
              </span>
            </div>
          </div>
          <div className=" h-[300px] w-[400px] pr-30  mr-[40px]">
            <img src={mobile} alt="img" className="w-[400px] h-[300px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
