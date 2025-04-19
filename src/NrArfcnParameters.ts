/*
 * 3GPP TS 38.104 V18.8.0 (2024-12)
 * Section 3.2 Symbols
 *
 * f_min: Minimum frequency in MHz
 * f_max: Maximum frequency in MHz
 * df_global_khz: Global frequency raster granularity in KHz
 * f_ref_offs: Offset used for calculating f_ref (RF reference frequency)
 * n_ref_offs: Offset used for calculating n_ref (reference NR-ARFCN)
 * n_ref_min: Minimum reference NR-ARFCN
 * n_ref_max: Maximum reference NR-ARFCN
 */

export interface NrArfcnParamRow {
  f_min: number
  f_max: number
  df_global_khz: number
  f_ref_offs: number
  n_ref_offs: number
  n_ref_min: number
  n_ref_max: number
}

export interface NrArfcnParamObj {
  table_release_3gpp: number
  table_ts: string
  table_date: string
  table_names: string[]
  rows: NrArfcnParamRow[]
}

export const NrArfcnParameters: NrArfcnParamObj = {
  table_release_3gpp: 18,
  table_ts: '3GPP TS 38.104 V18.8.0',
  table_date: '2024-12',
  table_names: [
    'Table 5.4.2.1-1: NR-ARFCN parameters for the global frequency raster',
  ],
  rows: [
    {
      f_min: 0,
      f_max: 3000,
      df_global_khz: 5,
      f_ref_offs: 0,
      n_ref_offs: 0,
      n_ref_min: 0,
      n_ref_max: 599999,
    },
    {
      f_min: 3000,
      f_max: 24250,
      df_global_khz: 15,
      f_ref_offs: 3000,
      n_ref_offs: 600000,
      n_ref_min: 600000,
      n_ref_max: 2016666,
    },
    {
      f_min: 24250,
      f_max: 100000,
      df_global_khz: 60,
      f_ref_offs: 24250.08,
      n_ref_offs: 2016667,
      n_ref_min: 2016667,
      n_ref_max: 3279165,
    },
  ],
}
