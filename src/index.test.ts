import { describe, expect, it } from "vitest";
import { numberToGreekWords } from "./index";

describe("numberToGreekWords", () => {
  it("should handle string input", () => {
    const result = numberToGreekWords("42");
    expect(result).toBe("σαράντα δύο");
  });

  it("should handle zero", () => {
    const result = numberToGreekWords(0);
    expect(result).toBe("μηδέν");
  });

  it("should handle negative numbers", () => {
    const result = numberToGreekWords(-42);
    expect(result).toBe("μείον σαράντα δύο");
  });

  describe("numbers 1-9", () => {
    it("should convert 1", () => {
      expect(numberToGreekWords(1)).toBe("ένα");
    });

    it("should convert 5", () => {
      expect(numberToGreekWords(5)).toBe("πέντε");
    });

    it("should convert 9", () => {
      expect(numberToGreekWords(9)).toBe("εννιά");
    });
  });

  describe("numbers 10-19", () => {
    it("should convert 10", () => {
      expect(numberToGreekWords(10)).toBe("δέκα");
    });

    it("should convert 13", () => {
      expect(numberToGreekWords(13)).toBe("δεκατρία");
    });

    it("should convert 19", () => {
      expect(numberToGreekWords(19)).toBe("δεκαεννιά");
    });
  });

  describe("numbers 20-99", () => {
    it("should convert 20", () => {
      expect(numberToGreekWords(20)).toBe("είκοσι");
    });

    it("should convert 42", () => {
      expect(numberToGreekWords(42)).toBe("σαράντα δύο");
    });

    it("should convert 99", () => {
      expect(numberToGreekWords(99)).toBe("ενενήντα εννιά");
    });
  });

  describe("numbers 100-999", () => {
    it("should convert 100", () => {
      expect(numberToGreekWords(100)).toBe("εκατό");
    });

    it("should convert 256", () => {
      expect(numberToGreekWords(256)).toBe("διακόσια πενήντα έξι");
    });

    it("should convert 999", () => {
      expect(numberToGreekWords(999)).toBe("εννιακόσια ενενήντα εννιά");
    });
  });

  describe("thousands", () => {
    it("should convert 1000", () => {
      expect(numberToGreekWords(1000)).toBe("χίλια");
    });

    it("should convert 2000", () => {
      expect(numberToGreekWords(2000)).toBe("δύο χιλιάδες");
    });

    it("should convert 3456", () => {
      expect(numberToGreekWords(3456)).toBe("τρεις χιλιάδες τετρακόσια πενήντα έξι");
    });

    it("should convert 13000", () => {
      expect(numberToGreekWords(13000)).toBe("δεκατρείς χιλιάδες");
    });

    it("should convert 999999", () => {
      expect(numberToGreekWords(999_999)).toBe(
        "εννιακόσιες ενενήντα εννιά χιλιάδες εννιακόσια ενενήντα εννιά",
      );
    });
  });

  describe("millions", () => {
    it("should convert 1 million", () => {
      expect(numberToGreekWords(1_000_000)).toBe("ένα εκατομμύριο");
    });

    it("should convert 2 million", () => {
      expect(numberToGreekWords(2_000_000)).toBe("δύο εκατομμύρια");
    });

    it("should convert 6013443", () => {
      expect(numberToGreekWords(6_013_443)).toBe(
        "έξι εκατομμύρια δεκατρείς χιλιάδες τετρακόσια σαράντα τρία",
      );
    });

    it("should convert 123456789", () => {
      expect(numberToGreekWords(123_456_789)).toBe(
        "εκατό είκοσι τρία εκατομμύρια τετρακόσιες πενήντα έξι χιλιάδες εφτακόσια ογδόντα εννιά",
      );
    });
  });

  describe("billions", () => {
    it("should convert 1 billion", () => {
      expect(numberToGreekWords(1_000_000_000)).toBe("ένα δισεκατομμύριο");
    });

    it("should convert 5 billion", () => {
      expect(numberToGreekWords(5_000_000_000)).toBe("πέντε δισεκατομμύρια");
    });

    it("should convert 12345678901", () => {
      expect(numberToGreekWords(12_345_678_901)).toBe(
        "δώδεκα δισεκατομμύρια τριακόσια σαράντα πέντε εκατομμύρια εξακόσιες εβδομήντα οκτώ χιλιάδες εννιακόσια ένα",
      );
    });
  });
});
