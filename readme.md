# JS Homework

## Github users

Fetch github users https://api.github.com/users
Show avatar, name, nickname, repos count, number of followers.  
Load user organisations and show their images in card  
P.S. if you have troubles with api just get users and render cards with img and name  
\* Extra task add loading indicator

###Tips

> Add [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension  
> Add type module script tag

```js script
<script type="module" src="./file.js"></script>
```

> Add import in your file  
> [Documentation](https://github.com/octokit/octokit.js) about library

```js script
import { Octokit } from "https://cdn.skypack.dev/octokit";
```

> Create an [access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

```js script
new Octokit({
  auth: "YOUR_KEY",
});
```

You may browse for design examples
[Design examples](https://codepen.io/tag/user-card?cursor=ZD0xJm89MCZwPTE=)

<!-- // Cats
// 'x-api-key': live_KM2XaepFFn85vLPmcyoNXg6HNdCzsJHhSDYH83X5JxdNBrv8zlqTRCFPrQUdVJEp
// as a query string parameter e.g. 'api_key=live_KM2XaepFFn85vLPmcyoNXg6HNdCzsJHhSDYH83X5JxdNBrv8zlqTRCFPrQUdVJEp'

// NASA
// const url = new URL("https://api.nasa.gov/planetary/apod");
// url.searchParams.set("api_key", "2W7aoCKRPO9VadOE4cBhh8LHqiynai2NQ1F8MnRi"); -->
