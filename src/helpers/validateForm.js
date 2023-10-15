import validatorHelper from "./validatorHelper";

const regExName = /^[A-Za-z\s]+$/;
const regExNumbers = /^[1-9]\d*$/;
const regExURL = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;

export default function validateForm(input) {
  let objectToReturn = {};
  if (!regExName.test(input.name)) {
    objectToReturn.name =
      "El nombre solo debe contener letras, no se permiten numeros o caracteres especiales.";
  }
  validatorHelper(
    "height",
    input.minHeight,
    input.maxHeight,
    regExNumbers,
    objectToReturn,
    "La altura"
  );
  validatorHelper(
    "weight",
    input.minWeight,
    input.maxWeight,
    regExNumbers,
    objectToReturn,
    "El peso"
  );
  validatorHelper(
    "life_span",
    input.life_span1,
    input.life_span2,
    regExNumbers,
    objectToReturn,
    "La esperanza de vida"
  );
  if (!regExURL.test(input.image)) {
    objectToReturn.image = "La URL de la imagen no es valida.";
  }

  let anyError = false;
  for (const key in objectToReturn) {
    if (key) anyError = true;
  }
  if (anyError)
    return {
      ...objectToReturn,
      message: "Complete corrently all information to submit a dog",
    };
  else return { message: "" };
}
