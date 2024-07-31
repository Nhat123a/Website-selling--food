import { Fragment, memo } from "react";
import productData from "../../../Data/product";
import { Card__product } from "../../../components/Product/Card__product";
import { useDispatch, useSelector } from "react-redux";
const Favoriteproduct = () => {
  // const dispatch = useDispatch();
  const Item = useSelector((state) => state.Favorite.Favorite);
  console.log(Item);
  return (
    <div className="container">
      <div className="py-8">
        <h2 className="text-center text-[26px]  hover:text-green">
          Sản phẩm yêu thích
        </h2>
        {Item.length > 0 ? (
          <div className="Card grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {Item.map((product) => (
              <Fragment key={product.productID}>
                <Card__product
                  productid={product.productID}
                  Status={product.Status}
                  key={product.productID}
                  priceNew={product.priceNew}
                  priceOld={product.priceOld}
                  productName={product.productName}
                  productImage={product.productImage}
                  Description={product.Description}
                />
              </Fragment>
            ))}
          </div>
        ) : (
          <>
            <div className="m-auto">
              <img
                className="m-auto"
                src="https://cdn.dribbble.com/users/2058104/screenshots/4198771/media/6a7fbadba54f099e51e634281956fae0.jpg?resize=400x300&vertical=center"
              ></img>
            </div>
            <span className="text-center flex items-center justify-center">
              Bạn chưa có sản phẩm yêu thích nào!
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Favoriteproduct);
