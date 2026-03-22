"use client";

import { TrajectoryPoint } from "@/types/trajectory";
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TrajectoryChartProps = {
  data: TrajectoryPoint[];
};

export default function TrajectoryChart({ data }: TrajectoryChartProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Visualization
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
          Flight Trajectory
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          2D projectile motion plotted from launch to ground impact.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#050b18] p-3 sm:p-4">
        <div className="h-[320px] w-full sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 24 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />

              <XAxis
                dataKey="x"
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                tickLine={false}
              >
                <Label
                  value="Horizontal Distance (m)"
                  position="bottom"
                  offset={8}
                  fill="#a1a1aa"
                  fontSize={12}
                />
              </XAxis>

              <YAxis
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                tickLine={false}
              >
                <Label
                  value="Height (m)"
                  angle={-90}
                  position="insideLeft"
                  fill="#a1a1aa"
                  fontSize={12}
                  style={{ textAnchor: "middle" }}
                />
              </YAxis>

              <Tooltip
                contentStyle={{
                  background: "rgba(9, 12, 28, 0.96)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  color: "#fff",
                }}
                labelStyle={{ color: "#67e8f9" }}
                formatter={(value: number, name: string) => [
                  `${value} m`,
                  name === "y" ? "Height" : "Distance",
                ]}
                labelFormatter={(_, payload) => {
                  const point = payload?.[0]?.payload;
                  return point ? `t = ${point.time} s` : "";
                }}
              />

              <Line
                type="monotone"
                dataKey="y"
                stroke="#22d3ee"
                strokeWidth={4}
                dot={false}
                activeDot={{ r: 5 }}
              />
            </LineChart>
            
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}