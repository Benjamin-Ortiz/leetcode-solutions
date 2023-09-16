/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}


 i: 2 strings
 o: true if note can be constructed from agazine string

 u: magazine chars can only be used

plan: 
    1 create Set of mag letters, 
        -populate value of letter with the amount char
    2. for every char in note:
        if exists (subtract 1 from mag value)
        else return false

 */

const createCharBankObj = (mag) => {
         let bank = {};

        for (let letter in mag) {
            let char = mag[letter]

            if(!bank[char]) {
                bank[char] = 1
            }
            else bank[char]++
        }
        return bank;
}

var canConstruct = function(ransomNote, magazine) {
    let bank = createCharBankObj(magazine);

    for(let letter in ransomNote) {
        let char = ransomNote[letter]
        if (!bank[char] || bank[char] ===0){
            return false
        }
        else {
            bank[char]--
        }
    }

    return true
};