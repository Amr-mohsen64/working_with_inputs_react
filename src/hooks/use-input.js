import { useState } from "react";
const useInput = (validateValueFn) => {
    const [enteredValue, setEnteredValue] = useState("")
    const [isTouched, setIsTouched] = useState(false)

    const valueIsvalid = validateValueFn(enteredValue);
    const hasError = !valueIsvalid && isTouched

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const InputBlurHandler = (event) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue("")
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsvalid,
        hasError,
        valueChangeHandler,
        InputBlurHandler,
        reset
    }
}

export default useInput;