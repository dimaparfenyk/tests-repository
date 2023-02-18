const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  boxes: document.querySelector('#boxes'),
};

const createMarkUp = () => {
  let markUp = '';
  
  isNumberInRange();

  for (let i = 0; i < refs.input.value; i += 1) {
   markUp += 
    `<div 
        style=
        "background-color:${getRandomHexColor()}; 
        width:64px; 
        height:64px;
        margin-right: 10px;">
    </div>`
  };
  refs.boxes.insertAdjacentHTML("beforeend", markUp);
  refs.input.value = '';
};

refs.createBtn.addEventListener("click", createMarkUp);

refs.destroyBtn.addEventListener("click", () => {
  refs.boxes.innerHTML = '';
});

const isNumberInRange = () => {
  const isNumberInRange =
    Number(refs.input.value) > refs.input.max ||
    Number(refs.input.value) < refs.input.min;
  
  if (isNumberInRange) {
    refs.input.value = '';
    alert("Введите число от 1 до 100");
  };
};

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
