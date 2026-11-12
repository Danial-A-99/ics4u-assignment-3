type AnalysisSectionProps = {
  sectionName: string;
  displayValue: string;
  classContents: string;
  id: string;
};

export const AnalysisSection = ({ sectionName, displayValue, classContents, id }: AnalysisSectionProps) => {
  return (
    <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
      <span className="text-slate-500">{sectionName}</span>
      <span className={classContents} id={id}>
        {displayValue}
      </span>
    </div>
  );
};

type AnalysisProps = {
  p: string;
  q: string;
  disc: string;
  r1: string;
  r2: string;
  r3: string;
  min: string;
  max: string;
};

export const Analysis = ({ p, q, disc, r1, r2, r3, min, max }: AnalysisProps) => {
  return (
    <div className="space-y-1 font-mono text-xs">
      <AnalysisSection classContents="text-slate-200 font-medium" displayValue={p} id="p" sectionName="[p] parameter"></AnalysisSection>
      <AnalysisSection classContents="text-slate-200 font-medium" displayValue={q} id="q" sectionName="[p] parameter"></AnalysisSection>
      <AnalysisSection
        classContents="text-amber-400 font-bold tracking-wide"
        displayValue={disc}
        id="discriminant"
        sectionName="[Δ] discriminant"
      ></AnalysisSection>
      <AnalysisSection classContents="text-emerald-400" displayValue={r1} id="root-one" sectionName="[r1] root alpha"></AnalysisSection>
      <AnalysisSection classContents="text-emerald-400" displayValue={r2} id="root-two" sectionName="[r2] root beta"></AnalysisSection>
      <AnalysisSection classContents="text-emerald-400" displayValue={r3} id="root-three" sectionName="[r3] root gamma"></AnalysisSection>
      <AnalysisSection classContents="text-cyan-400" displayValue={min} id="minimum" sectionName="[min] critical point"></AnalysisSection>
      <AnalysisSection classContents="text-purple-400" displayValue={max} id="maximum" sectionName="[max] critical point"></AnalysisSection>
    </div>
  );
};

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
      <CubicBox table={<Analysis disc={"1"} max={"2"} min={"3"} p={"4"} q={"5"} r1={"6"} r2={"7"} r3={"8"} />} title={"01 // Analysis"} />
      <CubicBox table={<Analysis disc={"1"} max={"2"} min={"3"} p={"4"} q={"5"} r1={"6"} r2={"7"} r3={"8"} />} title={"01 // Analysis"} />
      <CubicBox table={<Analysis disc={"1"} max={"2"} min={"3"} p={"4"} q={"5"} r1={"6"} r2={"7"} r3={"8"} />} title={"01 // Analysis"} />
    </div>
  );
};
