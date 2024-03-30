export function cloneDeep(obj: any, cache = new WeakMap()) {
  // 確認是否循環引用
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  // 確認是不是原始型態，如果是的話就直接回傳
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 確認是不是 Date 或 RegExp 這種特殊型態，是的話就透過建構式複製一個相同的值，然後回傳
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  // 看 obj 是物件還是陣列，然後先建一個新的空物件 (或空陣列)
  // 物件的原型也需要複製，所以要用 Object.getPrototypeOf
  const clonedObj = Array.isArray(obj)
    ? []
    : Object.create(Object.getPrototypeOf(obj));

  // 將 obj 與創建好的 result 放到 cache 當中
  // 這樣之後循環引用就可以直接處理
  cache.set(obj, clonedObj);

  // 透過 Reflect.ownKeys 來迭代，然後遞迴地對每個值深拷貝
  // 需要用  Reflect.ownKeys 才能處理 Symbol 做為 key 的狀況
  for (const key of Reflect.ownKeys(obj)) {
    const value = obj[key]
    clonedObj[key] = cloneDeep(value, cache);
  }

  // 最後回傳結果
  return clonedObj;
}