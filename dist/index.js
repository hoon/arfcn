// src/NrArfcnBands.ts
var NrArfcnBands = {
  table_release_3gpp: 18,
  table_ts: "TS 38.104 V18.8.0",
  table_date: "2024-12",
  table_names: [
    "Table 5.4.2.3-1: Applicable NR-ARFCN per operating band in FR1",
    "Table 5.4.2.3-2: Applicable NR-ARFCN per operating band in FR2",
    "Table 5.4.2.3-3: Applicable NR-ARFCN for operation in band n263",
    "Table 5.4.2.3-4: Applicable NR-ARFCN per operating band for enhanced channel raster"
  ],
  rows: [
    {
      band: 1,
      d_freq_raster_khz: 100,
      n_ul_lo: 384e3,
      n_ul_hi: 396e3,
      n_ul_step: 20,
      n_dl_lo: 422e3,
      n_dl_hi: 434e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 2,
      d_freq_raster_khz: 100,
      n_ul_lo: 37e4,
      n_ul_hi: 382e3,
      n_ul_step: 20,
      n_dl_lo: 386e3,
      n_dl_hi: 398e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 3,
      d_freq_raster_khz: 100,
      n_ul_lo: 342e3,
      n_ul_hi: 357e3,
      n_ul_step: 20,
      n_dl_lo: 361e3,
      n_dl_hi: 376e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 5,
      d_freq_raster_khz: 100,
      n_ul_lo: 164800,
      n_ul_hi: 169800,
      n_ul_step: 20,
      n_dl_lo: 173800,
      n_dl_hi: 178800,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 7,
      d_freq_raster_khz: 100,
      n_ul_lo: 5e5,
      n_ul_hi: 514e3,
      n_ul_step: 20,
      n_dl_lo: 524e3,
      n_dl_hi: 538e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 8,
      d_freq_raster_khz: 100,
      n_ul_lo: 176e3,
      n_ul_hi: 183e3,
      n_ul_step: 20,
      n_dl_lo: 185e3,
      n_dl_hi: 192e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 12,
      d_freq_raster_khz: 100,
      n_ul_lo: 139800,
      n_ul_hi: 143200,
      n_ul_step: 20,
      n_dl_lo: 145800,
      n_dl_hi: 149200,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 13,
      d_freq_raster_khz: 100,
      n_ul_lo: 155400,
      n_ul_hi: 157400,
      n_ul_step: 20,
      n_dl_lo: 149200,
      n_dl_hi: 151200,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 14,
      d_freq_raster_khz: 100,
      n_ul_lo: 157600,
      n_ul_hi: 159600,
      n_ul_step: 20,
      n_dl_lo: 151600,
      n_dl_hi: 153600,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 18,
      d_freq_raster_khz: 100,
      n_ul_lo: 163e3,
      n_ul_hi: 166e3,
      n_ul_step: 20,
      n_dl_lo: 172e3,
      n_dl_hi: 175e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 20,
      d_freq_raster_khz: 100,
      n_ul_lo: 166400,
      n_ul_hi: 172400,
      n_ul_step: 20,
      n_dl_lo: 158200,
      n_dl_hi: 164200,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 25,
      d_freq_raster_khz: 100,
      n_ul_lo: 37e4,
      n_ul_hi: 383e3,
      n_ul_step: 20,
      n_dl_lo: 386e3,
      n_dl_hi: 399e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 24,
      d_freq_raster_khz: 100,
      n_ul_lo: 325300,
      n_ul_hi: 332100,
      n_ul_step: 20,
      n_dl_lo: 305e3,
      n_dl_hi: 311800,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 26,
      d_freq_raster_khz: 100,
      n_ul_lo: 162800,
      n_ul_hi: 169800,
      n_ul_step: 20,
      n_dl_lo: 171800,
      n_dl_hi: 178800,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 28,
      d_freq_raster_khz: 100,
      n_ul_lo: 140600,
      n_ul_hi: 149600,
      n_ul_step: 20,
      n_dl_lo: 151600,
      n_dl_hi: 160600,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 28,
      d_freq_raster_khz: null,
      n_ul_lo: 1446084,
      n_ul_hi: 1446084,
      n_ul_step: null,
      n_dl_lo: 1556084,
      n_dl_hi: 1556084,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 29,
      d_freq_raster_khz: 100,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: 143400,
      n_dl_hi: 145600,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 30,
      d_freq_raster_khz: 100,
      n_ul_lo: 461e3,
      n_ul_hi: 463e3,
      n_ul_step: 20,
      n_dl_lo: 47e4,
      n_dl_hi: 472e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 31,
      d_freq_raster_khz: 100,
      n_ul_lo: 90500,
      n_ul_hi: 91500,
      n_ul_step: 20,
      n_dl_lo: 92500,
      n_dl_hi: 93500,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 34,
      d_freq_raster_khz: 100,
      n_ul_lo: 402e3,
      n_ul_hi: 405e3,
      n_ul_step: 20,
      n_dl_lo: 402e3,
      n_dl_hi: 405e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 38,
      d_freq_raster_khz: 100,
      n_ul_lo: 514e3,
      n_ul_hi: 524e3,
      n_ul_step: 20,
      n_dl_lo: 514e3,
      n_dl_hi: 524e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 39,
      d_freq_raster_khz: 100,
      n_ul_lo: 376e3,
      n_ul_hi: 384e3,
      n_ul_step: 20,
      n_dl_lo: 376e3,
      n_dl_hi: 384e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 40,
      d_freq_raster_khz: 100,
      n_ul_lo: 46e4,
      n_ul_hi: 48e4,
      n_ul_step: 20,
      n_dl_lo: 46e4,
      n_dl_hi: 48e4,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 41,
      d_freq_raster_khz: 15,
      n_ul_lo: 499200,
      n_ul_hi: 537999,
      n_ul_step: 3,
      n_dl_lo: 499200,
      n_dl_hi: 537999,
      n_dl_step: 3,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 41,
      d_freq_raster_khz: 30,
      n_ul_lo: 499200,
      n_ul_hi: 537996,
      n_ul_step: 6,
      n_dl_lo: 499200,
      n_dl_hi: 537996,
      n_dl_step: 6,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 46,
      d_freq_raster_khz: 15,
      n_ul_lo: 743334,
      n_ul_hi: 795e3,
      n_ul_step: 1,
      n_dl_lo: 743334,
      n_dl_hi: 795e3,
      n_dl_step: 1,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 48,
      d_freq_raster_khz: 15,
      n_ul_lo: 636667,
      n_ul_hi: 646666,
      n_ul_step: 1,
      n_dl_lo: 636667,
      n_dl_hi: 646666,
      n_dl_step: 1,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 48,
      d_freq_raster_khz: 30,
      n_ul_lo: 636668,
      n_ul_hi: 646666,
      n_ul_step: 2,
      n_dl_lo: 636668,
      n_dl_hi: 646666,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 50,
      d_freq_raster_khz: 100,
      n_ul_lo: 286400,
      n_ul_hi: 303400,
      n_ul_step: 20,
      n_dl_lo: 286400,
      n_dl_hi: 303400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 51,
      d_freq_raster_khz: 100,
      n_ul_lo: 285400,
      n_ul_hi: 286400,
      n_ul_step: 20,
      n_dl_lo: 285400,
      n_dl_hi: 286400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 53,
      d_freq_raster_khz: 100,
      n_ul_lo: 496700,
      n_ul_hi: 499e3,
      n_ul_step: 20,
      n_dl_lo: 496700,
      n_dl_hi: 499e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 54,
      d_freq_raster_khz: 100,
      n_ul_lo: 334e3,
      n_ul_hi: 335e3,
      n_ul_step: 20,
      n_dl_lo: 334e3,
      n_dl_hi: 335e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 65,
      d_freq_raster_khz: 100,
      n_ul_lo: 384e3,
      n_ul_hi: 402e3,
      n_ul_step: 20,
      n_dl_lo: 422e3,
      n_dl_hi: 44e4,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 66,
      d_freq_raster_khz: 100,
      n_ul_lo: 342e3,
      n_ul_hi: 356e3,
      n_ul_step: 20,
      n_dl_lo: 422e3,
      n_dl_hi: 44e4,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 67,
      d_freq_raster_khz: 100,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: 147600,
      n_dl_hi: 151600,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 70,
      d_freq_raster_khz: 100,
      n_ul_lo: 339e3,
      n_ul_hi: 342e3,
      n_ul_step: 20,
      n_dl_lo: 399e3,
      n_dl_hi: 404e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 71,
      d_freq_raster_khz: 100,
      n_ul_lo: 132600,
      n_ul_hi: 139600,
      n_ul_step: 20,
      n_dl_lo: 123400,
      n_dl_hi: 130400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 72,
      d_freq_raster_khz: 100,
      n_ul_lo: 90200,
      n_ul_hi: 91200,
      n_ul_step: 20,
      n_dl_lo: 92200,
      n_dl_hi: 93200,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 74,
      d_freq_raster_khz: 100,
      n_ul_lo: 285400,
      n_ul_hi: 294e3,
      n_ul_step: 20,
      n_dl_lo: 295e3,
      n_dl_hi: 303600,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 75,
      d_freq_raster_khz: 100,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: 286400,
      n_dl_hi: 303400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 76,
      d_freq_raster_khz: 100,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: 285400,
      n_dl_hi: 286400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 77,
      d_freq_raster_khz: 15,
      n_ul_lo: 62e4,
      n_ul_hi: 68e4,
      n_ul_step: 1,
      n_dl_lo: 62e4,
      n_dl_hi: 68e4,
      n_dl_step: 1,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 77,
      d_freq_raster_khz: 30,
      n_ul_lo: 62e4,
      n_ul_hi: 68e4,
      n_ul_step: 2,
      n_dl_lo: 62e4,
      n_dl_hi: 68e4,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 78,
      d_freq_raster_khz: 15,
      n_ul_lo: 62e4,
      n_ul_hi: 653333,
      n_ul_step: 1,
      n_dl_lo: 62e4,
      n_dl_hi: 653333,
      n_dl_step: 1,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 78,
      d_freq_raster_khz: 30,
      n_ul_lo: 62e4,
      n_ul_hi: 653332,
      n_ul_step: 2,
      n_dl_lo: 62e4,
      n_dl_hi: 653332,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 79,
      d_freq_raster_khz: 15,
      n_ul_lo: 693334,
      n_ul_hi: 733333,
      n_ul_step: 1,
      n_dl_lo: 693334,
      n_dl_hi: 733333,
      n_dl_step: 1,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 79,
      d_freq_raster_khz: 30,
      n_ul_lo: 693334,
      n_ul_hi: 733332,
      n_ul_step: 2,
      n_dl_lo: 693334,
      n_dl_hi: 733332,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 80,
      d_freq_raster_khz: 100,
      n_ul_lo: 342e3,
      n_ul_hi: 357e3,
      n_ul_step: 20,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 81,
      d_freq_raster_khz: 100,
      n_ul_lo: 176e3,
      n_ul_hi: 183e3,
      n_ul_step: 20,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 82,
      d_freq_raster_khz: 100,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 83,
      d_freq_raster_khz: 100,
      n_ul_lo: 140600,
      n_ul_hi: 149600,
      n_ul_step: 20,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 84,
      d_freq_raster_khz: 100,
      n_ul_lo: 384e3,
      n_ul_hi: 396e3,
      n_ul_step: 20,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 85,
      d_freq_raster_khz: 100,
      n_ul_lo: 139600,
      n_ul_hi: 143200,
      n_ul_step: 20,
      n_dl_lo: 145600,
      n_dl_hi: 149200,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 86,
      d_freq_raster_khz: 100,
      n_ul_lo: 342e3,
      n_ul_hi: 356e3,
      n_ul_step: 20,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 89,
      d_freq_raster_khz: 100,
      n_ul_lo: 164800,
      n_ul_hi: 169800,
      n_ul_step: 20,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 89,
      d_freq_raster_khz: 15,
      n_ul_lo: 499200,
      n_ul_hi: 537999,
      n_ul_step: 3,
      n_dl_lo: 499200,
      n_dl_hi: 537999,
      n_dl_step: 3,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 90,
      d_freq_raster_khz: 30,
      n_ul_lo: 499200,
      n_ul_hi: 537996,
      n_ul_step: 6,
      n_dl_lo: 499200,
      n_dl_hi: 537996,
      n_dl_step: 6,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 90,
      d_freq_raster_khz: 100,
      n_ul_lo: 499200,
      n_ul_hi: 538e3,
      n_ul_step: 20,
      n_dl_lo: 499200,
      n_dl_hi: 538e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 91,
      d_freq_raster_khz: 100,
      n_ul_lo: 166400,
      n_ul_hi: 172400,
      n_ul_step: 20,
      n_dl_lo: 285400,
      n_dl_hi: 286400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 92,
      d_freq_raster_khz: 100,
      n_ul_lo: 166400,
      n_ul_hi: 172400,
      n_ul_step: 20,
      n_dl_lo: 286400,
      n_dl_hi: 303400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 93,
      d_freq_raster_khz: 100,
      n_ul_lo: 176e3,
      n_ul_hi: 183e3,
      n_ul_step: 20,
      n_dl_lo: 285400,
      n_dl_hi: 286400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 94,
      d_freq_raster_khz: 100,
      n_ul_lo: 176e3,
      n_ul_hi: 183e3,
      n_ul_step: 20,
      n_dl_lo: 286400,
      n_dl_hi: 303400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 95,
      d_freq_raster_khz: 100,
      n_ul_lo: 402e3,
      n_ul_hi: 405e3,
      n_ul_step: 20,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 96,
      d_freq_raster_khz: 15,
      n_ul_lo: 795e3,
      n_ul_hi: 875e3,
      n_ul_step: 1,
      n_dl_lo: 795e3,
      n_dl_hi: 875e3,
      n_dl_step: 1,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 97,
      d_freq_raster_khz: 100,
      n_ul_lo: 46e4,
      n_ul_hi: 48e4,
      n_ul_step: 20,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 98,
      d_freq_raster_khz: 100,
      n_ul_lo: 376e3,
      n_ul_hi: 384e3,
      n_ul_step: 20,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 99,
      d_freq_raster_khz: 100,
      n_ul_lo: 325300,
      n_ul_hi: 332100,
      n_ul_step: 20,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 100,
      d_freq_raster_khz: 100,
      n_ul_lo: 174880,
      n_ul_hi: 176e3,
      n_ul_step: 20,
      n_dl_lo: 183880,
      n_dl_hi: 185e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 101,
      d_freq_raster_khz: 100,
      n_ul_lo: 38e4,
      n_ul_hi: 382e3,
      n_ul_step: 20,
      n_dl_lo: 38e4,
      n_dl_hi: 382e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 102,
      d_freq_raster_khz: 15,
      n_ul_lo: 796334,
      n_ul_hi: 828333,
      n_ul_step: 1,
      n_dl_lo: 796334,
      n_dl_hi: 828333,
      n_dl_step: 1,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 104,
      d_freq_raster_khz: 15,
      n_ul_lo: 828334,
      n_ul_hi: 875e3,
      n_ul_step: 1,
      n_dl_lo: 828334,
      n_dl_hi: 875e3,
      n_dl_step: 1,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 104,
      d_freq_raster_khz: 30,
      n_ul_lo: 828334,
      n_ul_hi: 875e3,
      n_ul_step: 2,
      n_dl_lo: 828334,
      n_dl_hi: 875e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 105,
      d_freq_raster_khz: 100,
      n_ul_lo: 132600,
      n_ul_hi: 140600,
      n_ul_step: 20,
      n_dl_lo: 122400,
      n_dl_hi: 130400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 106,
      d_freq_raster_khz: 100,
      n_ul_lo: 179200,
      n_ul_hi: 180200,
      n_ul_step: 20,
      n_dl_lo: 187e3,
      n_dl_hi: 188e3,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 109,
      d_freq_raster_khz: 100,
      n_ul_lo: 140600,
      n_ul_hi: 146600,
      n_ul_step: 20,
      n_dl_lo: 286400,
      n_dl_hi: 303400,
      n_dl_step: 20,
      fr: 1,
      duplex_mode: "FDD",
      ecr: false
    },
    {
      band: 257,
      d_freq_raster_khz: 60,
      n_ul_lo: 2054166,
      n_ul_hi: 2104165,
      n_ul_step: 1,
      n_dl_lo: 2054166,
      n_dl_hi: 2104165,
      n_dl_step: 1,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 257,
      d_freq_raster_khz: 120,
      n_ul_lo: 2054167,
      n_ul_hi: 2104165,
      n_ul_step: 2,
      n_dl_lo: 2054167,
      n_dl_hi: 2104165,
      n_dl_step: 2,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 258,
      d_freq_raster_khz: 60,
      n_ul_lo: 2016667,
      n_ul_hi: 2070832,
      n_ul_step: 1,
      n_dl_lo: 2016667,
      n_dl_hi: 2070832,
      n_dl_step: 1,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 258,
      d_freq_raster_khz: 120,
      n_ul_lo: 2016667,
      n_ul_hi: 2070831,
      n_ul_step: 2,
      n_dl_lo: 2016667,
      n_dl_hi: 2070831,
      n_dl_step: 2,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 259,
      d_freq_raster_khz: 60,
      n_ul_lo: 2270833,
      n_ul_hi: 2337499,
      n_ul_step: 1,
      n_dl_lo: 2270833,
      n_dl_hi: 2337499,
      n_dl_step: 1,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 259,
      d_freq_raster_khz: 120,
      n_ul_lo: 2270833,
      n_ul_hi: 2337499,
      n_ul_step: 2,
      n_dl_lo: 2270833,
      n_dl_hi: 2337499,
      n_dl_step: 2,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 260,
      d_freq_raster_khz: 60,
      n_ul_lo: 2229166,
      n_ul_hi: 2279165,
      n_ul_step: 1,
      n_dl_lo: 2229166,
      n_dl_hi: 2279165,
      n_dl_step: 1,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 260,
      d_freq_raster_khz: 120,
      n_ul_lo: 2229167,
      n_ul_hi: 2279165,
      n_ul_step: 2,
      n_dl_lo: 2229167,
      n_dl_hi: 2279165,
      n_dl_step: 2,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 261,
      d_freq_raster_khz: 60,
      n_ul_lo: 2070833,
      n_ul_hi: 2084999,
      n_ul_step: 1,
      n_dl_lo: 2070833,
      n_dl_hi: 2084999,
      n_dl_step: 1,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 261,
      d_freq_raster_khz: 120,
      n_ul_lo: 2070833,
      n_ul_hi: 2084999,
      n_ul_step: 2,
      n_dl_lo: 2070833,
      n_dl_hi: 2084999,
      n_dl_step: 2,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 262,
      d_freq_raster_khz: 60,
      n_ul_lo: 2399166,
      n_ul_hi: 2415832,
      n_ul_step: 1,
      n_dl_lo: 2399166,
      n_dl_hi: 2415832,
      n_dl_step: 1,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 262,
      d_freq_raster_khz: 120,
      n_ul_lo: 2399167,
      n_ul_hi: 2415831,
      n_ul_step: 2,
      n_dl_lo: 2399167,
      n_dl_hi: 2415831,
      n_dl_step: 2,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 262,
      d_freq_raster_khz: 480,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 262,
      d_freq_raster_khz: 960,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 263,
      d_freq_raster_khz: 120,
      n_ul_lo: 2564083,
      n_ul_hi: 2794243,
      n_ul_step: 137,
      n_dl_lo: 2564083,
      n_dl_hi: 2794243,
      n_dl_step: 137,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 263,
      d_freq_raster_khz: 120,
      n_ul_lo: 2566603,
      n_ul_hi: 2788363,
      n_ul_step: 33,
      n_dl_lo: 2566603,
      n_dl_hi: 2788363,
      n_dl_step: 33,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 263,
      d_freq_raster_khz: 120,
      n_ul_lo: 2569963,
      n_ul_hi: 2785003,
      n_ul_step: 32,
      n_dl_lo: 2569963,
      n_dl_hi: 2785003,
      n_dl_step: 32,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 263,
      d_freq_raster_khz: 120,
      n_ul_lo: 2576683,
      n_ul_hi: 2778283,
      n_ul_step: 30,
      n_dl_lo: 2576683,
      n_dl_hi: 2778283,
      n_dl_step: 30,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 263,
      d_freq_raster_khz: 120,
      n_ul_lo: 2580043,
      n_ul_hi: 2774923,
      n_ul_step: 29,
      n_dl_lo: 2580043,
      n_dl_hi: 2774923,
      n_dl_step: 29,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 263,
      d_freq_raster_khz: 120,
      n_ul_lo: 2585083,
      n_ul_hi: 2585083,
      n_ul_step: 0,
      n_dl_lo: 2585083,
      n_dl_hi: 2585083,
      n_dl_step: 0,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 263,
      d_freq_raster_khz: 120,
      n_ul_lo: 2655643,
      n_ul_hi: 2655643,
      n_ul_step: 0,
      n_dl_lo: 2655643,
      n_dl_hi: 2655643,
      n_dl_step: 0,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 263,
      d_freq_raster_khz: 120,
      n_ul_lo: 2692603,
      n_ul_hi: 2692603,
      n_ul_step: 0,
      n_dl_lo: 2692603,
      n_dl_hi: 2692603,
      n_dl_step: 0,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 263,
      d_freq_raster_khz: 120,
      n_ul_lo: 2764843,
      n_ul_hi: 2764843,
      n_ul_step: 0,
      n_dl_lo: 2764843,
      n_dl_hi: 2764843,
      n_dl_step: 0,
      fr: 2,
      duplex_mode: "TDD",
      ecr: false
    },
    {
      band: 1,
      d_freq_raster_khz: 10,
      n_ul_lo: 384e3,
      n_ul_hi: 396e3,
      n_ul_step: 2,
      n_dl_lo: 422e3,
      n_dl_hi: 434e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 2,
      d_freq_raster_khz: 10,
      n_ul_lo: 37e4,
      n_ul_hi: 382e3,
      n_ul_step: 2,
      n_dl_lo: 386e3,
      n_dl_hi: 398e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 3,
      d_freq_raster_khz: 10,
      n_ul_lo: 342e3,
      n_ul_hi: 357e3,
      n_ul_step: 2,
      n_dl_lo: 361e3,
      n_dl_hi: 376e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 5,
      d_freq_raster_khz: 10,
      n_ul_lo: 164800,
      n_ul_hi: 169800,
      n_ul_step: 2,
      n_dl_lo: 173800,
      n_dl_hi: 178800,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 7,
      d_freq_raster_khz: 10,
      n_ul_lo: 5e5,
      n_ul_hi: 514e3,
      n_ul_step: 2,
      n_dl_lo: 524e3,
      n_dl_hi: 538e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 8,
      d_freq_raster_khz: 10,
      n_ul_lo: 176e3,
      n_ul_hi: 183e3,
      n_ul_step: 2,
      n_dl_lo: 185e3,
      n_dl_hi: 192e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 12,
      d_freq_raster_khz: 10,
      n_ul_lo: 139800,
      n_ul_hi: 143200,
      n_ul_step: 2,
      n_dl_lo: 145800,
      n_dl_hi: 149200,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 13,
      d_freq_raster_khz: 10,
      n_ul_lo: 155400,
      n_ul_hi: 157400,
      n_ul_step: 2,
      n_dl_lo: 149200,
      n_dl_hi: 151200,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 14,
      d_freq_raster_khz: 10,
      n_ul_lo: 157600,
      n_ul_hi: 159600,
      n_ul_step: 2,
      n_dl_lo: 151600,
      n_dl_hi: 153600,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 18,
      d_freq_raster_khz: 10,
      n_ul_lo: 163e3,
      n_ul_hi: 166e3,
      n_ul_step: 2,
      n_dl_lo: 172e3,
      n_dl_hi: 175e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 20,
      d_freq_raster_khz: 10,
      n_ul_lo: 166400,
      n_ul_hi: 172400,
      n_ul_step: 2,
      n_dl_lo: 158200,
      n_dl_hi: 164200,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 24,
      d_freq_raster_khz: 10,
      n_ul_lo: 325300,
      n_ul_hi: 332100,
      n_ul_step: 2,
      n_dl_lo: 305e3,
      n_dl_hi: 311800,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 25,
      d_freq_raster_khz: 10,
      n_ul_lo: 37e4,
      n_ul_hi: 383e3,
      n_ul_step: 2,
      n_dl_lo: 386e3,
      n_dl_hi: 399e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 26,
      d_freq_raster_khz: 10,
      n_ul_lo: 162800,
      n_ul_hi: 169800,
      n_ul_step: 2,
      n_dl_lo: 171800,
      n_dl_hi: 178800,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 28,
      d_freq_raster_khz: 10,
      n_ul_lo: 140600,
      n_ul_hi: 149600,
      n_ul_step: 2,
      n_dl_lo: 151600,
      n_dl_hi: 160600,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 29,
      d_freq_raster_khz: 10,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: 143400,
      n_dl_hi: 145600,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 30,
      d_freq_raster_khz: 10,
      n_ul_lo: 461e3,
      n_ul_hi: 463e3,
      n_ul_step: 2,
      n_dl_lo: 47e4,
      n_dl_hi: 472e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 34,
      d_freq_raster_khz: 10,
      n_ul_lo: 402e3,
      n_ul_hi: 405e3,
      n_ul_step: 2,
      n_dl_lo: 402e3,
      n_dl_hi: 405e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: true
    },
    {
      band: 38,
      d_freq_raster_khz: 10,
      n_ul_lo: 514e3,
      n_ul_hi: 524e3,
      n_ul_step: 2,
      n_dl_lo: 514e3,
      n_dl_hi: 524e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: true
    },
    {
      band: 39,
      d_freq_raster_khz: 10,
      n_ul_lo: 376e3,
      n_ul_hi: 384e3,
      n_ul_step: 2,
      n_dl_lo: 376e3,
      n_dl_hi: 384e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: true
    },
    {
      band: 40,
      d_freq_raster_khz: 10,
      n_ul_lo: 46e4,
      n_ul_hi: 48e4,
      n_ul_step: 2,
      n_dl_lo: 46e4,
      n_dl_hi: 48e4,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: true
    },
    {
      band: 50,
      d_freq_raster_khz: 10,
      n_ul_lo: 286400,
      n_ul_hi: 303400,
      n_ul_step: 2,
      n_dl_lo: 286400,
      n_dl_hi: 303400,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: true
    },
    {
      band: 53,
      d_freq_raster_khz: 10,
      n_ul_lo: 496700,
      n_ul_hi: 499e3,
      n_ul_step: 2,
      n_dl_lo: 496700,
      n_dl_hi: 499e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: true
    },
    {
      band: 65,
      d_freq_raster_khz: 10,
      n_ul_lo: 384e3,
      n_ul_hi: 402e3,
      n_ul_step: 2,
      n_dl_lo: 422e3,
      n_dl_hi: 44e4,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 66,
      d_freq_raster_khz: 10,
      n_ul_lo: 342e3,
      n_ul_hi: 356e3,
      n_ul_step: 2,
      n_dl_lo: 422e3,
      n_dl_hi: 44e4,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 67,
      d_freq_raster_khz: 10,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: 147600,
      n_dl_hi: 151600,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 70,
      d_freq_raster_khz: 10,
      n_ul_lo: 339e3,
      n_ul_hi: 342e3,
      n_ul_step: 2,
      n_dl_lo: 399e3,
      n_dl_hi: 404e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 71,
      d_freq_raster_khz: 10,
      n_ul_lo: 132600,
      n_ul_hi: 139600,
      n_ul_step: 2,
      n_dl_lo: 123400,
      n_dl_hi: 130400,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 74,
      d_freq_raster_khz: 10,
      n_ul_lo: 285400,
      n_ul_hi: 294e3,
      n_ul_step: 2,
      n_dl_lo: 295e3,
      n_dl_hi: 303600,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 75,
      d_freq_raster_khz: 10,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: 286400,
      n_dl_hi: 303400,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 80,
      d_freq_raster_khz: 10,
      n_ul_lo: 342e3,
      n_ul_hi: 357e3,
      n_ul_step: 2,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 81,
      d_freq_raster_khz: 10,
      n_ul_lo: 176e3,
      n_ul_hi: 183e3,
      n_ul_step: 2,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 82,
      d_freq_raster_khz: 10,
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_step: null,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "TDD",
      ecr: true
    },
    {
      band: 83,
      d_freq_raster_khz: 10,
      n_ul_lo: 140600,
      n_ul_hi: 149600,
      n_ul_step: 2,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 84,
      d_freq_raster_khz: 10,
      n_ul_lo: 384e3,
      n_ul_hi: 396e3,
      n_ul_step: 2,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 85,
      d_freq_raster_khz: 10,
      n_ul_lo: 139600,
      n_ul_hi: 143200,
      n_ul_step: 2,
      n_dl_lo: 145600,
      n_dl_hi: 149200,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 86,
      d_freq_raster_khz: 10,
      n_ul_lo: 342e3,
      n_ul_hi: 356e3,
      n_ul_step: 2,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 89,
      d_freq_raster_khz: 10,
      n_ul_lo: 164800,
      n_ul_hi: 169800,
      n_ul_step: 2,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 90,
      d_freq_raster_khz: 10,
      n_ul_lo: 499200,
      n_ul_hi: 538e3,
      n_ul_step: 2,
      n_dl_lo: 499200,
      n_dl_hi: 538e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: true
    },
    {
      band: 91,
      d_freq_raster_khz: 10,
      n_ul_lo: 166400,
      n_ul_hi: 172400,
      n_ul_step: 2,
      n_dl_lo: 285400,
      n_dl_hi: 286400,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 92,
      d_freq_raster_khz: 10,
      n_ul_lo: 166400,
      n_ul_hi: 172400,
      n_ul_step: 2,
      n_dl_lo: 286400,
      n_dl_hi: 303400,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 93,
      d_freq_raster_khz: 10,
      n_ul_lo: 176e3,
      n_ul_hi: 183e3,
      n_ul_step: 2,
      n_dl_lo: 285400,
      n_dl_hi: 286400,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 94,
      d_freq_raster_khz: 10,
      n_ul_lo: 176e3,
      n_ul_hi: 183e3,
      n_ul_step: 2,
      n_dl_lo: 286400,
      n_dl_hi: 303400,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 95,
      d_freq_raster_khz: 10,
      n_ul_lo: 402e3,
      n_ul_hi: 405e3,
      n_ul_step: 2,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 97,
      d_freq_raster_khz: 10,
      n_ul_lo: 46e4,
      n_ul_hi: 48e4,
      n_ul_step: 2,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 98,
      d_freq_raster_khz: 10,
      n_ul_lo: 376e3,
      n_ul_hi: 384e3,
      n_ul_step: 2,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 99,
      d_freq_raster_khz: 10,
      n_ul_lo: 325300,
      n_ul_hi: 332100,
      n_ul_step: 2,
      n_dl_lo: null,
      n_dl_hi: null,
      n_dl_step: null,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 100,
      d_freq_raster_khz: 10,
      n_ul_lo: 174880,
      n_ul_hi: 176e3,
      n_ul_step: 2,
      n_dl_lo: 183880,
      n_dl_hi: 185e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 101,
      d_freq_raster_khz: 10,
      n_ul_lo: 38e4,
      n_ul_hi: 382e3,
      n_ul_step: 2,
      n_dl_lo: 38e4,
      n_dl_hi: 382e3,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "TDD",
      ecr: true
    },
    {
      band: 105,
      d_freq_raster_khz: 10,
      n_ul_lo: 132600,
      n_ul_hi: 140600,
      n_ul_step: 2,
      n_dl_lo: 122400,
      n_dl_hi: 130400,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    },
    {
      band: 109,
      d_freq_raster_khz: 10,
      n_ul_lo: 140600,
      n_ul_hi: 146600,
      n_ul_step: 2,
      n_dl_lo: 286400,
      n_dl_hi: 303400,
      n_dl_step: 2,
      fr: 1,
      duplex_mode: "FDD",
      ecr: true
    }
  ]
};

// src/NrArfcnParameters.ts
var NrArfcnParameters = {
  table_release_3gpp: 18,
  table_ts: "3GPP TS 38.104 V18.8.0",
  table_date: "2024-12",
  table_names: [
    "Table 5.4.2.1-1: NR-ARFCN parameters for the global frequency raster"
  ],
  rows: [
    {
      f_min: 0,
      f_max: 3e3,
      df_global_khz: 5,
      f_ref_offs: 0,
      n_ref_offs: 0,
      n_ref_min: 0,
      n_ref_max: 599999
    },
    {
      f_min: 3e3,
      f_max: 24250,
      df_global_khz: 15,
      f_ref_offs: 3e3,
      n_ref_offs: 6e5,
      n_ref_min: 6e5,
      n_ref_max: 2016666
    },
    {
      f_min: 24250,
      f_max: 1e5,
      df_global_khz: 60,
      f_ref_offs: 24250.08,
      n_ref_offs: 2016667,
      n_ref_min: 2016667,
      n_ref_max: 3279165
    }
  ]
};

// src/NrBands.ts
var NrBands = {
  table_release_3gpp: 18,
  table_ts: "3GPP TS 38.104 V18.8.0",
  table_date: "2024-12",
  table_names: [
    "Table 5.2-1: NR operating bands in FR1",
    "Table 5.2-2: NR operating bands in FR2"
  ],
  rows: [
    {
      band: 1,
      fr: 1,
      f_ul_lo: 1920,
      f_ul_hi: 1980,
      f_dl_lo: 2110,
      f_dl_hi: 2170,
      duplex_mode: "FDD"
    },
    {
      band: 2,
      fr: 1,
      f_ul_lo: 1850,
      f_ul_hi: 1910,
      f_dl_lo: 1930,
      f_dl_hi: 1990,
      duplex_mode: "FDD"
    },
    {
      band: 3,
      fr: 1,
      f_ul_lo: 1710,
      f_ul_hi: 1785,
      f_dl_lo: 1805,
      f_dl_hi: 1880,
      duplex_mode: "FDD"
    },
    {
      band: 5,
      fr: 1,
      f_ul_lo: 824,
      f_ul_hi: 849,
      f_dl_lo: 869,
      f_dl_hi: 894,
      duplex_mode: "FDD"
    },
    {
      band: 7,
      fr: 1,
      f_ul_lo: 2500,
      f_ul_hi: 2570,
      f_dl_lo: 2620,
      f_dl_hi: 2690,
      duplex_mode: "FDD"
    },
    {
      band: 8,
      fr: 1,
      f_ul_lo: 880,
      f_ul_hi: 915,
      f_dl_lo: 925,
      f_dl_hi: 960,
      duplex_mode: "FDD"
    },
    {
      band: 12,
      fr: 1,
      f_ul_lo: 699,
      f_ul_hi: 716,
      f_dl_lo: 729,
      f_dl_hi: 746,
      duplex_mode: "FDD"
    },
    {
      band: 13,
      fr: 1,
      f_ul_lo: 777,
      f_ul_hi: 787,
      f_dl_lo: 746,
      f_dl_hi: 756,
      duplex_mode: "FDD"
    },
    {
      band: 14,
      fr: 1,
      f_ul_lo: 788,
      f_ul_hi: 798,
      f_dl_lo: 758,
      f_dl_hi: 768,
      duplex_mode: "FDD"
    },
    {
      band: 18,
      fr: 1,
      f_ul_lo: 815,
      f_ul_hi: 830,
      f_dl_lo: 860,
      f_dl_hi: 875,
      duplex_mode: "FDD"
    },
    {
      band: 20,
      fr: 1,
      f_ul_lo: 832,
      f_ul_hi: 862,
      f_dl_lo: 791,
      f_dl_hi: 821,
      duplex_mode: "FDD"
    },
    {
      band: 24,
      fr: 1,
      f_ul_lo: null,
      f_ul_hi: null,
      f_dl_lo: 1525,
      f_dl_hi: 1559,
      duplex_mode: "FDD"
    },
    {
      band: 25,
      fr: 1,
      f_ul_lo: 1850,
      f_ul_hi: 1915,
      f_dl_lo: 1930,
      f_dl_hi: 1995,
      duplex_mode: "FDD"
    },
    {
      band: 26,
      fr: 1,
      f_ul_lo: 814,
      f_ul_hi: 849,
      f_dl_lo: 859,
      f_dl_hi: 894,
      duplex_mode: "FDD"
    },
    {
      band: 28,
      fr: 1,
      f_ul_lo: 703,
      f_ul_hi: 748,
      f_dl_lo: 758,
      f_dl_hi: 803,
      duplex_mode: "FDD"
    },
    {
      band: 29,
      fr: 1,
      f_ul_lo: null,
      f_ul_hi: null,
      f_dl_lo: 717,
      f_dl_hi: 728,
      duplex_mode: "SDL"
    },
    {
      band: 30,
      fr: 1,
      f_ul_lo: 2305,
      f_ul_hi: 2315,
      f_dl_lo: 2350,
      f_dl_hi: 2360,
      duplex_mode: "FDD"
    },
    {
      band: 31,
      fr: 1,
      f_ul_lo: null,
      f_ul_hi: null,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "FDD"
    },
    {
      band: 34,
      fr: 1,
      f_ul_lo: 2010,
      f_ul_hi: 2025,
      f_dl_lo: 2010,
      f_dl_hi: 2025,
      duplex_mode: "TDD"
    },
    {
      band: 38,
      fr: 1,
      f_ul_lo: 2570,
      f_ul_hi: 2620,
      f_dl_lo: 2570,
      f_dl_hi: 2620,
      duplex_mode: "TDD"
    },
    {
      band: 39,
      fr: 1,
      f_ul_lo: 1880,
      f_ul_hi: 1920,
      f_dl_lo: 1880,
      f_dl_hi: 1920,
      duplex_mode: "TDD"
    },
    {
      band: 40,
      fr: 1,
      f_ul_lo: 2300,
      f_ul_hi: 2400,
      f_dl_lo: 2300,
      f_dl_hi: 2400,
      duplex_mode: "TDD"
    },
    {
      band: 41,
      fr: 1,
      f_ul_lo: 2496,
      f_ul_hi: 2690,
      f_dl_lo: 2496,
      f_dl_hi: 2690,
      duplex_mode: "TDD"
    },
    {
      band: 46,
      fr: 1,
      f_ul_lo: 5150,
      f_ul_hi: 5925,
      f_dl_lo: 5150,
      f_dl_hi: 5925,
      duplex_mode: "TDD"
    },
    {
      band: 48,
      fr: 1,
      f_ul_lo: 3550,
      f_ul_hi: 3700,
      f_dl_lo: 3550,
      f_dl_hi: 3700,
      duplex_mode: "TDD"
    },
    {
      band: 50,
      fr: 1,
      f_ul_lo: 1432,
      f_ul_hi: 1517,
      f_dl_lo: 1432,
      f_dl_hi: 1517,
      duplex_mode: "TDD"
    },
    {
      band: 51,
      fr: 1,
      f_ul_lo: 1427,
      f_ul_hi: 1432,
      f_dl_lo: 1427,
      f_dl_hi: 1432,
      duplex_mode: "TDD"
    },
    {
      band: 53,
      fr: 1,
      f_ul_lo: null,
      f_ul_hi: null,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "TDD"
    },
    {
      band: 54,
      fr: 1,
      f_ul_lo: 1670,
      f_ul_hi: 1675,
      f_dl_lo: 1670,
      f_dl_hi: 1675,
      duplex_mode: "TDD"
    },
    {
      band: 65,
      fr: 1,
      f_ul_lo: 1920,
      f_ul_hi: 2010,
      f_dl_lo: 2110,
      f_dl_hi: 2200,
      duplex_mode: "FDD"
    },
    {
      band: 66,
      fr: 1,
      f_ul_lo: 1710,
      f_ul_hi: 1780,
      f_dl_lo: 2110,
      f_dl_hi: 2200,
      duplex_mode: "FDD"
    },
    {
      band: 67,
      fr: 1,
      f_ul_lo: null,
      f_ul_hi: null,
      f_dl_lo: 738,
      f_dl_hi: 758,
      duplex_mode: "SDL"
    },
    {
      band: 70,
      fr: 1,
      f_ul_lo: 1695,
      f_ul_hi: 1710,
      f_dl_lo: 1995,
      f_dl_hi: 2020,
      duplex_mode: "FDD"
    },
    {
      band: 71,
      fr: 1,
      f_ul_lo: 663,
      f_ul_hi: 698,
      f_dl_lo: 617,
      f_dl_hi: 652,
      duplex_mode: "FDD"
    },
    {
      band: 72,
      fr: 1,
      f_ul_lo: 451,
      f_ul_hi: 456,
      f_dl_lo: 461,
      f_dl_hi: 466,
      duplex_mode: "FDD"
    },
    {
      band: 74,
      fr: 1,
      f_ul_lo: 1427,
      f_ul_hi: 1470,
      f_dl_lo: 1475,
      f_dl_hi: 1518,
      duplex_mode: "FDD"
    },
    {
      band: 75,
      fr: 1,
      f_ul_lo: null,
      f_ul_hi: null,
      f_dl_lo: 1432,
      f_dl_hi: 1517,
      duplex_mode: "SDL"
    },
    {
      band: 76,
      fr: 1,
      f_ul_lo: null,
      f_ul_hi: null,
      f_dl_lo: 1427,
      f_dl_hi: 1432,
      duplex_mode: "SDL"
    },
    {
      band: 77,
      fr: 1,
      f_ul_lo: 3300,
      f_ul_hi: 4200,
      f_dl_lo: 3300,
      f_dl_hi: 4200,
      duplex_mode: "TDD"
    },
    {
      band: 78,
      fr: 1,
      f_ul_lo: 3300,
      f_ul_hi: 3800,
      f_dl_lo: 3300,
      f_dl_hi: 3800,
      duplex_mode: "TDD"
    },
    {
      band: 79,
      fr: 1,
      f_ul_lo: 4400,
      f_ul_hi: 5e3,
      f_dl_lo: 4400,
      f_dl_hi: 5e3,
      duplex_mode: "TDD"
    },
    {
      band: 80,
      fr: 1,
      f_ul_lo: 1710,
      f_ul_hi: 1785,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 81,
      fr: 1,
      f_ul_lo: 880,
      f_ul_hi: 915,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 82,
      fr: 1,
      f_ul_lo: 832,
      f_ul_hi: 862,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 83,
      fr: 1,
      f_ul_lo: 703,
      f_ul_hi: 748,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 84,
      fr: 1,
      f_ul_lo: 1920,
      f_ul_hi: 1980,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 85,
      fr: 1,
      f_ul_lo: 698,
      f_ul_hi: 716,
      f_dl_lo: 728,
      f_dl_hi: 746,
      duplex_mode: "FDD"
    },
    {
      band: 86,
      fr: 1,
      f_ul_lo: 1710,
      f_ul_hi: 1780,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 89,
      fr: 1,
      f_ul_lo: 824,
      f_ul_hi: 849,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 90,
      fr: 1,
      f_ul_lo: 2496,
      f_ul_hi: 2690,
      f_dl_lo: 2496,
      f_dl_hi: 2690,
      duplex_mode: "TDD"
    },
    {
      band: 91,
      fr: 1,
      f_ul_lo: 832,
      f_ul_hi: 862,
      f_dl_lo: 1427,
      f_dl_hi: 1432,
      duplex_mode: "FDD"
    },
    {
      band: 92,
      fr: 1,
      f_ul_lo: 832,
      f_ul_hi: 862,
      f_dl_lo: 1432,
      f_dl_hi: 1517,
      duplex_mode: "FDD"
    },
    {
      band: 93,
      fr: 1,
      f_ul_lo: 880,
      f_ul_hi: 915,
      f_dl_lo: 1427,
      f_dl_hi: 1432,
      duplex_mode: "FDD"
    },
    {
      band: 94,
      fr: 1,
      f_ul_lo: 880,
      f_ul_hi: 915,
      f_dl_lo: 1432,
      f_dl_hi: 1517,
      duplex_mode: "FDD"
    },
    {
      band: 95,
      fr: 1,
      f_ul_lo: 2010,
      f_ul_hi: 2025,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 96,
      fr: 1,
      f_ul_lo: 5925,
      f_ul_hi: 7125,
      f_dl_lo: 5925,
      f_dl_hi: 7125,
      duplex_mode: "TDD"
    },
    {
      band: 97,
      fr: 1,
      f_ul_lo: 2300,
      f_ul_hi: 2400,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 98,
      fr: 1,
      f_ul_lo: 1880,
      f_ul_hi: 1920,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 99,
      fr: 1,
      f_ul_lo: null,
      f_ul_hi: null,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "SUL"
    },
    {
      band: 100,
      fr: 1,
      f_ul_lo: null,
      f_ul_hi: null,
      f_dl_lo: null,
      f_dl_hi: null,
      duplex_mode: "FDD"
    },
    {
      band: 101,
      fr: 1,
      f_ul_lo: 1900,
      f_ul_hi: 1910,
      f_dl_lo: 1900,
      f_dl_hi: 1910,
      duplex_mode: "TDD"
    },
    {
      band: 102,
      fr: 1,
      f_ul_lo: 5925,
      f_ul_hi: 6425,
      f_dl_lo: 5925,
      f_dl_hi: 6425,
      duplex_mode: "TDD"
    },
    {
      band: 104,
      fr: 1,
      f_ul_lo: 6425,
      f_ul_hi: 7125,
      f_dl_lo: 6425,
      f_dl_hi: 7125,
      duplex_mode: "TDD"
    },
    {
      band: 105,
      fr: 1,
      f_ul_lo: 663,
      f_ul_hi: 703,
      f_dl_lo: 612,
      f_dl_hi: 652,
      duplex_mode: "FDD"
    },
    {
      band: 106,
      fr: 1,
      f_ul_lo: 896,
      f_ul_hi: 901,
      f_dl_lo: 935,
      f_dl_hi: 940,
      duplex_mode: "FDD"
    },
    {
      band: 109,
      fr: 1,
      f_ul_lo: 703,
      f_ul_hi: 733,
      f_dl_lo: 1432,
      f_dl_hi: 1517,
      duplex_mode: "FDD"
    },
    {
      band: 257,
      fr: 2,
      f_ul_lo: 26500,
      f_ul_hi: 29500,
      f_dl_lo: 26500,
      f_dl_hi: 29500,
      duplex_mode: "TDD"
    },
    {
      band: 258,
      fr: 2,
      f_ul_lo: 24250,
      f_ul_hi: 27500,
      f_dl_lo: 24250,
      f_dl_hi: 27500,
      duplex_mode: "TDD"
    },
    {
      band: 259,
      fr: 2,
      f_ul_lo: 39500,
      f_ul_hi: 43500,
      f_dl_lo: 39500,
      f_dl_hi: 43500,
      duplex_mode: "TDD"
    },
    {
      band: 260,
      fr: 2,
      f_ul_lo: 37e3,
      f_ul_hi: 4e4,
      f_dl_lo: 37e3,
      f_dl_hi: 4e4,
      duplex_mode: "TDD"
    },
    {
      band: 261,
      fr: 2,
      f_ul_lo: 27500,
      f_ul_hi: 28350,
      f_dl_lo: 27500,
      f_dl_hi: 28350,
      duplex_mode: "TDD"
    },
    {
      band: 262,
      fr: 2,
      f_ul_lo: 47200,
      f_ul_hi: 48200,
      f_dl_lo: 47200,
      f_dl_hi: 48200,
      duplex_mode: "TDD"
    },
    {
      band: 263,
      fr: 2,
      f_ul_lo: 57e3,
      f_ul_hi: 71e3,
      f_dl_lo: 57e3,
      f_dl_hi: 71e3,
      duplex_mode: "TDD"
    }
  ]
};

// src/EutraBands.ts
var EutraBands = {
  table_release_3gpp: 18,
  table_ts: "3GPP TS 36.101 V18.7.0",
  table_date: "2024-09",
  table_names: [
    "Table 5.5-1: E-UTRA operating bands",
    "Table 5.7.3-1: E-UTRA channel numbers"
  ],
  rows: [
    {
      band: 1,
      f_dl_lo: 2110,
      f_dl_hi: 2170,
      n_offs_dl: 0,
      n_dl_lo: 0,
      n_dl_hi: 599,
      f_ul_lo: 1920,
      f_ul_hi: 1980,
      n_offs_ul: 18e3,
      n_ul_lo: 18e3,
      n_ul_hi: 18599,
      duplex_mode: "FDD"
    },
    {
      band: 2,
      f_dl_lo: 1930,
      f_dl_hi: 1990,
      n_offs_dl: 600,
      n_dl_lo: 600,
      n_dl_hi: 1199,
      f_ul_lo: 1850,
      f_ul_hi: 1910,
      n_offs_ul: 18600,
      n_ul_lo: 18600,
      n_ul_hi: 19199,
      duplex_mode: "FDD"
    },
    {
      band: 3,
      f_dl_lo: 1805,
      f_dl_hi: 1880,
      n_offs_dl: 1200,
      n_dl_lo: 1200,
      n_dl_hi: 1949,
      f_ul_lo: 1710,
      f_ul_hi: 1785,
      n_offs_ul: 19200,
      n_ul_lo: 19200,
      n_ul_hi: 19949,
      duplex_mode: "FDD"
    },
    {
      band: 4,
      f_dl_lo: 2110,
      f_dl_hi: 2155,
      n_offs_dl: 1950,
      n_dl_lo: 1950,
      n_dl_hi: 2399,
      f_ul_lo: 1710,
      f_ul_hi: 1755,
      n_offs_ul: 19950,
      n_ul_lo: 19950,
      n_ul_hi: 20399,
      duplex_mode: "FDD"
    },
    {
      band: 5,
      f_dl_lo: 869,
      f_dl_hi: 894,
      n_offs_dl: 2400,
      n_dl_lo: 2400,
      n_dl_hi: 2649,
      f_ul_lo: 824,
      f_ul_hi: 849,
      n_offs_ul: 20400,
      n_ul_lo: 20400,
      n_ul_hi: 20649,
      duplex_mode: "FDD"
    },
    {
      band: 6,
      f_dl_lo: 875,
      f_dl_hi: 885,
      n_offs_dl: 2650,
      n_dl_lo: 2650,
      n_dl_hi: 2749,
      f_ul_lo: 830,
      f_ul_hi: 840,
      n_offs_ul: 20650,
      n_ul_lo: 20650,
      n_ul_hi: 20749,
      duplex_mode: "FDD"
    },
    {
      band: 7,
      f_dl_lo: 2620,
      f_dl_hi: 2690,
      n_offs_dl: 2750,
      n_dl_lo: 2750,
      n_dl_hi: 3449,
      f_ul_lo: 2500,
      f_ul_hi: 2570,
      n_offs_ul: 20750,
      n_ul_lo: 20750,
      n_ul_hi: 21449,
      duplex_mode: "FDD"
    },
    {
      band: 8,
      f_dl_lo: 925,
      f_dl_hi: 960,
      n_offs_dl: 3450,
      n_dl_lo: 3450,
      n_dl_hi: 3799,
      f_ul_lo: 880,
      f_ul_hi: 915,
      n_offs_ul: 21450,
      n_ul_lo: 21450,
      n_ul_hi: 21799,
      duplex_mode: "FDD"
    },
    {
      band: 9,
      f_dl_lo: 1844.9,
      f_dl_hi: 1879.9,
      n_offs_dl: 3800,
      n_dl_lo: 3800,
      n_dl_hi: 4149,
      f_ul_lo: 1749.9,
      f_ul_hi: 1784.9,
      n_offs_ul: 21800,
      n_ul_lo: 21800,
      n_ul_hi: 22149,
      duplex_mode: "FDD"
    },
    {
      band: 10,
      f_dl_lo: 2110,
      f_dl_hi: 2170,
      n_offs_dl: 4150,
      n_dl_lo: 4150,
      n_dl_hi: 4749,
      f_ul_lo: 1710,
      f_ul_hi: 1770,
      n_offs_ul: 22150,
      n_ul_lo: 22150,
      n_ul_hi: 22749,
      duplex_mode: "FDD"
    },
    {
      band: 11,
      f_dl_lo: 1475.9,
      f_dl_hi: 1495.9,
      n_offs_dl: 4750,
      n_dl_lo: 4750,
      n_dl_hi: 4949,
      f_ul_lo: 1427.9,
      f_ul_hi: 1447.9,
      n_offs_ul: 22750,
      n_ul_lo: 22750,
      n_ul_hi: 22949,
      duplex_mode: "FDD"
    },
    {
      band: 12,
      f_dl_lo: 729,
      f_dl_hi: 746,
      n_offs_dl: 5010,
      n_dl_lo: 5010,
      n_dl_hi: 5179,
      f_ul_lo: 699,
      f_ul_hi: 716,
      n_offs_ul: 23010,
      n_ul_lo: 23010,
      n_ul_hi: 23179,
      duplex_mode: "FDD"
    },
    {
      band: 13,
      f_dl_lo: 746,
      f_dl_hi: 756,
      n_offs_dl: 5180,
      n_dl_lo: 5180,
      n_dl_hi: 5279,
      f_ul_lo: 777,
      f_ul_hi: 787,
      n_offs_ul: 23180,
      n_ul_lo: 23180,
      n_ul_hi: 23279,
      duplex_mode: "FDD"
    },
    {
      band: 14,
      f_dl_lo: 758,
      f_dl_hi: 768,
      n_offs_dl: 5280,
      n_dl_lo: 5280,
      n_dl_hi: 5379,
      f_ul_lo: 788,
      f_ul_hi: 798,
      n_offs_ul: 23280,
      n_ul_lo: 23280,
      n_ul_hi: 23379,
      duplex_mode: "FDD"
    },
    {
      band: 17,
      f_dl_lo: 734,
      f_dl_hi: 746,
      n_offs_dl: 5730,
      n_dl_lo: 5730,
      n_dl_hi: 5849,
      f_ul_lo: 704,
      f_ul_hi: 716,
      n_offs_ul: 23730,
      n_ul_lo: 23730,
      n_ul_hi: 23849,
      duplex_mode: "FDD"
    },
    {
      band: 18,
      f_dl_lo: 860,
      f_dl_hi: 875,
      n_offs_dl: 5850,
      n_dl_lo: 5850,
      n_dl_hi: 5999,
      f_ul_lo: 815,
      f_ul_hi: 830,
      n_offs_ul: 23850,
      n_ul_lo: 23850,
      n_ul_hi: 23999,
      duplex_mode: "FDD"
    },
    {
      band: 19,
      f_dl_lo: 875,
      f_dl_hi: 890,
      n_offs_dl: 6e3,
      n_dl_lo: 6e3,
      n_dl_hi: 6149,
      f_ul_lo: 830,
      f_ul_hi: 845,
      n_offs_ul: 24e3,
      n_ul_lo: 24e3,
      n_ul_hi: 24149,
      duplex_mode: "FDD"
    },
    {
      band: 20,
      f_dl_lo: 791,
      f_dl_hi: 821,
      n_offs_dl: 6150,
      n_dl_lo: 6150,
      n_dl_hi: 6449,
      f_ul_lo: 832,
      f_ul_hi: 862,
      n_offs_ul: 24150,
      n_ul_lo: 24150,
      n_ul_hi: 24449,
      duplex_mode: "FDD"
    },
    {
      band: 21,
      f_dl_lo: 1495.9,
      f_dl_hi: 1510.9,
      n_offs_dl: 6450,
      n_dl_lo: 6450,
      n_dl_hi: 6599,
      f_ul_lo: 1447.9,
      f_ul_hi: 1462.9,
      n_offs_ul: 24450,
      n_ul_lo: 24450,
      n_ul_hi: 24599,
      duplex_mode: "FDD"
    },
    {
      band: 22,
      f_dl_lo: 3510,
      f_dl_hi: 3590,
      n_offs_dl: 6600,
      n_dl_lo: 6600,
      n_dl_hi: 7399,
      f_ul_lo: 3410,
      f_ul_hi: 3490,
      n_offs_ul: 24600,
      n_ul_lo: 24600,
      n_ul_hi: 25399,
      duplex_mode: "FDD"
    },
    {
      band: 23,
      f_dl_lo: 2180,
      f_dl_hi: 2200,
      n_offs_dl: 7500,
      n_dl_lo: 7500,
      n_dl_hi: 7699,
      f_ul_lo: 2e3,
      f_ul_hi: 2020,
      n_offs_ul: 25500,
      n_ul_lo: 25500,
      n_ul_hi: 25699,
      duplex_mode: "FDD"
    },
    {
      band: 24,
      f_dl_lo: 1525,
      f_dl_hi: 1559,
      n_offs_dl: 7700,
      n_dl_lo: 7700,
      n_dl_hi: 8039,
      f_ul_lo: 1626.5,
      f_ul_hi: 1660.5,
      n_offs_ul: 25700,
      n_ul_lo: 25700,
      n_ul_hi: 26039,
      duplex_mode: "FDD"
    },
    {
      band: 25,
      f_dl_lo: 1930,
      f_dl_hi: 1995,
      n_offs_dl: 8040,
      n_dl_lo: 8040,
      n_dl_hi: 8689,
      f_ul_lo: 1850,
      f_ul_hi: 1915,
      n_offs_ul: 26040,
      n_ul_lo: 26040,
      n_ul_hi: 26689,
      duplex_mode: "FDD"
    },
    {
      band: 26,
      f_dl_lo: 859,
      f_dl_hi: 894,
      n_offs_dl: 8690,
      n_dl_lo: 8690,
      n_dl_hi: 9039,
      f_ul_lo: 814,
      f_ul_hi: 849,
      n_offs_ul: 26690,
      n_ul_lo: 26690,
      n_ul_hi: 27039,
      duplex_mode: "FDD"
    },
    {
      band: 27,
      f_dl_lo: 852,
      f_dl_hi: 869,
      n_offs_dl: 9040,
      n_dl_lo: 9040,
      n_dl_hi: 9209,
      f_ul_lo: 807,
      f_ul_hi: 824,
      n_offs_ul: 27040,
      n_ul_lo: 27040,
      n_ul_hi: 27209,
      duplex_mode: "FDD"
    },
    {
      band: 28,
      f_dl_lo: 758,
      f_dl_hi: 803,
      n_offs_dl: 9210,
      n_dl_lo: 9210,
      n_dl_hi: 9659,
      f_ul_lo: 703,
      f_ul_hi: 748,
      n_offs_ul: 27210,
      n_ul_lo: 27210,
      n_ul_hi: 27659,
      duplex_mode: "FDD"
    },
    {
      band: 29,
      f_dl_lo: 717,
      f_dl_hi: 728,
      n_offs_dl: 9660,
      n_dl_lo: 9660,
      n_dl_hi: 9769,
      f_ul_lo: null,
      f_ul_hi: null,
      n_offs_ul: null,
      n_ul_lo: null,
      n_ul_hi: null,
      duplex_mode: "FDD"
    },
    {
      band: 30,
      f_dl_lo: 2350,
      f_dl_hi: 2360,
      n_offs_dl: 9770,
      n_dl_lo: 9770,
      n_dl_hi: 9869,
      f_ul_lo: 2305,
      f_ul_hi: 2315,
      n_offs_ul: 27660,
      n_ul_lo: 27660,
      n_ul_hi: 27759,
      duplex_mode: "FDD"
    },
    {
      band: 31,
      f_dl_lo: 462.5,
      f_dl_hi: 467.5,
      n_offs_dl: 9870,
      n_dl_lo: 9870,
      n_dl_hi: 9919,
      f_ul_lo: 452.5,
      f_ul_hi: 457.5,
      n_offs_ul: 27760,
      n_ul_lo: 27760,
      n_ul_hi: 27809,
      duplex_mode: "FDD"
    },
    {
      band: 32,
      f_dl_lo: 1452,
      f_dl_hi: 1496,
      n_offs_dl: 9920,
      n_dl_lo: 9920,
      n_dl_hi: 10359,
      f_ul_lo: null,
      f_ul_hi: null,
      n_offs_ul: null,
      n_ul_lo: null,
      n_ul_hi: null,
      duplex_mode: "FDD"
    },
    {
      band: 33,
      f_dl_lo: 1900,
      f_dl_hi: 1920,
      n_offs_dl: 36e3,
      n_dl_lo: 36e3,
      n_dl_hi: 36199,
      f_ul_lo: 1900,
      f_ul_hi: 1920,
      n_offs_ul: 36e3,
      n_ul_lo: 36e3,
      n_ul_hi: 36199,
      duplex_mode: "TDD"
    },
    {
      band: 34,
      f_dl_lo: 2010,
      f_dl_hi: 2025,
      n_offs_dl: 36200,
      n_dl_lo: 36200,
      n_dl_hi: 36349,
      f_ul_lo: 2010,
      f_ul_hi: 2025,
      n_offs_ul: 36200,
      n_ul_lo: 36200,
      n_ul_hi: 36349,
      duplex_mode: "TDD"
    },
    {
      band: 35,
      f_dl_lo: 1850,
      f_dl_hi: 1910,
      n_offs_dl: 36350,
      n_dl_lo: 36350,
      n_dl_hi: 36949,
      f_ul_lo: 1850,
      f_ul_hi: 1910,
      n_offs_ul: 36350,
      n_ul_lo: 36350,
      n_ul_hi: 36949,
      duplex_mode: "TDD"
    },
    {
      band: 36,
      f_dl_lo: 1930,
      f_dl_hi: 1990,
      n_offs_dl: 36950,
      n_dl_lo: 36950,
      n_dl_hi: 37549,
      f_ul_lo: 1930,
      f_ul_hi: 1990,
      n_offs_ul: 36950,
      n_ul_lo: 36950,
      n_ul_hi: 37549,
      duplex_mode: "TDD"
    },
    {
      band: 37,
      f_dl_lo: 1910,
      f_dl_hi: 1930,
      n_offs_dl: 37550,
      n_dl_lo: 37550,
      n_dl_hi: 37749,
      f_ul_lo: 1910,
      f_ul_hi: 1930,
      n_offs_ul: 37550,
      n_ul_lo: 37550,
      n_ul_hi: 37749,
      duplex_mode: "TDD"
    },
    {
      band: 38,
      f_dl_lo: 2570,
      f_dl_hi: 2620,
      n_offs_dl: 37750,
      n_dl_lo: 37750,
      n_dl_hi: 38249,
      f_ul_lo: 2570,
      f_ul_hi: 2620,
      n_offs_ul: 37750,
      n_ul_lo: 37750,
      n_ul_hi: 38249,
      duplex_mode: "TDD"
    },
    {
      band: 39,
      f_dl_lo: 1880,
      f_dl_hi: 1920,
      n_offs_dl: 38250,
      n_dl_lo: 38250,
      n_dl_hi: 38649,
      f_ul_lo: 1880,
      f_ul_hi: 1920,
      n_offs_ul: 38250,
      n_ul_lo: 38250,
      n_ul_hi: 38649,
      duplex_mode: "TDD"
    },
    {
      band: 40,
      f_dl_lo: 2300,
      f_dl_hi: 2400,
      n_offs_dl: 38650,
      n_dl_lo: 38650,
      n_dl_hi: 39649,
      f_ul_lo: 2300,
      f_ul_hi: 2400,
      n_offs_ul: 38650,
      n_ul_lo: 38650,
      n_ul_hi: 39649,
      duplex_mode: "TDD"
    },
    {
      band: 41,
      f_dl_lo: 2496,
      f_dl_hi: 2690,
      n_offs_dl: 39650,
      n_dl_lo: 39650,
      n_dl_hi: 41589,
      f_ul_lo: 2496,
      f_ul_hi: 2690,
      n_offs_ul: 39650,
      n_ul_lo: 39650,
      n_ul_hi: 41589,
      duplex_mode: "TDD"
    },
    {
      band: 42,
      f_dl_lo: 3400,
      f_dl_hi: 3600,
      n_offs_dl: 41590,
      n_dl_lo: 41590,
      n_dl_hi: 43589,
      f_ul_lo: 3400,
      f_ul_hi: 3600,
      n_offs_ul: 41590,
      n_ul_lo: 41590,
      n_ul_hi: 43589,
      duplex_mode: "TDD"
    },
    {
      band: 43,
      f_dl_lo: 3600,
      f_dl_hi: 3800,
      n_offs_dl: 43590,
      n_dl_lo: 43590,
      n_dl_hi: 45589,
      f_ul_lo: 3600,
      f_ul_hi: 3800,
      n_offs_ul: 43590,
      n_ul_lo: 43590,
      n_ul_hi: 45589,
      duplex_mode: "TDD"
    },
    {
      band: 44,
      f_dl_lo: 703,
      f_dl_hi: 803,
      n_offs_dl: 45590,
      n_dl_lo: 45590,
      n_dl_hi: 46589,
      f_ul_lo: 703,
      f_ul_hi: 803,
      n_offs_ul: 45590,
      n_ul_lo: 45590,
      n_ul_hi: 46589,
      duplex_mode: "TDD"
    },
    {
      band: 45,
      f_dl_lo: 1447,
      f_dl_hi: 1467,
      n_offs_dl: 46590,
      n_dl_lo: 46590,
      n_dl_hi: 46789,
      f_ul_lo: 1447,
      f_ul_hi: 1467,
      n_offs_ul: 46590,
      n_ul_lo: 46590,
      n_ul_hi: 46789,
      duplex_mode: "TDD"
    },
    {
      band: 46,
      f_dl_lo: 5150,
      f_dl_hi: 5925,
      n_offs_dl: 46790,
      n_dl_lo: 46790,
      n_dl_hi: 54539,
      f_ul_lo: 5150,
      f_ul_hi: 5925,
      n_offs_ul: 46790,
      n_ul_lo: 46790,
      n_ul_hi: 54539,
      duplex_mode: "TDD"
    },
    {
      band: 47,
      f_dl_lo: 5855,
      f_dl_hi: 5925,
      n_offs_dl: 54540,
      n_dl_lo: 54540,
      n_dl_hi: 55239,
      f_ul_lo: 5855,
      f_ul_hi: 5925,
      n_offs_ul: 54540,
      n_ul_lo: 54540,
      n_ul_hi: 55239,
      duplex_mode: "TDD"
    },
    {
      band: 48,
      f_dl_lo: 3550,
      f_dl_hi: 3700,
      n_offs_dl: 55240,
      n_dl_lo: 55240,
      n_dl_hi: 56739,
      f_ul_lo: 3550,
      f_ul_hi: 3700,
      n_offs_ul: 55240,
      n_ul_lo: 55240,
      n_ul_hi: 56739,
      duplex_mode: "TDD"
    },
    {
      band: 49,
      f_dl_lo: 3550,
      f_dl_hi: 3700,
      n_offs_dl: 56740,
      n_dl_lo: 56740,
      n_dl_hi: 58239,
      f_ul_lo: 3550,
      f_ul_hi: 3700,
      n_offs_ul: 56740,
      n_ul_lo: 56740,
      n_ul_hi: 58239,
      duplex_mode: "TDD"
    },
    {
      band: 50,
      f_dl_lo: 1432,
      f_dl_hi: 1517,
      n_offs_dl: 58240,
      n_dl_lo: 58240,
      n_dl_hi: 59089,
      f_ul_lo: 1432,
      f_ul_hi: 1517,
      n_offs_ul: 58240,
      n_ul_lo: 58240,
      n_ul_hi: 59089,
      duplex_mode: "TDD"
    },
    {
      band: 51,
      f_dl_lo: 1427,
      f_dl_hi: 1432,
      n_offs_dl: 59090,
      n_dl_lo: 59090,
      n_dl_hi: 59139,
      f_ul_lo: 1427,
      f_ul_hi: 1432,
      n_offs_ul: 59090,
      n_ul_lo: 59090,
      n_ul_hi: 59139,
      duplex_mode: "TDD"
    },
    {
      band: 52,
      f_dl_lo: 3300,
      f_dl_hi: 3400,
      n_offs_dl: 59140,
      n_dl_lo: 59140,
      n_dl_hi: 60139,
      f_ul_lo: 3300,
      f_ul_hi: 3400,
      n_offs_ul: 59140,
      n_ul_lo: 59140,
      n_ul_hi: 60139,
      duplex_mode: "TDD"
    },
    {
      band: 53,
      f_dl_lo: 2483.5,
      f_dl_hi: 2495,
      n_offs_dl: 60140,
      n_dl_lo: 60140,
      n_dl_hi: 60254,
      f_ul_lo: 2483.5,
      f_ul_hi: 2495,
      n_offs_ul: 60140,
      n_ul_lo: 60140,
      n_ul_hi: 60254,
      duplex_mode: "TDD"
    },
    {
      band: 54,
      f_dl_lo: 1670,
      f_dl_hi: 1675,
      n_offs_dl: 60255,
      n_dl_lo: 60255,
      n_dl_hi: 60304,
      f_ul_lo: 1670,
      f_ul_hi: 1675,
      n_offs_ul: 60255,
      n_ul_lo: 60255,
      n_ul_hi: 60304,
      duplex_mode: "TDD"
    },
    {
      band: 65,
      f_dl_lo: 2110,
      f_dl_hi: 2200,
      n_offs_dl: 65536,
      n_dl_lo: 65536,
      n_dl_hi: 66435,
      f_ul_lo: 1920,
      f_ul_hi: 2010,
      n_offs_ul: 131072,
      n_ul_lo: 131072,
      n_ul_hi: 131971,
      duplex_mode: "FDD"
    },
    {
      band: 66,
      f_dl_lo: 2110,
      f_dl_hi: 2200,
      n_offs_dl: 66436,
      n_dl_lo: 66436,
      n_dl_hi: 67335,
      f_ul_lo: 1710,
      f_ul_hi: 1780,
      n_offs_ul: 131972,
      n_ul_lo: 131972,
      n_ul_hi: 132671,
      duplex_mode: "FDD"
    },
    {
      band: 67,
      f_dl_lo: 738,
      f_dl_hi: 758,
      n_offs_dl: 67336,
      n_dl_lo: 67336,
      n_dl_hi: 67535,
      f_ul_lo: null,
      f_ul_hi: null,
      n_offs_ul: null,
      n_ul_lo: null,
      n_ul_hi: null,
      duplex_mode: "FDD"
    },
    {
      band: 68,
      f_dl_lo: 753,
      f_dl_hi: 783,
      n_offs_dl: 67536,
      n_dl_lo: 67536,
      n_dl_hi: 67835,
      f_ul_lo: 698,
      f_ul_hi: 728,
      n_offs_ul: 132672,
      n_ul_lo: 132672,
      n_ul_hi: 132971,
      duplex_mode: "FDD"
    },
    {
      band: 69,
      f_dl_lo: 2570,
      f_dl_hi: 2620,
      n_offs_dl: 67836,
      n_dl_lo: 67836,
      n_dl_hi: 68335,
      f_ul_lo: null,
      f_ul_hi: null,
      n_offs_ul: null,
      n_ul_lo: null,
      n_ul_hi: null,
      duplex_mode: "FDD"
    },
    {
      band: 70,
      f_dl_lo: 1995,
      f_dl_hi: 2020,
      n_offs_dl: 68336,
      n_dl_lo: 68336,
      n_dl_hi: 68585,
      f_ul_lo: 1695,
      f_ul_hi: 1710,
      n_offs_ul: 132972,
      n_ul_lo: 132972,
      n_ul_hi: 133121,
      duplex_mode: "FDD"
    },
    {
      band: 71,
      f_dl_lo: 617,
      f_dl_hi: 652,
      n_offs_dl: 68586,
      n_dl_lo: 68586,
      n_dl_hi: 68935,
      f_ul_lo: 663,
      f_ul_hi: 698,
      n_offs_ul: 133122,
      n_ul_lo: 133122,
      n_ul_hi: 133471,
      duplex_mode: "FDD"
    },
    {
      band: 72,
      f_dl_lo: 461,
      f_dl_hi: 466,
      n_offs_dl: 68936,
      n_dl_lo: 68936,
      n_dl_hi: 68985,
      f_ul_lo: 451,
      f_ul_hi: 456,
      n_offs_ul: 133472,
      n_ul_lo: 133472,
      n_ul_hi: 133521,
      duplex_mode: "FDD"
    },
    {
      band: 73,
      f_dl_lo: 460,
      f_dl_hi: 465,
      n_offs_dl: 68986,
      n_dl_lo: 68986,
      n_dl_hi: 69035,
      f_ul_lo: 450,
      f_ul_hi: 455,
      n_offs_ul: 133522,
      n_ul_lo: 133522,
      n_ul_hi: 133571,
      duplex_mode: "FDD"
    },
    {
      band: 74,
      f_dl_lo: 1475,
      f_dl_hi: 1518,
      n_offs_dl: 69036,
      n_dl_lo: 69036,
      n_dl_hi: 69465,
      f_ul_lo: 1427,
      f_ul_hi: 1470,
      n_offs_ul: 133572,
      n_ul_lo: 133572,
      n_ul_hi: 134001,
      duplex_mode: "FDD"
    },
    {
      band: 75,
      f_dl_lo: 1432,
      f_dl_hi: 1517,
      n_offs_dl: 69466,
      n_dl_lo: 69466,
      n_dl_hi: 70315,
      f_ul_lo: null,
      f_ul_hi: null,
      n_offs_ul: null,
      n_ul_lo: null,
      n_ul_hi: null,
      duplex_mode: "FDD"
    },
    {
      band: 76,
      f_dl_lo: 1427,
      f_dl_hi: 1432,
      n_offs_dl: 70316,
      n_dl_lo: 70316,
      n_dl_hi: 70365,
      f_ul_lo: null,
      f_ul_hi: null,
      n_offs_ul: null,
      n_ul_lo: null,
      n_ul_hi: null,
      duplex_mode: "FDD"
    },
    {
      band: 85,
      f_dl_lo: 728,
      f_dl_hi: 746,
      n_offs_dl: 70366,
      n_dl_lo: 70366,
      n_dl_hi: 70545,
      f_ul_lo: 698,
      f_ul_hi: 716,
      n_offs_ul: 134002,
      n_ul_lo: 134002,
      n_ul_hi: 134181,
      duplex_mode: "FDD"
    },
    {
      band: 87,
      f_dl_lo: 420,
      f_dl_hi: 425,
      n_offs_dl: 70546,
      n_dl_lo: 70546,
      n_dl_hi: 70595,
      f_ul_lo: 410,
      f_ul_hi: 415,
      n_offs_ul: 134182,
      n_ul_lo: 134182,
      n_ul_hi: 134231,
      duplex_mode: "FDD"
    },
    {
      band: 88,
      f_dl_lo: 422,
      f_dl_hi: 427,
      n_offs_dl: 70596,
      n_dl_lo: 70596,
      n_dl_hi: 70645,
      f_ul_lo: 412,
      f_ul_hi: 417,
      n_offs_ul: 134232,
      n_ul_lo: 134232,
      n_ul_hi: 134281,
      duplex_mode: "FDD"
    },
    {
      band: 103,
      f_dl_lo: 757,
      f_dl_hi: 758,
      n_offs_dl: 70646,
      n_dl_lo: 70646,
      n_dl_hi: 70655,
      f_ul_lo: 787,
      f_ul_hi: 788,
      n_offs_ul: 134282,
      n_ul_lo: 134282,
      n_ul_hi: 134291,
      duplex_mode: "FDD"
    },
    {
      band: 106,
      f_dl_lo: 935,
      f_dl_hi: 940,
      n_offs_dl: 70656,
      n_dl_lo: 70656,
      n_dl_hi: 70705,
      f_ul_lo: 896,
      f_ul_hi: 901,
      n_offs_ul: 134292,
      n_ul_lo: 134292,
      n_ul_hi: 134341,
      duplex_mode: "FDD"
    }
  ]
};

// src/UtraFddBands.ts
var UtraFddBands = {
  table_release_3gpp: 18,
  table_ts: "TS 25.101 V18.0.0",
  table_date: "2024-03",
  table_names: [
    "Table 5.1: UARFCN definition (general)",
    "Table 5.1A: UARFCN definition (additional channels)",
    "Table 5.2: UTRA Absolute Radio Frequency Channel Number"
  ],
  rows: [
    {
      band: 1,
      f_ul_offset: 0,
      f_ul_lo: 1922.4,
      f_ul_hi: 1977.6,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 0,
      f_dl_lo: 2112.4,
      f_dl_hi: 2167.6,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 9612,
      n_ul_hi: 9888,
      n_ul_xtra: null,
      n_dl_lo: 10562,
      n_dl_hi: 10838,
      n_dl_xtra: null
    },
    {
      band: 2,
      f_ul_offset: 0,
      f_ul_lo: 1852.4,
      f_ul_hi: 1907.6,
      f_ul_xtra_offset: 1850.1,
      f_ul_xtra: [
        1852.5,
        1857.5,
        1862.5,
        1867.5,
        1872.5,
        1877.5,
        1882.5,
        1887.5,
        1892.5,
        1897.5,
        1902.5,
        1907.5
      ],
      f_dl_offset: 0,
      f_dl_lo: 1932.4,
      f_dl_hi: 1987.6,
      f_dl_xtra_offset: 1850.1,
      f_dl_xtra: [
        1932.5,
        1937.5,
        1942.5,
        1947.5,
        1952.5,
        1957.5,
        1962.5,
        1967.5,
        1972.5,
        1977.5,
        1982.5,
        1987.5
      ],
      n_ul_lo: 9262,
      n_ul_hi: 9538,
      n_ul_xtra: [12, 37, 62, 87, 112, 137, 162, 187, 212, 237, 262, 287],
      n_dl_lo: 9662,
      n_dl_hi: 9938,
      n_dl_xtra: [412, 437, 462, 487, 512, 537, 562, 587, 612, 637, 662, 687]
    },
    {
      band: 3,
      f_ul_offset: 1525,
      f_ul_lo: 1712.4,
      f_ul_hi: 1782.6,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 1575,
      f_dl_lo: 1807.4,
      f_dl_hi: 1877.6,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 937,
      n_ul_hi: 1288,
      n_ul_xtra: null,
      n_dl_lo: 1162,
      n_dl_hi: 1513,
      n_dl_xtra: null
    },
    {
      band: 4,
      f_ul_offset: 1450,
      f_ul_lo: 1712.4,
      f_ul_hi: 1752.6,
      f_ul_xtra_offset: 1380.1,
      f_ul_xtra: [
        1712.5,
        1717.5,
        1722.5,
        1727.5,
        1732.5,
        1737.5,
        1747.5,
        1752.5
      ],
      f_dl_offset: 1805,
      f_dl_lo: 2112.4,
      f_dl_hi: 2152.6,
      f_dl_xtra_offset: 1735.1,
      f_dl_xtra: [
        2112.5,
        2117.5,
        2122.5,
        2127.5,
        2132.5,
        2137.5,
        2142.5,
        2147.5,
        2152.5
      ],
      n_ul_lo: 1312,
      n_ul_hi: 1513,
      n_ul_xtra: [1662, 1687, 1712, 1737, 1762, 1787, 1812, 1837, 1862],
      n_dl_lo: 1537,
      n_dl_hi: 1738,
      n_dl_xtra: [1887, 1912, 1937, 1962, 1987, 2012, 2037, 2062, 2087]
    },
    {
      band: 5,
      f_ul_offset: 0,
      f_ul_lo: 826.4,
      f_ul_hi: 846.6,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 0,
      f_dl_lo: 871.4,
      f_dl_hi: 891.6,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 4132,
      n_ul_hi: 4233,
      n_ul_xtra: [782, 787, 807, 812, 837, 862],
      n_dl_lo: 4357,
      n_dl_hi: 4458,
      n_dl_xtra: [1007, 1012, 1032, 1037, 1062, 1087]
    },
    {
      band: 6,
      f_ul_offset: 0,
      f_ul_lo: 832.4,
      f_ul_hi: 837.6,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 0,
      f_dl_lo: 877.4,
      f_dl_hi: 882.6,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 4162,
      n_ul_hi: 4188,
      n_ul_xtra: [812, 837],
      n_dl_lo: 4387,
      n_dl_hi: 4413,
      n_dl_xtra: [1037, 1062]
    },
    {
      band: 7,
      f_ul_offset: 2100,
      f_ul_lo: 2502.4,
      f_ul_hi: 2567.6,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 2175,
      f_dl_lo: 2622.4,
      f_dl_hi: 2687.6,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 2012,
      n_ul_hi: 2338,
      n_ul_xtra: [
        2362,
        2387,
        2412,
        2437,
        2462,
        2487,
        2512,
        2537,
        2562,
        2587,
        2612,
        2637,
        2662,
        2687
      ],
      n_dl_lo: 2237,
      n_dl_hi: 2563,
      n_dl_xtra: [
        2587,
        2612,
        2637,
        2662,
        2687,
        2712,
        2737,
        2762,
        2787,
        2812,
        2837,
        2862,
        2887,
        2912
      ]
    },
    {
      band: 8,
      f_ul_offset: 340,
      f_ul_lo: 882.4,
      f_ul_hi: 912.6,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 340,
      f_dl_lo: 927.4,
      f_dl_hi: 957.6,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 2712,
      n_ul_hi: 2863,
      n_ul_xtra: null,
      n_dl_lo: 2937,
      n_dl_hi: 3088,
      n_dl_xtra: null
    },
    {
      band: 9,
      f_ul_offset: 0,
      f_ul_lo: 1752.4,
      f_ul_hi: 1782.4,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 0,
      f_dl_lo: 1847.4,
      f_dl_hi: 1877.4,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 8762,
      n_ul_hi: 8912,
      n_ul_xtra: null,
      n_dl_lo: 9237,
      n_dl_hi: 9387,
      n_dl_xtra: null
    },
    {
      band: 10,
      f_ul_offset: 1135,
      f_ul_lo: 1712.4,
      f_ul_hi: 1767.6,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 1490,
      f_dl_lo: 2112.4,
      f_dl_hi: 2167.6,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 2887,
      n_ul_hi: 3163,
      n_ul_xtra: [
        3187,
        3212,
        3237,
        3262,
        3287,
        3312,
        3337,
        3362,
        3387,
        3412,
        3437,
        3462
      ],
      n_dl_lo: 3112,
      n_dl_hi: 3388,
      n_dl_xtra: [
        3412,
        3437,
        3462,
        3487,
        3512,
        3537,
        3562,
        3587,
        3612,
        3637,
        3662,
        3687
      ]
    },
    {
      band: 11,
      f_ul_offset: 733,
      f_ul_lo: 1430.4,
      f_ul_hi: 1445.4,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 736,
      f_dl_lo: 1478.4,
      f_dl_hi: 1493.4,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 3487,
      n_ul_hi: 3562,
      n_ul_xtra: null,
      n_dl_lo: 3712,
      n_dl_hi: 3787,
      n_dl_xtra: null
    },
    {
      band: 12,
      f_ul_offset: -22,
      f_ul_lo: 701.4,
      f_ul_hi: 713.6,
      f_ul_xtra_offset: -39.9,
      f_ul_xtra: [701.5, 706.5, 707.5, 712.5, 713.5],
      f_dl_offset: -37,
      f_dl_lo: 731.4,
      f_dl_hi: 743.6,
      f_dl_xtra_offset: -54.9,
      f_dl_xtra: [731.5, 736.5, 737.5, 742.5, 743.5],
      n_ul_lo: 3617,
      n_ul_hi: 3678,
      n_ul_xtra: [3707, 3732, 3737, 3762, 3767],
      n_dl_lo: 3842,
      n_dl_hi: 3903,
      n_dl_xtra: [3932, 3957, 3962, 3987, 3992]
    },
    {
      band: 13,
      f_ul_offset: 21,
      f_ul_lo: 779.4,
      f_ul_hi: 784.6,
      f_ul_xtra_offset: 11.1,
      f_ul_xtra: [779.5, 784.5],
      f_dl_offset: -55,
      f_dl_lo: 748.4,
      f_dl_hi: 753.6,
      f_dl_xtra_offset: -64.9,
      f_dl_xtra: [748.5, 753.5],
      n_ul_lo: 3792,
      n_ul_hi: 3818,
      n_ul_xtra: [3842, 3867],
      n_dl_lo: 4017,
      n_dl_hi: 4043,
      n_dl_xtra: [4067, 4092]
    },
    {
      band: 14,
      f_ul_offset: 12,
      f_ul_lo: 790.4,
      f_ul_hi: 795.6,
      f_ul_xtra_offset: 2.1,
      f_ul_xtra: [790.5, 795.5],
      f_dl_offset: -63,
      f_dl_lo: 760.4,
      f_dl_hi: 765.6,
      f_dl_xtra_offset: -72.9,
      f_dl_xtra: [760.5, 765.5],
      n_ul_lo: 3892,
      n_ul_hi: 3918,
      n_ul_xtra: [3942, 3967],
      n_dl_lo: 4117,
      n_dl_hi: 4143,
      n_dl_xtra: [4167, 4192]
    },
    {
      band: 19,
      f_ul_offset: 770,
      f_ul_lo: 832.4,
      f_ul_hi: 842.6,
      f_ul_xtra_offset: 755.1,
      f_ul_xtra: [832.5, 837.5, 842.5],
      f_dl_offset: 735,
      f_dl_lo: 877.4,
      f_dl_hi: 887.6,
      f_dl_xtra_offset: 720.1,
      f_dl_xtra: [877.5, 882.5, 887.5],
      n_ul_lo: 312,
      n_ul_hi: 363,
      n_ul_xtra: [387, 412, 437],
      n_dl_lo: 712,
      n_dl_hi: 763,
      n_dl_xtra: [787, 812, 837]
    },
    {
      band: 20,
      f_ul_offset: -23,
      f_ul_lo: 834.4,
      f_ul_hi: 859.6,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: -109,
      f_dl_lo: 793.4,
      f_dl_hi: 818.6,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 4287,
      n_ul_hi: 4413,
      n_ul_xtra: null,
      n_dl_lo: 4512,
      n_dl_hi: 4638,
      n_dl_xtra: null
    },
    {
      band: 21,
      f_ul_offset: 1358,
      f_ul_lo: 1450.4,
      f_ul_hi: 1460.4,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 1326,
      f_dl_lo: 1498.4,
      f_dl_hi: 1508.4,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 462,
      n_ul_hi: 512,
      n_ul_xtra: null,
      n_dl_lo: 862,
      n_dl_hi: 912,
      n_dl_xtra: null
    },
    {
      band: 22,
      f_ul_offset: 2525,
      f_ul_lo: 3412.4,
      f_ul_hi: 3487.6,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 2580,
      f_dl_lo: 3512.4,
      f_dl_hi: 3587.6,
      f_dl_xtra_offset: null,
      f_dl_xtra: null,
      n_ul_lo: 4437,
      n_ul_hi: 4813,
      n_ul_xtra: null,
      n_dl_lo: 4662,
      n_dl_hi: 5038,
      n_dl_xtra: null
    },
    {
      band: 25,
      f_ul_offset: 875,
      f_ul_lo: 1852.4,
      f_ul_hi: 1912.6,
      f_ul_xtra_offset: 639.1,
      f_ul_xtra: [
        1852.5,
        1857.5,
        1862.5,
        1867.5,
        1872.5,
        1877.5,
        1882.5,
        1887.5,
        1892.5,
        1897.5,
        1902.5,
        1907.5,
        1912.5
      ],
      f_dl_offset: 910,
      f_dl_lo: 1932.4,
      f_dl_hi: 1992.6,
      f_dl_xtra_offset: 674.1,
      f_dl_xtra: [
        1932.5,
        1937.5,
        1942.5,
        1947.5,
        1952.5,
        1957.5,
        1962.5,
        1967.5,
        1972.5,
        1977.5,
        1982.5,
        1987.5,
        1992.5
      ],
      n_ul_lo: 4887,
      n_ul_hi: 5188,
      n_ul_xtra: [
        6067,
        6092,
        6117,
        6142,
        6167,
        6192,
        6217,
        6242,
        6267,
        6292,
        6317,
        6342,
        6367
      ],
      n_dl_lo: 5112,
      n_dl_hi: 5413,
      n_dl_xtra: [
        6292,
        6317,
        6342,
        6367,
        6392,
        6417,
        6442,
        6467,
        6492,
        6517,
        6542,
        6567,
        6592
      ]
    },
    {
      band: 26,
      f_ul_offset: -291,
      f_ul_lo: 816.4,
      f_ul_hi: 846.6,
      f_ul_xtra_offset: -325.9,
      f_ul_xtra: [
        816.5,
        821.5,
        826.5,
        827.5,
        831.5,
        832.5,
        836.5,
        837.5,
        841.5,
        842.5,
        846.5
      ],
      f_dl_offset: -291,
      f_dl_lo: 861.4,
      f_dl_hi: 891.6,
      f_dl_xtra_offset: -325.9,
      f_dl_xtra: [
        861.5,
        866.5,
        871.5,
        872.5,
        876.5,
        877.5,
        881.5,
        882.5,
        886,
        5,
        887.5,
        891.5
      ],
      n_ul_lo: 5537,
      n_ul_hi: 5688,
      n_ul_xtra: [
        5712,
        5737,
        5762,
        5767,
        5787,
        5792,
        5812,
        5817,
        5837,
        5842,
        5862
      ],
      n_dl_lo: 5762,
      n_dl_hi: 5913,
      n_dl_xtra: [
        5937,
        5962,
        5987,
        5992,
        6012,
        6017,
        6037,
        6042,
        6062,
        6067,
        6087
      ]
    },
    {
      band: 32,
      f_ul_offset: null,
      f_ul_lo: null,
      f_ul_hi: null,
      f_ul_xtra_offset: null,
      f_ul_xtra: null,
      f_dl_offset: 131,
      f_dl_lo: 1454.4,
      f_dl_hi: 1493.6,
      f_dl_xtra_offset: 87.1,
      f_dl_xtra: [
        1454.5,
        1459.5,
        1464.5,
        1469.5,
        1474.5,
        1479.5,
        1484.5,
        1489.5
      ],
      n_ul_lo: null,
      n_ul_hi: null,
      n_ul_xtra: null,
      n_dl_lo: 6617,
      n_dl_hi: 6813,
      n_dl_xtra: [6837, 6862, 6887, 6912, 6937, 6962, 6987, 7012]
    }
  ]
};

// src/UtraTddBands.ts
var UtraTddBands = {
  table_release_3gpp: 18,
  table_ts: "3GPP TS 25.102 V18.0.0",
  table_date: "2024-03",
  table_names: [
    "5.4.4.1 3.84 Mcps TDD Option",
    "5.4.4.2 1.28 Mcps TDD Option",
    "5.4.4.3 7.68 Mcps TDD Option"
  ],
  rows: [
    {
      band: "a",
      mcps: 3.84,
      f_lo: 1900,
      f_hi: 1920,
      n_lo: 9512,
      n_hi: 9588,
      n_xtra: null
    },
    {
      band: "a",
      mcps: 3.84,
      f_lo: 2010,
      f_hi: 2025,
      n_lo: 10062,
      n_hi: 10113,
      n_xtra: null
    },
    {
      band: "b",
      mcps: 3.84,
      f_lo: 1850,
      f_hi: 1910,
      n_lo: 9262,
      n_hi: 9538,
      n_xtra: null
    },
    {
      band: "b",
      mcps: 3.84,
      f_lo: 1930,
      f_hi: 1990,
      n_lo: 9662,
      n_hi: 9938,
      n_xtra: null
    },
    {
      band: "c",
      mcps: 3.84,
      f_lo: 1910,
      f_hi: 1930,
      n_lo: 9562,
      n_hi: 9638,
      n_xtra: null
    },
    {
      band: "d",
      mcps: 3.84,
      f_lo: 2570,
      f_hi: 2620,
      n_lo: 12862,
      n_hi: 13088,
      n_xtra: [2112, 2137, 2162, 2187, 2212, 2237, 2262, 2287, 2312, 2337]
    },
    {
      band: "a",
      mcps: 1.28,
      f_lo: 1900,
      f_hi: 1920,
      n_lo: 9504,
      n_hi: 9596,
      n_xtra: null
    },
    {
      band: "a",
      mcps: 1.28,
      f_lo: 2010,
      f_hi: 2025,
      n_lo: 10054,
      n_hi: 10121,
      n_xtra: null
    },
    {
      band: "b",
      mcps: 1.28,
      f_lo: 1850,
      f_hi: 1910,
      n_lo: 9254,
      n_hi: 9546,
      n_xtra: null
    },
    {
      band: "b",
      mcps: 1.28,
      f_lo: 1930,
      f_hi: 1990,
      n_lo: 9654,
      n_hi: 9946,
      n_xtra: null
    },
    {
      band: "c",
      mcps: 1.28,
      f_lo: 1910,
      f_hi: 1930,
      n_lo: 9554,
      n_hi: 9646,
      n_xtra: null
    },
    {
      band: "d",
      mcps: 1.28,
      f_lo: 2570,
      f_hi: 2620,
      n_lo: 12854,
      n_hi: 13096,
      n_xtra: null
    },
    {
      band: "e",
      mcps: 1.28,
      f_lo: 2300,
      f_hi: 2400,
      n_lo: 11504,
      n_hi: 11996,
      n_xtra: null
    },
    {
      band: "f",
      mcps: 1.28,
      f_lo: 1880,
      f_hi: 1920,
      n_lo: 9404,
      n_hi: 9596,
      n_xtra: null
    },
    {
      band: "a",
      mcps: 7.68,
      f_lo: 1900,
      f_hi: 1920,
      n_lo: 9512,
      n_hi: 9588,
      n_xtra: null
    },
    {
      band: "a",
      mcps: 7.68,
      f_lo: 2010,
      f_hi: 2025,
      n_lo: 10062,
      n_hi: 10113,
      n_xtra: null
    },
    {
      band: "b",
      mcps: 7.68,
      f_lo: 1850,
      f_hi: 1910,
      n_lo: 9262,
      n_hi: 9538,
      n_xtra: null
    },
    {
      band: "b",
      mcps: 7.68,
      f_lo: 1930,
      f_hi: 1990,
      n_lo: 9662,
      n_hi: 9938,
      n_xtra: null
    },
    {
      band: "c",
      mcps: 7.68,
      f_lo: 1910,
      f_hi: 1930,
      n_lo: 9562,
      n_hi: 9638,
      n_xtra: null
    },
    {
      band: "d",
      mcps: 7.68,
      f_lo: 2570,
      f_hi: 2620,
      n_lo: 12874,
      n_hi: 13076,
      n_xtra: null
    }
  ]
};

// src/NrEutraCalculators.ts
function nrArfcnToFrequency(nrArfcn) {
  if (!Number.isFinite(nrArfcn) || nrArfcn < 0 || nrArfcn > 3279165) {
    return -1;
  }
  for (let i = 0; i < NrArfcnParameters.rows.length++; i++) {
    const _nparam = NrArfcnParameters.rows[i];
    if (nrArfcn >= _nparam.n_ref_min && nrArfcn <= _nparam.n_ref_max) {
      const f_offset = Math.floor(_nparam.f_ref_offs * 1e3);
      const delta_f = _nparam.df_global_khz;
      const n_offset = _nparam.n_ref_offs;
      const freq_khz = f_offset + delta_f * (nrArfcn - n_offset);
      const freq_mhz = Math.round(freq_khz) / 1e3;
      return freq_mhz;
    }
  }
  return -1;
}
function frequencyToNrBands(frequencyMhz, direction = 2 /* Unspecified */) {
  if (!Number.isFinite(frequencyMhz) || frequencyMhz < 0 || frequencyMhz > 1e5) {
    return [];
  }
  const k = NrBands.rows.filter((_band) => {
    let matchDl, matchUl = false;
    if ((direction == 0 /* Downlink */ || direction == 2 /* Unspecified */) && _band.f_dl_lo != null && _band.f_dl_hi != null) {
      matchDl = frequencyMhz >= _band.f_dl_lo && frequencyMhz <= _band.f_dl_hi;
    }
    if ((direction == 1 /* Uplink */ || direction == 2 /* Unspecified */) && _band.f_ul_lo != null && _band.f_ul_hi != null) {
      matchUl = frequencyMhz >= _band.f_ul_lo && frequencyMhz <= _band.f_ul_hi;
    }
    if (matchDl || matchUl) {
      return true;
    }
    return false;
  }).map((_band) => _band.band);
  return k;
}
function nrArfcnToBands(nrArfcn, direction = 2 /* Unspecified */) {
  if (!Number.isFinite(nrArfcn) || nrArfcn < 0 || nrArfcn > 3279165) {
    return [];
  }
  const bands = NrArfcnBands.rows.filter((_r) => {
    let dl = false;
    if (direction === 0 /* Downlink */ || direction === 2 /* Unspecified */) {
      dl = _r.n_dl_lo != null && _r.n_dl_hi != null && _r.n_dl_lo <= nrArfcn && _r.n_dl_hi >= nrArfcn;
    }
    if (direction === 0 /* Downlink */) {
      return dl;
    }
    let ul = false;
    if (direction === 1 /* Uplink */ || direction === 2 /* Unspecified */) {
      ul = _r.n_ul_lo != null && _r.n_ul_hi != null && _r.n_ul_lo <= nrArfcn && _r.n_ul_hi >= nrArfcn;
    }
    if (direction === 1 /* Uplink */) {
      return ul;
    }
    return dl || ul;
  }).map((_r) => _r.band);
  return Array.from(new Set(bands));
}
function frequencyToNrArfcn(frequencyMhz, roundNumber = false) {
  if (!Number.isFinite(frequencyMhz) || frequencyMhz < 0 || frequencyMhz > 1e5) {
    return -1;
  }
  for (const _param of NrArfcnParameters.rows) {
    if (frequencyMhz >= _param.f_min && frequencyMhz <= _param.f_max) {
      const nrArfcn = (frequencyMhz - _param.f_ref_offs) / (_param.df_global_khz / 1e3) + _param.n_ref_offs;
      return roundNumber ? Math.round(nrArfcn) : nrArfcn;
    }
  }
  return -1;
}
function earfcnToFrequency(earfcn) {
  if (!Number.isFinite(earfcn) || earfcn < 0 || earfcn > 262143) {
    return -1;
  }
  const match = EutraBands.rows.filter((_r) => {
    return _r.n_dl_lo != null && _r.n_dl_lo <= earfcn && _r.n_dl_hi != null && _r.n_dl_hi >= earfcn;
  });
  if (match.length > 0 && match[0]) {
    return match[0].f_dl_lo + 0.1 * (earfcn - match[0].n_offs_dl);
  }
  return -1;
}
function frequencyToEutraBands(frequencyMhz, direction = 2 /* Unspecified */) {
  if (!Number.isFinite(frequencyMhz) || frequencyMhz < 0) {
    return [];
  }
  const k = EutraBands.rows.filter((_band) => {
    let matchDl, matchUl = false;
    if ((direction === 0 /* Downlink */ || direction === 2 /* Unspecified */) && _band.f_dl_lo && _band.f_dl_hi) {
      matchDl = frequencyMhz >= _band.f_dl_lo && frequencyMhz <= _band.f_dl_hi;
    }
    if ((direction === 1 /* Uplink */ || direction === 2 /* Unspecified */) && _band.f_ul_lo && _band.f_ul_hi) {
      matchUl = frequencyMhz >= _band.f_ul_lo && frequencyMhz <= _band.f_ul_hi;
    }
    return matchDl || matchUl;
  }).map((_band) => _band.band);
  return k;
}
function earfcnToBand(earfcn) {
  if (!Number.isFinite(earfcn) || earfcn < 0) {
    return -1;
  }
  for (const _r of EutraBands.rows) {
    if (_r.n_dl_lo != null && _r.n_dl_hi != null) {
      if (earfcn >= _r.n_dl_lo && earfcn <= _r.n_dl_hi) {
        return _r.band;
      }
    }
    if (_r.n_ul_lo != null && _r.n_ul_hi != null) {
      if (earfcn >= _r.n_ul_lo && earfcn <= _r.n_ul_hi) {
        return _r.band;
      }
    }
  }
  return -1;
}

// src/UtraCalculators.ts
function _fddUlXtraUarfcnToBands(uarfcn) {
  return UtraFddBands.rows.filter((_r) => {
    return _r.n_ul_xtra?.includes(uarfcn);
  });
}
function _fddDlXtraUarfcnToBands(uarfcn) {
  return UtraFddBands.rows.filter((_r) => {
    return _r.n_dl_xtra?.includes(uarfcn);
  });
}
function _fddUlGeneralUarfcnToBands(uarfcn) {
  return UtraFddBands.rows.filter((_r) => {
    return _r.n_ul_lo !== null && _r.n_ul_hi !== null && uarfcn >= _r.n_ul_lo && uarfcn <= _r.n_ul_hi;
  });
}
function _fddDlGeneralUarfcnToBands(uarfcn) {
  return UtraFddBands.rows.filter((_r) => {
    return _r.n_dl_lo !== null && _r.n_dl_hi !== null && uarfcn >= _r.n_dl_lo && uarfcn <= _r.n_dl_hi;
  });
}
function _tddXtraUarfcnToBands(uarfcn) {
  return UtraTddBands.rows.filter((_r) => {
    return _r.n_xtra?.includes(uarfcn);
  });
}
function _tddGeneralUarfcnToBands(uarfcn) {
  return UtraTddBands.rows.filter((_r) => {
    return _r.n_lo !== null && _r.n_hi !== null && uarfcn >= _r.n_lo && uarfcn <= _r.n_hi;
  });
}
function _uarfcnBandSort(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else if (typeof a === "number") {
    return -1;
  } else if (typeof b === "number") {
    return 1;
  }
  return a.localeCompare(b);
}
function uarfcnToBands(uarfcn, searchOptions = {
  direction: 2 /* Unspecified */,
  duplexMode: "All",
  channelType: "All"
}) {
  if (!Number.isFinite(uarfcn) || uarfcn < 0) {
    return [];
  }
  const so = {
    direction: searchOptions.direction ?? 2 /* Unspecified */,
    duplexMode: searchOptions.duplexMode ?? "All",
    channelType: searchOptions.channelType ?? "All"
  };
  let results = [];
  if (so.duplexMode === "FDD" || so.duplexMode === "All") {
    if (so.direction === 1 /* Uplink */ || so.direction === 2 /* Unspecified */) {
      if (so.channelType === "Additional" || so.channelType === "All") {
        const bands = _fddUlXtraUarfcnToBands(uarfcn);
        if (bands.length > 0) {
          results.push(...bands.map((_r) => _r.band));
        }
      }
      if (so.channelType === "General" || so.channelType === "All") {
        const bands = _fddUlGeneralUarfcnToBands(uarfcn);
        if (bands.length > 0) {
          results.push(...bands.map((_r) => _r.band));
        }
      }
    }
    if (so.direction === 0 /* Downlink */ || so.direction === 2 /* Unspecified */) {
      if (so.channelType === "Additional" || so.channelType === "All") {
        const bands = _fddDlXtraUarfcnToBands(uarfcn);
        if (bands.length > 0) {
          results.push(...bands.map((_r) => _r.band));
        }
      }
      if (so.channelType === "General" || so.channelType === "All") {
        const bands = _fddDlGeneralUarfcnToBands(uarfcn);
        if (bands.length > 0) {
          results.push(...bands.map((_r) => _r.band));
        }
      }
    }
  }
  if (so.duplexMode === "TDD" || so.duplexMode === "All") {
    if (so.channelType === "Additional" || so.channelType === "All") {
      const bands = _tddXtraUarfcnToBands(uarfcn);
      if (bands.length > 0) {
        results.push(...bands.map((_r) => _r.band));
      }
    }
    if (so.channelType === "General" || so.channelType === "All") {
      const bands = _tddGeneralUarfcnToBands(uarfcn);
      if (bands.length > 0) {
        results.push(...bands.map((_r) => _r.band));
      }
    }
  }
  return Array.from(new Set(results)).sort(_uarfcnBandSort);
}
function uarfcnToFrequencyFdd(uarfcn, band, channelType) {
  if (!Number.isFinite(uarfcn) || uarfcn < 0) {
    return -1;
  }
  const rows = UtraFddBands.rows.filter((_r) => {
    return _r.band === band;
  });
  if (rows.length === 1) {
    const row = rows[0];
    if (channelType === "General") {
      if (uarfcn >= row.n_dl_lo && uarfcn <= row.n_dl_hi) {
        return uarfcn / 5 + row.f_dl_offset;
      }
      if (row.n_ul_lo !== null && row.n_ul_hi !== null && row.f_ul_offset !== null && uarfcn >= row.n_ul_lo && uarfcn <= row.n_ul_hi) {
        return uarfcn / 5 + row.f_ul_offset;
      }
    } else if (channelType === "Additional") {
      if (row.n_dl_xtra && row.f_dl_xtra_offset !== null && row.n_dl_xtra.includes(uarfcn)) {
        return uarfcn / 5 + row.f_dl_xtra_offset;
      } else if (row.n_ul_xtra && row.f_ul_xtra_offset !== null && row.n_ul_xtra.includes(uarfcn)) {
        return uarfcn / 5 + row.f_ul_xtra_offset;
      }
    }
  }
  return -1;
}
function uarfcnToFrequencyTdd(uarfcn, channelType) {
  if (channelType === "General") {
    return uarfcn / 5;
  } else if (channelType === "Additional") {
    return uarfcn / 5 + 2150.1;
  }
  return -1;
}
function frequencyToUarfcnFdd(frequencyMhz, band) {
  if (!Number.isFinite(frequencyMhz) || frequencyMhz < 0) {
    return -1;
  }
  const isXtra = frequencyMhz * 10 % 2 === 1;
  const rows = UtraFddBands.rows.filter((_r) => {
    return _r.band === band;
  });
  if (rows.length !== 1) {
    return -1;
  }
  const row = rows[0];
  if (isXtra) {
    if (row.f_dl_xtra_offset !== null && row.f_dl_xtra !== null && row.f_dl_xtra.includes(frequencyMhz)) {
      return Math.round(5 * (frequencyMhz - row.f_dl_xtra_offset) * 10) / 10;
    } else if (row.f_ul_xtra_offset !== null && row.f_ul_xtra !== null && row.f_ul_xtra.includes(frequencyMhz)) {
      return Math.round(5 * (frequencyMhz - row.f_ul_xtra_offset) * 10) / 10;
    }
  } else {
    if (frequencyMhz >= row.f_dl_lo && frequencyMhz <= row.f_dl_hi) {
      return Math.round(5 * (frequencyMhz - row.f_dl_offset) * 10) / 10;
    }
    if (row.f_ul_lo !== null && row.f_ul_hi !== null && row.f_ul_offset !== null && frequencyMhz >= row.f_ul_lo && frequencyMhz <= row.f_ul_hi) {
      return Math.round(5 * (frequencyMhz - row.f_ul_offset) * 10) / 10;
    }
  }
  return -1;
}
function frequencyToUarfcnTdd(frequencyMhz) {
  if (!Number.isFinite(frequencyMhz) || frequencyMhz < 0) {
    return -1;
  }
  const isXtra = frequencyMhz * 10 % 2 === 1;
  if (isXtra) {
    return Math.round(5 * (frequencyMhz - 2150.1) * 10) / 10;
  }
  return Math.round(5 * frequencyMhz * 10) / 10;
}
export {
  EutraBands,
  NrArfcnBands,
  NrArfcnParameters,
  NrBands,
  UtraFddBands,
  UtraTddBands,
  earfcnToBand,
  earfcnToFrequency,
  frequencyToEutraBands,
  frequencyToNrArfcn,
  frequencyToNrBands,
  frequencyToUarfcnFdd,
  frequencyToUarfcnTdd,
  nrArfcnToBands,
  nrArfcnToFrequency,
  uarfcnToBands,
  uarfcnToFrequencyFdd,
  uarfcnToFrequencyTdd
};
