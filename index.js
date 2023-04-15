// Iteration 1: Names and Input
let hacker1="Cristian";

console.log("the driver`s is "+hacker1)

let hacker2="Oscar";

console.log("the navigator`s name is "+hacker2)
// Iteration 2: Conditionals
let hacker1="Cristian";

let hacker2="Oscar";

if(hacker1.length>hacker2.length)
{
console.log("The driver has the longest name, it has "+hacker1.length+" characters.")
} else if(hacker1.length<hacker2.length)
{
  console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters.")
} else
{
  console.log("Wow, you both have equally long names, "+hacker1.length+" characters!")
}


// Iteration 3: Loops
3.1
let hacker1="Cristian";

let hacker2="Oscar";

let caract_separados = hacker1.split("").join(" ");
let mayus = caract_separados.toUpperCase()
console.log(mayus)

3.2
const hacker1="Cristian";

const hacker2="Oscar";

let array="";

for(let i = hacker2.length - 1;i>=0;i--)
{
  array+=hacker2[i]
}
console.log(array)

3.3
const hacker1="Cristian";

const hacker2="Oscar";

const resultado = hacker1.localeCompare(hacker2)

if(resultado<0)
{
  console.log("the driver´s name goes first")
}else if (resultado>0)
{
  console.log("Yo, the navigator goes first, definitely")
}
else{
  console.log("what?! you both have the same name?")
}
