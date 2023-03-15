# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Server Mock

Create class **MockServer**  
Create private property **users**  
**users** is an array  
Methods can be static  
All class methods should have 1 sec of delay. Similar to what we wrote during lesson  
Create method **getAllUsers**. This method returns a fulfilled promise with all users  
Create method **getUser**. This method receives id as arg.  
This method returns a fulfilled promise with user if user exists in **users**  
and rejected promise with custom error if no user found  
Create method **addUser** which adds users to **users**. This method receives user object as arg.  
**addUser** returns a fulfilled promise with value **true** if user arg has properties **id**, **name**, **age**  
else **addUser** returns a rejected promise with value custom error  
Create method **updateUser** which updates user in **users**. This method receives id as first arg user object as second arg.  
**updateUser** returns a fulfilled promise with updated users if user exists in **users**  
else **updateUser** returns a rejected promise with value custom error  
Create method **deleteUser** which deletes user in **users**. This method receives id as arg  
**deleteUser** returns a fulfilled promise with value **true** if user existed in **users**  
and was successfully deleted.  
else **deleteUser** returns a rejected promise with value custom error

Please write a function that works with promise chains and async/await function  
console.log the result  
Create special function that creates users from promise array

```javascript
class MockServer {
  #users = [];
  // your code
}

const readAllUsers = async () => {
  // your code
};
const readUserById = (id) => {
  // your code
};
```
