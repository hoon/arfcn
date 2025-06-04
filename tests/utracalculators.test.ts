import {
  frequencyToUarfcnFdd,
  frequencyToUarfcnTdd,
  uarfcnToBands,
  uarfcnToFrequencyFdd,
  uarfcnToFrequencyTdd,
} from '../src/UtraCalculators'
import { LinkDirection } from '../src/NrEutraCalculators'

describe('uarfcnToBands()', () => {
  describe('uarfcnToBands(9662)', () => {
    test('should find correct band for UARFCN 9662 with Downlink direction', () => {
      const bands = uarfcnToBands(9662, { direction: LinkDirection.Downlink })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(expect.arrayContaining([2, 'b']))
    })
    test('should find correct band for UARFCN 9662 with Uplink direction', () => {
      const bands = uarfcnToBands(9662, { direction: LinkDirection.Uplink })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(expect.arrayContaining([1, 'b']))
    })
    test('should find correct band for UARFCN 9662 with Unspecified direction', () => {
      const bands = uarfcnToBands(9662, {
        direction: LinkDirection.Unspecified,
      })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(expect.arrayContaining([1, 2, 'b']))
    })
    test('should find correct band for UARFCN 9662 with Additional channel type', () => {
      const bands = uarfcnToBands(9662, { channelType: 'Additional' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
    test('should find correct band for UARFCN 9662 with General channel type', () => {
      const bands = uarfcnToBands(9662, { channelType: 'General' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(expect.arrayContaining([1, 2, 'b']))
    })
    test('should find correct band for UARFCN 9662 with TDD duplex mode', () => {
      const bands = uarfcnToBands(9662, { duplexMode: 'TDD' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual(['b'])
    })
  })
  describe('uarfcnToBands(1037)', () => {
    test('UARFCN 1037 downlink', () => {
      const bands = uarfcnToBands(1037, { direction: LinkDirection.Downlink })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([5, 6])
    })
    test('UARFCN 1037 uplink', () => {
      const bands = uarfcnToBands(1037, { direction: LinkDirection.Uplink })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([3])
    })
    test('UARFCN 1037 no link direction', () => {
      const bands = uarfcnToBands(1037)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([3, 5, 6])
    })
    test('UARFCN 1037 general channel type', () => {
      const bands = uarfcnToBands(1037, { channelType: 'General' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([3])
    })
    test('UARFCN 1037 additional channel type', () => {
      const bands = uarfcnToBands(1037, { channelType: 'Additional' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([5, 6])
    })
    test('UARFCN 1037 TDD duplex mode', () => {
      const bands = uarfcnToBands(1037, { duplexMode: 'TDD' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
  })
  describe('uarfcnToBands(612)', () => {
    test('UARFCN 612', () => {
      const bands = uarfcnToBands(612)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([2])
    })
    test('UARFCN 612 general channel type', () => {
      const bands = uarfcnToBands(612, { channelType: 'General' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
    test('UARFCN 612 additional channel type', () => {
      const bands = uarfcnToBands(612, { channelType: 'Additional' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([2])
    })
    test('UARFCN 612 TDD duplex mode', () => {
      const bands = uarfcnToBands(612, { duplexMode: 'TDD' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
  })
  describe('uarfcnToBands(10564)', () => {
    test('UARFCN 10564', () => {
      const bands = uarfcnToBands(10564)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([1])
    })
    test('UARFCN 10564 general channel type', () => {
      const bands = uarfcnToBands(10564, { channelType: 'General' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([1])
    })
    test('UARFCN 10564 additional channel type', () => {
      const bands = uarfcnToBands(10564, { channelType: 'Additional' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
    test('UARFCN 10564 TDD duplex mode', () => {
      const bands = uarfcnToBands(10564, { duplexMode: 'TDD' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
  })
  describe('uarfcnToBands(2963)', () => {
    test('UARFCN 2963', () => {
      const bands = uarfcnToBands(2963)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toHaveLength(2)
      expect(bands).toEqual(expect.arrayContaining([8, 10]))
      expect(bands).toEqual([8, 10])
    })
    test('UARFCN 2963 general channel type', () => {
      const bands = uarfcnToBands(2963, { channelType: 'General' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toHaveLength(2)
      expect(bands).toEqual(expect.arrayContaining([8, 10]))
    })
    test('UARFCN 2963 additional channel type', () => {
      const bands = uarfcnToBands(2963, { channelType: 'Additional' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
    test('UARFCN 2963 TDD duplex mode', () => {
      const bands = uarfcnToBands(2963, { duplexMode: 'TDD' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
  })
  describe('uarfcnToBands(787)', () => {
    test('UARFCN 787', () => {
      const bands = uarfcnToBands(787)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([5, 19])
    })
    test('UARFCN 787 general channel type', () => {
      const bands = uarfcnToBands(787, { channelType: 'General' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
    test('UARFCN 787 additional channel type', () => {
      const bands = uarfcnToBands(787, { channelType: 'Additional' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([5, 19])
    })
    test('UARFCN 787 downlink', () => {
      const bands = uarfcnToBands(787, { direction: LinkDirection.Downlink })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([19])
    })
    test('UARFCN 787 uplink', () => {
      const bands = uarfcnToBands(787, { direction: LinkDirection.Uplink })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([5])
    })
    test('UARFCN 787 TDD duplex mode', () => {
      const bands = uarfcnToBands(787, { duplexMode: 'TDD' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
  })
  describe('uarfcnToBands(10687)', () => {
    test('UARFCN 10687', () => {
      const bands = uarfcnToBands(10687)
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([1])
    })
    test('UARFCN 10687 general channel type', () => {
      const bands = uarfcnToBands(10687, { channelType: 'General' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([1])
    })
    test('UARFCN 10687 additional channel type', () => {
      const bands = uarfcnToBands(10687, { channelType: 'Additional' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
    test('UARFCN 10687 downlink', () => {
      const bands = uarfcnToBands(10687, { direction: LinkDirection.Downlink })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([1])
    })
    test('UARFCN 10687 uplink', () => {
      const bands = uarfcnToBands(10687, { direction: LinkDirection.Uplink })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
    test('UARFCN 10687 downlnk, general channel type', () => {
      const bands = uarfcnToBands(10687, {
        direction: LinkDirection.Downlink,
        channelType: 'General',
      })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([1])
    })
    test('UARFCN 10687 downlink, additional channel type', () => {
      const bands = uarfcnToBands(10687, {
        direction: LinkDirection.Downlink,
        channelType: 'Additional',
      })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
    test('UARFCN 10687 TDD duplex mode', () => {
      const bands = uarfcnToBands(10687, { duplexMode: 'TDD' })
      expect(Array.isArray(bands)).toBe(true)
      expect(bands).toEqual([])
    })
  })
})

describe('uarfcnToFrequencyFdd()', () => {
  describe('uarfcnToFrequencyFdd(612)', () => {
    test('UARFCN 612 b2 Additional', () => {
      const frequency = uarfcnToFrequencyFdd(612, 2, 'Additional')
      expect(frequency).toBe(1972.5)
    })
    test('UARFCN 612 b2 General', () => {
      const frequency = uarfcnToFrequencyFdd(612, 2, 'General')
      expect(frequency).toBe(-1)
    })
  })
})

describe('uarfcnToFrequencyTdd()', () => {
  describe('uarfcnToFrequencyTdd(2963)', () => {
    test('UARFCN 2112 Additional', () => {
      const frequency = uarfcnToFrequencyTdd(2112, 'Additional')
      expect(frequency).toBe(2572.5)
    })
    test('UARFCN 2112 General', () => {
      const frequency = uarfcnToFrequencyTdd(2112, 'General')
      expect(frequency).toBe(422.4)
    })
  })
})

describe('frequencyToUarfcnFdd()', () => {
  describe('frequencyToUarfcnFdd(1972.5)', () => {
    test('Frequency 1972.5 MHz b2 Additional', () => {
      const uarfcn = frequencyToUarfcnFdd(1972.5, 2)
      expect(uarfcn).toBe(612)
    })
    test('Frequency 1892.5 MHz b2 Additional', () => {
      const uarfcn = frequencyToUarfcnFdd(1892.5, 2)
      expect(uarfcn).toBe(212)
    })
    test('Frequency 928 Mhz b8 downlink General', () => {
      const uarfcn = frequencyToUarfcnFdd(928, 8)
      expect(uarfcn).toBe(2940)
    })
    test('Frequency 883 Mhz b8 uplink General', () => {
      const uarfcn = frequencyToUarfcnFdd(883, 8)
      expect(uarfcn).toBe(2715)
    })
  })
})

describe('frequencyToUarfcnTdd()', () => {
  describe('frequencyToUarfcnTdd(2572.5)', () => {
    test('Frequency 2572.5 MHz Additional', () => {
      const uarfcn = frequencyToUarfcnTdd(2572.5)
      expect(uarfcn).toBe(2112)
    })
    test('Frequency 2010 MHz', () => {
      const uarfcn = frequencyToUarfcnTdd(2010)
      expect(uarfcn).toBe(10050)
    })
  })
})
