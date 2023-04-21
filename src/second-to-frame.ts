export default function secondToFrame(second: number, fps: number): number {
  return Math.floor(second * fps);
}
