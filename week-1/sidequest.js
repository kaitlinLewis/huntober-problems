//Day 1, day 3, day 4, day 6, day 7 ALL TOGETHER WOO

//Message to decode: "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

class MessageDecoder {
  constructor(secretMessage, integer) {
    this.secretMessage = secretMessage;
    this.integer = integer;
    this.lows = "abcdefghijklmnopqrstuvwxyz";
    this.ups = lows.toUpperCase().split("").reverse().join("");
  }

  decodeMessage() {
    let messageArray = this.secretMessage.split("");
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
  replaceKeyCharacters() {
    const keyCharacters = ["S", "p", "a", "c", "e"];

    for (let e of this.secretMessage) {
      if (keyCharacters.includes(e)) {
        decodeMessage = decodeMessage.replace(e, " ");
      }
    }
    return this;
  }
  flipString() {
    this.secretMessage.split("").reverse().join("");
    return this;
  }

  removeDecoyStrings() {
    let stringArray = this.secretMessage.split("");
    let decoysRemoved = [];
    for (let i = 0; i < stringArray.length; i++) {
      if ((i + 1) % this.integer !== 0) {
        decoysRemoved.push(stringArray[i]);
      }
    }

    return this.join("");
  }

  findOppositeLetter(search) {
    if (this.ups.includes(search)) {
      return this.lows.charAt(this.ups.indexOf(search));
    } else if (this.lows.includes(search)) {
      return this.ups.charAt(this.lows.indexOf(search));
    }
  }

  translateText() {
    let s = "";
    for (let i = 0; i < this.secretMessage.length; i++) {
      s += findOppositeLetter(this.secretMessage.charAt(i));
    }
    return s;
  }
}

const huntoberMessage = new MessageDecoder(
  "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs",
  3
);
huntoberMessage
  .decodeMessage()
  .replaceKeyCharacters()
  .removeDecoyStrings()
  .findOppositeLetters();

//decodeMessage(
//  "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
//);

//("e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs");
