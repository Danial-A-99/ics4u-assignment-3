import type { Coefficients, History } from "@ics4u-assignment-02/types";
import { useEffect, useState } from "react";

type addToHistoryProps = {
  coefficientValues: Coefficients;
  locationInList: number;
};

export const addToHistory = ({ coefficientValues, locationInList }: addToHistoryProps) => {
  return (
    <div className="flex items-center gap-2" key={locationInList}>
      <button className="flex-1 rounded-xl border border-slate-700 bg-slate-800/40 p-3 text-left transition hover:bg-slate-800/70">
        <div className="grid grid-cols-4 font-mono text-slate-200 text-sm">
          <span className="text-center">{coefficientValues.a}</span>
          <span className="text-center">{coefficientValues.b}</span>
          <span className="text-center">{coefficientValues.c}</span>
          <span className="text-center">{coefficientValues.d}</span>
        </div>
      </button>
      <button
        className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 font-medium text-red-400 text-xs transition hover:bg-red-500/20 hover:text-red-300"
        id={"delete" + locationInList}
      >
        Delete
      </button>
    </div>
  );
};

type HistorySectionProps = {
  coefficientValues: Coefficients;
  saveCoefficients: boolean;
};

export const HistorySection = ({ coefficientValues, saveCoefficients }: HistorySectionProps) => {
  const [inputList, setInputList] = useState<History>([]);
  const { a, b, c, d } = coefficientValues;
  useEffect(() => {
    if (saveCoefficients) {
      if (inputList.length >= 1) {
        let existsInList = false;
        for (let i = 0; i < inputList.length; i++) {
          const itemInList = inputList[i];
          if (a !== itemInList.a || b !== itemInList.b || c !== itemInList.c || d !== itemInList.d) {
            existsInList = false;
          } else {
            existsInList = true;
            break;
          }
        }
        if (!existsInList) {
          const addedItemList = { a, b, c, d };
          //const location = inputList.indexOf(addedItemList);
          console.log("hola");
          console.log(coefficientValues);
          //addToHistory({ coefficientValues: addedItemList, locationInList: location });
          setInputList([...inputList, addedItemList]);
        }
      } else {
        const addedItemList = { a, b, c, d };
        //inputList.push(addedItemList);
        //const location = inputList.indexOf(addedItemList);
        console.log("hola");
        console.log(coefficientValues);
        //addToHistory({ coefficientValues: addedItemList, locationInList: location });
        setInputList([...inputList, addedItemList]);
      }
      console.log(inputList);
    }
  });

  return (
    <div className="custom-scrollbar flex-1 space-y-2 overflow-y-auto pr-2 font-mono text-slate-400 text-xs" id="history">
      {inputList.map((item, locationInList) => addToHistory({ coefficientValues: item, locationInList }))}
    </div>
  );
};
