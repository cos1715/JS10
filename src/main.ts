import { setupCounter } from "./counter";
import viteLogo from "/vite.svg";
import typescriptLogo from "./typescript.svg";
import "./style.scss";

console.log("API_KEY", import.meta.env.API_KEY);
console.log("VITE_API_KEY", import.meta.env.VITE_API_KEY);
console.log("MODE", import.meta.env.MODE);

const elem = document.querySelector<HTMLDivElement>("#app");

if (elem) {
  elem.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
      </p>
  </div>
`;
}
const elemCounter = document.querySelector<HTMLButtonElement>("#counter");

elemCounter && setupCounter(elemCounter);
