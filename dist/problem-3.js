"use strict";
{
    // problem-3
    // question: Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
    function countWordOccurrences(sentence, word) {
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        return (sentence.match(regex) || []).length;
    }
    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
}
