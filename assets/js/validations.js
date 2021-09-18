const titleValidation = {
    minLength: {
      value: 3,
      message: "El título del producto debe de tener al menos 3 caracteres",
    },
  };
  
  const descriptionValidation = {
    minLength: {
      value: 10,
      message: "La descripción producto debe de tener al menos 10 caracteres",
    },
  };
  
  const priceValidation = {
    required: {
      message: "Debes ingresar el precio del producto",
    },
    min: {
      value: 0,
      message: "El precio del producto debe de ser mayor a 0",
    },
    max: {
      value: 100,
      message: "El precio del producto debe de ser menor a 100",
    },
  };
  
  
  /**
   * @param {HTMLElement} item
   */
  const getValidationConfig = (item) => {
    const id = item.id;
    switch (id) {
      case "titulo":
        return titleValidation;
      case "descripcion":
        return descriptionValidation;
      case "precio":
        return priceValidation;
      default:
        return {};
    }
  };
  
  /**
   * @param {HTMLElement} item
   */
  const getErrorSpanElement = (item) => {
    const id = item.id;
    const spanId = `${id}-error`;
    return document.getElementById(spanId);
  };
  
  /**
   * @param {HTMLElement} item
   * @returns {string}
   */
  const getError = (item, validationConfig) => {
    const value = item.value;
    if (validationConfig.required) {
      if (!value) {
        return validationConfig.required.message;
      }
    }
    if (validationConfig.min) {
      if (Number(value) < validationConfig.min.value) {
        return validationConfig.min.message;
      }
    }
    if (validationConfig.max) {
      if (Number(value) > validationConfig.max.value) {
        return validationConfig.max.message;
      }
    }
    if (validationConfig.minLength) {
      if (value.length < validationConfig.minLength.value) {
        return validationConfig.minLength.message;
      }
    }
    return "";
  };
  
  /**
   * @param {HTMLElement} item
   */
  const validateItem = (item) => {
    const itemValidation = getValidationConfig(item);
    let error = getError(item, itemValidation);
  
    const errorSpan = getErrorSpanElement(item);
    if (error) {
      errorSpan.classList.remove("hidden");
      errorSpan.innerText = error;
      return false;
    } else {
      errorSpan.innerText = "";
      errorSpan.classList.add("hidden");
      return true;
    }
  };
  
  const validateForm = () => {
    let flag = true;
    formInputs.forEach((item) => {
      if (!validateItem(item)) {
        flag = false;
      }
    });
    return flag;
  };