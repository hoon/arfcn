/**
 * ARFCN - Absolute Radio Frequency Channel Number utilities
 *
 * This module provides utilities for working with ARFCN values in cellular networks,
 * including conversion between ARFCN values and frequencies, and mapping between
 * frequencies and bands for both NR (5G) and EUTRA (4G LTE) technologies.
 */

// Export types and constants from NrArfcn
export { NrArfcnBands } from './NrArfcnBands'
export type { NrArfcnBandRow, NrArfcnBandsObj } from './NrArfcnBands'

// Export types and constants from NrArfcnParameters
export { NrArfcnParameters } from './NrArfcnParameters'
export type { NrArfcnParamRow, NrArfcnParamObj } from './NrArfcnParameters'

// Export types and constants from NrBands
export { NrBands } from './NrBands'
export type { NrBandRow, NrBandsObj } from './NrBands'

// Export types and constants from EutraBands
export { EutraBands } from './EutraBands'
export type { EutraBandRow, EutraBandsObj } from './EutraBands'

// Export types and constants from UtraFddBands
export { UtraFddBands } from './UtraFddBands'
export type { UtraFddBandRow, UtraFddBandsObj } from './UtraFddBands'

// Export types and constants from UtraTddBands
export { UtraTddBands } from './UtraTddBands'
export type { UtraTddBandRow, UtraTddBandsObj } from './UtraTddBands'

// Export functions from NrEutraCalculators
export {
  nrArfcnToFrequency,
  frequencyToNrBands,
  nrArfcnToBands,
  frequencyToNrArfcn,
  earfcnToFrequency,
  frequencyToEutraBands,
  earfcnToBand,
} from './NrEutraCalculators'

// Export functions from UtraCalculators
export {
  uarfcnToBands,
  uarfcnToFrequencyFdd,
  uarfcnToFrequencyTdd,
  frequencyToUarfcnFdd,
  frequencyToUarfcnTdd,
} from './UtraCalculators'
