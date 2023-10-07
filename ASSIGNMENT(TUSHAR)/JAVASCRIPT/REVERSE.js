function reverse(str) {
  let word = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") word.unshift(str[i]);
    else {
      while (word.length != 0) {
        process.stdout.write(word[0]);
        word.shift();
      }
      process.stdout.write(" ");
    }
  }
  while (word.length != 0) {
    process.stdout.write(word[0]);
    word.shift();
  }
}
let str = "This is a sunny day";
reverse(str);
