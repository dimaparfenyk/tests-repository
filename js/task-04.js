const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value:document.querySelector('#value'),
};

// __________________FIRST METHOD_________________________

// const counterValue = {
//     value: 0,
    
//     increment() {
//         this.value += 1;
//         refs.value.textContent = this.value;
//     },
 
//     decrement() {
//         this.value -= 1;
//         refs.value.textContent = this.value;
//     },
// }

// refs.decrementBtn.addEventListener('click',()=> {counterValue.decrement()});
// refs.incrementBtn.addEventListener('click', () => { counterValue.increment() });

// _________________SECOND METHOD______________________________

// let counterValue = 0;

// const onCounterIncrementClick = () => {
//     counterValue += 1;
//     refs.value.textContent = counterValue;
// };

// const onCounterDecrementClick =()=> {
//     counterValue -= 1;
//     refs.value.textContent = counterValue;
// };
// refs.decrementBtn.addEventListener('click',onCounterDecrementClick)
// refs.incrementBtn.addEventListener('click', onCounterIncrementClick)


// ________________________THIRD METHOD____________________________________

// let counterValue = 0;

// const onCounterClick = (e) => {
   
//     switch (e.currentTarget.dataset.action) {
//         case "decrement":
//             counterValue -= 1;
//             refs.value.textContent = counterValue;
//             break;
//         case "increment":
//             counterValue += 1;
//             refs.value.textContent = counterValue;
//             break;
    
//         default:
//             break;
//     };
// };

// refs.decrementBtn.addEventListener('click', onCounterClick);
// refs.incrementBtn.addEventListener('click', onCounterClick);

// ______________FOURTH METHOD______________

const counterValue = {
    value : 0,

    changeValue(e) {
        switch (e.currentTarget.dataset.action) {
           case "increment":
            this.value += 1;
            refs.value.textContent = this.value;
            break;
        case "decrement":
            this.value -= 1;
            refs.value.textContent = this.value;
            break;
        default:
            break;
        };
    }
};


refs.decrementBtn.addEventListener('click', (e) => { counterValue.changeValue(e) });
refs.incrementBtn.addEventListener('click',(e) => { counterValue.changeValue(e) });

