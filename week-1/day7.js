//Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

//Examples:
//'A'  // first letter of the alphabet, uppercase
//'z'  // last letter of the alphabet, lowercase

//'p'  // 16th letter of the alphabet, lowercase
//'K'  // 16th letter from *end* of alphabet, uppercase

//'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
//// function replaces letters with opposites
//'Example: 0 number or punctuation changes'
//Do me a favor and try to solve it a couple of different ways to see which you preferred and why.

//🧩 Put it all Together
//Finally! We have every function needed to decode the gobbledygook I shared a week ago! Some of you already figured it out yesterday (bravo!), but let's pretend you didn't.

//Please use the daily functions, in order, to decode the week's secret message. Then, when you feel good about your result, go ahead and tweet the string with no explanation and #huntober2022, you earned it.

var lows = "abcdefghijklmnopqrstuvwxyz";
var ups = lows.toUpperCase().split("").reverse().join("");

function findOppositeLetter(search) {
  if (ups.includes(search)) {
    return lows.charAt(ups.indexOf(search));
  } else if (lows.includes(search)) {
    return ups.charAt(lows.indexOf(search));
  }
}

function translateText(text) {
  var s = "";
  for (var i = 0; i < text.length; i++) s += findOppositeLetter(text.charAt(i));
  return s;
}
translateText();

//console.log(translateText("disajdoisajioASDJISAJODOAS"));
