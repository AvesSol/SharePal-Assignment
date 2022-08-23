import React from "react";
import hart from "../img/heart.png"
import shear from "../img/shear.webp"


const Items = ({item}) => {
  return (
    // Start ItemBox
    <div className="item w-[20rem] max-h-[18rem] mx-3 min-h-[19rem] border-[1px] my-2 rounded-md ">
      {/* Start top  */}
      <div className="top h-[80%]">
        <img src={item.img || "https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}  alt="" className="itemImg rounded-t-md  h-full w-full object-cover" />
      </div>
      {/* End top  */}

      {/* Start Bottom  */}
      <div className="bottom h-[20%] bg-[#fafafa] flex justify-between items-center h-full ">
         {/* Start Left  */}
        <div className="left font-semibold text-md lg:text-lg w-[85%] mt-2 self-baseline ml-2">
          {item.heading}
        </div>
         {/* End Left  */}

        {/* Start bottom  */}
        <div className="right w-[15%] text-right flex flex-col justify-end items-center ">
        <img src={hart} alt="" className="hart w-[50%]" />
        <img src={shear} alt="" className="hart w-[50%]" />
        </div>
        {/* end bottom  */}

        </div>
      {/* End Bottom  */}
    </div>
    // End ItemBox
  );
};

export default Items;
