function findLongestWordWithMostVowels(sentence) {
  const words = sentence.split(' ');

  let longestWord = '';
  let maxVowelCount = 0;

  function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vowelCount++;
      }
    }
    return vowelCount;
  }

  for (const word of words) {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
      maxVowelCount = countVowels(cleanedWord);
    } else if (cleanedWord.length === longestWord.length) {
      const vowelCount = countVowels(cleanedWord);
      if (vowelCount > maxVowelCount) {
        longestWord = cleanedWord;
        maxVowelCount = vowelCount;
      }
    }
  }

  return longestWord;
}

const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const longestWord = findLongestWordWithMostVowels(sentence);
console.log(longestWord);
