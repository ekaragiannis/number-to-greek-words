import { hundreds, ones, pluralHundreds, pluralOnes, pluralTeens, teens, tens } from "./constants";

function convertBelowThousand(num: number, plural: boolean = false): string {
  if (num === 0) return "";

  if (num < 10) {
    return plural ? pluralOnes[num] : ones[num];
  }

  if (num < 20) {
    return plural ? pluralTeens[num - 10] : teens[num - 10];
  }

  if (num < 100) {
    const tensDigit = Math.floor(num / 10);
    const onesDigit = num % 10;
    const onesWord = onesDigit === 0 ? "" : plural ? pluralOnes[onesDigit] : ones[onesDigit];
    return onesWord ? `${tens[tensDigit]} ${onesWord}` : tens[tensDigit];
  }

  const hundredsDigit = Math.floor(num / 100);
  const remainder = num % 100;

  const hundredsWord = plural ? pluralHundreds[hundredsDigit] : hundreds[hundredsDigit];
  const remainderWord = remainder > 0 ? convertBelowThousand(remainder, plural) : "";

  return remainderWord ? `${hundredsWord} ${remainderWord}` : hundredsWord;
}

function convertScale(
  num: number,
  singular: string,
  plural: string,
  usePlural: boolean = false,
): string {
  if (num === 0) {
    return "";
  }

  if (num === 1) {
    return singular === "χίλια" ? "χίλια" : `ένα ${singular}`;
  }

  const word = convertBelowThousand(num, usePlural);

  return `${word} ${plural}`;
}

/**
 * Converts a number to its Greek text representation.
 *
 * @param num - The number to convert. Accepts both number and string types.
 *              Must be an integer value.
 * @returns The Greek text representation of the number.
 */
export function numberToGreekWords(num: string | number): string {
  if (Number.isNaN(num)) {
    return "Invalid input: Non arithmetic value";
  }

  const n = Number(num);

  if (n === 0) {
    return "μηδέν";
  }

  if (n < 0) {
    return `μείον ${numberToGreekWords(-n)}`;
  }

  const billions = Math.floor(n / 1000000000);
  const millions = Math.floor((n % 1000000000) / 1000000);
  const thousands = Math.floor((n % 1000000) / 1000);
  const remainder = n % 1000;

  const parts: string[] = [];

  if (billions > 0) {
    parts.push(convertScale(billions, "δισεκατομμύριο", "δισεκατομμύρια"));
  }

  if (millions > 0) {
    parts.push(convertScale(millions, "εκατομμύριο", "εκατομμύρια"));
  }

  if (thousands > 0) {
    parts.push(convertScale(thousands, "χίλια", "χιλιάδες", true));
  }

  if (remainder > 0) {
    parts.push(convertBelowThousand(remainder));
  }

  return parts.join(" ");
}
