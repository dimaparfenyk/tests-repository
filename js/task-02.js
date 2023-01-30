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



function renderIngredientListMarkUp(ingredientsArr){
const ingredientsList=document.querySelector("#ingredients");

 ingredientsArr.map(ingredient => {
const element=document.createElement('li');
  element.classList.add("item");
  element.textContent = ingredient;
  ingredientsList.append(element)
 });
};

renderIngredientListMarkUp(ingredients);
