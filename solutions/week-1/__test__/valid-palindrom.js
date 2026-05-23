import { expect, describe, it } from "vitest";
import { isPalindrome } from "../valid-palindrome";

describe("Valid Palindrome", () => {
    it("should return true for a valid palindrome sentence with mixed casing and punctuation", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    it("should return false for a sentence that is not a palindrome", () => {
        expect(isPalindrome("race a car")).toBe(false);
    });

    it("should return true for an empty string containing only a space", () => {
        expect(isPalindrome(" ")).toBe(true);
    });
});