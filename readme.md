# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## OOP

Create class **Vehicle**  
Initialize class with properties **power**, **gasTank** and **mass** in tones
Calculate max speed by formula **0.84 \* power / mass**  
Create method **getMaxSpeed** that returns **maxSpeed**  
Calculate gas usage per km by formula **Math.round(maxSpeed / power \* 100)**  
Create method **getGasUsage** that returns **gasUsage**
Create method **startEngine** that sets property **started** to true
Create method **stopEngine** that sets property **started** to false
Create method **drive**. This method receives 2 arguments **speed** and **distance** in km  
You cannot **drive** if **started** is false  
You cannot set **speed** more then **maxSpeed** and less then 0  
Update **gas** property corresponding to **gasUsage**
Formula to calculate **gas** level is **distance** \* **gasUsage** / 100  
Create method **addGas** adds **gas** to car by arg  
Argument must be bigger then zero  
You cannot pour more **gas** then **gasTank**  
Create method **printInfo** that prints in console all available information

Create class **Car**  
**Car** should inherit from **Vehicle**  
Initialize **Car** with additional properties **type** and **maxPassengerCount**  
Examples of **type** SEDAN, MINIVAN, SPORTS CAR...  
Update method **printInfo** that prints in console all available information

Create class **Bus**  
**Bus** should inherit from **Car**
Create method **updatePassengers** that receives argument **passengers** and updates **passengerCount** to that number  
**passengerCount** cannot be more then **maxPassengerCount** and less then 0  
Update method **printInfo** that prints in console all available information

```javascript
class Vehicle {
  // your code
}

class Car {
  // your code
}

class Bus {
  // your code
}
```
