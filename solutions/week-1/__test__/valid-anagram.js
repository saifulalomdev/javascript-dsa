import { expect, describe, it } from "vitest";
import { isAnagram } from "../valid-anagram";


describe("Valid Anagram", () => {
    it("should return true when the words are valid anagrams", () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true);
    });

    it("should return false when the words have the same length but different letters", () => {
        expect(isAnagram("rat", "car")).toBe(false);
    });

    it("should return false when the words have different lengths", () => {
        expect(isAnagram("rat", "rats")).toBe(false);
    });

    it("should return true for empty strings", () => {
        expect(isAnagram("", "")).toBe(true);
    });
});