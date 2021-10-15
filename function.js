// simple function

function add(x,y,z)
{
return x+y+z ;
}
let val = add(2,3,4)
console.log(val)

// 2md function

function greet(name ,thank )
{
    let msg =  ` i , ${name} loves his parents a lot and he is always ${thank} to god for giving him opportunity and also blessing him ; `
    return msg ;
}
let valu = greet('Aditya' , 'thankful')
console.log(valu)

/// Anonmyous function

var getname = function(hname, marks)
{
    return ` ${hname} good boy u got ${marks} in upsc `
}
 var msgs = getname('Aditya' , 1100)
console.log(msgs)
