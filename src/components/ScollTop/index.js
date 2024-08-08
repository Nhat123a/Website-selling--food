import { memo, useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Scolltop = () => {
  const [isvible, setIsvible] = useState(false);
  const ScollTop = () => {
    if (window.pageYOffset > 300) {
      setIsvible(true);
    } else {
      setIsvible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", ScollTop);
    return () => {
      window.removeEventListener("scroll", ScollTop);
    };
  }, []);
  const HandleScoll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed right-7 bottom-36">
      {isvible && (
        <div
          onClick={HandleScoll}
          className="bg-green w-10 hover:bg-[#006400] h-10 rounded-[5px] flex items-center justify-center"
        >
          <IoIosArrowUp size={24} color="white"></IoIosArrowUp>
        </div>
      )}
    </div>
  );
};

export default memo(Scolltop);
