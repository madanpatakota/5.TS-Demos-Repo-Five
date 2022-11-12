
/*************How to use the multi data type(union) to the varaible 
 * 
 * Just imagine some situations your datatype might be accept more than one datatype .
 * 
*/

let cusomerPrice1 : number ;

    cusomerPrice1 = 1000;


let cusomerPrice2 : number | string ;
    
    cusomerPrice2 = 1000;
    cusomerPrice2 = "1000";



/********************* functions 
 * 
 * We can decide the function return type also with the help of the typescript
 * 
 */

   function getCustomerName() : string {
      return "William";
   }

   getCustomerName();


  /*** Even we can check with void also 
   * 
   * Non return type is nothing but is void 
  */

  function customerStatus() : void {
      console.log("Currently he is working.....");
  }

  customerStatus();



  /********
   *  function parameters
   */


function customerDetails(name:string , location : string , age: number) : void {
    console.log(`customerDetails:::: name ${name}- location ${location} - age ${age}`);
 }

 customerDetails("William" , "UK" ,  50);



/* function optinoal parameter */ 

function customerDetails_extra(name:string , location : string , age: number , salary?:number) : void {
  console.log(`customerDetails_Extra :::: name ${name}- location ${location} - age ${age} salary - ${salary}`);
}

customerDetails_extra("Peter.Jr" , "SA" ,  45);
customerDetails_extra("Peter.Jr" , "SA" ,  45, 10000);



/* function Default value to the  parameter 
*/ 

function customerDetails_extra_defaultValues(name:string , location : string , age: number , salary : number = 0) : void {
  console.log(`customerDetails_Extra_Default :::: name ${name}- location ${location} - age ${age} salary - ${salary}`);
}

customerDetails_extra_defaultValues("Andy" , "US" ,  40);
customerDetails_extra_defaultValues("Andy" , "US" ,  40 , 10000);




/* functions with Rest  parameter
 Note : rest parameter gather the information in the array format.
*/ 


function customerDetails_Rest(name:string , location : string , ...info) : void {

  let customerInfo = info;
  console.log("customerInfo from rest param" , customerInfo);

  console.log(`customerDetails_Extra_Default :::: name ${name}- location ${location} - age ${customerInfo[0]} - salary ${customerInfo[1]}`);
}

customerDetails_Rest("James" , "Aus" ,  55);
customerDetails_Rest("James" , "Aus" ,  55 ,10000);


/**** How to use the typecasting...
 * 
 * Use keyword 'as' or <>
 * 
 */


 let productName : unknown = "Mobile";
 let cProductName = productName as string;


 let productPrice : unknown = 100000;
 let cProductPrice = productPrice as number;
 







