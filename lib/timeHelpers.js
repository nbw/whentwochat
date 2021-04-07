/* Various helper methods for time-related tasks */

/*
  Converts value from Slider to HOUR value (0-24)
*/
export const hourDisplayI18n = (value, timeFormat, i18n) => {
  if (value < 0 ) {
    value = 24 + value;
  }

  let hour;
  if(value%12 === 0) {
    hour = 12;
  } else {
    hour = value%timeFormat;
  }

  if(timeFormat === 24) {
    return i18n("time_24", {hour});
  } else if (value >= 12 && value < 24 || value >= 36) {
    return i18n("time_pm", {hour});
  } else {
    return i18n("time_am", {hour});
  }
}

export const plusMinusDay = (value, i18n) => {
  if(value < 0) {
    return i18n("day_minus");
  }
  else if(value >= 24) {
    return i18n("day_plus");
  } else {
    return "";
  }
}