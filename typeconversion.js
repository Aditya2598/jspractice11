let marks = String(34)
let array = String([1,2,3,4,5])
let obj = String({
    name : 'adi' ,
    score : 33
} )
console.log((typeof marks))
console.log((typeof array))
console.log((typeof obj))

let names = Number("aditya")
console.log((typeof names))
let sakes = 34.43222
console.log(sakes.toFixed(4))
let fruit = "mango";
let shakes = " juice"
console.log( (fruit = "tomatoes" )+ " " + shakes)
let html = "<h1> this is a demo </h1> "
html  = html.concat("     <p>better way to write</p>")
console.log(html)
console.log(html[7])
console.log(html.indexOf('better'))
console.log(html.toLowerCase())
console.log(html.toUpperCase())
console.log(html.lastIndexOf('>'))
let myhtml = "hello iss duniya ye jeena hai tho rupya kama pyarae"
console.log(myhtml.split( ' '))
console.log(html.slice(0,8))
console.log(myhtml.replace('iss' , 'vishh'))

let hiss = "snake"
let myHtml = `<h1>try try try try ${hiss} 
               <p> hahahahhahahaha </p> `
               document.body.innerHTML = myHtml