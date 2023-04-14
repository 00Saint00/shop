export const selectCategoryMap = (state) => state.categories.categoriesMap;
// .reduce((acc, docSnapshot) => {
//   const { title, items } = docSnapshot.data();
//   acc[title.toLowerCase()] = items;
//   return acc;
// }, {});
