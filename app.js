function stringLengthComparer(stringArr, intArr) {
  let count = 0;

  if (intArr.length === 0) {
    console.log(0);
    return;
  }

  for (let string of stringArr) {
    if (intArr.includes(string.length)) {
      count++;
    }
  }
  console.log(count);
}

stringLengthComparer(["this", "is", "a", "test"], [4, 2]);
