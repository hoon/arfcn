// Type definitions for Jest global functions
declare global {
  function describe(name: string, fn: () => void): void;
  function test(name: string, fn: (done?: jest.DoneCallback) => void | Promise<void>, timeout?: number): void;
  function expect<T>(actual: T): jest.Matchers<T>;
  namespace jest {
    interface Matchers<R> {
      toBe(expected: any): R;
      toBeDefined(): R;
      toBeNull(): R;
      toBeUndefined(): R;
      toEqual(expected: any): R;
      toContain(expected: any): R;
      toBeGreaterThan(expected: number): R;
      toBeLessThan(expected: number): R;
      toBeGreaterThanOrEqual(expected: number): R;
      toBeLessThanOrEqual(expected: number): R;
      toBeCloseTo(expected: number, precision?: number): R;
      toMatch(expected: string | RegExp): R;
      toThrow(expected?: string | Error | RegExp): R;
      toHaveLength(expected: number): R;
    }
    type DoneCallback = (error?: any) => void;
  }
}

// This export is necessary to make this a module
export {};
