import { useContext } from "react";
import { ProductsContext } from "../../contexts/product.contex";
import ProductCard from "../../component/product-card/product-card.component";
import "./shopPage.style.scss";
const ShopPage = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopPage;
