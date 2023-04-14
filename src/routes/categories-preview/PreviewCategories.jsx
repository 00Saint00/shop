import { Fragment } from "react";
// import { CategoriesContext } from "../../contexts/CategoryContext";
import { useSelector } from "react-redux";

import { selectCategoryMap } from "../../store/Categories/categories.selector";
import CategoryPreview from "../../Components/category-preview/Categorypreview";

const PreviewCategories = () => {
  const categoryMap = useSelector(selectCategoryMap);
  // const { categoryMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default PreviewCategories;
