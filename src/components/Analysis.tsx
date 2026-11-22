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
        displayValue={Number.isFinite(p) ? String(p) : "0.0000"}
        id="p"
        sectionName="[p] parameter"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-slate-200 font-medium"
        displayValue={Number.isFinite(q) ? String(q) : "0.0000"}
        id="q"
        sectionName="[p] parameter"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-amber-400 font-bold tracking-wide"
        displayValue={Number.isFinite(discriminant) ? String(discriminant) : "0.0000"}
        id="discriminant"
        sectionName="[Δ] discriminant"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-emerald-400"
        displayValue={Number.isFinite(r1?.x) ? `x: ${r1?.x} | y: 0.0000` : "x:  N/A | y: N/A"}
        id="root-one"
        sectionName="[r1] root alpha"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-emerald-400"
        displayValue={Number.isFinite(r2?.x) ? `x: ${r2?.x} | y: 0.0000` : "x:  N/A | y: N/A"}
        id="root-two"
        sectionName="[r2] root beta"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-emerald-400"
        displayValue={Number.isFinite(r3?.x) ? `x: ${r3?.x} | y: 0.0000` : "x:  N/A | y: N/A"}
        id="root-three"
        sectionName="[r3] root gamma"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-cyan-400"
        displayValue={Number.isFinite(minimum?.x) ? `x: ${minimum?.x} | y: ${minimum?.y}` : "x:  N/A | y: N/A"}
        id="minimum"
        sectionName="[min] critical point"
      ></AnalysisSection>
      <AnalysisSection
        classContents="text-purple-400"
        displayValue={Number.isFinite(maximum?.x) ? `x: ${maximum?.x} | y: ${maximum?.y}` : "x:  N/A | y: N/A"}
        id="maximum"
        sectionName="[max] critical point"
      ></AnalysisSection>
    </div>
  );
};
