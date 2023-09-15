/**
 * @param {string} key
 * @param {string} message
 * @return {string}

 I: cipher key, and the ciphered message
 O: decoded message

 U: every key follows the 26 aplhabets, (some keys have spaces, spaces need
        to be put back in place)

 1. Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.

 2. Align the substitution table with the regular English alphabet.

 3. Each letter in message is then substituted using the table.

 4. Spaces ' ' are transformed to themselves.

 Plan: 
    1. create 4 vars,
        - one Set for the key 
        - one for the alphabet/
        - answer/decoded messages
    2. loop through the cipher
        - able match cipher to alphabet at the index
        - loop through the message, 
            - where char matches in the cipher, 
               push the decoded char into answer
    3. return the answerjoin('')
 */
var decodeMessage = function(key, message) {
    const cipherSplit = key.split(' '); //rids the spaces
    const cipher = cipherSplit.join('');
    const newKey = new Set(cipher);
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let ans = '';
    let finalKey = {};
    let i = 0;

    for (const char of newKey) {
        finalKey[char] = alpha[i]
        i++;
    }

    for (const char of message) {
        if(char === " ") {
             ans += " ";
        } else {
            ans += finalKey[char];
        }
    }

    return ans
};