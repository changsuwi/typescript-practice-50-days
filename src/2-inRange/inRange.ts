export function inRange(value: number, start: number, end = 0) {
  if(start > end) {
    [start, end] = [end, start];
  }
  return value <= end && value >= start;
}