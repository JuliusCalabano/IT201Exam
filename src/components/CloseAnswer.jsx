import { get as levenshtein } from "fast-levenshtein";

// Compare two words
function similar(word1, word2) {
    const distance = levenshtein(word1, word2);
    const similarity =
        1 - distance / Math.max(word1.length, word2.length);

    return similarity >= 0.8;
}

// Normalize text safely
function normalize(text) {
    if (text === null || text === undefined) return "";

    return String(text)
        .toLowerCase()
        .replace(/[.,!?]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

// Check identification answer
export function isCloseAnswer(studentAnswer, correctAnswer) {

    const studentWords = normalize(studentAnswer).split(" ");
    const correctWords = normalize(correctAnswer).split(" ");

    return correctWords.every(correctWord =>
        studentWords.some(studentWord =>
            similar(studentWord, correctWord)
        )
    );
}

// Check enumeration
export function checkEnumeration(studentAnswers, correctAnswers) {

    if (!Array.isArray(studentAnswers) || !Array.isArray(correctAnswers)) {
        return 0;
    }

    let points = 0;
    const used = new Set();

    correctAnswers.forEach(correct => {

        const index = studentAnswers.findIndex((student, i) => {

            if (used.has(i)) return false;

            return isCloseAnswer(student, correct);

        });

        if (index !== -1) {
            points++;
            used.add(index);
        }

    });

    return points;
}