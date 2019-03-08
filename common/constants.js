export const APP_NAME = 'RoniN';

export const DATE_FORMAT_MM_DD_YYYY = '1/28/2000';
export const DATE_FORMAT_DD_MM_YYYY = '28/1/2000';
export const DATE_FORMAT_MON_DD = 'JAN 28';

// Note: don't reorder these as settings are saved based on array index.
// If this is needed you should migrate or at least rotate the settings key.
// See https://dev.fitbit.com/build/reference/settings-api/#select
export const DATE_FORMATS = [
  DATE_FORMAT_MM_DD_YYYY,
  DATE_FORMAT_DD_MM_YYYY,
  DATE_FORMAT_MON_DD,
];
