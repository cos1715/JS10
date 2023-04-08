interface UrlForm extends HTMLFormElement {
  url: HTMLInputElement;
  qpn: HTMLInputElement;
  qpv: HTMLInputElement;
  urlId: HTMLInputElement;
}
interface ILocalForm extends HTMLFormElement {
  username: HTMLInputElement;
  email: HTMLInputElement;
}

const urlForm = document.getElementById("url-form") as UrlForm | null;

if (urlForm) {
  urlForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const urlInput = urlForm["url"].value;
    const queryName = urlForm["qpn"].value;
    const queryValue = urlForm["qpv"].value;
    const urlId = urlForm["urlId"].value;

    const url = new URL(urlInput);
    url.searchParams.set(queryName, queryValue);
    url.hash = urlId;

    location.assign(url.toString());
  });
}
const localForm = document.getElementById("local-form") as ILocalForm | null;

if (localForm) {
  const username = localForm["username"];
  const email = localForm["email"];

  const emailValue = localStorage.getItem("username") || "";
  const userValue = localStorage.getItem("email") || "";
  username.value = userValue;
  email.value = emailValue;

  username.addEventListener("keyup", (e) => {
    const target = e.target as HTMLInputElement;
    localStorage.setItem("username", target.value);
  });

  email.addEventListener("keyup", (e) => {
    const target = e.target as HTMLInputElement;
    localStorage.setItem("email", target.value);
  });

  localForm.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("email");
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const readCookie = (name: string): string | null => {
  const cookies = document.cookie.split("; ");
  let result = null;

  cookies.forEach((cookie) => {
    const [key, value] = cookie.split("=");
    if (key === name) {
      result = value;
    }
  });

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteCookie = (name: string) => {
  document.cookie = `${name}=1; expires=${new Date("1970").toUTCString()}`;
};
