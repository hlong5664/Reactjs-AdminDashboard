import { Single } from "../../components/Single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

export const Product = () => {
  //Fetch data and send to Single Component
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};
