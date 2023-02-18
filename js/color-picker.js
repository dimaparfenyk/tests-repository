const CounterPlugin=function({
  step=1,
  value=0,
  rootSelector}={})
  {
this.step=step;
this.value=value;
this.refs=this.getRefs(rootSelector);

this.bindEvents();
this.updateCounterValueInterface();
};

CounterPlugin.prototype.getRefs=function(rootSelector){
const refs={};

refs.container=document.querySelector(rootSelector),
refs.incrementBtn=refs.container.querySelector('[data-increment]');
refs.decrementBtn=refs.container.querySelector('[data-decrement]');
refs.counterValue=refs.container.querySelector('[data-value]');

return refs;
};

CounterPlugin.prototype.bindEvents=function(){
  this.refs.incrementBtn.addEventListener('click', ()=>{
   this.increment();
   this.updateCounterValueInterface();
  });
  this.refs.decrementBtn.addEventListener('click', ()=>{
   this.decrement();
   this.updateCounterValueInterface();
  })
};

CounterPlugin.prototype.increment=function(){
  this.value+=this.step;
};
CounterPlugin.prototype.decrement=function(){
  this.value-=this.step;
};

CounterPlugin.prototype.updateCounterValueInterface=function(){
  this.refs.counterValue.textContent=this.value;
};

const counter1 =new CounterPlugin({
  step:2,
  value:10,
  rootSelector:"#counter-1",
});

const counter2=new CounterPlugin({step:10,
  value:100,
  rootSelector:"#counter-2",});

  





























const colorPalette = document.querySelector(".color-palette");
const scrollValue = document.querySelector(".scrollValue");
let scrollEventCounter = 0;

document.addEventListener("scroll",_.throttle(() => {
  scrollEventCounter += 1;
  scrollValue.textContent = scrollEventCounter;
}, 300) );

const createPaletteItemsMarkup = () => {
    const items = [];

    for (let i = 0; i <= 100; i += 1) { 
      const item = document.createElement("button");
      item.type = "button";
      item.className = "item"
      item.style=`background-color:${getRandomColor()}`
      item.dataset.color=`${getRandomColor()}`
      items.push(item)
  };
  colorPalette.append(...items);
};

createPaletteItemsMarkup();

colorPalette.addEventListener("click", (e) => {
  const dataAttributeColor = e.target.dataset.color;
  if (!dataAttributeColor) {
    return;
  };
  const output = document.querySelector(".output")
  const color = e.target.style.backgroundColor;
  output.textContent = `SELECTED COLOR:${color}`;
  output.style.color = color;
});

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
};

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
};

const img = document.createElement("img");
img.setAttribute("loading", "lazy")  

img.src = ""
img.alt="Картинка"
console.dir(img)



