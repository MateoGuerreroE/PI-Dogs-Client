export default function validatorHelper(
  propName,
  minprop,
  maxprop,
  regex,
  obj,
  name
) {
  if (!regex.test(minprop) || !regex.test(maxprop)) {
    obj[propName] = `${name} solo debe tener numeros positivos.`;
  } else {
    if (Number(minprop) > Number(maxprop)) {
      obj[propName] = `${name} maximo debe ser mayor a su valor minimo.`;
    }
  }
  return obj;
}
