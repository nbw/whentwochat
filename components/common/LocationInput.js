import Geosuggest from 'react-geosuggest'
import {locationName, formattedAddress, utcOffset} from '../../lib/googleMaps'

const formatPayload = (suggestion) => {
  return {
    locationName: locationName(suggestion),
    formattedAddress: formattedAddress(suggestion),
    utcOffset: utcOffset(suggestion),
  }
}

export default function LocationInput({id, initialValue, placeholder, updateHandler}) {
    return (
      <>
        { 
          <Geosuggest
            id={id}
            placeholder={placeholder}
            onSuggestSelect={(e) => updateHandler(formatPayload(e))}
            initialValue={initialValue}
          />
        }
      </>
    )
}