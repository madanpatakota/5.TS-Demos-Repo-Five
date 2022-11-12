/*********************Enums
 *
 * Enum is a kind of special class which represents the group of the constant value.
 *
 * By default enum start to initilize the variable with the 0 and then it will increase the count.
 *
 *
 *  ***************/
var Customers_1;
(function (Customers_1) {
    Customers_1[Customers_1["William"] = 0] = "William";
    Customers_1[Customers_1["Clerk"] = 1] = "Clerk";
    Customers_1[Customers_1["James"] = 2] = "James";
    Customers_1[Customers_1["Andy"] = 3] = "Andy";
    Customers_1[Customers_1["Mery"] = 4] = "Mery";
})(Customers_1 || (Customers_1 = {}));
console.log("William", Customers_1.William);
console.log("Clerk", Customers_1.Clerk);
console.log("James", Customers_1.James);
console.log("Andy", Customers_1.Andy);
console.log("Mery", Customers_1.Mery);
/** You can assign with the numbers manually also  */
var Customers_2;
(function (Customers_2) {
    Customers_2[Customers_2["William"] = 101] = "William";
    Customers_2[Customers_2["Clerk"] = 201] = "Clerk";
    Customers_2[Customers_2["James"] = 301] = "James";
    Customers_2[Customers_2["Andy"] = 401] = "Andy";
    Customers_2[Customers_2["Mery"] = 501] = "Mery";
})(Customers_2 || (Customers_2 = {}));
console.log("William", Customers_2.William);
console.log("Clerk", Customers_2.Clerk);
console.log("James", Customers_2.James);
console.log("Andy", Customers_2.Andy);
console.log("Mery", Customers_2.Mery);
/** You can assign with the numbers manually also  */
var Customers_3;
(function (Customers_3) {
    Customers_3["William"] = "IND";
    Customers_3["Clerk"] = "US";
    Customers_3["James"] = "Aus";
    Customers_3["Andy"] = "UK";
    Customers_3["Mery"] = "SA";
})(Customers_3 || (Customers_3 = {}));
console.log("William", Customers_3.William);
console.log("Clerk", Customers_3.Clerk);
console.log("James", Customers_3.James);
console.log("Andy", Customers_3.Andy);
console.log("Mery", Customers_3.Mery);
/* How to use the custom types over here */
let empName = "William";
let empAge = 55;
let empSalary = 100000;
let isMarried = true;
let empPersonalInfo_1 = {
    name: "James",
    age: 50,
    price: 200000,
    status: true
};
console.log("empPersonalInfo_1", empPersonalInfo_1);
/*Initlization*/
let empPersonalInfo_2 = {
    name: "James",
    age: 50,
    price: 200000,
    status: true
};
console.log("empPersonalInfo_2", empPersonalInfo_2);
/*Initlization with ExtraInfo*/
let empPersonalInfo_3 = {
    name: "James",
    age: 50,
    price: 200000,
    status: true,
    location: "UK"
};
console.log("empPersonalInfo_3", empPersonalInfo_3);
