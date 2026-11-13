import type { Results } from "@ics4u-assignment-02/types";

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

export const Analysis = ({ p, q, discriminant, r1, r2, r3, minimum, maximum }: Results) => {
  return (
    <div className="space-y-1 font-mono text-xs">
      <AnalysisSection
        classContents="text-slate-200 font-medium"
        displayValue={String(p)}
        id="p"
        sectionName="[p] parameter"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-slate-200 font-medium"
        displayValue={String(q)}
        id="q"
        sectionName="[p] parameter"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-amber-400 font-bold tracking-wide"
        displayValue={String(discriminant)}
        id="discriminant"
        sectionName="[Δ] discriminant"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-emerald-400"
        displayValue={String(r1)}
        id="root-one"
        sectionName="[r1] root alpha"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-emerald-400"
        displayValue={String(r2)}
        id="root-two"
        sectionName="[r2] root beta"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-emerald-400"
        displayValue={String(r3)}
        id="root-three"
        sectionName="[r3] root gamma"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-cyan-400"
        displayValue={String(minimum)}
        id="minimum"
        sectionName="[min] critical point"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-purple-400"
        displayValue={String(maximum)}
        id="maximum"
        sectionName="[max] critical point"
      ></AnalysisSection>
    </div>
  );
};
