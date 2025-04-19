# ARFCN - Absolute Radio-Frequency Channel Number Tools

A TypeScript/JavaScript library for working with absolute radio-frequency channel numbers (ARFCN) used in cellular network standards. This package provides utilities for converting between ARFCN values and frequencies, and mapping between frequencies and bands for both 5G NR (5G) and E-UTRA (4G LTE) technologies.

## Installation

```bash
npm install arfcn
```

## Features

- Convert NR-ARFCN (5G) values to frequencies
- Convert EARFCN (4G LTE) values to frequencies
- Map frequencies to NR bands
- Map EARFCN values to bands
- Access band information from 3GPP specifications

## Usage examples

### 5G NR-ARFCN operations

```typescript
import {
  nrArfcnToFrequency,
  frequencyToNrBands,
  nrArfcnToBand,
  frequencyToNrArfcn,
  LinkDirection,
} from 'arfcn'

// Convert NR-ARFCN to frequency in MHz
const frequency = nrArfcnToFrequency(620000)
// 3300
console.log(`NR-ARFCN 620000 corresponds to ${frequency} MHz`)

// Find which NR bands a frequency belongs to
const bands1 = frequencyToNrBands(3600)
// [48, 77, 78]
console.log(`Frequency 3600 MHz belongs to NR bands: ${bands1.join(', ')}`)

// Find which NR bands a frequency belongs to with indication that this frequency was used for downlink
const bands2 = frequencyToNrBands(1987.35, LinkDirection.Downlink)
// [2, 25]
console.log(
  `Frequency 1987.35 MHz in downlink belongs to NR bands: ${bands2.join(', ')}`
)

// Find which NR band an ARFCN belongs to
const band3 = nrArfcnToBand(620000)
console.log(`NR-ARFCN 620000 belongs to band ${band3}`)

// Find which NR band an ARFCN belongs to with link direction
const band4 = nrArfcnToBand(381470, LinkDirection.Uplink)
console.log(`NR-ARFCN 381470 in uplink belongs to band ${band4}`)

// Convert frequency to NR-ARFCN
const nrArfcn = frequencyToNrArfcn(3479.52)
console.log(`Frequency 3479.52 MHz corresponds to NR-ARFCN ${nrArfcn}`)
// frequencyToNrArfcn() should return an integer if the passed frequency
// is valid center frequency for an NR-ARFCN. However, it does not check
// if the returned value is an integer and may return a floating-point number
```

### EARFCN (4G LTE) operations

```typescript
import { earfcnToFrequency, frequencyToEutraBands, earfcnToBand } from 'arfcn'

// Convert EARFCN to frequency in MHz
const frequency = earfcnToFrequency(1650)
console.log(`EARFCN 1650 corresponds to ${frequency} MHz`)
// 1850

// Find which EUTRA bands a frequency belongs to
const bands = frequencyToEutraBands(1852.5)
console.log(`Frequency 1852.5 MHz belongs to E-UTRA bands: ${bands.join(', ')}`)
// [ 2, 3, 9, 25, 35 ]

// Find which EUTRA bands a frequency belongs to with link direction
const bands = frequencyToEutraBands(1852.5, LinkDirection.Downlink)
console.log(
  `Frequency 1852.5 MHz in downlink belongs to E-UTRA bands: ${bands.join(
    ', '
  )}`
)
// [ 3, 9, 35 ]

// Find which EUTRA band an EARFCN belongs to
const band = earfcnToBand(1650)
console.log(`EARFCN 1650 belongs to band: ${band}`)
```

### Directly accessing information

```typescript
import { NrBands, NrArfcnBands, EutraBands } from 'arfcn'

// NR band n78 information
console.log(NrBands.rows.find((band) => band.band === 78))

// E-UTRA band b3 information
console.log(EutraBands.rows.find((band) => band.band === 3))

// NR-ARFCN information source document
console.log(NrArfcnBands.table_ts)
// TS 38.104 V18.8.0

// NR-ARFCN information source tables in the document
console.log(NrArfcnBands.table_names)
// [
//    'Table 5.4.2.3-1: Applicable NR-ARFCN per operating band in FR1',
//    'Table 5.4.2.3-2: Applicable NR-ARFCN per operating band in FR2',
//    'Table 5.4.2.3-3: Applicable NR-ARFCN for operation in band n263',
//    'Table 5.4.2.3-4: Applicable NR-ARFCN per operating band for enhanced channel raster',
//  ]
```

## Credit

(c) 2025 Hoon Choi. 3GPP data structures inspired by [@blevic](https://github.com/blevic)'s [nrarfcn](https://github.com/blevic/nrarfcn) pip package.

## License

MIT
