import { SimulationInputs, TrajectoryPoint, TrajectoryResult } from "@/types/trajectory";

const GRAVITY = 9.81;

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function round(value: number, decimals = 2): number {
  return Number(value.toFixed(decimals));
}

export function calculateTrajectory({
  velocity,
  angle,
}: SimulationInputs): TrajectoryResult {
  const theta = toRadians(angle);

  const vx = velocity * Math.cos(theta);
  const vy = velocity * Math.sin(theta);

  const timeOfFlight = (2 * vy) / GRAVITY;
  const maxHeight = (vy * vy) / (2 * GRAVITY);
  const range = vx * timeOfFlight;

  const safeTimeOfFlight = Math.max(timeOfFlight, 0);
  const steps = 60;
  const dt = safeTimeOfFlight / steps;

  const points: TrajectoryPoint[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = dt * i;
    const x = vx * t;
    const y = vy * t - 0.5 * GRAVITY * t * t;

    if (y < 0) {
      break;
    }

    points.push({
      time: round(t, 3),
      x: round(x, 2),
      y: round(y, 2),
    });
  }

  if (points.length === 0) {
    points.push({ time: 0, x: 0, y: 0 });
  }

  const lastPoint = points[points.length - 1];
  if (lastPoint.x < range) {
    points.push({
      time: round(safeTimeOfFlight, 3),
      x: round(range, 2),
      y: 0,
    });
  }

  return {
    points,
    metrics: {
      maxHeight: round(maxHeight),
      range: round(range),
      timeOfFlight: round(safeTimeOfFlight),
    },
  };
}

export { GRAVITY };