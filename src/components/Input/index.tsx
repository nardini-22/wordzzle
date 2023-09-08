interface IInput {
  currentData: string[];
  previousData: Array<string[]>;
}

const Input = ({ currentData, previousData }: IInput) => {
  return (
    <>
      <div>{previousData[0]}</div>
      <div>{previousData[1]}</div>
      <div>{previousData[2]}</div>
      <div>{previousData[3]}</div>
      <div>{previousData[4]}</div>
      <div>{currentData[0]}</div>
      <div>{currentData[1]}</div>
      <div>{currentData[2]}</div>
      <div>{currentData[3]}</div>
      <div>{currentData[4]}</div>
    </>
  );
};

export default Input;
