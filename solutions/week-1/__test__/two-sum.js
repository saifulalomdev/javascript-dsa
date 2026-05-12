import { expect } from "vitest";
import { describe, it } from "vitest";
import { twoSum } from "../two-sum";

describe("Two sum problem", () => {
    it("should return indices of two numbers that sum to target", () => {
        expect(twoSum([2, 6, 8, 17], 14)).toEqual([1, 2])
    });

    it("should work with non-sorted arrays", () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it('should return an empty array if no sum is found', () => {
        expect(twoSum([1, 2, 3], 7)).toEqual([]);
    });
})