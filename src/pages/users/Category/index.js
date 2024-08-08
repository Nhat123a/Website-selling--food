import { memo, useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useParams } from "react-router-dom";
import { Cateitems } from "../HomePages/dataCate";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { SortProduct } from "./sort.js";
import { Card__product } from "../../../components/Product/Card__product";
import productData from "./../../../Data/product";
import { FaAngleRight } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

// console.log(Cateitems);
const Category = () => {
  const { slug } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [ActiveCategory, setActivecategory] = useState(false);

  const [filteredItems, setFilteredItems] = useState(productData);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const filteredProducts = productData.filter(
    (x) => x.categorySlug === `/${slug}`
  );
  const filterCategories = (slug) => {
    if (!slug || slug === "Tat-ca-san-pham") {
      setFilteredItems(productData);
      setCategoryName("Tất cả sản phẩm");
    } else {
      setFilteredItems(filteredProducts);
      const category = Cateitems.find((item) => item.slug === `/${slug}`);
      setCategoryName(category ? category.Name : "Tất cả sản phẩm");
    }
  };
  // console.log(categoryName);
  useEffect(() => {
    filterCategories(slug);
  }, [slug]);
  // console.log(`Category Slug from URL: ${slug}`);
  // click option
  const slugCheck = slug ? filteredProducts : productData;

  // Lọc theo giá
  const filterByprice = (ranges) => {
    // console.log(slugCheck);
    if (ranges.length === 0) {
      setFilteredItems(slugCheck);
      return;
    }
    const filtered = slugCheck.filter((product) => {
      return ranges.some((range) => {
        switch (range) {
          case "Dưới 100.000đ":
            return product.priceNew < 100000;
          case "Từ 100.000đ - 200.000đ":
            return product.priceNew >= 100000 && product.priceNew < 200000;
          case "Từ 200.000đ - 300.000đ":
            return product.priceNew >= 200000 && product.priceNew < 300000;
          case "Từ 300.000đ - 500.000đ":
            return product.priceNew >= 300000 && product.priceNew < 500000;
          case "Từ 500.000đ - 1 triệu":
            return product.priceNew >= 500000 && product.priceNew < 1000000;
          case "Từ 1 triệu - 2 triệu":
            return product.priceNew >= 1000000 && product.priceNew < 2000000;
          case "Từ 2 triệu - 5 triệu":
            return product.priceNew >= 2000000 && product.priceNew < 5000000;
          case "Từ 5 triệu - 10 triệu":
            return product.priceNew >= 5000000 && product.priceNew < 10000000;
          case "Trên 10 triệu":
            return product.priceNew >= 10000000;
          default:
            return false;
        }
      });
    });
    setFilteredItems(filtered);
  };

  // Lọc theo thương hiệu
  const filterByBrand = (brands) => {
    const slugCheck = slug ? filteredProducts : productData;
    if (brands.length === 0) {
      setFilteredItems(slugCheck);
      return;
    }
    const filteredbrand = slugCheck.filter((product) =>
      brands.includes(product.Brand)
    );
    setFilteredItems(filteredbrand);
  };
  const handlePriceRangeChange = (range) => {
    setSelectedPriceRanges((prevRanges) => {
      const newRanges = prevRanges.includes(range)
        ? prevRanges.filter((r) => r !== range)
        : [...prevRanges, range];
      filterByprice(newRanges);
      return newRanges;
    });
  };
  // console.log(selectedBrands);
  // console.log(selectedPriceRanges);
  const handleBrandChange = (brand) => {
    setSelectedBrands((prevBrands) => {
      const newBrands = prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand)
        : [...prevBrands, brand];
      filterByBrand(newBrands);
      return newBrands;
    });
  };
  //Danh mục
  const HandleClickCategory = (index) => {
    setActivecategory(ActiveCategory === index ? false : index);
  };
  const dataCate = [
    {
      id: 1,
      Name: "Rau ăn lá",
      slug: "/rau-an-la",
      subLink: [
        {
          name: "Rau dền",
          slug: "",
        },
        {
          name: "Rau muống",
          slug: "",
        },
        {
          name: "Rau cải",
          slug: "",
        },
      ],
    },
    {
      id: 2,
      Name: "Rau ăn củ",
      slug: "/rau-an-củ",
      subLink: [
        {
          name: "Khoai tây",
          slug: "",
        },
        {
          name: "Khoai lang",
          slug: "",
        },
        {
          name: "Khoai sọ",
          slug: "",
        },
      ],
    },
    {
      id: 3,
      Name: "Rau ăn quả",
      slug: "/rau-an-quả",
    },
    {
      id: 4,
      Name: "Rau gia vị",
      slug: "/rau-gia vị",
    },
  ];
  const Filter__price = [
    "Dưới 100.000đ",
    "Từ 100.000đ - 200.000đ",
    "Từ 200.000đ - 300.000đ",
    "Từ 300.000đ - 500.000đ",
    "Từ 500.000đ - 1 triệu",
    "Từ 1 triệu - 2 triệu",
    "Từ 2 triệu - 5 triệu",
    "Từ 5 triệu - 10 triệu",
    "Trên 10 triệu",
  ];
  const filter__Trademark = [
    "Bean Drink",
    "Bean Farm",
    "Bean Team",
    "Nông sản sạch",
  ];
  // Sort
  const handleSort = (sortedProducts) => {
    setFilteredItems(sortedProducts);
  };
  // Screen MD

  const [activeSort, setActivesort] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  // console.log(activeSort);
  const handleActivesort = (event) => {
    event.stopPropagation();

    if (activeSort) {
      setAnimationClass("animate-FilterActiveOut");
      setTimeout(() => setActivesort(false), 300);
    } else {
      setActivesort(!activeSort);
      setAnimationClass("animate-FilterActive");
    }
  };
  const toggleButtonRef = useRef(null);

  const slideBaref = useRef(null);
  useEffect(() => {
    const handleClickOut = (event) => {
      // Ngăn chặn hành vi nếu click vào nút toggle hoặc phần tử chứa
      if (
        slideBaref.current &&
        !slideBaref.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setAnimationClass("animate-FilterActiveOut");
        setTimeout(() => {
          setActivesort(false);
          setAnimationClass("");
        }, 300);
      }
    };

    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  return (
    <div>
      {/* Bread_scrum */}
      <div
        className="relative "
        style={{
          backgroundImage:
            "url('https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/breadcrumb.jpg?1719377594344')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "70px 0",
          marginBottom: "20px",
        }}
      >
        <div className="m-auto">
          <div className="Bread__Header">
            <h2 className="text-green font-bold text-[35px] text-center">
              {categoryName}
            </h2>
          </div>
          <ul className="flex items-center justify-center gap-4 text-white mb-5">
            <li>
              <Link to="/">Trang chủ </Link>
            </li>
            <li>
              <FaAngleRight size={12}></FaAngleRight>
            </li>
            <li>
              <Link>
                <span className="text-yellow">{categoryName}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container ">
        <div className="grid grid-cols-4   mb-8 gap-3 justify-between items-start">
          <div
            className={`${
              activeSort ? "fixed bg-black bg-opacity-50 z-50   inset-0 " : ""
            } "`}
          >
            <div
              ref={slideBaref}
              className={`Category__left ${
                animationClass &&
                !window.matchMedia("(min-width: 1024px)").matches
                  ? animationClass
                  : ""
              }
          bg-white px-4 pt-[10px] w-[256px] overflow-y-auto overflow-hidden 
          fixed top-0 bottom-0 right-0 z-20 lg:relative lg:p-0 lg:bg-transparent
          ${activeSort ? "block  " : "hidden lg:block"}
        `}
            >
              {/* Danh mục */}
              <div className="Category__list mb-8 bg-gray rounded-[5px] overflow-hidden">
                <div className="rounded-tl-md rounded-tr-md List__header uppercase font-bold bg-green text-white py-[15px] pl-3">
                  <h2>Danh mục sản phẩm</h2>
                </div>
                <div className="Category__item">
                  <ul className="py-3 pl-2 ">
                    {dataCate.map((data) => (
                      <li
                        key={data.id}
                        className="table category_items w-full mb-1 relative pb-2"
                      >
                        <Link>{data.Name}</Link>
                        {data.subLink && (
                          <div>
                            <ul
                              className={`pl-4 sublink ${
                                ActiveCategory === data.id ? "block" : "hidden"
                              }`}
                            >
                              {data.subLink.map((sublink, index) => (
                                <li key={index} className="mb-2 mt-1">
                                  <Link>{sublink.name}</Link>
                                </li>
                              ))}
                            </ul>
                            <span
                              style={{
                                transform:
                                  ActiveCategory === data.id
                                    ? "rotate(180deg) "
                                    : "rotate(0)",
                              }}
                              onClick={() => HandleClickCategory(data.id)}
                              className="absolute top-0 right-5 cursor-pointer transition-all duration-500"
                            >
                              {ActiveCategory === data.id ? (
                                <FiMinus color="#A4A9AE" size={16} />
                              ) : (
                                <FaPlus color="#A4A9AE" size={16} />
                              )}
                            </span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Lọc */}
              <div className="Category__filter border border-[#F2F2F2] bg-gray rounded-[5px] overflow-hidden">
                <div className="rounded-tl-md rounded-tr-md  uppercase font-bold bg-green text-white py-[15px] pl-3">
                  <h2>Bộ lọc sản phẩm</h2>
                </div>
                <div className="Category_filters pl-2 py-3 mb-5">
                  <div className="Price__filter">
                    <h2 className="font-semibold text-base uppercase">
                      Chọn mức giá
                    </h2>
                    <div className="filter_check border-b-2 border-[#F2F2F2] pb-3 w-full">
                      <ul className="filter_checks w-full overflow-y-auto mt-3 max-h-[170px]">
                        {Filter__price.map((price, index) => (
                          <li key={index} className="mb-2 cursor-pointer">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className=" mr-2"
                                checked={selectedPriceRanges.includes(price)}
                                onChange={() => handlePriceRangeChange(price)}
                              />
                              <span className=" hover:text-green">{price}</span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="Trademark__filter">
                    <h2 className="font-semibold text-base uppercase mt-3">
                      Thương hiệu
                    </h2>
                    <div className="filter_check  w-full">
                      <ul className="w-full overflow-y-auto mt-3 max-h-[170px]">
                        {filter__Trademark.map((Trademark, index) => (
                          <li key={index} className="mb-2 cursor-pointer">
                            <label className="flex items-center cursor-pointer">
                              <input
                                checked={selectedBrands.includes(Trademark)}
                                type="checkbox"
                                className=" mr-2"
                                onChange={() => handleBrandChange(Trademark)}
                              />
                              <span className=" hover:text-green">
                                {Trademark}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MD */}
            {activeSort ? (
              <div
                ref={toggleButtonRef}
                className={`lg:hidden absolute right-0  z-20 top-[30%]
           bg-rose-600 w-10 h-10 flex items-center justify-center text-white`}
                onClick={handleActivesort}
              >
                <IoMdClose size={18}></IoMdClose>
              </div>
            ) : (
              <div
                ref={toggleButtonRef}
                className="lg:hidden fixed right-0 z-20 top-[30%]
           bg-green w-10 h-10 flex items-center justify-center text-white"
                onClick={handleActivesort}
              >
                <FaFilter size={18}></FaFilter>
              </div>
            )}
          </div>

          <div className="Category__right  col-span-4 lg:col-span-3">
            <div className="right__header flex items-center justify-between shadow-sm bg-[#f7f8f9]">
              <h2 className="font-bold text-base uppercase p-3 hidden  md:block">
                {categoryName}
              </h2>
              <SortProduct product={slugCheck} onSort={handleSort} />
            </div>
            {/* CardP__product */}
            <div className="Categories__card w-full">
              {filteredItems.length === 0 ? (
                <div className="grid grid-cols-2 mt-8">
                  <h2 className="bg-[#fff3cd] p-3 text-[#856404] rounded-[5px] text-base">
                    Không có sản phẩm trong danh mục
                  </h2>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between gap-4 ">
                  {filteredItems.slice(0, 12).map((data) => (
                    <Card__product
                      productid={data.productID}
                      Status={data.Status}
                      key={data.productID}
                      priceNew={data.priceNew}
                      priceOld={data.priceOld}
                      productName={data.productName}
                      productImage={data.productImage}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Category);
