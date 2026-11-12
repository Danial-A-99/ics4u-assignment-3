type SummarySectionProps = {
  //Reused just with diff name
  sectionName: string;
  displayValue: string;
  classContents: string;
  id: string;
};

export const SummarySection = ({ sectionName, displayValue, classContents, id }: SummarySectionProps) => {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-slate-900 bg-[#0b0f19]/40 p-4">
      <span className="text-[10px] text-slate-500 uppercase tracking-wider">{sectionName}</span>
      <span className={classContents} id={id}>
        {displayValue}
      </span>
    </div>
  );
};

type SummaryProps = {
  equation: string;
  firstDerivative: string;
  secondDerivative: string;
  roots: string;
  factored: string;
};

export const Summary = ({ equation, firstDerivative, secondDerivative, roots, factored }: SummaryProps) => {
  return (
    <div className="space-y-1 font-mono text-xs">
      <SummarySection
        classContents="text-slate-200 text-sm tracking-wide break-all"
        displayValue={equation}
        id="equation"
        sectionName="f(x) expanded polynomial"
      ></SummarySection>
      <SummarySection
        classContents="text-cyan-400 text-sm tracking-wide break-all"
        displayValue={firstDerivative}
        id="first-derivative"
        sectionName="f'(x) first derivative"
      ></SummarySection>
      <SummarySection
        classContents="text-purple-400 text-sm tracking-wide break-all"
        displayValue={secondDerivative}
        id="second-derivative"
        sectionName="f''(x) second derivative"
      ></SummarySection>
      <SummarySection
        classContents="text-emerald-400 text-sm tracking-wide break-all"
        displayValue={roots}
        id="roots"
        sectionName="roots"
      ></SummarySection>
      <SummarySection
        classContents="text-white text-sm tracking-wide wrap-break-word text-left pt-l"
        displayValue={factored}
        id="factored"
        sectionName="factored form"
      ></SummarySection>
    </div>
  );
};
