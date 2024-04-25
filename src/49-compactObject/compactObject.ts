export function compactObject(obj: any): any {
  if(typeof obj !== 'object') {
    return obj;
  }

  if(Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }
  const result: any = {};

  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if(typeof value !== 'object') {
      if(Boolean(value)) {
        result[key] = value;
      } 
    } else {
      if(value !== null) {
        result[key] = compactObject(value);
      }
      
    }
  });
  return result;
}