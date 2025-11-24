# number-to-greek-words

Convert numbers to Greek words. A TypeScript library that transforms numeric values into their Greek text representation.

## Installation

```bash
npm install number-to-greek-words
```

## Usage

```typescript
import { numberToGreekWords } from 'number-to-greek-words';

// Basic numbers
numberToGreekWords(42);
// => "σαράντα δύο"

numberToGreekWords(0);
// => "μηδέν"

// Negative numbers
numberToGreekWords(-42);
// => "μείον σαράντα δύο"

// Hundreds
numberToGreekWords(256);
// => "διακόσια πενήντα έξι"

// Thousands (with proper Greek plural forms)
numberToGreekWords(1000);
// => "χίλια"

numberToGreekWords(3456);
// => "τρεις χιλιάδες τετρακόσια πενήντα έξι"

// Millions
numberToGreekWords(2_000_000);
// => "δύο εκατομμύρια"

numberToGreekWords(6_013_443);
// => "έξι εκατομμύρια δεκατρείς χιλιάδες τετρακόσια σαράντα τρία"

// Billions
numberToGreekWords(1_000_000_000);
// => "ένα δισεκατομμύριο"

// String input is also supported
numberToGreekWords('42');
// => "σαράντα δύο"
```

## Limitations

- Does not handle floating-point numbers
- Maximum supported range: approximately ±999 billion

## License

MIT © Efthymios Karagiannis
