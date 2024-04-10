export function join(arr1: any[], arr2: any[]): any[] {
  const map: Record<number, any> = {};
  arr1.forEach(item => map[item.id] = item);
  arr2.forEach(item => {
    map[item.id] = {...map[item.id], ...item};
  });
  return Object.values(map);
}