import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PreviewCategories from "../categories-preview/PreviewCategories";
import Category from "../Category/Category.jsx";

import { fetchCategoriesStart } from "../../store/Categories/categories.action.js";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(fetchCategoriesStart());
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<PreviewCategories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
