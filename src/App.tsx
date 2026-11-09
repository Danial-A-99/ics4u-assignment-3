import { Footing, Heading } from "@ics4u-assignment-03/components";
import { useState } from "react";

type InputProps = {
  value: number;
  setValue: (val: number) => void;
  id: string;
  name: string;
};

export const Inputs = ({ value, setValue, id, name }: InputProps) => {
  return (
    <label className="group flex flex-col gap-1.5">
    <span className="font-mono text-slate-500 text-xs transition group-focus-within:text-cyan-400">a-value [x³]</span>
    <input
      className="w-24 rounded-md border border-slate-800 bg-[#121824] px-3 py-2 text-center font-mono text-white transition focus:border-cyan-500 focus:outline-none"
      id={id}
      name={name}
      onChange={(event) => setValue(Number(event.target.value))}
      type="number"
      value={value}
    />
    </label>
  );
};

export const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Heading />
        <Inputs id="2" name="2" setValue={setA} value={a} />
        <Footing />
      </div>
    </div>
  );
};
