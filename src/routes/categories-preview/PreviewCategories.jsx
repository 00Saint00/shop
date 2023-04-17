import { Fragment } from "react";

import { useSelector } from "react-redux";

import {
  selectCategoryMap,
  selectCategoriesIsLoading,
} from "../../store/Categories/categories.selector";
import CategoryPreview from "../../Components/category-preview/Categorypreview";
import Spin from "../../Components/Spinner/Spin";

const PreviewCategories = () => {
  const categoryMap = useSelector(selectCategoryMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spin />
      ) : (
        Object.keys(categoryMap).map((title) => {
          const products = categoryMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default PreviewCategories;
