import { useRef, useState, useEffect } from "react";
import { BsSortDown } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";

export const SortProduct = (props) => {
  const [openOption, setOpenOption] = useState(false);
  const openRef = useRef(null);
  const options = [
    "Mặc định",
    "A → Z",
    "Z → A",
    "Giá tăng dần",
    "Giá giảm dần",
    "Hàng mới nhất",
  ];
  const [active, setActive] = useState(options[0]);
  const handleOptionClick = (options) => {
    setOpenOption(false);
    setActive(options);
    props.onSort(sortProducts(props.product, options));
  };
  //   console.log("Item đang active", active);
  const handleClickOutside = (event) => {
    if (openRef.current && !openRef.current.contains(event.target)) {
      setOpenOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //Case option
  const sortProducts = (products, option) => {
    const sortedProducts = [...products];

    switch (option) {
      case "Mặc định":
        return sortedProducts;
      case "A → Z":
        return sortedProducts.sort((a, b) =>
          a.productName.localeCompare(b.productName)
        );
      case "Z → A":
        return sortedProducts.sort((a, b) =>
          b.productName.localeCompare(a.productName)
        );
      case "Giá tăng dần":
        return sortedProducts.sort((a, b) => a.priceNew - b.priceNew);
      case "Giá giảm dần":
        return sortedProducts.sort((a, b) => b.priceNew - a.priceNew);
      case "Hàng mới nhất":
        // return sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        return "";
      default:
        return sortedProducts;
    }
  };
  return (
    <div className="Sort__by flex items-center text-base p-3 gap-3">
      <label className="flex items-center justify-center gap-2">
        <BsSortDown size={24} color="#808080" />
        <span className="text-[#808080]">Sắp xếp: </span>
      </label>
      <ul className="relative" ref={openRef}>
        <li className="text-[#808080] cursor-pointer">
          <span
            className="flex items-center gap-1"
            onClick={() => setOpenOption(!openOption)}
          >
            {active} <IoChevronDown />
          </span>
          <ul
            className={`bg-[#F8F8F8] ${
              openOption ? "block" : "hidden"
            } absolute top-[31px] right-[-12px] border border-[#e1e1e1] text-black z-[1000] w-[170px]`}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className="w-full hover:bg-green hover:text-white p-2 transition-all duration-300"
                onClick={() => handleOptionClick(option)}
              >
                <span>{option}</span>{" "}
                {/* Dùng <span> thay vì <Link> nếu không cần link */}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
