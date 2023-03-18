console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setTimeout(() => {
  console.log("3");
}, 0);

const promise = Promise.resolve();

for (let i = 0; i < 2; i++) {
  promise
    .then(() => {
      setTimeout(() => {
        console.log("4");
        setTimeout(() => {
          console.log("5");
        }, 0);
      }, 0);

      Promise.resolve().then(() => {
        console.log("6");
      });
      promise.then(() => {
        console.log("7");
      });
    })
    .then(() => {
      console.log("8");
    });
}
console.log("9");

// new Promise((resolve) => {
//   resolve(1);
// })
//   .then(() => {
//     console.log("4");
//   })
//   .then(() => {
//     console.log("5");
//   });

// console.log("6");

// const callback = () => {
//   console.log("timeout callback");
// };
// setTimeout(callback, 100);

// const promiseCallback = (resolve) => {
//   console.log("Promise callback");
//   resolve(1);
// };
// new Promise(promiseCallback);

// const callBE = async () => {
//   const res = await fetch("https://dummyjson.com/products/1", {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title: "BMW Pencil",
//     }),
//   });
//   console.log(res);
//   const data = await res.json();
//   console.log(data);
// };

// callBE();

class Products {
  products = [];
  selectedProduct = null;
  searchedProducts = [];
  categories = [];
  page = 0;
  getAllProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        console.log(`${res.status} ${res.url}`);
        return res.json();
      })
      .then((data) => {
        this.products.push(...data.products);
      });
  }
  getProduct(id) {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(`${res.status} ${res.url}`);
        return res.json();
      })
      .then((data) => {
        this.selectedProduct = data;
      });
  }
  searchProduct(param) {
    const url = new URL("https://dummyjson.com/products/search");
    url.searchParams.set("q", param);
    fetch(url)
      .then((res) => {
        console.log(`${res.status} ${res.url}`);
        return res.json();
      })
      .then((data) => {
        this.searchedProducts.push(...data.products);
      });
  }
  async paginatedProducts(limit) {
    const url = new URL("https://dummyjson.com/products");
    url.searchParams.set("limit", limit);
    url.searchParams.set("skip", this.page);

    const res = await fetch(url);
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);

    this.page += limit;
    this.searchedProducts.push(...data.products);
  }
  async getProductCategories() {
    const url = new URL("https://dummyjson.com/products/categories");
    const res = await fetch(url);
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);

    this.categories.push(...data);
  }
  async getProductFromCategory() {
    const random = Math.floor(Math.random() * 19);
    await this.getProductCategories();
    const url = new URL(
      `https://dummyjson.com/products/category/${this.categories[random]}`
    );
    const res = await fetch(url);
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);

    this.searchedProducts.push(...data.products);
  }
  async createProduct(body) {
    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);

    this.products.push(data);
  }
  async updateProduct(id, body) {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "PATCH", // or 'PUT'
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);

    this.products.push(data);
  }
  async deleteProduct(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    });
    console.log(`${res.status} ${res.url}`);
  }
}

const myProducts = new Products();

myProducts
  .paginatedProducts(5)
  .then(() => myProducts.paginatedProducts(5))
  .then(() => myProducts.paginatedProducts(5))
  .then(() => myProducts.paginatedProducts(5));

myProducts.updateProduct(1111111111, {
  title: "My title",
  description: "no desc",
  price: 1,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  price: 12,
  category: "custom",
});
