const form = document.getElementById("form");
// const firstName = form.elements["firstName"];
// const checkbox = form.elements["checkbox"];
// console.dir(form);

// checkbox.addEventListener("change", (e) => {
//   console.log(e);
// });

// const radioButtons = document.querySelectorAll("input[type='radio']");
// console.log(radioButtons);
// for (let radioBtn of radioButtons) {
//   radioBtn.addEventListener("change", (e) => {
//     console.log(e.target.checked, e.target.value);
//   });
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e);
//   const formData = new FormData(e.target);
//   const entries = formData.entries();

//   for (let entry of entries) {
//     console.log(`name: ${entry[0]}`, `value: ${entry[1]}`);
//   }
// });

// firstName.addEventListener("focus", (event) => {
//   console.log("focus", event.target.value);
// });

// firstName.addEventListener("keydown", (event) => {
//   console.log("keydown", event.target.value);
//   console.log("keydown", event);
//   // key
// });

// firstName.addEventListener("keyup", (event) => {
//   const value = event.target.value.toLowerCase();
//   const placeholder = event.target.placeholder.toLowerCase();
//   const placeholderArr = placeholder.split("");
//   const index = value.length - 1;
//   const lastLetter = value.slice(-1);
//   console.log("keyup", event.target.placeholder);
//   if (placeholderArr[index] !== lastLetter) {
//     const correctValue = value.slice(0, index);
//     event.target.value = correctValue;
//   }
// });

// firstName.addEventListener("blur", (event) => {
//   console.log("blur", event);
//   if (event.target.value.length > 10) {
//     event.target.style.border = "1px solid green";
//   } else {
//     event.target.style.border = "1px solid red";
//   }
//   // event.target.value = "Taras";
// });

// const password = document.getElementById("password");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", (e) => {
//   if (password.type === "password") {
//     e.target.innerText = "Hide password";
//     password.type = "text";
//   } else {
//     password.type = "password";
//     e.target.innerText = "Show password";
//   }
// });

// const fileInput = document.getElementById("file");

// fileInput.addEventListener("change", (e) => {
//   console.log(e);
//   const reader = new FileReader();

//   reader.addEventListener("load", (event) => {
//     console.log("load event", event);
//     const img = document.createElement("img");
//     img.src = reader.result;
//     console.log("result", reader.result);
//     document.body.append(img);
//   });

//   reader.readAsDataURL(e.target.files[0]);
// });

const fileInput = document.getElementById("file");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "multipart/form-data");
  myHeaders.append(
    "x-api-key",
    "live_KM2XaepFFn85vLPmcyoNXg6HNdCzsJHhSDYH83X5JxdNBrv8zlqTRCFPrQUdVJEp"
  );

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData,
  };
  fetch("https://api.thecatapi.com/v1/images/upload", requestOptions);
});
