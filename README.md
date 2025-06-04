# arfcn - Absolute Radio-Frequency Channel Number Tools

A TypeScript/JavaScript library for working with absolute radio-frequency channel numbers (ARFCN) used in cellular network standards. This package provides utilities for converting between ARFCN values and frequencies, and mapping between frequencies and bands for 5G NR (5G), E-UTRA (4G LTE), and UTRA (3G UMTS) technologies.

## Installation

```bash
npm install arfcn
```

## Features

- Convert NR-ARFCN (5G) values to frequencies
- Convert EARFCN (4G LTE) values to frequencies
- Convert UARFCN (3G UTRA) values to frequencies
- Map frequencies to NR bands
- Map EARFCN values to E-UTRA/LTE bands
- Map UARFCN values to UTRA/UMTS bands
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
const frequency1 = nrArfcnToFrequency(620000)
// 3300
console.log(`NR-ARFCN 620000 corresponds to ${frequency} MHz`)

// invalid NR-ARFCN input returns -1
const frequency2 = nrArfcnToFrequency(-500))
// -1

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
const bands3 = nrArfcnToBands(620000)
// [77, 78]
console.log(`NR-ARFCN 620000 belongs to bands: ${bands3}`)


// Find which NR band an ARFCN belongs to with link direction
const bands4 = nrArfcnToBands(381470, LinkDirection.Uplink)
// [2, 25, 39, 98, 101]
console.log(`NR-ARFCN 381470 in uplink belongs to bands: ${bands4}`)

// Convert frequency to NR-ARFCN
const nrArfcn = frequencyToNrArfcn(3479.52)
console.log(`Frequency 3479.52 MHz corresponds to NR-ARFCN ${nrArfcn}`)
// frequencyToNrArfcn() should return an integer if the passed frequency
// is valid center frequency for an NR-ARFCN. However, it does not check
// if the returned value is an integer and may return a floating-point number
```

### E-UTRA (4G LTE) operations

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

### UTRA (3G UMTS) operations

```typescript
import {
  uarfcnToBands,
  uarfcnToFrequencyFdd,
  uarfcnToFrequencyTdd,
  frequencyToUarfcnFdd,
  frequencyToUarfcnTdd,
} from 'arfcn'

// Convert UARFCN to UTRA band
const bands = uarfcnToBands(9662)
console.log(`UARFCN 9662 belongs to bands: ${bands.join(', ')}`)
// UARFCN 9662 belongs to bands: 1, 2, 'b'

// Convert UARFCN to UTRA band with direction
const bands2 = uarfcnToBands(9662, LinkDirection.Downlink)
console.log(`UARFCN 9662 belongs to bands: ${bands2.join(', ')}`)
// UARFCN 9662 belongs to bands: 2, 'b'

// Convert UARFCN 1037 to UTRA band with channel type
const bands3 = uarfcnToBands(1037, { channelType: 'Additional' })
console.log(
  `UARFCN 1037 w/ Additional channel type belongs to bands: ${bands3.join(
    ', '
  )}`
)
// UARFCN 1037 w/ Additional channel type belongs to bands: 5, 6

// Convert FDD UARFCN to frequency
const frequency = uarfcnToFrequencyFdd(612, 2, 'Additional')
console.log(`UARFCN 612 b2 Additional corresponds to ${frequency} MHz`)
// UARFCN 612 b2 Additional corresponds to 1972.5 MHz

// Convert TDD UARFCN to frequency
const frequency2 = uarfcnToFrequencyTdd(2112, 'Additional')
console.log(`UARFCN 2112 Additional corresponds to ${frequency2} MHz`)
// UARFCN 2112 Additional corresponds to 2572.5 MHz

// Convert frequency to FDD UARFCN
const fddUarfcn = frequencyToUarfcnFdd(928, 8)
console.log(`Frequency 928 Mhz band 8 corresponds to UARFCN ${fddUarfcn}`)
// Frequency 928 Mhz band 8 corresponds to  UARFCN 2940

// Convert frequency to TDD UARFCN
const tddUarfcn = frequencyToUarfcnTdd(2010)
console.log(`Frequency 2010 MHz corresponds to UARFCN ${tddUarfcn}`)
// Frequency 2010 MHz corresponds to UARFCN 10050
```

### Directly accessing information

```typescript
import {
  NrBands,
  NrArfcnBands,
  EutraBands,
  UtraFddBands,
  UtraTddBands,
} from 'arfcn'

// NR band n78 information
console.log(NrBands.rows.find((band) => band.band === 78))

// E-UTRA band b3 information
console.log(EutraBands.rows.find((band) => band.band === 3))

// UTRA FDD band 8 information
console.log(UtraFddBands.rows.find((band) => band.band === 8))

// UTRA TDD band 'd' information
console.log(UtraTddBands.rows.find((band) => band.band === 'd'))

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
