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

interface UtraFddBandRow {
    band: number;
    f_ul_offset: number | null;
    f_ul_lo: number | null;
    f_ul_hi: number | null;
    f_ul_xtra_offset: number | null;
    f_ul_xtra: number[] | null;
    f_dl_offset: number;
    f_dl_lo: number;
    f_dl_hi: number;
    f_dl_xtra_offset: number | null;
    f_dl_xtra: number[] | null;
    n_ul_lo: number | null;
    n_ul_hi: number | null;
    n_ul_xtra: number[] | null;
    n_dl_lo: number;
    n_dl_hi: number;
    n_dl_xtra: number[] | null;
}
interface UtraFddBandsObj {
    table_release_3gpp: number;
    table_ts: string;
    table_date: string;
    table_names: string[];
    rows: UtraFddBandRow[];
}
declare const UtraFddBands: UtraFddBandsObj;

interface UtraTddBandRow {
    band: 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
    mcps: 3.84 | 1.28 | 7.68;
    f_lo: number;
    f_hi: number;
    n_lo: number;
    n_hi: number;
    n_xtra: number[] | null;
}
interface UtraTddBandsObj {
    table_release_3gpp: number;
    table_ts: string;
    table_date: string;
    table_names: string[];
    rows: UtraTddBandRow[];
}
declare const UtraTddBands: UtraTddBandsObj;

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

declare function uarfcnToBands(uarfcn: number, searchOptions?: {
    direction?: LinkDirection;
    duplexMode?: 'FDD' | 'TDD' | 'All';
    channelType?: 'General' | 'Additional' | 'All';
}): (number | string)[];
declare function uarfcnToFrequencyFdd(uarfcn: number, band: number, channelType: 'General' | 'Additional'): number;
declare function uarfcnToFrequencyTdd(uarfcn: number, channelType: 'General' | 'Additional'): number;
declare function frequencyToUarfcnFdd(frequencyMhz: number, band: number): number;
declare function frequencyToUarfcnTdd(frequencyMhz: number): number;

export { type EutraBandRow, EutraBands, type EutraBandsObj, LinkDirection, type NrArfcnBandRow, NrArfcnBands, type NrArfcnBandsObj, type NrArfcnParamObj, type NrArfcnParamRow, NrArfcnParameters, type NrBandRow, NrBands, type NrBandsObj, type UtraFddBandRow, UtraFddBands, type UtraFddBandsObj, type UtraTddBandRow, UtraTddBands, type UtraTddBandsObj, earfcnToBand, earfcnToFrequency, frequencyToEutraBands, frequencyToNrArfcn, frequencyToNrBands, frequencyToUarfcnFdd, frequencyToUarfcnTdd, nrArfcnToBands, nrArfcnToFrequency, uarfcnToBands, uarfcnToFrequencyFdd, uarfcnToFrequencyTdd };
