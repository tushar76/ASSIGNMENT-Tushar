function reverse(s) {
    const words = s.split(' ');
    let rev = ''; 
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let revword = '';
        for (let j = word.length - 1; j >= 0; j--) {
            revword += word[j];
        }
        if (i !== 0) {
            rev += ' ';
        }
        rev += revword;
    }
    return rev;
}
const input = "This is a sunny day";
const reversed = reverse(input);
console.log(reversed);
