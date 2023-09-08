import Button from "../Button";

interface IKeyboard {
  detectKeyDown: (e: KeyboardEvent | { code: string; key: string }) => void;
}

const Keyboard = ({ detectKeyDown }: IKeyboard) => {
  const buttonsArray: string[] = [
    "Keyq",
    "Keyw",
    "Keye",
    "Keyr",
    "Keyt",
    "Keyy",
    "Keyu",
    "Keyi",
    "Keyo",
    "Keyp",
    "Keya",
    "Keys",
    "Keyd",
    "Keyf",
    "Keyg",
    "Keyh",
    "Keyj",
    "Keyk",
    "Keyl",
    "Backspace",
    "Keyz",
    "Keyx",
    "Keyc",
    "Keyv",
    "Keyb",
    "Keyn",
    "Keym",
    "Enter",
  ];

  const keyboard = buttonsArray.map((value, i) => {
    const newValue = value.replace("Key", "");
    return (
      <div key={i}>
        <Button
          value={newValue}
          onClick={() => {
            detectKeyDown({ code: value, key: newValue });
          }}
        />
      </div>
    );
  });

  return keyboard;
};

export default Keyboard;
