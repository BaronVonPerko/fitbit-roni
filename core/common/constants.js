export const APP_NAME = 'Roni';

export const DATE_FORMAT_MM_DD_YYYY = '12/31/2020';
export const DATE_FORMAT_DD_MM_YYYY = '31/12/2020';
export const DATE_FORMAT_MON_DD = 'DEC 31';
export const DATE_FORMAT_DD_MON = '31 DEC';
// Note: don't reorder these as settings are saved based on array index.
// If this is needed you should migrate or at least rotate the settings key.
// See https://dev.fitbit.com/build/reference/settings-api/#select
export const DATE_FORMATS =
[
  DATE_FORMAT_MM_DD_YYYY,
  DATE_FORMAT_DD_MM_YYYY,
  DATE_FORMAT_MON_DD,
  DATE_FORMAT_DD_MON,
];

export const CLOCK_SIZE_NORMAL = 'Normal';
export const CLOCK_SIZE_LARGE = 'Large';
export const CLOCK_SIZES =
[
  CLOCK_SIZE_NORMAL,
  CLOCK_SIZE_LARGE,
];

export const FILENAME = "roni.txt";
export const FILETYPE = "json";
export const KEY_COLOR = "color";
export const KEY_DISPLAY_SECONDS = "displaySeconds";
export const KEY_DISPLAY_BATTERY = "displayBattery";
export const KEY_DATE_FORMAT = "dateFormat";
export const KEY_UI_STATE = "uiState";
export const KEY_UI_STATE_STEPS = "steps";
export const KEY_UI_STATE_HEART = "heart";
export const KEY_UI_STATE_CALS = "cals";
export const KEY_CLOCK_SIZE = "clockSize";

export const DEFAULT_MODEL =
{
  [KEY_COLOR]: "magenta",
  [KEY_DISPLAY_SECONDS]: false,
  [KEY_DISPLAY_BATTERY]: true,
  [KEY_DATE_FORMAT]: {selected: 2},
  [KEY_UI_STATE]: KEY_UI_STATE_STEPS,
  [KEY_CLOCK_SIZE]: {selected: 0},
  [KEY_UI_STATE_STEPS]: true,
  [KEY_UI_STATE_HEART]: true,
  [KEY_UI_STATE_CALS]: true
};
