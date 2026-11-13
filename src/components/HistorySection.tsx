import type { History } from "@ics4u-assignment-02/types";

// type SummarySectionProps = {
//   //Reused just with diff name
//   sectionName: string;
//   displayValue: string;
//   classContents: string;
//   id: string;
// };

// export const SummarySection = ({ sectionName, displayValue, classContents, id }: SummarySectionProps) => {
//   return (
//     <div className="flex flex-col gap-1 rounded-lg border border-slate-900 bg-[#0b0f19]/40 p-4">
//       <span className="text-[10px] text-slate-500 uppercase tracking-wider">{sectionName}</span>
//       <span className={classContents} id={id}>
//         {displayValue}
//       </span>
//     </div>
//   );
// };

// type SummaryProps = {
//   equation: string;
//   firstDerivative: string;
//   secondDerivative: string;
//   roots: string;
//   factored: string;
// };
export const inputList: History = [];

export const HistorySection = () => {
  return <div className="custom-scrollbar flex-1 space-y-2 overflow-y-auto pr-2 font-mono text-slate-400 text-xs" id="history"></div>;
};
