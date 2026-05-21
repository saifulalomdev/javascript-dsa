import { expect, describe, it } from "vitest";
import { containsDuplicate } from "../contains-duplicate";


describe("Contains Duplicate", () => {
    it("should return true when the array contains duplicates", () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    it("should return false when all elements in the array are unique", () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });

    it("should return true for a highly duplicated, unsorted array", () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });
});