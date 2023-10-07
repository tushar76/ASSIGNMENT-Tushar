const a1 = [2, 4, 6, 8, 10, 12, 14];
function arraySort(arr) {
  arr.sort((c, d) => c - d);
  arr.reverse();
  return arr;
}
console.log(arraySort(a1));
