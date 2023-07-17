const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.getElementsByClassName('item');

console.log('Number of categories:', categoryItems.length);

Array.from(categoryItems).forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryElements = item.firstElementChild.nextElementSibling.children;

  console.log(`Category: ${categoryTitle}`);
  console.log('Elements:', categoryElements.length);
});

