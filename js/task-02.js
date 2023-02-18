const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// function renderIngredientListMarkUp(items){
// const ingredientsList=document.querySelector("#ingredients");

// const markUp=items
// .map(item=>`<li class='item'>${item}</li>`)
// .join("");

// ingredientsList.innerHTML=markUp;
// };

// renderIngredientListMarkUp(ingredients);

const ingredientsList=document.querySelector("#ingredients");

function renderIngredientListMarkUp(ingredients){

  const items = [];

 ingredients.map(ingredient => {
const item=document.createElement('li');
  item.classList.add("item");
   item.textContent = ingredient;
   items.push(item);
 });
  ingredientsList.append(...items);
};

renderIngredientListMarkUp(ingredients);
