import {decodeURLParam} from "../lib/urlHelpers"

const defaultZone = () => {
  return {
    startTime: 9,
    endTime: 20,
    formattedAddress: ""
  }
}

const initialState = {
  timeFormat: 12, // 12 or 24 
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
  return {
    ...state,
    zones: zones,
  };
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