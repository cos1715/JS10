// const elem1 = document.createElement("p");
// const elem2 = document.createElement("p");
// const elem3 = document.createElement("p");
// const elem4 = document.createElement("p");
// const elem5 = document.createElement("p");
// const text = document.createTextNode("My text");

// elem1.innerHTML = "My text 1";
// elem2.innerHTML = "My text 2";
// elem3.innerHTML = "My text 3";
// elem4.innerHTML = "My text 4";
// // elem5.innerHTML = "My text 5";
// elem5.append(text);

// const div = document.getElementById("append");

// div.prepend(elem3);
// div.append(elem1, elem2);
// div.before(elem4);
// div.after(elem5);

// const list = document.getElementById("ol");
// list.insertAdjacentHTML("afterbegin", "<li>-1</li>");
// list.insertAdjacentHTML("beforeend", "<li>3</li>");
// list.insertAdjacentHTML("beforebegin", "<p>before begin</p>");
// list.insertAdjacentHTML("afterend", "<p>after end</p>");

// const clone = document.getElementById("clone");

// // console.log(list.cloneNode(true));
// // div.append();

// // list.replaceWith(elem1);
// list.remove();

// const arr = [1, 2, 3];
// const nav = document.getElementById("nav");
// const ol = document.createElement("ol");

// arr.forEach((item) => {
//   const li = document.createElement("li");
//   const a = document.createElement("a");
//   a.href = `#${item}`;
//   a.innerHTML = `id: ${item}`;
//   // li.innerHTML = `<a href='#${item}'>id: ${item}</a>`;
//   li.append(a);
//   ol.append(li);
//   console.log(ol);
// });

// nav.append(ol);

// const loadImg = async () => {
//   const url = new URL("https://api.nasa.gov/planetary/apod");
//   url.searchParams.set("api_key", "2W7aoCKRPO9VadOE4cBhh8LHqiynai2NQ1F8MnRi");
//   const res = await fetch(url);
//   const data = await res.json();
//   const parent = document.getElementById("nasa");
//   const img = document.createElement("img");
//   const p = document.createElement("p");
//   img.src = data.url;
//   img.style.height = "200px";
//   img.style.borderRadius = "4px";
//   p.innerHTML = data.explanation;
//   parent.append(img, p);
// };

// loadImg();

const fetchData = async (url) => {
  const res = await fetch(url, {
    method,
  });
  const data = await res.json();
  return data;
};

const loadUser = async () => {
  const user = await fetchData("https://api.github.com/users/cos1715");
  const repos = await fetchData(user.repos_url);
  const parent = document.getElementById("nasa");
  const card = document.createElement("div");
  const img = document.createElement("img");
  const userInfoDiv = document.createElement("div");
  const reposP = document.createElement("p");
  card.classList.toggle("my-animation");

  img.src = user.avatar_url;
  img.classList.add("avatar");
  userInfoDiv.innerHTML = `<h1>${user.name}</h1><p>${user.login}</p><a href='${user.html_url}' target="_blank">Link to profile</a>`;
  reposP.innerHTML = `Repositories: ${repos.length}`;
  card.classList.add("card");
  card.append(img, userInfoDiv, reposP);
  parent.append(card);
};

// loadUser();

const data = [
  { header: "name", data: ["Taras", "Yaroslav"] },
  { header: "age", data: [12, 14] },
  { header: "study in university", data: [true, false] },
];

const createTable = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headerRow = document.createElement("tr");
  const rowsLength = data[0].data.length;

  table.style.border = "1px solid black";

  data.forEach((item) => {
    const th = document.createElement("th");
    th.innerHTML = item.header;
    th.style.border = "1px solid black";
    headerRow.append(th);
  });

  for (let i = 0; i < rowsLength; i++) {
    const row = document.createElement("tr");
    data.forEach((item) => {
      const td = document.createElement("td");
      td.innerHTML = item.data[i];
      td.style.border = "1px solid black";
      row.append(td);
    });
    tbody.append(row);
  }

  thead.append(headerRow);
  table.append(thead, tbody);
  document.body.prepend(table);
};

createTable();
