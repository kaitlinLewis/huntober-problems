//Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

//For example:
//// For the string below and 4
//"Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
//// remove decoy strings
//"This is Halloween! This is Halloween!"

//// For the string below and 5
//"The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
//// remove decoy strings and preach 🙌
//"The Bachelor is a terrible television show."

function removeDecoyStrings(string, integer) {
  let stringArray = string.split("");
  let decoysRemoved = [];
  for (let i = 0; i < stringArray.length; i++) {
    if ((i + 1) % integer !== 0) {
      decoysRemoved.push(stringArray[i]);
    }
  }

  console.log(decoysRemoved.join(""));
}

//function removeDecoyStrings(string, integer) {
//  let stringArray = string.split("");

//  console.log(
//    stringArray
//      .filter((e) => stringArray[0] && stringArray.indexOf(e) % integer !== 0)
//      .join("")
//  );
//}

removeDecoyStrings("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5);
