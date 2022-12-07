// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

//Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

function reverseString(string) {
  //return string.split("").reverse().join("")
  //loop through characters and adding the character to the string
  let reversedString = "";
  for (let char of string) {
    reversedString = char + reversedString;
  }
  //  string.reduce((a, acc) => acc + a, "")
  return reversedString;
}

console.log(reverseString("brendan"), "nadnerb");
console.log(reverseString("john"), "nhoj");
console.log(reverseString("kaitlin"), "niltiak");
