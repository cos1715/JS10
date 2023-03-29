const btn = document.getElementById("btn");
const root = document.getElementById("root");
const div = document.getElementById("inner-div");

const onClick = (type) => (event) => {
  event.stopPropagation();
  console.log(type, event);
};

btn.addEventListener("mousedown", (event) => {
  console.log("mousedown", event);
});
btn.addEventListener("mouseup", (event) => {
  console.log("mouseup", event);
});
btn.addEventListener("click", (event) => {
  console.log("click", event);
});
// root.addEventListener("click", onClick("root div"));
// div.addEventListener("click", onClick("inner div"));

// root.addEventListener("click", (event) => {
//   console.log(event.target.nodeName, event.target.id);
//   if (event.target.nodeName === "BUTTON") {
//     event.target.innerText = "Clicked!!!";
//   }
//   if (event.target.nodeName === "DIV") {
//     let color = "#";
//     for (let i = 0; i < 3; i++) {
//       color += Math.floor(Math.random() * 256).toString(16);
//     }
//     event.target.style.background = color;
//   }
// });

// elem.removeEventListener("click", onClick);

// const btn = document.getElementById("btn");
// btn.addEventListener("click", (e) => {
//   e.target.innerHTML = "Clicked!!!";
//   let color = "#";
//   for (let i = 0; i < 3; i++) {
//     color += Math.floor(Math.random() * 256).toString(16);
//   }
//   e.target.style.background = color;
// });

// const collapseTitle = document.getElementById("collapse-title");
// collapseTitle.addEventListener("click", (event) => {
//   console.log(event);
// });

// const text = document.getElementById("text");
// const textState = text.innerText;

// text.addEventListener("click", (event) => {
//   const collapsed = event.target.getAttribute("data-collapsed");
//   if (collapsed === "true") {
//     event.target.innerText = textState;
//     event.target.setAttribute("data-collapsed", false);
//   } else {
//     const slicedText = textState.slice(0, 25);
//     event.target.innerText = `${slicedText}...`;
//     event.target.setAttribute("data-collapsed", true);
//   }
// });

const table = document.getElementById("table");
table.addEventListener("click", (e) => {
  if (e.target.tagName === "TH") {
    alert(e.target.innerText);
  }
  if (e.target.tagName === "TD") {
    console.log(e.target.innerText);
  }
});
