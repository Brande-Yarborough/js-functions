(function () {
  "use strict";

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(num1, num2) {
    //calculates largest of two numbers//
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
      //returns largest number if true, returns smallest number if false//
    }
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  //

  function maxOfThree(num1, num2, num3) {
    //calculates the largest of three numbers//
    return Math.max(num1, num2, num3);
    //Math.max will return the largest of three numbers//
  }

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  function isVowel(letter) {
    let result; //let is initializing variable//
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      //letter is what is getting passed into function. comparing that to each vowel//
      result = true;
    } else {
      result = false;
    }
    return result; //result of if else statement//
  }

  /*function isVowel(x) {
    if(x=a) {
      return true;
      //if x is vowel, is true//
      //is true that a is vowel//
    }
    else {
      return false;
    }

  }*/

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
function rovarspraket() {
  return
}
  // function rovarspraket (text) {
// let text = text.split(""); //pass in "dog" this will return an array of substrings as ["d", "o", "g"]
// for(let i=0; i<text.length; i++) {//starts count at 0 index; runs loop this long; adds 1 to index and for loop ends
//   [d=0, o=1, g=2]

// need help with remainder of this one
// }
  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
function sum([num1, num2, num3, num4]) {
  return (num1 + num2 + num3 + num4);
}
function multiply([num1, num2, num3, num4]) {
  return (num1 * num2 * num3 * num4);
}
  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
function reverse(str) {
  return str.split('').reverse().join('');
}
  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, "function max error");

  console.assert(maxOfThree(1, 2, 3) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(2, 3, 1) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(3, 2, 1) === 3, "ERROR maxOfThree");

  console.assert(isVowel("a") === true, "ERROR function isVowel");

  console.assert(isVowel("b") == false, "ERROR function isVowel");

  console.assert(
    rovarspraket("this is fun") === "tothohisos isos fofunon",
    "ERROR function rovarspraket"
  );

  console.assert(sum([1, 2, 3, 4]) === 10, "ERROR function sum");

  console.assert(multiply([1, 2, 3, 4]) === 24, "ERROR function multiply");

  console.assert(
    reverse("jag testar") === "ratset gaj",
    "ERROR function reverse"
  );

  console.assert(
    findLongestWord([
      "hello",
      "world",
      "does",
      "anyone",
      "really",
      "know",
      "what",
      "time",
      "it",
      "is",
    ]) === 6,
    "ERROR function findLongestWord"
  );

  console.assert(
    filterLongWords(
      [
        "hello",
        "world",
        "does",
        "anyone",
        "really",
        "know",
        "what",
        "time",
        "it",
        "is",
      ],
      4
    ).length === 4,
    "ERROR function filterLongWords"
  );

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").a === 7);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").b === 14);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").c === 3);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").d === 3);
})();
