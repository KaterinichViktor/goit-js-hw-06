// const categoriesList = document.querySelector('#categories');

// const categoryItems = categoriesList.querySelectorAll('li.item');

// console.log('Number of categories:', categoryItems.length);

// categoryItems.forEach((item) => {

//   const categoryTitle = item.querySelector('h2').textContent;

//   const categoryElements = item.querySelectorAll('li');

//   console.log(`Category: ${categoryTitle}`);
//   console.log('Elements:', categoryElements.length);
// });


const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.getElementsByClassName('item');

console.log('Number of categories:', categoryItems.length);

Array.from(categoryItems).forEach((item) => {
  const categoryTitle = item.getElementsByTagName('h2')[0].textContent;

  const categoryElements = item.getElementsByTagName('li');

  console.log(`Category: ${categoryTitle}`);
  console.log('Elements:', categoryElements.length);
});
