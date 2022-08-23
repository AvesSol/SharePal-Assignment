import React from "react";
import Items from "../Component/Items";
import ItemInfo from "../JsonData/itemInfo";

const HomePage = () => {
  return (
    // Main Container Start
    <div className="MainContainer">
      {/* Header Start  */}
      <div className="header flex  justify-center items-center lg:justify-between">
        <p className="text-[1.9rem] lg:text-[2.3rem] lg:mt-3 w-full font-bold text-center">
          Action Camera Mounts on rent
        </p>
      </div>
      {/* Header end  */}

      {/* Center Div Start */}

     <div className="Center flex justify-baseline items-start ml-5">
     <div className="Left hidden lg:block w-auto min-w-[17rem] mt-2 ">
        <p className="font-semibold text-[1.6rem] pb-2 border-b-[1px] border-gray-200">Sub Categories</p>
        <div className="menu my-4 text-[1.2rem] font-semibold text-[#565656]">
           <p className="menuItem hover:border-l-[3px] p-3 border-[#091747]  hover:bg-[#d6e5ff]">Dji Cameras</p>
           <p className="menuItem hover:border-l-[3px] p-3 border-[#091747]  hover:bg-[#d6e5ff]">GoPro Cameras</p>
           <p className="menuItem hover:border-l-[3px] p-3 border-[#091747]  hover:bg-[#d6e5ff]">GoPro and Mobile Gimble</p>
           <p className="menuItem hover:border-l-[3px] p-3 border-[#091747]  hover:bg-[#d6e5ff]">Action Camers add ons</p>
           <p className="menuItem hover:border-l-[3px] p-3 border-[#091747]  hover:bg-[#d6e5ff]">360 Cameras</p>
           <p className="menuItem hover:border-l-[3px] p-3 border-[#091747]  hover:bg-[#d6e5ff]">Action Camera Mounts   </p>
        </div>
      </div>
      {/* Items Div Start  */}
      <div className="ItemsDiv flex w-auto flex-wrap justify-start item-center mx-auto"> 
        {/* // Fecthing Data  Start from Js File  */}
        {ItemInfo.map((item) => {
          return <Items key={item.heading} item={item} />;
        })}
        {/* // Fecthing Data Ends from Js File  */}
      </div>
      {/* Item Div End  */}
     </div>

      {/* // Coupons Div Start */}
      <div className="heading mt-4 font-bold text-[1.5rem] ml-10">
        Coupons for you
      </div>
      <div className="Coupons mt-2 overflow-x-auto ">
        <div className="Scroll min-h-[8rem] mb-4 flex justify-cetner items-center  w-[100rem] space-x-3">
          {/* // Scoll Items  */}
          <div className="Scroll ml-9 mr-3 h-[6rem] shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] md:h-[8rem] md:rounded-xl md:w-[17rem] rounded-lg flex items-center ">
            {/* <span></span> */}
            <p className="span w-[33%] h-12 bg-[#0927eb] flex justify-center items-center flex-col   text-xs font-[500]  space-y-1 rounded-r-full border-[1px] text-white text-[1.1rem%]">
              <span>10%</span>
              <span>Off</span>
            </p>
            <div className="p w-[67%] h-[7rem]flex flex-col">
              <div className="top w-full h-[30%]">
                <p className="ml-1 mt-1">SHEARPAL10</p>
              </div>
              <div className="bottom w-full h-[70%] text-[13px] ">
                <p className="ml-1 mt-1">
                  {" "}
                  Get 10% Off On Orders Above ₹1000. Maximum Discount: ₹500
                </p>
              </div>
            </div>
          </div>
          <div className="Scroll h-[6rem] mr-3 shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] rounded-lg  md:h-[8rem] md:w-[17rem] md:rounded-xl flex items-center ">
            {/* <span></span> */}
            <p className="span w-[33%] h-12 bg-[#0927eb] flex justify-center items-center flex-col   text-xs font-[500]  space-y-1 rounded-r-full border-[1px] text-white text-[1.1rem%]">
              <span>10%</span>
              <span>Off</span>
            </p>
            <div className="p w-[67%] h-[7rem]flex flex-col">
              <div className="top w-full h-[30%]">
                <p className="ml-1 mt-1">SHEARPAL10</p>
              </div>
              <div className="bottom w-full h-[70%] text-[13px] ">
                <p className="ml-1 mt-1">
                  {" "}
                  Get 10% Off On Orders Above ₹1000. Maximum Discount: ₹500
                </p>
              </div>
            </div>
          </div>
          <div className="Scroll h-[6rem] mr-3 shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] rounded-lg  md:h-[8rem] md:w-[17rem] md:rounded-xl flex items-center ">
            {/* <span></span> */}
            <p className="span w-[33%] h-12 bg-[#0927eb] flex justify-center items-center flex-col   text-xs font-[500]  space-y-1 rounded-r-full border-[1px] text-white text-[1.1rem%]">
              <span>10%</span>
              <span>Off</span>
            </p>
            <div className="p w-[67%] h-[7rem]flex flex-col">
              <div className="top w-full h-[30%]">
                <p className="ml-1 mt-1">SHEARPAL10</p>
              </div>
              <div className="bottom w-full h-[70%] text-[13px] ">
                <p className="ml-1 mt-1">
                  {" "}
                  Get 10% Off On Orders Above ₹1000. Maximum Discount: ₹500
                </p>
              </div>
            </div>
          </div>
          <div className="Scroll h-[6rem] mr-3 shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] rounded-lg   md:h-[8rem] md:w-[17rem] md:rounded-xl flex items-center ">
            {/* <span></span> */}
            <p className="span w-[33%] h-12 bg-[#0927eb] flex justify-center items-center flex-col   text-xs font-[500]  space-y-1 rounded-r-full border-[1px] text-white text-[1.1rem%]">
              <span>10%</span>
              <span>Off</span>
            </p>
            <div className="p w-[67%] h-[7rem]flex flex-col">
              <div className="top w-full h-[30%]">
                <p className="ml-1 mt-1">SHEARPAL10</p>
              </div>
              <div className="bottom w-full h-[70%] text-[13px] ">
                <p className="ml-1 mt-1">
                  {" "}
                  Get 10% Off On Orders Above ₹1000. Maximum Discount: ₹500
                </p>
              </div>
            </div>
          </div>
          <div className="Scroll h-[6rem] mr-3 shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] rounded-lg   md:h-[8rem] md:w-[17rem] md:rounded-xl flex items-center ">
            {/* <span></span> */}
            <p className="span w-[33%] h-12 bg-[#0927eb] flex justify-center items-center flex-col   text-xs font-[500]  space-y-1 rounded-r-full border-[1px] text-white text-[1.1rem%]">
              <span>10%</span>
              <span>Off</span>
            </p>
            <div className="p w-[67%] h-[7rem]flex flex-col">
              <div className="top w-full h-[30%]">
                <p className="ml-1 mt-1">SHEARPAL10</p>
              </div>
              <div className="bottom w-full h-[70%] text-[13px] ">
                <p className="ml-1 mt-1">
                  {" "}
                  Get 10% Off On Orders Above ₹1000. Maximum Discount: ₹500
                </p>
              </div>
            </div>
          </div>
          <div className="Scroll h-[6rem] mr-3 shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] rounded-lg   md:h-[8rem] md:w-[17rem] md:rounded-xl flex items-center ">
            {/* <span></span> */}
            <p className="span w-[33%] h-12 bg-[#0927eb] flex justify-center items-center flex-col   text-xs font-[500]  space-y-1 rounded-r-full border-[1px] text-white text-[1.1rem%]">
              <span>10%</span>
              <span>Off</span>
            </p>
            <div className="p w-[67%] h-[7rem]flex flex-col">
              <div className="top w-full h-[30%]">
                <p className="ml-1 mt-1">SHEARPAL10</p>
              </div>
              <div className="bottom w-full h-[70%] text-[13px] ">
                <p className="ml-1 mt-1">
                  {" "}
                  Get 10% Off On Orders Above ₹1000. Maximum Discount: ₹500
                </p>
              </div>
            </div>
          </div>


          {/* // Scoll Items  End */}
        </div>
      </div>
      {/* // Coupons Div End */}

      {/* Category Div Start  */}
      <div className="mainCatDiv bg-gray-300 py-2">
        <div className="heading mt-3  font-semibold text-[1.5rem] ml-2 mb-2">
          More Category
        </div>
        <div className="Coupons  overflow-x-auto  ">
          <div className="Scroll min-h-[8rem] mb-4 pr-4 flex justify-cetner items-center  w-[100rem] space-x-3">
            {/* // Scoll Items  */
            }
            <span></span>
            <div className="Scroll  mx-8 p-4  bg-white shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] md:w-[27rem] rounded-lg flex flex-col items-center ">
              <img
                src="https://ik.imagekit.io/faskf16pg/Categories/sharepal-categories-rent-trekking-gear_n5yGYTwdF.webp"
                alt=""
                className="h-full p-4  w-full object-cover"
              />
              <p className="my-2 font-semibold ">Traking Gear</p>
            </div>{" "}
            <div className="Scroll ml-9 mx-8 p-4  bg-white shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] md:w-[27rem] rounded-lg flex flex-col items-center ">
              <img
                src="https://ik.imagekit.io/faskf16pg/Categories/sharepal-categories-rent-riding-gear__K2XBHlNj.webp"
                alt=""
                className="h-full p-4  w-full object-cover"
              />
              <p className="my-2 font-semibold ">Riding Gear</p>
            </div>{" "}
            <div className="Scroll ml-9 mx-8 p-4  bg-white shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] md:w-[27rem] rounded-lg flex flex-col items-center ">
              <img
                src="https://ik.imagekit.io/faskf16pg/Categories/sharepal-categories-rent-gopro-cameras_r-9ZhGYVm.webp"
                alt=""
                className="h-full p-4  w-full object-cover"
              />
              <p className="my-2 font-semibold ">Action Camera</p>
            </div>{" "}
            <div className="Scroll ml-9 mx-8 p-4  bg-white shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] md:w-[27rem] rounded-lg flex flex-col items-center ">
              <img
                src="https://ik.imagekit.io/faskf16pg/Categories/sharepal-categories-rent-dslr-cameras_kMF4NF0F_S.webp"
                alt=""
                className="h-full p-4  w-full object-cover"
              />
              <p className="my-2  font-semibold ">Cameras</p>
            </div>{" "}
            <div className="Scroll ml-9 mx-8 p-4  bg-white shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] md:w-[27rem] rounded-lg flex flex-col items-center ">
              <img
                src="https://ik.imagekit.io/faskf16pg/Categories/sharepal-categories-rent-gaming-consoles_2F5l0pMAK.webp"
                alt=""
                className="h-full p-4  w-full object-cover"
              />
              <p className="my-2 font-semibold ">Traking Gear</p>
            </div>{" "}
            <div className="Scroll  mx-8 p-4  bg-white shadow-[1.5px_1.5px_4px_#bfbfbf] mt-2 w-[14rem] md:w-[27rem] rounded-lg flex flex-col items-center ">
              <img
                src="https://ik.imagekit.io/faskf16pg/Categories/sharepal-categories-rent-ps4-games_Elbb4DYGVJ.webp"
                alt=""
                className="h-full p-4  w-full object-cover"
              />
              <p className="my-2 font-semibold ">PS4 Game</p>
            </div>{" "}
            {/* // Scoll Items  End */}
          </div>
        </div>
      </div>
      {/* Category Div End  */}

      {/* /Footer Start  */}
      <div className="FooterStart md:hidden flex flex-wrap justify-center items-center text-sm bg-gray-100 mt-2 space-x-5 py-2 font-semibild ">
        <span className="hover:underline decoration-sky-400 hover:text-sky-500">Category</span>
        <span className="hover:underline decoration-sky-400 hover:text-sky-500">Offers</span>
        <span className="hover:underline decoration-sky-400 hover:text-sky-500">Search</span>
        <span className="hover:underline decoration-sky-400 hover:text-sky-500">Refer & Earn</span>
        <span className="hover:underline decoration-sky-400 hover:text-sky-500">SignUp</span>
      </div>
      {/* Footer endd  */}
    </div>
    //  Main Container End
  );
};

export default HomePage;
