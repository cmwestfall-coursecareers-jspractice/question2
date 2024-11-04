function stringLengthMatcher(stringArr, intArr) {
  let count = 0;

  if (intArr.length === 0) {
    console.log(count);
    return;
  }

  for (let string of stringArr) {
    stringLength = string.length;
    for (int of intArr) {
      if (stringLength === int) {
        count++;
      }
    }
  }
  console.log(count);
}

stringLengthMatcher(["this", "is", "a", "test"], [4, 2]);
