/*

Scope : Function Scope
Scope : global scope.
scope: local scope

data Types : 2 types 
            1) Primitive data type 
            2) reference (object data) data

  -Primitive:
    string,boolean, number,undefined, and reference example null.

    -----------------------------------------------
    in java :  int,flot,double, longInt. 2.2;
            
            public int number;
            public string name;

                "veeresh" + 30
    ------------------------------------------

    keyWords  - var,let, const
    var,let,const

    var --> Global scope

*/

 
var name = "veeresh";
var number =  10;
var value = undefined;
var istrue = true;




// AuthMatic Operations 
    /*
    typeof  --> return which type holds the value
                ex: typeof(10)

    string + number  -> string 
    number + number   -> number;
    number + string   -> string;
    number + boolean  -> number
    boolean + number  -> number

    string + undefined -> string;"undefinedveeresh" 
    **undefined + number -> NaN
      undefined +boolean -> NAN
    */


console.log(name);
console.log(number)
console.log(value)

    //LHS  =  RHS

    /*

    var  --> global scope 
    let  --> block scope

    */

    let a;
    var b;
    var somevalue3;
    let somevalue2

    const c = 40;
    a = 20;
    b=30
    console.log("-----------------");
    console.log(a, "a");
    console.log(b, "b");
    console.log(c, "c");
    console.log(somevalue3, "somevalue");// undefined;
    console.log(somevalue2, "somevalue");// undefined;
    console.log("-----------------");

    
    // Hoisting 
    console.log(somevalue, "abc");// undefined

    var somevalue = "somevalue";

    console.log(abc, "abc");// amalapuram



    console.log(abc1, "abc");// notdefined
    let abc1 = "amalupuram";
    console.log(abc1, "abc");// amalapuram


    // two types  - Hoisting 
    //      function Hoisting
    //      varible hoisting 


    
    function myFunction() {

    }
    myFunction();
    