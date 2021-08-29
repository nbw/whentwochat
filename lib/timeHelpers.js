import * as t from '../public/locales/en/common'

/** 
/* Various helper methods for time-related tasks
*/

/** 
*  Converts value from Slider to HOUR value (0-24)
*/
export const hourDisplayI18n = (value, timeFormat) => {
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
    return `${hour}${t["time_24"]}`;
  } else if (value >= 12 && value < 24 || value >= 36) {
    return `${hour}${t["time_pm"]}`;
  } else {
    return `${hour}${t["time_am"]}`;
  }
}

export const plusMinusDay = (value) => {
  if(value < 0) {
    return t["day_minus"];
  }
  else if(value >= 24) {
    return t["day_plus"];
  } else {
    return "";
  }
}