const categories=document.querySelectorAll("#categories>.item");

function logMessage(categories) {
    console.log('Number of categories: ', categories.length);

categories.forEach(category => {
    const categoriesList = category.querySelector(".item>ul");
    const title = category.querySelector(".item>h2");

    console.log("Category: ", title.textContent)
    console.log("Elements: ",categoriesList.childElementCount);
});
};

logMessage(categories)





