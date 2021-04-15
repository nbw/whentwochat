import {encodeURLParam, decodeURLParam} from "../lib/urlHelpers"

const defaultZone = () => {
  return {
    startTime: 9,
    endTime: 20,
    formattedAddress: ""
  }
}

const makeUrl = (state) => {
  const encodable = {
    zones: state.zones,
    timeFormat: state.timeFormat
  }
  return encodeURLParam(window.location.origin, "s", encodable)
}

const initialState = {
  url: "",
  timeFormat: 24, // 12 or 24
  zones: [defaultZone(), defaultZone()],
};

const loadUrlState = (window) => {
  return decodeURLParam(window.location.search, "s", initialState);
}

const updateZone = (state, action) => {
  const {id} = action.payload
  const zones = state.zones.map((zone, zoneId) => {
    if( zoneId != id) { return zone; }
    return { 
      ...zone,
      ...action.payload
    }
  });

  const url = makeUrl({
    ...state,
    zones,
  });

  return {
    ...state,
    zones,
    url
  }
}

const deleteZone = (state, action) => {
  const zones = state.zones;
  const {id} = action.payload;
  return {
    ...state,
    zones: [...zones.slice(0, id), ...zones.slice(id + 1)]
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "URL/INIT":
      return loadUrlState(action.window);
    case "URL/SHORTEN":
      const {url} = action.payload;
      return {
        ...state,
        url
      }
    case "TIME/TOGGLE":
      const timeFormat = (state.timeFormat === 12) ? 24 : 12; 
      return {
        ...state,
        timeFormat
      }
    case "ZONE/NEW":
      return {
        ...state,
        zones: [...state.zones, defaultZone()]
      };
    case "ZONE/UPDATE":
      return updateZone(state, action);
    case "ZONE/DELETE":
      return deleteZone(state, action);
    default:
      return state;
  }
}