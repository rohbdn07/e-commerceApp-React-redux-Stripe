import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsAction } from "../../Redux/Action/getProducts-Action";
// import MenProduct from "./MenProduct";
// import JeweleryProducts from "./JeweleryProducts";
// import ElectronicProducts from "./ElectronicProducts";
// import WomenProducts from "./WomenProducts";
import { axiosFetchAPI } from "../../servicesAPI/axios";

import Products from "./Products";

export default function ProductsList() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axiosFetchAPI.get(
        "https://fakestoreapi.com/products?limit=20"
      );
      setLoading(true);
      // console.log('the products datas are: ', data)
      dispatch(getProductsAction(data));
      setLoading(false);
    } catch (error) {
      console.log("server error", error);
    }
  };

  return (
    <>
      <div className="container">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div className="product_list">
            <Products title="Men's clothes" category="men's clothing" />
            <Products title="Women's clothes" category="women's clothing" />
            <Products title="Electronics" category="electronics" />
            <Products title="Jewelery" category="jewelery" />
          </div>
        )}
      </div>
    </>
  );
}
