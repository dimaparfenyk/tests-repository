// const list = document.querySelector('.list');
// console.log(list);
// list.style.textTransform = 'uppercase';
// list.style.listStyle = 'none';

// const firstListItem = list.firstElementChild;
// firstListItem.style.color = 'red';
// console.log(firstListItem.textContent);

// const lastListItem = list.lastElementChild;
// console.log(lastListItem)

// const listItem = list.querySelectorAll('li');
// listItem.classList.add('item')
// console.log(listItem);

//===================================================
// const message = document.querySelector("#message");

// console.log(message.textContent); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// // title.classList.add('newclass')
// title.classList.toggle('newclass')
// title.classList.remove('newclass')
// title.textContent = 'Welcome to Bahamas!';

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn=document.querySelector('.editor button[data-action="close"]')
// console.dir(saveBtn.dataset.action)
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");

// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });

// const title=document.createElement('h1');
// title.classList.add('title');
// title.textContent='Это заголовок';
// console.log(title);

// const image=document.createElement('img');
// image.src='https://placeimg.com/640/480/nature';
// image.alt = "Nature";
// console.log(image);

// const textEl = document.createElement('p');
// textEl.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";

// const inputEl = document.createElement('input');
// inputEl.style.width = '320px';

// const container = document.querySelector('.editor');
// container.append(title, image, textEl, inputEl)

// const article = document.querySelector(".article");
// const title = document.querySelector(".title");
// const text = document.querySelector(".text");
// const link = document.querySelector(".link");

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const newTechnologies = ["Vue", "TypeScript", "Redux"];

// const listEl = document.querySelector(".list");
// const btnClick = document.querySelector('[data-action="click"]');
// // console.log(btnClick.dataset.action);

// btnClick.addEventListener('click', onbtnClickRenderMarkup)

// function onbtnClickRenderMarkup() {
//     const allTechnologiesMarkup = technologies
//     .concat(newTechnologies)
//     .map(technology => `<li class="list-item">${technology}</li>`)
//     .join("");

//     listEl.insertAdjacentHTML("beforeend",allTechnologiesMarkup)
// };


// const refs = {
//     addListenerBtn: document.querySelector('[data-action="add"]'),
//     removeListenerBtn: document.querySelector('[data-action="remove"]'),
//     btn: document.querySelector("#btn"),
// };

// const handleClick = event => {
//   // console.log("click event listener callback");
//   console.dir( event.currentTarget.dataset.action);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// refs.addListenerBtn.addEventListener("click", () => {
//   refs.btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// refs.removeListenerBtn.addEventListener("click", () => {
//   refs.btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });

// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// document.addEventListener("keydown", event => {
//   event.preventDefault();
//   console.log(event.ctrlKey)
//   console.log(event.altKey)
//   console.log(event.shiftKey)
//   console.log(event.code)
//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//     // console.log(event.metaKey)
//   }
// });


// __________________________  ФОРМА  _______________________________

// const form = document.querySelector(".register-form");

// form.addEventListener("submit",handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();
//   const {
//     elements: {
//       username,
//       password,
//       phone }
//   } = e.currentTarget;

//   if (username.value === "" || password.value === "" || phone.value==="") {
//     return console.log("Please fill in all the fields!");
//   };
//   console.log(username.value, password.value, phone.value);
//   // console.log(e.currentTarget.elements)
//   e.currentTarget.reset();
// }


// ____________________SELECT_________________________________

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   console.log("select: ",select)
//   console.log("select.value: ", select.value)
//   console.log("select.selectedIndex: ",select.selectedIndex);
//   console.log("select.option: ",select.options[3])
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }



const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", e => {
  output.textContent = e.currentTarget.value;
});

