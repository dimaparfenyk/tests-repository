const form=document.querySelector(".login-form");

form.addEventListener("submit",e=>{
    e.preventDefault();
//     const {
//     elements: {
//       email,
//       password,
// }
//   } = e.currentTarget;
const email=e.currentTarget.elements.email.value;
const password=e.currentTarget.elements.password.value;

  const userData={
    email,
    password,
  };

    if (email === "" || password === "" ) {
    return alert("Please fill in all the fields!");
  };
    console.log(userData);
    e.currentTarget.reset();
});

