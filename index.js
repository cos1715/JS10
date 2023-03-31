const list = document.getElementById("list");
const children = [...list.children];

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    if (event.ctrlKey || event.metaKey) {
      event.target.classList.toggle("selected");
    } else if (event.shiftKey) {
      const firstSelectedIndex = children.findIndex((li) =>
        li.classList.contains("selected")
      );
      const currentClickedIndex = children.findIndex(
        (li) => li === event.target
      );
      const min = Math.min(firstSelectedIndex, currentClickedIndex);
      const max = Math.max(firstSelectedIndex, currentClickedIndex);
      children.forEach((li, index) => {
        if (index >= min && index <= max) {
          li.classList.add("selected");
        } else {
          li.classList.remove("selected");
        }
      });
    } else {
      children.forEach((li) => {
        if (li === event.target) {
          li.classList.toggle("selected");
        } else {
          li.classList.remove("selected");
        }
      });
    }
  }
});

document.addEventListener("click", (e) => {
  const div = document.createElement("div");
  div.style.width = "8px";
  div.style.height = "8px";
  div.style.borderRadius = "50%";
  div.style.backgroundColor = "black";
  div.style.position = "absolute";
  div.style.top = `${e.pageY}px`;
  div.style.left = `${e.pageX}px`;
  console.log(e);
  document.body.append(div);
  return false;
});
