import { useParams } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import "./Category.scss";
import Product from "../../Components/Product-Card/Product";
import { useSelector } from "react-redux";
import {
  selectCategoryMap,
  selectCategoriesIsLoading,
} from "../../store/Categories/categories.selector";
import Spin from "../../Components/Spinner/Spin";
const Category = () => {
  const { category } = useParams();
  const categoryMap = useSelector(selectCategoryMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <Fragment>
      <h2 className="Cat-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spin />
      ) : (
        <div className="category-con">
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
