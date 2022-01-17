export function arrayEquality(a, b) {
  if (a.length !== b.length) return false;
  a.sort();
  b.sort();
  return a.every((element, index) => element === b[index]);
}
