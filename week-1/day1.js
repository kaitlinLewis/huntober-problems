//This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string.

//Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

//Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

//COPY
//'0' <-> 'O'      '5' <-> 'S'
//'1' <-> 'I'      '6' <-> 'G'
//'2' <-> 'Z'      '7' <-> 'L'
//'3' <-> 'E'      '8' <-> 'B'
//'4' <-> 'h'      '9' <-> 'q'
//As an example, here is how a string looks before and after the characters are fixed:

//COPY
//"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
//// implement fix function ->
//"PRO-TIP #498: IT'S NICE TO SAY HELLO."
//Please create a function that will fix a given string of this mistake before incalculable damage can be done!

function swapCharacters(message) {
  let messageArray = message.split("");
  return messageArray
    .map((e) => {
      switch (e) {
        case "0":
          return (e = "O");
          break;
        case "1":
          return (e = "I");
          break;
        case "2":
          return (e = "Z");
          break;
        case "3":
          return (e = "E");
          break;
        case "4":
          return (e = "h");
          break;
        case "5":
          return (e = "S");
          break;
        case "6":
          return (e = "G");
          break;
        case "7":
          return (e = "L");
          break;
        case "8":
          return (e = "B");
          break;
        case "9":
          return (e = "q");
          break;
        case "O":
          return (e = "0");
          break;
        case "I":
          return (e = "1");
          break;
        case "Z":
          return (e = "2");
          break;
        case "E":
          return (e = "3");
          break;
        case "h":
          return (e = "4");
          break;
        case "S":
          return (e = "5");
          break;
        case "G":
          return (e = "6");
          break;
        case "L":
          return (e = "7");
          break;
        case "B":
          return (e = "8");
          break;
        case "q":
          return (e = "9");
          break;

        default:
          return e;
      }
    })
    .join("");
}
