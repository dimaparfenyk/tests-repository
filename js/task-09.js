const refs = {
  widget: document.querySelector("body"),
  colorLabel: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color")
};

console.dir(refs.widget.style)


refs.changeColorBtn.addEventListener("click", (e) => {
  console.dir(refs.widget.style)
  refs.colorLabel.textContent = getRandomHexColor()
  refs.widget.style.backgroundColor=getRandomHexColor()
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

