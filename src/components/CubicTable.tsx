import { Analysis } from "./Analysis";
import { Summary } from "./Summary";

type CubicBoxProps = {
  title: string;
  table: React.JSX.Element;
};

export const CubicBox = ({ title, table }: CubicBoxProps) => {
  return (
    <section className="flex flex-col space-y-6">
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
      <CubicBox table={<Analysis disc={"1"} max={"2"} min={"3"} p={"4"} q={"5"} r1={"6"} r2={"7"} r3={"8"} />} title={"01 // Analysis"} />
      <CubicBox
        table={<Summary equation={"2"} factored={"6"} firstDerivative={"3"} roots={"5"} secondDerivative={"4"} />}
        title={"02 // Summary"}
      />
      <CubicBox table={<Analysis disc={"1"} max={"2"} min={"3"} p={"4"} q={"5"} r1={"6"} r2={"7"} r3={"8"} />} title={"01 // Analysis"} />
      <CubicBox table={<Analysis disc={"1"} max={"2"} min={"3"} p={"4"} q={"5"} r1={"6"} r2={"7"} r3={"8"} />} title={"01 // Analysis"} />
    </div>
  );
};
