import { useReducer } from "react";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, value: action.payload };
    case "BLUR":
    return { ...state,isTouched: true }
    case "RESET":
        return {value: '', isTouched: false}
  }
};

const UseValidateInput = (validateValue) => {
  const [inputState, dispatchInputState] = useReducer(inputReducer, {
    value: "",
    isTouched:false ,
  });

  const input = validateValue(inputState.value);
  const invalidInput = !input && inputState.isTouched;


  const userInputHandler = (event)=>{
    dispatchInputState({type: "INPUT", payload: event.target.value})
  };

  const onBlurHandler = ()=>{
    dispatchInputState({type: "BLUR"})
  };

  const resetHandler = ()=>{
    dispatchInputState({type:"RESET"})
  }

  return {
    value: inputState.value, 
    input,
    invalidInput,
    userInputHandler,
    onBlurHandler,
    resetHandler
  }


};

export default UseValidateInput;
