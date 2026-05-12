/**
 * @param {number} value
 * @returns {string|number}
 * @throws {Error}
 */
function zzzzOrNum(value) {
    if (typeof value !== "number" || !Number.isInteger(value)) {
        throw new Error("Input harus berupa bilangan bulat.");
    }

    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

/**
 * @param {number[]} sequence
 * @returns {(string|number)[]}
 * @throws {Error}
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus berupa array.");
    }

    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};
