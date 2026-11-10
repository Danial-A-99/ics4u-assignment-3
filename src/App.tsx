import { CubicInput, Footer, Header } from "@ics4u-assignment-03/components";
import { type SyntheticEvent, useState } from "react";

export const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const numberSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Header />
        <section className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0b0f19] p-6 shadow-2xl">
          <div className="absolute top-0 left-0 h-full w-1 bg-cyan-500"></div>
          <form className="flex flex-wrap items-center justify-between gap-6" onSubmit={numberSubmit}>
            <div className="flex flex-1 flex-wrap justify-start gap-4 sm:gap-6">
              <CubicInput id="a" name="a-value" setValue={setA} value={a} />
              <CubicInput id="b" name="b-value" setValue={setB} value={b} />
              <CubicInput id="c" name="c-value" setValue={setC} value={c} />
              <CubicInput id="d" name="d-value" setValue={setD} value={d} />
            </div>
          </form>
        </section>
        <Footer />
      </div>
      <p>{a}</p>
      <p>{b}</p>
      <p>{c}</p>
      <p>{d}</p>
    </div>
  );
};
