/*   
    1 - We only want to “scramble” each word of the sentence, so the order of the words remain the same.

    2 - Each word will retain the position of the first and last letter, and the middle letters will be
scrambled. For example, if the original word is “animal”, it should randomize the word to
something like “aainml” 

    3 - If the word is only one or two characters, it remains unchanged

    4 - At most, each sentence will have 5 words

    5 - At most, each word will have 15 characters
    
    6 - There will never be more than one space in between each word
*/

// sentence 'I love learning code'

export class ScrambledSentenceGenerator {
  constructor(word) {
    this.word = word;
  }

  scramble = (array) => {
    let scrambled = [];
    let notScrambled = array.length;
    let idx;

    /* While not scrambled */
    while (notScrambled) {
      idx = Math.floor(Math.random() * array.length);

      if (idx in array) {
        scrambled.push(array[idx]);
        delete array[idx];
        notScrambled--;
      }
    }

    return scrambled.join('');
  };

  generateScramble = () => {
    const splitedWord = this.word.split(' ');
    const newArray = [];

    for (let i = 0; i < splitedWord.length; i++) {
      const word = splitedWord[i];

      if (word.length > 2) {
        newArray.push(this.scramble(word.split('')));
      } else {
        newArray.push(word);
      }

      if (i !== splitedWord.length - 1) {
        newArray.push(' ');
      }
    }

    return newArray.join('');
  };
}
class Letter {
  constructor(letter, idx) {
    this.letter = letter;
    this.tabIndex = idx;
    this.isMatch = false;
    this.space = letter === ' ' ? true : false;
  }
}

export const gerenateRows = (array1) => {
  const arr = array1.map((item, idx) => new Letter(item, idx + 1));
  const rowMap = {};
  let counter = 1;

  for (let idx = 0; idx < arr.length; idx++) {
    const item = arr[idx];

    if (item.letter === ' ') {
      item.space = true;
      const newRow = arr.splice(0, idx + 1);

      if (!rowMap[`row${counter}`]) {
        rowMap[`row${counter}`] = [];
      }

      rowMap[`row${counter}`] = newRow;
      counter++;
    }
  }

  rowMap[`row${counter}`] = arr;

  return rowMap;
};

export const getSentenceTrim = (sequence) => {
  console.log(sequence.join(''));
  return sequence.join('');
};

export const isSentenceWrong = (wrongArr) => {
  return wrongArr.length > 0;
};

export const checkCorrectLetter = (sentence, letter, position) => {
  const fullSentence = sentence;

  const isCorrect = fullSentence.charAt(position) === letter;

  if (!isCorrect) {
    return false;
  }

  return true;
};
