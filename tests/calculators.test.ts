import {
  nrArfcnToFrequency,
  frequencyToNrBands,
  nrArfcnToBands,
  earfcnToFrequency,
  earfcnToBand,
  frequencyToEutraBands,
  LinkDirection,
  frequencyToNrArfcn,
} from '../src/Calculators'

describe('NR-ARFCN Functions', () => {
  describe('nrArfcnToFrequency', () => {
    test('should convert NR-ARFCN 397470 to correct frequency', () => {
      const frequency = nrArfcnToFrequency(397470)
      expect(frequency).toBeDefined()
      expect(typeof frequency).toBe('number')
      expect(frequency).toEqual(1987.35)
    })

    test('should convert NR-ARFCN 631968 to correct frequency', () => {
      const frequency = nrArfcnToFrequency(631968)
      expect(frequency).toBeDefined()
      expect(typeof frequency).toBe('number')
      expect(frequency).toEqual(3479.52)
    })

    test('should return -1 for invalid NR-ARFCN values', () => {
      expect(nrArfcnToFrequency(-1)).toBe(-1)
      expect(nrArfcnToFrequency(3300000)).toBe(-1)
    })
  })

  describe('frequencyToNrBands', () => {
    test('should find correct bands for frequency from NR-ARFCN 397470', () => {
      const frequency = nrArfcnToFrequency(397470)
      expect(frequency).toBeDefined()
      if (frequency) {
        const bands = frequencyToNrBands(frequency)
        expect(Array.isArray(bands)).toBe(true)
        expect(bands).toEqual(expect.arrayContaining([2, 25]))
      }
    })

    test('should find correct bands for frequency from NR-ARFCN 631968', () => {
      const frequency = nrArfcnToFrequency(631968)
      expect(frequency).toBeDefined()
      if (frequency) {
        const bands = frequencyToNrBands(frequency)
        expect(Array.isArray(bands)).toBe(true)
        expect(bands).toEqual(expect.arrayContaining([77, 78]))
      }
    })
  })

  describe('nrArfcnToBand', () => {
    test('should find correct band for NR-ARFCN 397470', () => {
      const bands = nrArfcnToBands(397470)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(expect.arrayContaining([2, 25]))
    })

    test('should find correct band for NR-ARFCN 631968', () => {
      const bands = nrArfcnToBands(631968)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(expect.arrayContaining([77, 78]))
    })

    test('should return empty array for invalid NR-ARFCN values', () => {
      expect(nrArfcnToBands(-1)).toEqual([])
      expect(nrArfcnToBands(3300000)).toEqual([])
    })
  })

  describe('nrArfcnToBand directional', () => {
    test('should find correct band for NR-ARFCN 397470 with Downlink direction', () => {
      const bands = nrArfcnToBands(397470, LinkDirection.Downlink)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(expect.arrayContaining([2, 25]))
      expect(bands).toEqual(expect.not.arrayContaining([65]))
    })
    test('should find correct band for NR-ARFCN 397470 with Uplink direction', () => {
      const bands = nrArfcnToBands(397470, LinkDirection.Uplink)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(expect.arrayContaining([65]))
      expect(bands).toEqual(expect.not.arrayContaining([2, 25]))
    })

    test('should find correct band for NR-ARFCN 631968 with Downlink direction', () => {
      const bands = nrArfcnToBands(631968, LinkDirection.Downlink)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(expect.arrayContaining([77, 78]))
    })

    test('should find correct band for NR-ARFCN 631968 with Uplink direction', () => {
      const bands = nrArfcnToBands(631968, LinkDirection.Uplink)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(expect.arrayContaining([77, 78]))
    })
  })
})

describe('frequency to NR-ARFCN', () => {
  test('3479.52 MHz to NR-ARFCN', () => {
    const nrArfcn = frequencyToNrArfcn(3479.52)
    expect(nrArfcn).toBe(631968)
  })

  test('1987.35 MHz to NR-ARFCN', () => {
    const nrArfcn = frequencyToNrArfcn(1987.35)
    expect(nrArfcn).toBe(397470)
  })

  test('1852.5 MHz to NR-ARFCN', () => {
    const nrArfcn = frequencyToNrArfcn(1852.5)
    expect(nrArfcn).toBe(370500)
  })

  test('1987.35 MHz to NR-ARFCN', () => {
    const nrArfcn = frequencyToNrArfcn(1987.35)
    expect(nrArfcn).toBe(397470)
  })

  test('778.85 MHz to NR-ARFCN', () => {
    const nrArfcn = frequencyToNrArfcn(778.85)
    expect(nrArfcn).toBe(155770)
  })

  test('723.85 MHz to NR-ARFCN', () => {
    const nrArfcn = frequencyToNrArfcn(723.85)
    expect(nrArfcn).toBe(144770)
  })

  test('negative MHz to NR-ARFCN', () => {
    const nrArfcn = frequencyToNrArfcn(-1)
    expect(nrArfcn).toBe(-1)
  })

  test('test invalid frequency to NR-ARFCN', () => {
    const nrArfcn = frequencyToNrArfcn(100001)
    expect(nrArfcn).toBe(-1)
  })
})

describe('frequency to E-UTRA bands', () => {
  describe('frequencyToEutraBands', () => {
    test('should convert 2147.5 MHz to correct E-UTRA band', () => {
      const bands = frequencyToEutraBands(2147.5)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([1, 4, 10, 65, 66])
    })

    test('should convert 2117.5 MHz uplink to correct E-UTRA band', () => {
      const bands = frequencyToEutraBands(2117.5, LinkDirection.Uplink)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })

    test('should convert 2117.5 MHz downlink to correct E-UTRA band', () => {
      const bands = frequencyToEutraBands(2117.5, LinkDirection.Downlink)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([1, 4, 10, 65, 66])
    })

    test('should convert 1852.5 MHz to correct E-UTRA band', () => {
      const bands = frequencyToEutraBands(1852.5)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([2, 3, 9, 25, 35])
    })

    test('should convert 1852.5 MHz uplink to correct E-UTRA band', () => {
      const bands = frequencyToEutraBands(1852.5, LinkDirection.Uplink)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([2, 25, 35])
    })

    test('should convert 1852.5 MHz downlink to correct E-UTRA band', () => {
      const bands = frequencyToEutraBands(1852.5, LinkDirection.Downlink)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([3, 9, 35])
    })

    test('should return empty array for invalid frequency', () => {
      const bands = frequencyToEutraBands(-1)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
  })
})

describe('EARFCN Functions', () => {
  describe('earfcnToFrequency', () => {
    test('should convert EARFCN 2325 to correct frequency', () => {
      const frequency = earfcnToFrequency(2325)
      expect(frequency).toBeDefined()
      expect(frequency).toEqual(2147.5)
    })

    test('should return -1 for invalid EARFCN values', () => {
      expect(earfcnToFrequency(-1)).toEqual(-1)
      expect(earfcnToFrequency(300000)).toEqual(-1)
    })
  })

  describe('earfcnToBand', () => {
    test('should find correct band for EARFCN 2325', () => {
      const band = earfcnToBand(2325)
      expect(typeof band).toBe('number')
      expect(band).toEqual(4)
    })

    test('should find correct band for EARFCN 38100 (Band 38)', () => {
      const band = earfcnToBand(38100)
      expect(band).toBe(38) // 2605 MHz b38
    })

    test('should find correct band for EARFCN 40740 (Band 41)', () => {
      const band = earfcnToBand(40740)
      expect(band).toBe(41) // 2605 MHz b41
    })

    test('should find correct band for EARFCN 2025 (Band 4)', () => {
      const band = earfcnToBand(2025)
      expect(band).toBe(4) // 2117.5 MHz b4
    })

    test('should find correct band for EARFCN 66511 (Band 66)', () => {
      const band = earfcnToBand(66511)
      expect(band).toBe(66) // 2117.5 MHz b66
    })

    test('should find correct band for EARFCN 300 (Band 1)', () => {
      const band = earfcnToBand(300)
      expect(band).toBe(1) // 2140 MHz b1
    })

    test('should return -1 for invalid EARFCN values', () => {
      expect(earfcnToBand(-1)).toEqual(-1)
      expect(earfcnToBand(300000)).toEqual(-1)
    })
  })
})
