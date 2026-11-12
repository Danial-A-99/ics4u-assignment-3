import { CubicInput, CubicTable, Footer, Header } from "@ics4u-assignment-03/components";
import { type SyntheticEvent, useState } from "react";

export const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const numberSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    console.log("re-rendered");
    console.log(a, b, c, d);
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Header />
        <section className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0b0f19] p-6 shadow-2xl">
          <div className="absolute top-0 left-0 h-full w-1 bg-cyan-500"></div>
          <form className="flex flex-wrap items-center justify-between gap-6" onSubmit={numberSubmit}>
            <div className="flex flex-1 flex-wrap justify-start gap-4 sm:gap-6">
              <CubicInput id="a" name="a-value" setValue={setA} subtitle="a-value [x³]" value={a} />
              <CubicInput id="b" name="b-value" setValue={setB} subtitle="b-value [x²]" value={b} />
              <CubicInput id="c" name="c-value" setValue={setC} subtitle="c-value [x]" value={c} />
              <CubicInput id="d" name="d-value" setValue={setD} subtitle="d-value [c]" value={d} />
            </div>
            <input
              className="w-full cursor-pointer self-end rounded-md bg-cyan-500 px-6 py-3 text-center font-bold font-mono text-[#07090e] text-xs tracking-wider shadow-cyan-500/10 shadow-lg transition duration-150 hover:bg-cyan-400 active:scale-95 sm:w-auto sm:self-auto"
              type="submit"
              value="SAVE"
            />
          </form>
        </section>
        <CubicTable />
        <Footer />
      </div>
      <p>{a}</p>
      <p>{b}</p>
      <p>{c}</p>
      <p>{d}</p>
    </div>
  );
};
