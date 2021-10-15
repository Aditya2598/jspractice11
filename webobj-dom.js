// we can find anything through document which exist in our html browser
// we can not use foreach with this object foreach is not defined in a function

 let a = document.links ;
 let mytext = "harrycode";
 Array.from(a).forEach(function(element)
 {
     if(String(element).includes(mytext))
     {
         console.log(element);
     }
 })
