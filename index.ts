/**
 * ARFCN - Absolute Radio Frequency Channel Number utilities
 *
 * This module provides utilities for working with ARFCN values in cellular networks,
 * including conversion between ARFCN values and frequencies, and mapping between
 * frequencies and bands for both NR (5G) and EUTRA (4G LTE) technologies.
 */

// Export types and constants from NrArfcn
export { NrArfcnBandRow, NrArfcnBands } from './src/NrArfcnBands'

// Export types and constants from NrArfcnParameters
export {
  NrArfcnParamRow,
  NrArfcnParamObj,
  NrArfcnParameters,
} from './src/NrArfcnParameters'

// Export types and constants from NrBands
export { NrBandRow, NrBandsObj, NrBands } from './src/NrBands'

// Export types and constants from EarfcnTable
export { EarfcnRow, EarfcnTableObj as EarfcnTable, EarfcnTable as EarfcnObj } from './src/EutraBands'

// Export types and constants from EutraBands
export {
  EutraDuplexModeEnum,
  EutraBandRow,
  EutraBandsObj,
  EutraBands,
} from './src/EutraBands'

// Export functions from Calculators
export {
  nrArfcnToFrequency,
  frequencyToNrBands,
  nrArfcnToBand,
  earfcnToFrequency,
  frequencyToEutraBands,
  earfcnToBand,
} from './src/Calculators'
