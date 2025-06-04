import { LinkDirection } from './NrEutraCalculators'
import { UtraFddBands } from './UtraFddBands'
import { UtraTddBands } from './UtraTddBands'

function _fddUlXtraUarfcnToBands(uarfcn: number) {
  return UtraFddBands.rows.filter((_r) => {
    return _r.n_ul_xtra?.includes(uarfcn)
  })
}

function _fddDlXtraUarfcnToBands(uarfcn: number) {
  return UtraFddBands.rows.filter((_r) => {
    return _r.n_dl_xtra?.includes(uarfcn)
  })
}

function _fddUlGeneralUarfcnToBands(uarfcn: number) {
  return UtraFddBands.rows.filter((_r) => {
    return (
      _r.n_ul_lo !== null &&
      _r.n_ul_hi !== null &&
      uarfcn >= _r.n_ul_lo &&
      uarfcn <= _r.n_ul_hi
    )
  })
}

function _fddDlGeneralUarfcnToBands(uarfcn: number) {
  return UtraFddBands.rows.filter((_r) => {
    return (
      _r.n_dl_lo !== null &&
      _r.n_dl_hi !== null &&
      uarfcn >= _r.n_dl_lo &&
      uarfcn <= _r.n_dl_hi
    )
  })
}

function _tddXtraUarfcnToBands(uarfcn: number) {
  return UtraTddBands.rows.filter((_r) => {
    return _r.n_xtra?.includes(uarfcn)
  })
}

function _tddGeneralUarfcnToBands(uarfcn: number) {
  return UtraTddBands.rows.filter((_r) => {
    return (
      _r.n_lo !== null &&
      _r.n_hi !== null &&
      uarfcn >= _r.n_lo &&
      uarfcn <= _r.n_hi
    )
  })
}

function _uarfcnBandSort(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  } else if (typeof a === 'number') {
    return -1
  } else if (typeof b === 'number') {
    return 1
  }
  return a.localeCompare(b)
}

export function uarfcnToBands(
  uarfcn: number,
  searchOptions: {
    direction?: LinkDirection
    duplexMode?: 'FDD' | 'TDD' | 'All'
    channelType?: 'General' | 'Additional' | 'All'
  } = {
    direction: LinkDirection.Unspecified,
    duplexMode: 'All',
    channelType: 'All',
  }
): (number | string)[] {
  if (!Number.isFinite(uarfcn) || uarfcn < 0) {
    return []
  }

  const so = {
    direction: searchOptions.direction ?? LinkDirection.Unspecified,
    duplexMode: searchOptions.duplexMode ?? 'All',
    channelType: searchOptions.channelType ?? 'All',
  }

  let results: (number | string)[] = []

  if (so.duplexMode === 'FDD' || so.duplexMode === 'All') {
    if (
      so.direction === LinkDirection.Uplink ||
      so.direction === LinkDirection.Unspecified
    ) {
      if (so.channelType === 'Additional' || so.channelType === 'All') {
        const bands = _fddUlXtraUarfcnToBands(uarfcn)
        if (bands.length > 0) {
          results.push(...bands.map((_r) => _r.band))
        }
      }
      if (so.channelType === 'General' || so.channelType === 'All') {
        const bands = _fddUlGeneralUarfcnToBands(uarfcn)
        if (bands.length > 0) {
          results.push(...bands.map((_r) => _r.band))
        }
      }
    }
    if (
      so.direction === LinkDirection.Downlink ||
      so.direction === LinkDirection.Unspecified
    ) {
      if (so.channelType === 'Additional' || so.channelType === 'All') {
        const bands = _fddDlXtraUarfcnToBands(uarfcn)
        if (bands.length > 0) {
          results.push(...bands.map((_r) => _r.band))
        }
      }
      if (so.channelType === 'General' || so.channelType === 'All') {
        const bands = _fddDlGeneralUarfcnToBands(uarfcn)
        if (bands.length > 0) {
          results.push(...bands.map((_r) => _r.band))
        }
      }
    }
  }

  if (so.duplexMode === 'TDD' || so.duplexMode === 'All') {
    if (so.channelType === 'Additional' || so.channelType === 'All') {
      const bands = _tddXtraUarfcnToBands(uarfcn)
      if (bands.length > 0) {
        results.push(...bands.map((_r) => _r.band))
      }
    }
    if (so.channelType === 'General' || so.channelType === 'All') {
      const bands = _tddGeneralUarfcnToBands(uarfcn)
      if (bands.length > 0) {
        results.push(...bands.map((_r) => _r.band))
      }
    }
  }

  return Array.from(new Set(results)).sort(_uarfcnBandSort)
}

export function uarfcnToFrequencyFdd(
  uarfcn: number,
  band: number,
  channelType: 'General' | 'Additional'
): number {
  if (!Number.isFinite(uarfcn) || uarfcn < 0) {
    return -1
  }

  const rows = UtraFddBands.rows.filter((_r) => {
    return _r.band === band
  })
  if (rows.length === 1) {
    const row = rows[0]
    if (channelType === 'General') {
      if (uarfcn >= row.n_dl_lo && uarfcn <= row.n_dl_hi) {
        return uarfcn / 5 + row.f_dl_offset
      }
      if (
        row.n_ul_lo !== null &&
        row.n_ul_hi !== null &&
        row.f_ul_offset !== null &&
        uarfcn >= row.n_ul_lo &&
        uarfcn <= row.n_ul_hi
      ) {
        return uarfcn / 5 + row.f_ul_offset
      }
    } else if (channelType === 'Additional') {
      if (
        row.n_dl_xtra &&
        row.f_dl_xtra_offset !== null &&
        row.n_dl_xtra.includes(uarfcn)
      ) {
        return uarfcn / 5 + row.f_dl_xtra_offset
      } else if (
        row.n_ul_xtra &&
        row.f_ul_xtra_offset !== null &&
        row.n_ul_xtra.includes(uarfcn)
      ) {
        return uarfcn / 5 + row.f_ul_xtra_offset
      }
    }
  }

  return -1
}

export function uarfcnToFrequencyTdd(
  uarfcn: number,
  channelType: 'General' | 'Additional'
): number {
  if (channelType === 'General') {
    return uarfcn / 5
  } else if (channelType === 'Additional') {
    return uarfcn / 5 + 2150.1
  }

  return -1
}

export function frequencyToUarfcnFdd(
  frequencyMhz: number,
  band: number
): number {
  if (!Number.isFinite(frequencyMhz) || frequencyMhz < 0) {
    return -1
  }

  // For UTRA general channels, the channel raster is integer mutliples of 200 kHz.
  // For UTRA additional channels, the channel raster is integer mutliples of 200 kHz shifted by 100 kHz.
  // This also applies to TDD channels. The only TDD band that has channels shifted by 100 kHz is band 'd'.
  // See 3GPP TS 25.101 V18.0.0 (2024-03) Section 5.4.2 Channel raster,
  // and 3GPP TS 25.102 V18.0.0 (2024-03) Section 5.4.2 Channel raster
  const isXtra = (frequencyMhz * 10) % 2 === 1

  const rows = UtraFddBands.rows.filter((_r) => {
    return _r.band === band
  })
  if (rows.length !== 1) {
    return -1
  }
  const row = rows[0]
  if (isXtra) {
    if (
      row.f_dl_xtra_offset !== null &&
      row.f_dl_xtra !== null &&
      row.f_dl_xtra.includes(frequencyMhz)
    ) {
      return Math.round(5 * (frequencyMhz - row.f_dl_xtra_offset) * 10) / 10
    } else if (
      row.f_ul_xtra_offset !== null &&
      row.f_ul_xtra !== null &&
      row.f_ul_xtra.includes(frequencyMhz)
    ) {
      return Math.round(5 * (frequencyMhz - row.f_ul_xtra_offset) * 10) / 10
    }
  } else {
    if (frequencyMhz >= row.f_dl_lo && frequencyMhz <= row.f_dl_hi) {
      return Math.round(5 * (frequencyMhz - row.f_dl_offset) * 10) / 10
    }
    if (
      row.f_ul_lo !== null &&
      row.f_ul_hi !== null &&
      row.f_ul_offset !== null &&
      frequencyMhz >= row.f_ul_lo &&
      frequencyMhz <= row.f_ul_hi
    ) {
      return Math.round(5 * (frequencyMhz - row.f_ul_offset) * 10) / 10
    }
  }

  return -1
}

export function frequencyToUarfcnTdd(frequencyMhz: number): number {
  if (!Number.isFinite(frequencyMhz) || frequencyMhz < 0) {
    return -1
  }

  // See 3GPP TS 25.102 V18.0.0 (2024-03) Section 5.4.2 Channel raster
  const isXtra = (frequencyMhz * 10) % 2 === 1

  if (isXtra) {
    return Math.round(5 * (frequencyMhz - 2150.1) * 10) / 10
  }

  return Math.round(5 * frequencyMhz * 10) / 10
}
