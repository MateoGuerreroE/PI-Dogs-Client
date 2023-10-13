import weightConverter from "./weigthConverter";

export default function sortingByWeight(arrayOfObj) {
  let newObj = arrayOfObj.sort((a, b) => {
    return weightConverter(a) - weightConverter(b);
  });
  return newObj;
}
