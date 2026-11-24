import type { Coefficients } from "@ics4u-assignment-02/types";
import { Analysis } from "./Analysis";
import { CubicGraph } from "./CubicGraph";
import { HistorySection } from "./HistorySection";
import { MathFunctions } from "./MathFunctions";
import { Summary } from "./Summary";

type CubicBoxProps = {
  title: string;
  table: React.JSX.Element;
  additionalClassCode: string;
};

export const CubicBox = ({ title, table, additionalClassCode }: CubicBoxProps) => {
  return (
    <section className={`flex flex-col space-y-6 ${additionalClassCode}`}>
      <div className="flex items-center gap-4">
        <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">{title}</h2>
      </div>
      {table}
    </section>
  );
};

type CubicTableProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  saveCoefficients: boolean;
  getCoefficients: (values: Coefficients) => void;
};

export const CubicTable = ({ a, b, c, d, saveCoefficients, getCoefficients }: CubicTableProps) => {
  const mathValues = MathFunctions({ a, b, c, d });
  return (
    <div className="grid grid-cols-2 gap-12">
      <CubicBox
        additionalClassCode=""
        table={
          <Analysis
            discriminant={mathValues.discriminant}
            maximum={mathValues.maximum}
            minimum={mathValues.minimum}
            p={mathValues.p}
            q={mathValues.q}
            r1={mathValues.r1}
            r2={mathValues.r2}
            r3={mathValues.r3}
          />
        }
        title={"01 // Analysis"}
      />
      <CubicBox
        additionalClassCode=""
        table={
          <Summary
            equation={mathValues.equation ?? "N/A"}
            factored={mathValues.factored ?? "No Real Factorization"}
            firstDerivative={mathValues.firstDerivative ?? "N/A"}
            roots={mathValues.roots ?? "N/A"}
            secondDerivative={mathValues.secondDerivative ?? "N/A"}
          />
        }
        title={"02 // Summary"}
      />
      <CubicBox
        additionalClassCode="max-h-140"
        table={<HistorySection coefficientValues={{ a, b, c, d }} getCoefficients={getCoefficients} saveCoefficients={saveCoefficients} />}
        title={"03 // History"}
      />
      <CubicBox
        additionalClassCode=""
        table={<CubicGraph a={a} b={b} c={c} d={d} r1={mathValues.r1} r2={mathValues.r2} r3={mathValues.r3} />}
        title={"04 // Graph"}
      />
    </div>
  );
};
