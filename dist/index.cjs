"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  EutraBands: () => EutraBands,
  NrArfcnBands: () => NrArfcnBands,
  NrArfcnParameters: () => NrArfcnParameters,
  NrBands: () => NrBands,
  earfcnToBand: () => earfcnToBand,
  earfcnToFrequency: () => earfcnToFrequency,
  frequencyToEutraBands: () => frequencyToEutraBands,
  frequencyToNrArfcn: () => frequencyToNrArfcn,
  frequencyToNrBands: () => frequencyToNrBands,
  nrArfcnToBands: () => nrArfcnToBands,
  nrArfcnToFrequency: () => nrArfcnToFrequency
});
module.exports = __toCommonJS(index_exports);

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

// src/Calculators.ts
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EutraBands,
  NrArfcnBands,
  NrArfcnParameters,
  NrBands,
  earfcnToBand,
  earfcnToFrequency,
  frequencyToEutraBands,
  frequencyToNrArfcn,
  frequencyToNrBands,
  nrArfcnToBands,
  nrArfcnToFrequency
});
