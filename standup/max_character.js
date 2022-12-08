// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
//Given a string of characters, return the character that appears the most often.

//describe("Max Character", () => {
// it("Should return max character", () => {
//  assert.equal(max("Hello World!"), "l");
// });
//});

//No String or Array Methods (well brute force it first, but then no methods)!

function mostFrequentCharacter(string) {
  const map = {};
  let maxCount = 0;
  let maxCharacter = null;

  for (let character in string) {
    if (map[character]) {
      map[character]++;
    } else {
      map[character] = 1;
    }
  }

  for (let character in map) {
    if (map[character] > maxCount) {
      maxCount = map[character];
      maxCharacter = character;
    }
  }
  return maxCharacter;
}
