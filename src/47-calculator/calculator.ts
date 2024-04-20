export class Calculator {
  private result: number;
  constructor(value: number) {
    this.result = value;
  }
  getResult(): number {
    return this.result;
  }
  add(value: number): Calculator {
    this.result += value;
    return this;
  }
  subtract(value: number): Calculator {
    this.result -= value;
    return this;
  }
  multiply(value: number): Calculator {
    this.result *= value;
    return this;
  }
  divide(value: number): Calculator {
    if (value === 0) {
      throw new Error("Division by zero");
    }
    this.result /= value;
    return this;
  }
  power(value: number): Calculator {
    this.result **= value;
    return this;
  }
}