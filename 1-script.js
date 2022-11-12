/*********************************************  Assignment of the vaiables. *****************************/
//*** Making the variable with specified type.. So this is called as strong type.....  */
var CustomerID_One = 1;
var customerName_One = "William";
var isStatus = true;
//    CustomerID_One = "Madan";
// if i am going replace with string value
CustomerID_One = 2;
customerName_One = "William";
isStatus = false;
/* TypeScript allows specifying the types of data being passed around within the code, and has the ability to generate the errors when the types don't match.  */
//customerName_One  =  1;
//isStatus          = "New york";
//customerName_One  = 10.09;
/****** How to make my variable with any kind of the type */
let someValue = "London";
someValue = true;
someValue = 10.09;
/**************How to design the variable type if incase of unknown(some situations you might not sure what kind of the datatype what is) */
let whatsIntheirMind = "London";
whatsIntheirMind = true;
whatsIntheirMind = 10.09;
/******************* How to find the difference between unknown and any ****************/
let chekcing_one = someValue;
//let chekcing_two : string = whatsIntheirMind;
/***************************************Working with Arrays *********************/
var customerIDs = [1, 2, 3]; //Note : Array of numbers
var customerNames = ["John", "Robert", "Peter"]; //Note : Array of strings
customerIDs.push(5);
//customerIDs.push("William");
//customerNames.push(188888888);
customerNames.push("James");
/******************************How to make my array in readonly position. that means i should not allow anything into it  */
var customerNames_readonly = ["John", "Robert", "Peter"]; //Note : Array of strings
//customerNames_readonly.push("James");
