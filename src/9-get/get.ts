export function get(object: any, pathParam: string | any[], defaultValue?: any) {
  if(object == null ) {
    return defaultValue;
  }
  let count = 0;
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(/[\.\[\]]/)
  const maxLength = path.length;
  while(object && count < maxLength) {
    const key = String(path[count])
    if(key) {
      object = object[key];
    }
    count++;
  }

  const result = count === maxLength ? object : defaultValue;
  return result;
}