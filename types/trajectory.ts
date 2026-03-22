export type TrajectoryPoint = {
  time: number;
  x: number;
  y: number;
};

export type TrajectoryMetrics = {
  maxHeight: number;
  range: number;
  timeOfFlight: number;
};

export type TrajectoryResult = {
  points: TrajectoryPoint[];
  metrics: TrajectoryMetrics;
};

export type SimulationInputs = {
  velocity: number;
  angle: number;
  mass: number;
};