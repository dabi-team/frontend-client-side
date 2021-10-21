import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "../../components/card/Card";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllProducts } from "../../redux/products/products_api_slice";
import "./style.scss";

const Page1 = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.products);
  const user = useAppSelector((state) => state.auth.auth);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  const history = useHistory();

  return (
    <div>
      <div className="add-button">
        <button
          onClick={() => {
            history.push("/AddItem");
          }}
        >
          Add new item
        </button>
      </div>
      <div className="Discover-main">
        {products.map((product) => {
          return (
            <Card
              name={product.title ?? "dsda"}
              categorie={product.category ?? "dfa"}
              price={product.price}
              // clickAction={() => addToCartLis(product._id)}
              clickAction={() => {}}
              photoclick={() => {
                history.push("/Product/" + product._id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page1;
function addToCart(arg0: { userId: string; productId: string }): any {
  throw new Error("Function not implemented.");
}
