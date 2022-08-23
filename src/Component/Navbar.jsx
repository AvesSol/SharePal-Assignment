import React from "react";

const Navbar = () => {
  return (
    <>
      {/* // NavBarMainCon Start  */}
      <div className="Navbar break-words bg-[#091747] min:h-[3rem] pb-1.5 flex items-center justify-center flex-col">
        {/* // Start topContainer  */}
        <div className="top hidden md:flex py-2 justify-between items-center w-full h-1/2  bg-white">
          {/* Top Content Start  */}
          <div className="left text-[1.7rem] mx-3 text-sky-600 font-semibold">  
           <img src="https://dd7tel2830j4w.cloudfront.net/f1602334871226x948889548138196900/SharePal%20Logo2%20%281%29.svg" alt="" />
           </div>
          <div className="middle">
          <span className="NavBarHeader p-2 mx-1 mr-4">Bangalor <span className="text-sky-500 font-bold "> &#8628; </span> </span>
            <span className="NavBarHeader p-1.5 font-semibold rounded-full border-[1px] border-black px-4 mx-0.5">Traking</span>
            <span className="NavBarHeader p-1.5 font-semibold rounded-full border-[1px] border-black px-4 mx-0.5">Riding</span>
            <span className="NavBarHeader p-1.5 font-semibold rounded-full border-[1px] border-black px-4 mx-0.5">GoPro</span>
            <span className="NavBarHeader p-1.5 font-semibold rounded-full border-[1px] border-black px-4 mx-0.5">DSLR</span>
            <span className="NavBarHeader p-1.5 font-semibold rounded-full border-[1px] border-black px-4 mx-0.5">PS4/Xbox</span>
            <span className="NavBarHeader p-1.5 font-semibold rounded-full border-[1px] border-black px-4 mx-0.5">Games</span>
            <span className="NavBarHeader p-2 mx-1 ml-4 text-sky-400 underline underline-sky-400">Shop</span>

          </div>
          <div className="right p-2 border-[1px] border-[#092dec] text-[#092dec] font-semibold text-center px-5 rounded-md ">Login/Signup</div>
          {/* Top Content End  */}
        </div>
        {/* End Top Container  */}

        {/* // Start BottomContainer  */}
        <div className="bottom flex text-white justify-center items-cetner flex-wrap space-y-3 space-x-5">
          {/* Bottom Content Start  */}
          <div className="left mt-3  ">
            <p className="flex items-center space-x-3">
              <span className="hidden md:block font-semibold">Delivary Date</span>
              <button className="bg-white max:h-[4rem] text-gray-300 text-xs py-1 px-2 font-semibold rounded-full lg:text-sm lg:p-1.5 lg:px-4 lg:text-gray-500">
                Delivary Date
              </button>
            </p>
          </div>
          <div className="middle flex">
            <p className="flex items-center space-x-3">
              <span className="hidden md:block font-semibold">Return Date</span>
              <button className="bg-white max:h-[4rem] text-gray-300 text-xs py-1 px-2 font-semibold rounded-full lg:text-sm lg:p-1.5 lg:px-4 lg:text-gray-500">
                Return Date
              </button>
            </p>
          </div>
          <div className="right flex">
            <p className="flex items-center space-x-3">
              <button className="bg-[#d7df23] max:h-[5rem]  text-black text-xs p-1 px-2 font-semibold rounded-full lg:text-sm lg:p-1.5 lg:px-5">
                View Prices
              </button>
            </p>
          </div>
          {/* Bottom Content End  */}
        </div>
        {/* End Bottom Container  */}
      </div>
      {/* // NavBarMainCon End */}

      {/* .Small Dvice Header Start  */}
      <div className="smHeader  sm:hidden">
        <div className="Scroll min:h-[3rem] pb-4 whitespace-nowrap w-full overflow-x-auto py-2 space-x-3  flex items-center ">
          {/* <span></span> */}
          <p className="span px-2 py-1  text-xs font-semibold  rounded-full border-[1px] border-black">
            DJI Camera
          </p>
          <p className="span px-2 py-1  text-xs font-semibold text-cetner rounded-full border-[1px] border-black">
            GoPro Cameras
          </p>
          <p className="span px-2 py-1  text-xs font-semibold text-cetner rounded-full border-[1px] border-black">
            GoPro and Mobile Gimble
          </p>
          <p className="span px-2 py-1  text-xs font-semibold text-cetner rounded-full border-[1px] border-black">
            Action Camera Add ons
          </p>
          <p className="span px-2 py-1  text-xs font-semibold text-cetner rounded-full border-[1px] border-black">
            360 Camera
          </p>
          <p className="span px-2 py-1 bg-[#091747] text-white text-xs font-semibold text-cetner rounded-full border-[1px] border-black">
            Action Camera Mount
          </p>
        </div>
      </div>
      {/* Small Device Header End  */}
    </>
  );
};

export default Navbar;
