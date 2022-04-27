import { createContext, useState, useEffect } from "react";
// import { addCollectionAndDocument } from "../utils/util.js";
import { getCategoriesAndDocument } from "../utils/util.js";
import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoryMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument();
      console.log(categoryMap);
      setCategoryMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
