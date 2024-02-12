import { useState } from "react";

const useArray = (defaultValue: any[]) => {
  const [array, setArray] = useState(defaultValue);

  const add = (newIndex: any) => {
    setArray((prevState) => [...prevState, newIndex]);
  };

  const filter = (callBack: () => void) => {
    let newArray = [...array];
    newArray = newArray.filter(callBack);
    setArray([...newArray]);
  };

  const remove = (index: number) => {
    setArray((prevState) => [
      ...prevState.slice(0, index),
      ...prevState.slice(index + 1, array.length),
    ]);
  };

  const update = (index: number, newElement: any) => {
    setArray((prevState) => [
      ...prevState.slice(0, index),
      newElement,
      ...prevState.slice(index + 1, prevState.length),
    ]);
  };

  const clear = () => setArray([]);

  return { array, set: setArray, add, remove, update, filter };
};

export default useArray;
