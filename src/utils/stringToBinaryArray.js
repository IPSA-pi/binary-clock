function stringToBinaryArray(string, slice) {
  const binaryArray = [];
  for (let i = 0; i < string.length; i++) {
    binaryArray.push(string.charCodeAt(i).toString(2).padStart(8, '0').slice(slice));
  }
  return binaryArray;
}

export { stringToBinaryArray };