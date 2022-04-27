// import "./categories-preview.style.scss";

import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../component/product-card/product-card.component";
import CategoryPreview from "../../component/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview keys={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
