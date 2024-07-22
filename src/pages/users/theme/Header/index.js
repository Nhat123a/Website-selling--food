import { memo } from "react";
import HeaderCenter from "./header__cen";
import HeaderTop from "./header__top";
import HeaderEnd from "./header_end";
const Header = ({ setIsCartOpen }) => {
  // console.log(setIsCartOpen);
  return (
    //Header__top

    <div>
      <div className="Header__top bg-green h-10 leading-10  text-white font-normal text-sm">
        <HeaderTop />
      </div>

      <div className="header bg-gray pt-4 pb-4 w-full font-normal text-sm text-black ">
        <HeaderCenter setIsCartOpen={setIsCartOpen} />
      </div>
      <div className="Header__end px-0 py-[10px] border-b hidden lg:block border-solid border-[rgba(0,0,0,0.09)]">
        <HeaderEnd />
      </div>
    </div>
  );
};

export default memo(Header);
