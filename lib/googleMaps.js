/*
  Util for parsing a google maps response from geosuggest
*/

export const locationName = (response) => {
  return (response && response.gmaps && response.gmaps.name) || ""
}

export const formattedAddress = (response) => {
  return (response && response.gmaps && response.gmaps.formatted_address) || ""
}

export const utcOffset = (response) => {
  return (response && response.gmaps && response.gmaps.utc_offset_minutes) || 0
}
