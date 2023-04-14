import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PreviewCategories from "../categories-preview/PreviewCategories";
import Category from "../Category/Category.jsx";
import { getCategoriesAndDocuments } from "../../Utils/Firebase/Firebase";
import { setCategoriesMap } from "../../store/Categories/categories.action.js";
// import "./Shop.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
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
