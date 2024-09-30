import Nav from "./components/Nav";
import ProductCategory from "./components/ProductCategory";
import { useState } from "react";

const links = ["Home", "Product", "Contact"];
const App = () => {
  const [productClick, setProductClick] = useState(false);


  const handleProductClick = () => {
    setProductClick((prev) => !prev);
  };
  return (
    <>
      <Nav onProductClick={handleProductClick} productClick={productClick} links={links} />
      <ol className="relative hidden">
        <ProductCategory storeType={"Tee store"} />
        <ProductCategory storeType={"Bottle store"} />
        <ProductCategory storeType={"Tote store"} />
        <ProductCategory storeType={"Notepad store"} />
      </ol>
    </>
  );
};

export default App;
