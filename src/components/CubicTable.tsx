import { Analysis } from "./Analysis";
import { HistorySection } from "./HistorySection";
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

export const CubicTable = () => {
  return (
    <div className="grid grid-cols-2 gap-12">
      <CubicBox
        additionalClassCode=""
        table={
          <Analysis
            discriminant={1}
            maximum={{ x: 1, y: 2 }}
            minimum={{ x: 1, y: 2 }}
            p={4}
            q={5}
            r1={{ x: 1, y: 2 }}
            r2={{ x: 1, y: 2 }}
            r3={{ x: 1, y: 2 }}
          />
        }
        title={"01 // Analysis"}
      />
      <CubicBox
        additionalClassCode=""
        table={<Summary equation={"2"} factored={"6"} firstDerivative={"3"} roots={"5"} secondDerivative={"4"} />}
        title={"02 // Summary"}
      />
      <CubicBox additionalClassCode="max-h-14" table={<HistorySection />} title={"03 // History"} />
      <CubicBox
        additionalClassCode=""
        table={
          <Analysis
            discriminant={1}
            maximum={{ x: 1, y: 2 }}
            minimum={{ x: 1, y: 2 }}
            p={4}
            q={5}
            r1={{ x: 1, y: 2 }}
            r2={{ x: 1, y: 2 }}
            r3={{ x: 1, y: 2 }}
          />
        }
        title={"01 // Analysis"}
      />
    </div>
  );
};
