export function myExpect(value: any) {
  return {
    toBe(expected: any) {
      if(value === expected) {
        return true
      } else {
        throw new Error("Not Equal")
      }
    },
    notToBe(expected: any) {
      if(value !== expected) {
        return true
      } else {
        throw new Error("Equal")
      }
    }
  }
}