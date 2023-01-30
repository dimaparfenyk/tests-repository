const input = document.querySelector('input');

// input.addEventListener("blur", (e) => {
//     const isInputWordLengthValid = e.currentTarget.value.length === Number(e.currentTarget.dataset.length);
    
//     if (isInputWordLengthValid) {
//         e.currentTarget.classList.remove("invalid")
//         e.currentTarget.classList.add("valid")
//     } else {
//         e.currentTarget.classList.remove("valid");
//         e.currentTarget.classList.add("invalid")
//     }
// })

input.addEventListener("blur", (e) => {
    const { value, dataset, classList } = e.currentTarget;

    switch (value.length) {
        case Number(dataset.length):
            classList.remove("invalid");
            classList.add("valid");
            break;
        default:
            classList.remove("valid");
            classList.add("invalid");
            break;
    };
});