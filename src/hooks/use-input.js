import { useState } from "react";

const useInput = (validateHandler) => {
  const [value, setValue] = useState("");
  const [isValueTouched, setIsValueTouched] = useState(false);

  const isValueValid = validateHandler(value);
  const hasError = !isValueValid && isValueTouched;

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const valueInputBlur = () => {
    setIsValueTouched(true);
  };

  const resetForm = () => {
    setValue("");
    setIsValueTouched(false);
  };

  return {
    value,
    isValueValid,
    valueChangeHandler,
    valueInputBlur,
    resetForm,
    hasError
  };
};

export default useInput;
