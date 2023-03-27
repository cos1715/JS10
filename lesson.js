// const elem = document.getElementById("div");
// elem.classList.toggle("my-animation");
// setTimeout(() => {
//   elem.classList.toggle("my-animation");
// }, 3000);

const elem = document.getElementById("json-data");
elem.classList.add("my-animation", "style-div");

const printData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products/112112");
    const data = await res.json();
    setTimeout(() => {
      if (res.ok) {
        elem.classList.remove("my-animation");
        elem.classList.add("success");
        elem.innerHTML = JSON.stringify(data);
      } else {
        elem.classList.remove("my-animation");
        elem.classList.add("error");
        elem.innerHTML = JSON.stringify(data);
      }
    }, 1000);
  } catch (err) {
    elem.classList.remove("my-animation");
    elem.classList.add("error");
    elem.innerHTML = JSON.stringify(err);
  }
};

printData();

// fetch("https://dummyjson.com/products/11111")
//   .then((res) => res.json())
//   .then((data) => {
//     const elem = document.getElementById("json-data");
//     console.log(data);
//     elem.classList.add("success");
//     elem.innerHTML = JSON.stringify(data);
//   })
//   .catch((err) => {
//     elem.classList.add("error");
//     elem.innerHTML = JSON.stringify(err);
//   });

// const divList = document.querySelectorAll("div");

// for (let div of divList) {
//   div.classList.add("style-div");
// }
// setTimeout(() => {
//   for (let div of divList) {
//     div.classList.add("my-animation");
//   }
// }, 3000);
