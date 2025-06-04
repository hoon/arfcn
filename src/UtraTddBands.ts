/*
 * band: UTRA band character
 * mcps: million-chips-per-second (CDMA terminology)
 * f_lo: Uplink frequency range lower bound
 * f_hi: Uplink frequency range upper bound
 * n_lo: Downlink frequency range lower bound
 * n_hi: Downlink frequency range upper bound
 * n_xtra: Additional UARFCNs
 */
export interface UtraTddBandRow {
  band: 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
  mcps: 3.84 | 1.28 | 7.68
  f_lo: number
  f_hi: number
  n_lo: number
  n_hi: number
  n_xtra: number[] | null
}

export interface UtraTddBandsObj {
  table_release_3gpp: number
  table_ts: string
  table_date: string
  table_names: string[]
  rows: UtraTddBandRow[]
}

export const UtraTddBands: UtraTddBandsObj = {
  table_release_3gpp: 18,
  table_ts: '3GPP TS 25.102 V18.0.0',
  table_date: '2024-03',
  table_names: [
    '5.4.4.1 3.84 Mcps TDD Option',
    '5.4.4.2 1.28 Mcps TDD Option',
    '5.4.4.3 7.68 Mcps TDD Option',
  ],
  rows: [
    {
      band: 'a',
      mcps: 3.84,
      f_lo: 1900,
      f_hi: 1920,
      n_lo: 9512,
      n_hi: 9588,
      n_xtra: null,
    },
    {
      band: 'a',
      mcps: 3.84,
      f_lo: 2010,
      f_hi: 2025,
      n_lo: 10062,
      n_hi: 10113,
      n_xtra: null,
    },
    {
      band: 'b',
      mcps: 3.84,
      f_lo: 1850,
      f_hi: 1910,
      n_lo: 9262,
      n_hi: 9538,
      n_xtra: null,
    },
    {
      band: 'b',
      mcps: 3.84,
      f_lo: 1930,
      f_hi: 1990,
      n_lo: 9662,
      n_hi: 9938,
      n_xtra: null,
    },
    {
      band: 'c',
      mcps: 3.84,
      f_lo: 1910,
      f_hi: 1930,
      n_lo: 9562,
      n_hi: 9638,
      n_xtra: null,
    },
    {
      band: 'd',
      mcps: 3.84,
      f_lo: 2570,
      f_hi: 2620,
      n_lo: 12862,
      n_hi: 13088,
      n_xtra: [2112, 2137, 2162, 2187, 2212, 2237, 2262, 2287, 2312, 2337],
    },
    {
      band: 'a',
      mcps: 1.28,
      f_lo: 1900,
      f_hi: 1920,
      n_lo: 9504,
      n_hi: 9596,
      n_xtra: null,
    },
    {
      band: 'a',
      mcps: 1.28,
      f_lo: 2010,
      f_hi: 2025,
      n_lo: 10054,
      n_hi: 10121,
      n_xtra: null,
    },
    {
      band: 'b',
      mcps: 1.28,
      f_lo: 1850,
      f_hi: 1910,
      n_lo: 9254,
      n_hi: 9546,
      n_xtra: null,
    },
    {
      band: 'b',
      mcps: 1.28,
      f_lo: 1930,
      f_hi: 1990,
      n_lo: 9654,
      n_hi: 9946,
      n_xtra: null,
    },
    {
      band: 'c',
      mcps: 1.28,
      f_lo: 1910,
      f_hi: 1930,
      n_lo: 9554,
      n_hi: 9646,
      n_xtra: null,
    },
    {
      band: 'd',
      mcps: 1.28,
      f_lo: 2570,
      f_hi: 2620,
      n_lo: 12854,
      n_hi: 13096,
      n_xtra: null,
    },
    {
      band: 'e',
      mcps: 1.28,
      f_lo: 2300,
      f_hi: 2400,
      n_lo: 11504,
      n_hi: 11996,
      n_xtra: null,
    },
    {
      band: 'f',
      mcps: 1.28,
      f_lo: 1880,
      f_hi: 1920,
      n_lo: 9404,
      n_hi: 9596,
      n_xtra: null,
    },
    {
      band: 'a',
      mcps: 7.68,
      f_lo: 1900,
      f_hi: 1920,
      n_lo: 9512,
      n_hi: 9588,
      n_xtra: null,
    },
    {
      band: 'a',
      mcps: 7.68,
      f_lo: 2010,
      f_hi: 2025,
      n_lo: 10062,
      n_hi: 10113,
      n_xtra: null,
    },
    {
      band: 'b',
      mcps: 7.68,
      f_lo: 1850,
      f_hi: 1910,
      n_lo: 9262,
      n_hi: 9538,
      n_xtra: null,
    },
    {
      band: 'b',
      mcps: 7.68,
      f_lo: 1930,
      f_hi: 1990,
      n_lo: 9662,
      n_hi: 9938,
      n_xtra: null,
    },
    {
      band: 'c',
      mcps: 7.68,
      f_lo: 1910,
      f_hi: 1930,
      n_lo: 9562,
      n_hi: 9638,
      n_xtra: null,
    },
    {
      band: 'd',
      mcps: 7.68,
      f_lo: 2570,
      f_hi: 2620,
      n_lo: 12874,
      n_hi: 13076,
      n_xtra: null,
    },
  ],
}
