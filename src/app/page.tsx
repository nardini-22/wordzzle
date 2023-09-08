"use client";
import Input from "@/components/Input";
import Keyboard from "@/components/Keyboard";
import { useEffect, useState } from "react";

export default function Home() {
  const word = "sueca";
  const [currentWordArray, setCurrentWordArray] = useState<string[]>([]);
  const [previousWordArray, setPreviousWordArray] = useState<Array<string[]>>(
    []
  );

  const detectKeyDown = (e: KeyboardEvent | { code: string; key: string }) => {
    setCurrentWordArray((old) => {
      if (e.code === "Backspace") {
        return [...old.slice(0, -1)];
      }
      if (e.code === "Enter" && old.length === 5) {
        if (old.join("") === word) {
          console.log("Palavra certa");
        } else {
          setPreviousWordArray((previousState) => [...previousState, old]);
          return [];
        }
      }
      if (old.length < 5 && e.code.includes("Key")) {
        return [...old, e.key];
      } else {
        return [...old];
      }
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);
    return () => {
      document.removeEventListener("keydown", detectKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Input currentData={currentWordArray} previousData={previousWordArray} />
      <Keyboard detectKeyDown={detectKeyDown} />
    </>
  );
}
