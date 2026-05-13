// solutions/week-1/__test__/roman-to-integer.js
import { describe, it, expect } from "vitest";
import { romanToInt } from "../roman-to-integer";

describe("Roman to Integer problem", () => {
    it("should handle simple addition (III -> 3)", () => {
        expect(romanToInt("III")).toBe(3);
    });

    it("should handle subtraction cases (IV -> 4, IX -> 9)", () => {
        expect(romanToInt("IV")).toBe(4);
        expect(romanToInt("IX")).toBe(9);
    });

    it("should handle complex combinations (LVIII -> 58)", () => {
        expect(romanToInt("LVIII")).toBe(58);
    });

    it("should handle large numbers (MCMXCIV -> 1994)", () => {
        expect(romanToInt("MCMXCIV")).toBe(1994);
    });
});