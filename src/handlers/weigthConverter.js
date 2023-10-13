export default function weightConverter(string) {
  let result = string.weight.split(" - ");
  result = (Number(result[0]) + Number(result[1])) / 2;
  return result;
}
