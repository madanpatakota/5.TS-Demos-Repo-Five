
/*********************Enums
 * 
 * Enum is a kind of special class which represents the group of the constant value.
 * 
 * By default enum start to initilize the variable with the 0 and then it will increase the count.
 * 
 * 
 *  ***************/


enum Customers_1{
    William,
    Clerk,
    James,
    Andy,
    Mery
}

console.log("William" , Customers_1.William);
console.log("Clerk" , Customers_1.Clerk);
console.log("James" ,Customers_1.James);
console.log("Andy" , Customers_1.Andy);
console.log("Mery" ,Customers_1.Mery);


/** You can assign with the numbers manually also  */


enum Customers_2{
  William = 101,
  Clerk = 201,
  James = 301,
  Andy = 401,
  Mery = 501
}

console.log("William" , Customers_2.William);
console.log("Clerk" , Customers_2.Clerk);
console.log("James" ,Customers_2.James);
console.log("Andy" , Customers_2.Andy);
console.log("Mery" ,Customers_2.Mery);





/** You can assign with the numbers manually also  */


enum Customers_3{
  William = "IND",
  Clerk = "US",
  James = "Aus",
  Andy = "UK",
  Mery = "SA"
}

console.log("William" , Customers_3.William);
console.log("Clerk" , Customers_3.Clerk);
console.log("James" ,Customers_3.James);
console.log("Andy" , Customers_3.Andy);
console.log("Mery" ,Customers_3.Mery);



/***********How to use the type Keyword in Typescript
 * 
 * type keyword in Typescript useful for creates the custom name.
 * 
 * type can used in any data type like string , number , boolean , undefined , null ( these 3 are primitives means once you declared you cannot change)
 * and also used in omplex data types like array, objects also
 * 
 * 
 */


/* Setup my custom types here with the help of the type */
  type name = string;
  type age  = number;
  type salary = number;
  type status = boolean;

  
  type personInfo = {
    name  : name,
    age   : age,
    price : salary,
    status : boolean
  }


  /* How to use the custom types over here */

  let empName    : name   = "William";
  let empAge     : age    = 55;
  let empSalary  : salary = 100000;
  let isMarried  : status = true;

  let empPersonalInfo_1 : personInfo = {
      name  : "James",
      age   : 50,
      price : 200000,
      status : true
  }
  console.log("empPersonalInfo_1",empPersonalInfo_1);



  /** Typescript  Interfaces 
   * 
   * 1. Same output we can get it by interfaces also
   * 2. Difference is interface we will be use only in the object . Not for string,number and boolean
   * 
   * 3. Real time Example :
   *    We can communicate the class with multiple interfaces where as A class can communicate the only one class
   * 
   * 
  */



  /* with the type */
  /*declaration*/
 interface IPersonInfo_type  {
        name  : string,
        age   : age,
        price : salary,
        status : status
  }


/*declaration*/
interface IPersonInfo  {
    name  : string,
    age   : age,
    price : salary,
    status : status
}


/*Initlization*/
let empPersonalInfo_2 : IPersonInfo = {
    name  : "James",
    age   : 50,
    price : 200000,
    status : true
}

console.log("empPersonalInfo_2" ,empPersonalInfo_2);

/* How to extend the interface ( here IPersonInfo) */
interface IPersonInfo_ExtraInfo extends IPersonInfo{
   location : string
}


/*Initlization with ExtraInfo*/
let empPersonalInfo_3 : IPersonInfo_ExtraInfo = {
  name  : "James",
  age   : 50,
  price : 200000,
  status : true,
  location : "UK"
}

console.log("empPersonalInfo_3" ,empPersonalInfo_3);




  


