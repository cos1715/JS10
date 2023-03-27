import { Octokit } from "https://cdn.skypack.dev/octokit";

class UserService {
  constructor() {
    this.container = document.getElementById("root");
    this.octokit = new Octokit({
      auth: "YOUR_KEY",
    });
    this.render();
  }
  #baseUrl = "https://api.github.com/users";
  createLoader = () => {
    this.loader = document.createElement("div");
    this.loader.classList.add("loading-indicator");
    this.mountElement(this.loader);
  };
  createCard = (user) => {
    const card = document.createElement("div");
    const userInfoDiv = this.createUserInfoBlock(user);
    const userRepos = this.createRepos(user);
    const userFollowers = this.createFollowers(user);

    card.id = user.id;
    card.classList.add("card");
    card.append(userInfoDiv, userRepos, userFollowers);
    this.mountElement(card);
  };
  createUserInfoBlock = (user) => {
    const userInfoDiv = document.createElement("div");
    const img = document.createElement("img");
    const userNamesDiv = this.createNames(user);

    userInfoDiv.classList.add("user-info");

    img.src = user.avatar_url;
    img.classList.add("avatar");

    userInfoDiv.append(img, userNamesDiv);

    return userInfoDiv;
  };
  createNames = (user) => {
    const userNamesDiv = document.createElement("div");
    const userName = document.createElement("h1");
    const userLogin = document.createElement("p");
    const link = document.createElement("a");

    userNamesDiv.classList.add("user-name");

    link.innerHTML = user.login;
    link.href = user.html_url;
    link.classList.add("link");

    userLogin.append(link);

    userName.innerHTML = user.name || "";

    userNamesDiv.append(userName, userLogin);

    return userNamesDiv;
  };
  createRepos = (user) => {
    const p = document.createElement("p");
    p.id = `repos-${user.id}`;
    p.classList.add("h-20", "text-loading-indicator");

    return p;
  };
  updateRepos = (user) => {
    const p = document.getElementById(`repos-${user.id}`);
    p.classList.toggle("text-loading-indicator");
    p.innerHTML = `Repos: ${user.repos?.length}`;
  };
  createFollowers = (user) => {
    const p = document.createElement("p");
    p.id = `followers-${user.id}`;
    p.classList.add("h-20", "text-loading-indicator");

    return p;
  };
  updateFollowers = (user) => {
    const p = document.getElementById(`followers-${user.id}`);
    p.classList.toggle("text-loading-indicator");
    p.innerHTML = `Followers: ${user.followers?.length}`;
  };
  createOrgs = (user) => {
    const card = document.getElementById(user.id);
    const div = document.createElement("div");
    div.classList.add("orgs");

    user.orgs.forEach((org) => {
      const img = document.createElement("img");
      img.src = org.avatar_url;
      img.classList.add("org-image");
      div.append(img);
    });

    card.append(div);
  };
  mountElement = (element) => {
    this.container.append(element);
  };
  removeElement = (element) => {
    element.remove();
  };
  getAllUsers = async () => {
    try {
      const res = await this.octokit.request("GET /users");
      this.users = res.data;
      res.data.forEach((user) => {
        this.getUserOrgs(user);
        this.getUserRepos(user);
        this.getUserFollowers(user);
      });
    } catch (err) {
      console.log(err);
    }
  };
  getUserOrgs = async (user) => {
    try {
      const res = await this.octokit.request(`GET /users/${user.login}/orgs`);
      user.orgs = res.data;
      this.createOrgs(user);
    } catch (err) {
      console.log(err);
    }
  };
  getUserRepos = async (user) => {
    try {
      const res = await this.octokit.request(`GET /users/${user.login}/repos`);
      user.repos = res.data;
      this.updateRepos(user);
    } catch (err) {
      console.log(err);
    }
  };
  getUserFollowers = async (user) => {
    try {
      const res = await this.octokit.request(
        `GET /users/${user.login}/followers`
      );
      user.followers = res.data;
      this.updateFollowers(user);
    } catch (err) {
      console.log(err);
    }
  };
  render = async () => {
    this.createLoader();
    await this.getAllUsers();
    this.removeElement(this.loader);
    this.users.forEach((user) => {
      this.createCard(user);
    });
  };
}

const userService = new UserService();
