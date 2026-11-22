import type { Coefficients, Results } from "@ics4u-assignment-02/types";
import { useEffect, useRef } from "react";

type drawGraphProps = {
  coefficientValues: Coefficients;
  roots: Partial<Results>;
  canvas: HTMLCanvasElement;
};

export const drawGraph = ({ coefficientValues, roots, canvas }: drawGraphProps) => {
  const ctx = canvas.getContext("2d");
  const { a, b, c, d } = coefficientValues;
  const { r1, r2, r3 } = roots;

  if (!ctx) {
    return;
  }

  const w = canvas.width;
  const h = canvas.height;
  const scale = 40;
  let first = true;

  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.translate(w / 2, h / 2);

  // grid
  ctx.strokeStyle = "#334155";

  for (let i = -w; i < w; i += scale) {
    ctx.beginPath();
    ctx.moveTo(i, -h);
    ctx.lineTo(i, h);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-w, i);
    ctx.lineTo(w, i);
    ctx.stroke();
  }

  // axes
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(-w, 0);
  ctx.lineTo(w, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, -h);
  ctx.lineTo(0, h);
  ctx.stroke();

  // curve
  ctx.strokeStyle = "#6366f1";
  ctx.beginPath();

  if (a !== 0) {
    for (let x = -10; x <= 10; x += 0.01) {
      const y = a * x ** 3 + b * x ** 2 + c * x + d;

      if (first) {
        ctx.moveTo(x * scale, -y * scale);
        first = false;
      } else {
        ctx.lineTo(x * scale, -y * scale);
      }
    }
  }

  ctx.stroke();

  // roots
  ctx.fillStyle = "#ef4444";

  [r1, r2, r3].forEach((r) => {
    if (typeof r?.x === "number") {
      ctx.beginPath();
      ctx.arc(r.x * scale, 0, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  ctx.restore();
};

export const CubicGraph = ({ a, b, c, d, r1, r2, r3 }: Coefficients & Partial<Results>) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const values = { a, b, c, d };
  const rootVals = { r1, r2, r3 };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    drawGraph({ canvas, coefficientValues: values, roots: rootVals });
  });
  return (
    <div className="flex-1 rounded-xl border border-slate-900 bg-[#0b0f19]/50 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[16px_16px] p-6 shadow-2xl">
      <canvas className="w-full rounded-md border border-slate-900 bg-[#04060a] shadow-inner" height={400} ref={canvasRef} width={400} />
    </div>
  );
};
