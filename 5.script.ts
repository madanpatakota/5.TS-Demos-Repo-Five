
/************************Introduction the class ******************

 * 1. What is class ?
 *    class a special type of the function which mantains the group the relative members.
 *    Here members are : 1. constructor(special method)
 *                       2. properties
 *                       2. methods    (normal  methods)
 * 
 * 2. Is it part of the Javascript?
 *    JavaScript didn't originally have classes. Classes were added with the introduction of ECMASCRIPT6 (es6) i mean 2015year version,
 * 
 * 
 *  How to declare the class : syntax
 *       class <classname>{
 *  
 *           constructor(){
 *                         <statement(s)>
 *                        }
 
 *               }
 *  What is constructor ?
 *  A constructor is a speical method in a class which automatically triggers when the class gets instantiated(created with object).

*/


class Product_1{
   productName = "Iphone";
}

let product_1 = new Product_1();
let pName_1   = product_1.productName;
//console.log(pName_1);


/* By default we can access members from class. 
   If you want to make the secure you can do by private or protected
*/

class Product_2{
  productName = "Iphone";
  productPassword = "$"
}

let product = new Product_2();
let pName   = product.productName;
//console.log(pName);









console.log("Madan");























