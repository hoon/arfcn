import { NrArfcnParameters } from './NrArfcnParameters'
import { NrBands } from './NrBands'
import { EutraBands } from './EutraBands'
import { NrArfcnBands } from './NrArfcnBands'

export enum LinkDirection {
  Downlink,
  Uplink,
  Unspecified,
}

export function nrArfcnToFrequency(nrArfcn: number): number {
  if (nrArfcn < 0 || nrArfcn > 3279165) {
    return -1
  }

  // As defined in 3GPP TS 38.104 V18.7.0 (2024-09), Section 5.4.2.1
  for (let i = 0; i < NrArfcnParameters.rows.length++; i++) {
    const _nparam = NrArfcnParameters.rows[i]
    if (nrArfcn >= _nparam.n_ref_min && nrArfcn <= _nparam.n_ref_max) {
      const f_offset = Math.floor(_nparam.f_ref_offs * 1000)
      const delta_f = _nparam.df_global_khz
      const n_offset = _nparam.n_ref_offs
      const freq_khz = f_offset + delta_f * (nrArfcn - n_offset)
      const freq_mhz = Math.round(freq_khz) / 1000

      return freq_mhz
    }
  }
  return -1
}

export function frequencyToNrBands(
  frequencyMhz: number,
  direction: LinkDirection = LinkDirection.Unspecified
): number[] {
  const k = NrBands.rows
    .filter((_band) => {
      let matchDl,
        matchUl = false
      if (
        (direction == LinkDirection.Downlink ||
          direction == LinkDirection.Unspecified) &&
        _band.f_dl_lo != null &&
        _band.f_dl_hi != null
      ) {
        matchDl = frequencyMhz >= _band.f_dl_lo && frequencyMhz <= _band.f_dl_hi
      }

      if (
        (direction == LinkDirection.Uplink ||
          direction == LinkDirection.Unspecified) &&
        _band.f_ul_lo != null &&
        _band.f_ul_hi != null
      ) {
        matchUl = frequencyMhz >= _band.f_ul_lo && frequencyMhz <= _band.f_ul_hi
      }

      if (matchDl || matchUl) {
        return true
      }
      return false
    })
    .map((_band) => _band.band)

  return k
}

export function nrArfcnToBands(
  nrArfcn: number,
  direction: LinkDirection = LinkDirection.Unspecified
): number[] {
  const bands = NrArfcnBands.rows
    .filter((_r) => {
      let dl = false
      if (
        direction === LinkDirection.Downlink ||
        direction === LinkDirection.Unspecified
      ) {
        dl =
          _r.n_dl_lo != null &&
          _r.n_dl_hi != null &&
          _r.n_dl_lo <= nrArfcn &&
          _r.n_dl_hi >= nrArfcn
      }
      if (direction === LinkDirection.Downlink) {
        return dl
      }

      let ul = false
      if (
        direction === LinkDirection.Uplink ||
        direction === LinkDirection.Unspecified
      ) {
        ul =
          _r.n_ul_lo != null &&
          _r.n_ul_hi != null &&
          _r.n_ul_lo <= nrArfcn &&
          _r.n_ul_hi >= nrArfcn
      }
      if (direction === LinkDirection.Uplink) {
        return ul
      }
      return dl || ul
    })
    .map((_r) => _r.band)

  return Array.from(new Set(bands))
}

export function frequencyToNrArfcn(
  frequencyMhz: number,
  roundNumber: boolean = false
): number {
  if (Number.isNaN(frequencyMhz) || frequencyMhz < 0 || frequencyMhz > 100000) {
    return -1
  }

  for (const _param of NrArfcnParameters.rows) {
    if (frequencyMhz >= _param.f_min && frequencyMhz <= _param.f_max) {
      // 3GPP TS 38.104 V18.8.0 (2024-12) Section 5.4.2.1
      // f_ref = f_ref_offs + df_global * (n_ref - n_ref_offs)
      //
      // solve for n_ref:
      // n_ref = (f_ref - f_ref_offs) / df_global + n_ref_offs

      const nrArfcn =
        (frequencyMhz - _param.f_ref_offs) / (_param.df_global_khz / 1000) +
        _param.n_ref_offs
      return roundNumber ? Math.round(nrArfcn) : nrArfcn
    }
  }

  return -1
}

export function earfcnToFrequency(earfcn: number): number {
  // 3GPP TS 36.101 V18.7.0 (2024-09)
  // 5.7.3 Carrier frequency and EARFCN

  // valid range:  0 – 262143

  // f_dl = f_dl_lo + 0.1 * (n_dl - n_offs_dl)
  // f_ul = f_ul_lo + 0.1 * (n_ul - n_offs_ul)

  // DL and UL EARFCN ranges do not overlap, so we don't need to ask for direction
  // in the parameters. However, we have to keep track of which direction
  // matched to know which formula to use to calculate the frequency.

  const match = EutraBands.rows.filter((_r) => {
    // using != null because n_dl_lo can be converted to false if it's 0
    // and 0 is a valid EARFCN value
    return (
      _r.n_dl_lo != null &&
      _r.n_dl_lo <= earfcn &&
      _r.n_dl_hi != null &&
      _r.n_dl_hi >= earfcn
    )
  })

  if (match.length > 0 && match[0]) {
    return match[0].f_dl_lo! + 0.1 * (earfcn - match[0].n_offs_dl!)
  }

  return -1
}

export function frequencyToEutraBands(
  frequencyMhz: number,
  direction: LinkDirection = LinkDirection.Unspecified
): number[] {
  const k = EutraBands.rows
    .filter((_band) => {
      let matchDl,
        matchUl = false
      if (
        (direction == LinkDirection.Downlink ||
          direction == LinkDirection.Unspecified) &&
        _band.f_dl_lo &&
        _band.f_dl_hi
      ) {
        matchDl = frequencyMhz >= _band.f_dl_lo && frequencyMhz <= _band.f_dl_hi
      }

      if (
        (direction == LinkDirection.Uplink ||
          direction == LinkDirection.Unspecified) &&
        _band.f_ul_lo &&
        _band.f_ul_hi
      ) {
        matchUl = frequencyMhz >= _band.f_ul_lo && frequencyMhz <= _band.f_ul_hi
      }

      return matchDl || matchUl
    })
    .map((_band) => _band.band)

  return k
}

export function earfcnToBand(earfcn: number): number {
  for (const _r of EutraBands.rows) {
    if (_r.n_dl_lo != null && _r.n_dl_hi != null) {
      if (earfcn >= _r.n_dl_lo && earfcn <= _r.n_dl_hi) {
        return _r.band
      }
    }
    if (_r.n_ul_lo != null && _r.n_ul_hi != null) {
      if (earfcn >= _r.n_ul_lo && earfcn <= _r.n_ul_hi) {
        return _r.band
      }
    }
  }
  return -1
}

const bands3 = nrArfcnToBands(620000)
console.log(`NR-ARFCN 620000 belongs to bands: ${bands3}`)

// Find which NR band an ARFCN belongs to with link direction
const bands4 = nrArfcnToBands(381470, LinkDirection.Uplink)
console.log(`NR-ARFCN 381470 in uplink belongs to bands: ${bands4}`)