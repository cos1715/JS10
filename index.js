class UserService {
  static getAllUsers = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  static getUser = (id) => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  static searchUsers = (query) => {
    fetch(`https://dummyjson.com/users/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  static filterUsers = async (key, value) => {
    try {
      const url = new URL("https://dummyjson.com/users/filter");
      url.searchParams.set("key", key);
      url.searchParams.set("value", value);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      debugger;
      console.log(err);
    }
  };
  static paginateUsers = async (limit, skip) => {
    try {
      const url = new URL("https://dummyjson.com/users");
      url.searchParams.set("limit", limit);
      url.searchParams.set("skip", skip);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  static getUserCart = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}/carts`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  static getUserPosts = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}/posts`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  static getUserTodos = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}/todos`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  static addUser = async (body) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  static updateUser = async (id, body) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "PUT" /* or PATCH */,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  static deleteUser = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
}
