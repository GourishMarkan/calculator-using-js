"use strict";
let string = "";
let buttons = document.querySelectorAll(".button");

// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTMl == "=") {
//       string = eval(string);
//       document.querySelector("input").value = string;
//     } else if (e.target.innerHTMl == "AC") {
//       string = "";
//       document.querySelector("input").value = string;
//     } else {
//       //   console.log(e.target);
//       string = string + e.target.innerHTMl;
//       document.querySelector("input").value = string;
//     }
//   });
// });
// console.log("hi");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        document.querySelector("input").value = string;
      } else {
        console.log(e.target);
        // throw err;
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    } catch (err) {
      string = `error${err.message}`;
      document.querySelector("input").value = string;
    }
  });
});
