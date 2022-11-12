/*************************************Tuple **********************
 * 
 * A tuple is noting but a named array
 * 
 * 
*/

var customerDetails_1 : [number , string , number , string] = [ 1  , "John" , 1200.09 , "London"];      //Note : make it proper reference variable name

console.log(customerDetails_1);



//some error in below incase if i make the number to boolean
//var customerDetails_2 : [number , string , boolean , string] = [ 1  , "John" , 1200.09 , "London"];      //Note : make it proper reference variable name
//console.log(customerDetails_2);




/*************How to make the tuple with readonly */
var customerDetails_3 : readonly [number , string , number , string] = [ 1  , "John" , 1200.09 , "London"];      //Note : make it proper reference variable name
//customerDetails_3.push("New value");



/***********************How to use the variable names in the tuples 
 * 
 * I mean if you want to give the name of the each type you can give also...
 * 
*/
var customerDetails_4 : [ ID:number , Name:string , price:number , location:string] = [ 1  , "John" , 1200.09 , "London"];      //Note : make it proper reference variable name
console.log(customerDetails_4);
console.log(customerDetails_4[0])




/*******************How to destructure the tuples */
var customerDetails_4 : [ number , string , number , string] = [ 1  , "John" , 1200.09 , "London"];      //Note : make it proper reference variable name
var [customerID , customerName , customerPrice , customerLocation] = [ 1  , "John" , 1200.09 , "London"];

console.log("customerID", customerID);
console.log("customerName" , customerName);
console.log("customerPrice", customerPrice);
console.log("customerLocation" , customerLocation);




/*****************Working on objects***************************
 * 
*/

var customerDetails_5 =  {
  "name"            : "Clerk",
  "price"           :  100.09,
  "location"        : "London",
  "isAdmin"         :  true
};

//***************Making the object with strong type **************/
// Practice this example as i will use this example in one of cocept in Angular
var customerDetails_6 : { "name" : string  , "price" : number , "location": string , "isAdmin":boolean} =  {
  "name"            : "Clerk",
  "price"           :  100.09,
  "location"        : "London",
  "isAdmin"         :  true
};

console.log("customerDetails_6" , customerDetails_6);


/*********** Testing for modify the type of the object *****************/
//customerDetails_6.isAdmin  = "Newyork";
customerDetails_6.isAdmin  = false;






/*****************How pass the optional properties into it***************************
 *  My making question mark(?) we can turn the option as a option parameter.
 *
*/


var customerDetails_7 : { "name" : string  , "price" : number , "location": string , "isAdmin": boolean , "Habbits"?:string[]} =  {
  "name"            : "Clerk",
  "price"           :  100.09,
  "location"        : "London",
  "isAdmin"         :  true
};



/*****************How pass the Default value to the properties***************************
 *  My making question mark(?) we can turn the option as a option parameter.
 *
*/


var customerDetails_7 : { "name" : string  , "price" : number , "location": string , "isAdmin": boolean , "Habbits"?:string[]} =  {
  "name"            : "Clerk",
  "price"           :  100.09,
  "location"        : "London",
  "isAdmin"         :  true
};




/****************How to make the Index signature to the viriable
 * 
 *  Note : In the index signature while initlizing the key name can anything.
 *  ************************/

// Keep this example i will use this example in one of concept in Angular.

var customerDetails_8 : { [ customerName : string] : string , [index : number ] : string} = {
  "name" : "Clerk",
   0     : "50Years"
}

console.log(customerDetails_8["customerName"]);
console.log(customerDetails_8["name"]);
console.log(customerDetails_8[0]);


var customerDetails_8 : { [ empName : string] : string , [age : number ] : string} = {
  "name" : "William",
   0     : "50Years"
}

console.log(customerDetails_8["customerName"]);


