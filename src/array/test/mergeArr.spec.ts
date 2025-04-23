import { describe, it, expect } from 'vitest';
import { concatArray } from '../mergeArr';

describe('concatArray', () => {
  it('should return a new array with unique elements from both arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const result = concatArray(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should return a new array with unique elements when arr1 is empty', () => {
    const arr1: Array<unknown> = [];
    const arr2 = [1, 2, 3];
    const result = concatArray(arr1, arr2);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return a new array with unique elements when arr2 is empty', () => {
    const arr1 = [1, 2, 3];
    const arr2: Array<unknown> = [];
    const result = concatArray(arr1, arr2);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return a new array with unique elements when both arr1 and arr2 are empty', () => {
    const arr1: Array<unknown> = [];
    const arr2: Array<unknown> = [];
    const result = concatArray(arr1, arr2);
    expect(result).toEqual([]);
  });

  it('should return a new array with unique elements when arr1 and arr2 have duplicate elements', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 3, 4];
    const result = concatArray(arr1, arr2);
    expect(result).toEqual([1, 2, 2, 3, 4]);
  });
});
