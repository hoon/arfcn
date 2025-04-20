interface NrArfcnBandRow {
    band: number;
    d_freq_raster_khz: number | null;
    n_ul_lo: number | null;
    n_ul_hi: number | null;
    n_ul_step: number | null;
    n_dl_lo: number | null;
    n_dl_hi: number | null;
    n_dl_step: number | null;
    fr: number;
    duplex_mode: 'FDD' | 'TDD';
    ecr: boolean;
}
interface NrArfcnBandsObj {
    table_release_3gpp: number;
    table_ts: string;
    table_date: string;
    table_names: string[];
    rows: NrArfcnBandRow[];
}
declare const NrArfcnBands: NrArfcnBandsObj;

interface NrArfcnParamRow {
    f_min: number;
    f_max: number;
    df_global_khz: number;
    f_ref_offs: number;
    n_ref_offs: number;
    n_ref_min: number;
    n_ref_max: number;
}
interface NrArfcnParamObj {
    table_release_3gpp: number;
    table_ts: string;
    table_date: string;
    table_names: string[];
    rows: NrArfcnParamRow[];
}
declare const NrArfcnParameters: NrArfcnParamObj;

interface NrBandRow {
    band: number;
    fr: number;
    f_ul_lo: number | null;
    f_ul_hi: number | null;
    f_dl_lo: number | null;
    f_dl_hi: number | null;
    duplex_mode: 'FDD' | 'TDD' | 'SDL' | 'SUL';
}
interface NrBandsObj {
    table_release_3gpp: number;
    table_ts: string;
    table_date: string;
    table_names: string[];
    rows: NrBandRow[];
}
declare const NrBands: NrBandsObj;

interface EutraBandRow {
    band: number;
    f_dl_lo: number | null;
    f_dl_hi: number | null;
    n_offs_dl: number | null;
    n_dl_lo: number | null;
    n_dl_hi: number | null;
    f_ul_lo: number | null;
    f_ul_hi: number | null;
    n_offs_ul: number | null;
    n_ul_lo: number | null;
    n_ul_hi: number | null;
    duplex_mode: 'FDD' | 'TDD';
}
interface EutraBandsObj {
    table_release_3gpp: number;
    table_ts: string;
    table_date: string;
    table_names: string[];
    rows: EutraBandRow[];
}
declare const EutraBands: EutraBandsObj;

declare enum LinkDirection {
    Downlink = 0,
    Uplink = 1,
    Unspecified = 2
}
declare function nrArfcnToFrequency(nrArfcn: number): number;
declare function frequencyToNrBands(frequencyMhz: number, direction?: LinkDirection): number[];
declare function nrArfcnToBands(nrArfcn: number, direction?: LinkDirection): number[];
declare function frequencyToNrArfcn(frequencyMhz: number, roundNumber?: boolean): number;
declare function earfcnToFrequency(earfcn: number): number;
declare function frequencyToEutraBands(frequencyMhz: number, direction?: LinkDirection): number[];
declare function earfcnToBand(earfcn: number): number;

export { type EutraBandRow, EutraBands, type EutraBandsObj, type NrArfcnBandRow, NrArfcnBands, type NrArfcnBandsObj, type NrArfcnParamObj, type NrArfcnParamRow, NrArfcnParameters, type NrBandRow, NrBands, type NrBandsObj, earfcnToBand, earfcnToFrequency, frequencyToEutraBands, frequencyToNrArfcn, frequencyToNrBands, nrArfcnToBands, nrArfcnToFrequency };
